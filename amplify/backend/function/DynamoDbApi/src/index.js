/* Amplify Params - DO NOT EDIT
 API_DYNAMODBAPIGRAPHQL_BLOGTABLE_ARN
 API_DYNAMODBAPIGRAPHQL_BLOGTABLE_NAME
 API_DYNAMODBAPIGRAPHQL_COMMENTTABLE_ARN
 API_DYNAMODBAPIGRAPHQL_COMMENTTABLE_NAME
 API_DYNAMODBAPIGRAPHQL_GRAPHQLAPIIDOUTPUT
 API_DYNAMODBAPIGRAPHQL_NESTTABLETABLE_ARN
 API_DYNAMODBAPIGRAPHQL_NESTTABLETABLE_NAME
 API_DYNAMODBAPIGRAPHQL_POSTTABLE_ARN
 API_DYNAMODBAPIGRAPHQL_POSTTABLE_NAME
 API_DYNAMODBAPIGRAPHQL_PRIVATENOTETABLE_ARN
 API_DYNAMODBAPIGRAPHQL_PRIVATENOTETABLE_NAME
 API_DYNAMODBAPIGRAPHQL_TASKTABLE_ARN
 API_DYNAMODBAPIGRAPHQL_TASKTABLE_NAME
 ENV
 REGION
 Amplify Params - DO NOT EDIT */

const { Handler } = require(`@mawhea/module-lambda-handlers`);
const controllers = require(`./controllers`);
const { success } = require(`./lib`).utils;

/**
 * @class LambdaHandler
 */
class LambdaHandler extends Handler {
  /**
   * @param   {Object}    {
   *   event: apiGateway Event,
   *   context: Lambda Context
   * }
   **/
  constructor({
    event,
    context
  }) {
    super({
      event,
      context
    });
    const defaultResponseWithCors = success({ body: {} });
    Object.assign(this.lambdaResponse, defaultResponseWithCors);
  }

  /**
   * @return {Boolean} isValidEvent
   */
  validateEvent() {
    let isValid = true;
    if (this.event.httpMethod.toUpperCase() !== `OPTIONS`) {
      isValid = this.event.queryStringParameters && this.event.queryStringParameters.table;
    }
    return isValid;
  }

  /**
   * Override
   * The controllers for this lambda are returning a complete API Gateway response
   * Return the entire data object as the response.
   * @param {Object} data
   * @return {Object} lambdaResponse
   */
  sendResponse(data) {
    if (data) {
      this.lambdaResponse = data;
    } else {
      this.lambdaResponse.body = JSON.stringify(this.lambdaResponseBody);
    }
    this.logger.info(`Lambda Response`, this.lambdaResponse);
    return this.lambdaResponse;
  }
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  const { table } = event.queryStringParameters || {};
  const controller = controllers[table] || controllers.Admin;
  const handler = new LambdaHandler({
    event,
    context
  });
  return handler.handleIt({
    controller
  });
};
