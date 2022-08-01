const { utils, tables, HttpMethodMap } = require(`../lib`);
const { AWSServices } = require(`@mawhea/module-aws-services`);
const { v4: uuidv4 } = require(`uuid`);
const DynamoDbReservedWords = require(`../lib/DynamoDbReservedWords.json`);

/**
 * AdminController class
 * **/
class AdminController {
  /**
   * Starts execution of the controller
   * @param {Object} payload
   * @param {Object} logger
   * @return {Promise<Object>}
   * **/
  static execute({ payload, logger }) {
    if (payload?.queryStringParameters?.table) {
      logger.addMetaDataByKey(`Table`, payload.queryStringParameters.table);
    }
    logger.debug(`execute() payload`, payload);
    const httpMethodMap = { ...HttpMethodMap };
    if (payload.httpMethod === `GET` &&
      payload.queryStringParameters &&
      !payload.queryStringParameters.id) {
      httpMethodMap.GET = `list`;
    }
    if (payload.httpMethod === `POST` &&
      payload.queryStringParameters &&
      payload.queryStringParameters.action &&
      payload.queryStringParameters.action.toUpperCase() === `SCAN`) {
      httpMethodMap.POST = `scan`;
    }
    return this[httpMethodMap[payload.httpMethod]]({ event: payload, logger });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @return {Promise}
   * **/
  static create({ event, logger }) {
    logger.debug(`Trace`, `create()`);
    const data = JSON.parse(event.body);
    const { table } = event.queryStringParameters;
    const { TableName, Key } = tables[table];
    const key = Object.keys(Key)[0];
    if (!data[key]) {
      data[key] = uuidv4();
    }
    // let identity;
    // if (
    //   event.requestContext &&
    //   event.requestContext.authorizer &&
    //   event.requestContext.authorizer.claims &&
    //   event.requestContext.authorizer.claims.email
    // ) {
    //   identity = event.requestContext.authorizer.claims[`custom:username`];
    //   identity = identity.split(`.`).reverse().join(`, `);
    // }
    // const now = new Date();
    // const autoProps = {
    //   created: now.toISOString(),
    //   createdBy: identity,
    //   lastUpdatedBy: identity,
    //   lastUpdatedDateTime: now.toISOString()
    // };
    // Object.assign(data, autoProps);
    const params = {
      TableName,
      Item: data
    };
    return new Promise((resolve) => {
      AWSServices.dynamoDBCall(`put`, params).then(() => {
        resolve(utils.success({ body: { success: true, item: data } }));
      }).catch((error) => {
        resolve(utils.failure({
          statusCode: 400,
          body: {
            success: false,
            error
          }
        }));
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @param {Object?} param0.override
   * @return {Promise}
   * **/
  static get({ event, logger, override }) {
    logger.debug(`Trace`, `get()`);
    const { table, id } = event.queryStringParameters;
    let { TableName, Key } = tables[table];
    if (!override) {
      Key[Object.keys(Key)[0]] = id;
    } else {
      Key = override.Key;
    }
    const params = {
      TableName,
      Key
    };
    return new Promise((resolve) => {
      AWSServices.dynamoDBCall(`get`, params).then((response) => {
        if (response.Item) {
          // Return the retrieved item
          resolve(utils.success({ body: { success: true, item: response.Item } }));
        } else {
          resolve(utils.failure({
            statusCode: 404,
            body: {
              success: false,
              error: `Item not found.`
            }
          }));
        }
      }).catch((error) => {
        logger.error(`DynamoDb Error`, error);
        resolve(utils.failure({
          statusCode: 400,
          body: {
            success: false,
            error
          }
        }));
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @return {Promise}
   * **/
  static list({ event, logger }) {
    logger.debug(`Trace`, `list()`);
    const { table, paginate, LastEvaluatedKey } = event.queryStringParameters;
    const { TableName } = tables[table];
    const params = {
      TableName
    };
    if (LastEvaluatedKey) {
      params.ExclusiveStartKey = JSON.parse(decodeURIComponent(LastEvaluatedKey));
    }
    return new Promise((resolve) => {
      AWSServices.dynamoDBCall(`scan`, params).then(async (response) => {
        /**
         * If paginate === true
         * Change the schema of the response
         * body: {LastEvaluatedKey, Items: []}
         * **/
        if (!paginate) {
          if (response.LastEvaluatedKey) {
            event.queryStringParameters.LastEvaluatedKey =
              encodeURIComponent(JSON.stringify(response.LastEvaluatedKey));
            const pageResult = await this.list({ event, logger });
            if (pageResult.statusCode === 200) {
              const items = JSON.parse(pageResult.body);
              response.Items.push(...items);
              resolve(utils.success({ body: response.Items }));
            }
          } else {
            resolve(utils.success({ body: response.Items }));
          }
        } else {
          resolve(utils.success({
            body: response
          }));
        }
      }).catch((error) => {
        logger.error(`DynamoDb Error`, error);
        resolve(utils.failure({
          statusCode: 400,
          body: {
            success: false,
            error
          }
        }));
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @return {Promise}
   * const params = {
   *    TableName: `ttd-Workers`,
   *    FilterExpression: `(contains (empGroupId, :empGroupId0) OR contains(empGroupId, :empGroupId1)) AND
   *    (supervisorId = :supervisorId)`, ExpressionAttributeValues : {
   *    ':empGroupId0' : `01234`,
   *       ':empGroupId1': `012345`,
   *       ':supervisorId': `202266`
   *    }
   * };
   * **/
  static scan({ event, logger }) {
    logger.debug(`Trace`, `scan()`);
    const { table } = event.queryStringParameters;
    const body = JSON.parse(event.body);
    const { scan = {}, attributesToGet = [], paginate, LastEvaluatedKey } = body;
    const { TableName } = tables[table];
    const filterExpressions = [];
    const projectionExpressions = [];
    const ExpressionAttributeNames = {};
    const ExpressionAttributeValues = {};
    let expressionContainsReservedWords = false;
    attributesToGet.forEach((attribute) => {
      let projectionExpressionKey = attribute;
      const containsDynamoDbReservedWord = attribute.split(`.`)
        .some((part) => DynamoDbReservedWords.includes(part.toUpperCase()));
      if (containsDynamoDbReservedWord) {
        expressionContainsReservedWords = true;
        const expressionAttributeNames = [];
        attribute.split(`.`).forEach((part) => {
          let expressionAttributeName = part;
          if (DynamoDbReservedWords.includes(part.toUpperCase())) {
            expressionAttributeName = `#${part}`;
            ExpressionAttributeNames[expressionAttributeName] = part;
          }
          expressionAttributeNames.push(expressionAttributeName);
        });
        projectionExpressionKey = expressionAttributeNames.join(`.`);
      }
      projectionExpressions.push(projectionExpressionKey);
    });
    Object.keys(scan).forEach((key) => {
      const attributeValue = scan[key];
      let scanExpressionKey = key;
      const containsDynamoDbReservedWord = key.split(`.`)
        .some((part) => DynamoDbReservedWords.includes(part.toUpperCase()));
      if (containsDynamoDbReservedWord) {
        expressionContainsReservedWords = true;
        const expressionAttributeNames = [];
        key.split(`.`).forEach((part) => {
          let expressionAttributeName = part;
          if (DynamoDbReservedWords.includes(part.toUpperCase())) {
            expressionAttributeName = `#${part}`;
            ExpressionAttributeNames[expressionAttributeName] = part;
          }
          expressionAttributeNames.push(expressionAttributeName);
        });
        scanExpressionKey = expressionAttributeNames.join(`.`);
      }
      const expressionAttributeKey = `:${key}`.replace(/\./g, ``);
      let filterExpression;

      if (key === `attributesExist`) {
        const arrayFilterExpressions = [];
        attributeValue.forEach((attribute) => {
          let attributeKey = attribute;
          const containsDynamoDbReservedWord = attribute.split(`.`)
            .some((part) => DynamoDbReservedWords.includes(part.toUpperCase()));
          if (containsDynamoDbReservedWord) {
            expressionContainsReservedWords = true;
            const expressionAttributeNames = [];
            attribute.split(`.`).forEach((part) => {
              let expressionAttributeName = part;
              if (DynamoDbReservedWords.includes(part.toUpperCase())) {
                expressionAttributeName = `#${part}`;
                ExpressionAttributeNames[expressionAttributeName] = part;
              }
              expressionAttributeNames.push(expressionAttributeName);
            });
            attributeKey = expressionAttributeNames.join(`.`);
          }
          const arrayFilterExpression = `attribute_exists (${attributeKey})`;
          arrayFilterExpressions.push(arrayFilterExpression);
        });
        filterExpression = `(${arrayFilterExpressions.join(` AND `)})`;
      } else if (key === `attributesNotExist`) {
        const arrayFilterExpressions = [];
        attributeValue.forEach((attribute) => {
          let attributeKey = attribute;
          const containsDynamoDbReservedWord = attribute.split(`.`)
            .some((part) => DynamoDbReservedWords.includes(part.toUpperCase()));
          if (containsDynamoDbReservedWord) {
            expressionContainsReservedWords = true;
            const expressionAttributeNames = [];
            attribute.split(`.`).forEach((part) => {
              let expressionAttributeName = part;
              if (DynamoDbReservedWords.includes(part.toUpperCase())) {
                expressionAttributeName = `#${part}`;
                ExpressionAttributeNames[expressionAttributeName] = part;
              }
              expressionAttributeNames.push(expressionAttributeName);
            });
            attributeKey = expressionAttributeNames.join(`.`);
          }
          const arrayFilterExpression = `attribute_not_exists (${attributeKey})`;
          arrayFilterExpressions.push(arrayFilterExpression);
        });
        filterExpression = `(${arrayFilterExpressions.join(` AND `)})`;
      } else {
        /**
         * If the attributeValue is an array, it should be an array of arrays
         * Join the inner arrays by AND, Join the elements inside those arrays by OR
         * [["a1", "a2"], ["a3", "a4"]]
         * (contains("a1" or "a2") and contains("a3", or "a4"))
         * **/
        if (Array.isArray(attributeValue)) {
          let arrays = attributeValue;
          if (!Array.isArray(attributeValue[0])) {
            arrays = [arrays];
          }
          const arrayFilterExpressions = [];
          arrays.forEach((array, index1) => {
            const childArrayFilterExpressions = [];
            array.forEach((value, index2) => {
              const expressionAttributeKeyArrayIndex = `:${key}${index1}${index2}`
                .replace(/\./g, ``);
              ExpressionAttributeValues[expressionAttributeKeyArrayIndex] = value;
              const arrayFilterExpression =
                `contains (${scanExpressionKey}, ${expressionAttributeKeyArrayIndex})`;
              childArrayFilterExpressions.push(arrayFilterExpression);
            });
            let childArrayFilterExpression = `${childArrayFilterExpressions.join(` OR `)}`;
            if (childArrayFilterExpressions.length > 1) {
              childArrayFilterExpression = `(${childArrayFilterExpression})`;
            }
            arrayFilterExpressions.push(childArrayFilterExpression);
          });
          if (arrayFilterExpressions.length) {
            filterExpression = `${arrayFilterExpressions.join(` AND `)}`;
            if (arrayFilterExpressions.length > 1) {
              filterExpression = `(${filterExpression})`;
            }
          }
        } else if (typeof attributeValue === `object`) {
          const { comparator = `=`, value } = attributeValue;
          ExpressionAttributeValues[expressionAttributeKey] = value;
          filterExpression = `(${scanExpressionKey} ${comparator} ${expressionAttributeKey})`;
        } else {
          ExpressionAttributeValues[expressionAttributeKey] = attributeValue;
          filterExpression = `(${scanExpressionKey} = ${expressionAttributeKey})`;
        }
      }
      filterExpressions.push(filterExpression);
    });
    const FilterExpression = filterExpressions.filter((exp) => !!exp).join(` AND `);
    const params = {
      TableName,
      FilterExpression,
      ExpressionAttributeValues
    };
    if (!Object.keys(ExpressionAttributeValues).length) {
      delete params.ExpressionAttributeValues;
    }
    if (LastEvaluatedKey) {
      params.ExclusiveStartKey = LastEvaluatedKey;
    }
    if (attributesToGet.length) {
      params.ProjectionExpression = projectionExpressions.join(`, `);
    }
    if (expressionContainsReservedWords) {
      params.ExpressionAttributeNames = ExpressionAttributeNames;
    }
    logger.info(`scan params`, params);
    return new Promise((resolve) => {
      AWSServices.dynamoDBCall(`scan`, params).then(async (response) => {
        /**
         * If paginate === true
         * Change the schema of the response
         * body: {LastEvaluatedKey, Items: []}
         * **/
        if (!paginate) {
          if (response.LastEvaluatedKey) {
            body.LastEvaluatedKey = response.LastEvaluatedKey;
            event.body = JSON.stringify(body);
            const pageResult = await this.scan({ event, logger });
            if (pageResult.statusCode === 200) {
              const items = JSON.parse(pageResult.body);
              response.Items.push(...items);
              resolve(utils.success({ body: response.Items }));
            }
          } else {
            resolve(utils.success({ body: response.Items }));
          }
        } else {
          resolve(utils.success({
            body: response
          }));
        }
      }).catch((error) => {
        logger.error(`DynamoDb Error`, error);
        resolve(utils.failure({
          statusCode: 400,
          body: {
            success: false,
            error
          }
        }));
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @param {Object?} param0.override
   * @return {Promise}
   * **/
  static async update({ event, logger, override }) {
    logger.debug(`Trace`, `update()`);
    const data = JSON.parse(event.body);
    const { table, id } = event.queryStringParameters;
    let { TableName, Key } = tables[table];
    if (!override) {
      Key[Object.keys(Key)[0]] = id;
    } else {
      Key = override.Key;
    }
    if (!data.set) {
      data.set = {};
    }
    // if (
    //   event.requestContext &&
    //   event.requestContext.authorizer &&
    //   event.requestContext.authorizer.claims &&
    //   event.requestContext.authorizer.claims.email
    // ) {
    //   let identity = event.requestContext.authorizer.claims[`custom:username`];
    //   identity = identity.split(`.`).reverse().join(`, `);
    //   data.set.lastUpdatedBy = identity;
    // }
    // data.set.lastUpdatedDateTime = new Date().toISOString();

    const promises = [];
    const actions = Object.keys(data);
    const allowedActions = [`set`, `remove`, `add`, `delete`, `setListAppend`];
    const validActions = actions.some((action) => allowedActions.includes(action));
    if (!validActions) {
      return utils.failure({
        statusCode: 422,
        body: {
          success: false,
          message: `Update requests must include one of the following root properties: [${allowedActions}]`
        }
      });
    }
    actions.forEach((action) => {
      let UpdateExpression = `${action} `;
      if (!allowedActions.includes(action)) {
        return utils.failure({
          statusCode: 422,
          body: {
            success: false,
            message: `Update requests must include one of the following root properties: [${allowedActions}]`
          }
        });
      }
      const actionData = data[action];
      const updateExpressions = [];
      const ExpressionAttributeValues = {};
      const ExpressionAttributeNames = {};
      let expressionContainsReservedWords = false;
      Object.keys(actionData).forEach((key) => {
        let updateExpressionKey = key;
        const containsDynamoDbReservedWord = key.split(`.`)
          .some((part) => DynamoDbReservedWords.includes(part.toUpperCase()));
        if (containsDynamoDbReservedWord) {
          expressionContainsReservedWords = true;
          const expressionAttributeNames = [];
          key.split(`.`).forEach((part) => {
            let expressionAttributeName = part;
            if (DynamoDbReservedWords.includes(part.toUpperCase())) {
              expressionAttributeName = `#${part}`;
              ExpressionAttributeNames[expressionAttributeName] = part;
            }
            expressionAttributeNames.push(expressionAttributeName);
          });
          updateExpressionKey = expressionAttributeNames.join(`.`);
        }

        const expressionAttributeKey = `:${key.replace(/\./g, ``)}`;
        ExpressionAttributeValues[expressionAttributeKey] = actionData[key];

        switch (action) {
          case `set`:
            updateExpressionKey += ` = ${expressionAttributeKey}`;
            break;
          case `add`:
          case `delete`:
            updateExpressionKey += ` ${expressionAttributeKey}`;
            break;
          case `setListAppend`:
            updateExpressionKey += ` = list_append(${updateExpressionKey}, ${expressionAttributeKey})`;
            break;
        }
        updateExpressions.push(updateExpressionKey);
      });
      if (action === `setListAppend`) {
        UpdateExpression = `set `;
      }
      UpdateExpression += updateExpressions.join(`, `);
      const params = {
        TableName,
        Key,
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues,
        // 'ReturnValues' specifies if and how to return the item's attributes,
        // where ALL_NEW returns all attributes of the item after the update;
        ReturnValues: `ALL_NEW`
      };
      if (action === `remove`) {
        delete params.ExpressionAttributeValues;
      }
      if (!expressionContainsReservedWords) {
        delete params.ExpressionAttributeNames;
      }
      logger.info(`Update params`, params);
      const promise = AWSServices.dynamoDBCall(`update`, params).then((response) => {
        return utils.success({ body: { success: true, response } });
      }).catch((error) => {
        return utils.failure({ body: { success: false, error } });
      });
      promises.push(promise);
    });
    return Promise.allSettled(promises).then((results) => {
      logger.info(`Update results`, results);
      const returnResults = results.map(({ value: { statusCode, body } }) => ({ statusCode, body }));
      const errors = returnResults.filter((result) => result.statusCode !== 200);
      if (!errors.length) {
        return utils.success({ body: { success: true, results: returnResults } });
      } else {
        logger.error(`Update errors`, errors);
        return utils.failure({
          statusCode: 206,
          body: {
            success: false,
            results: returnResults
          }
        });
      }
    }).catch((error) => {
      logger.error(`DynamoDb Error`, error);
      return utils.failure({
        statusCode: 400,
        body: {
          success: false,
          error
        }
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.event
   * @param {Object} param0.logger
   * @param {Object?} param0.override
   * @return {Promise}
   * **/
  static delete({ event, logger, override }) {
    logger.debug(`Trace`, `delete()`);
    const { table, id } = event.queryStringParameters;
    let { TableName, Key } = tables[table];
    if (!override) {
      Key[Object.keys(Key)[0]] = id;
    } else {
      Key = override.Key;
    }
    const params = {
      TableName,
      Key
    };
    return new Promise((resolve) => {
      AWSServices.dynamoDBCall(`delete`, params).then((response) => {
        resolve(utils.success({ body: { success: true, response } }));
      }).catch((error) => {
        logger.error(`DynamoDb Error`, error);
        resolve(utils.failure({
          statusCode: 400,
          body: {
            success: false,
            error
          }
        }));
      });
    });
  };

  /**
   * @param {Object} param0
   * @param {Object} param0.logger
   * @return {Promise}
   * **/
  static options({ logger }) {
    logger.debug(`Trace`, `options()`);
    return Promise.resolve(utils.success({ body: { success: true } }));
  };
}

module.exports = AdminController;
