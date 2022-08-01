// eslint-disable-next-line require-jsdoc
/**
 * @param {Object} body
 * @param {Number?} statusCode - default 200
 * @return {Object} apiGatewayResponse
 * **/
const success = ({ body, statusCode = 200 }) => {
  return buildResponse(statusCode, body);
};

/**
 * @param {Object} body
 * @param {Number?} statusCode - default 500
 * @return {Object} apiGatewayResponse
 * **/
const failure = ({ body, statusCode = 500 }) => {
  return buildResponse(statusCode, body);
};

/**
 * Adds default CORS headers to response
 * @param {Number} statusCode
 * @param {Object} body
 * @return {Object} apiGatewayResponse
 * **/
const buildResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": `*`,
      "Access-Control-Allow-Credentials": true,
      "Content-Type": `application/json`,
      "Access-Control-Allow-Methods": `DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT`,
      "Access-Control-Allow-Headers": `Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token`
    },
    body: JSON.stringify(body)
  };
};

/**
 * @param {Object} obj
 * @param {Object} logger
 * **/
function parseRedisObject(obj, logger) {
  Object.keys(obj).forEach((key) => {
    try {
      const value = /[{}\[\]]/g.test(obj[key]) ?
        JSON.parse(obj[key]) :
        obj[key];
      obj[key] = value;
    } catch (error) {
      logger.error(`Error when parsing obj[${key}]: `, {
        obj,
        key,
        target: obj[key]
      });
    }
  });
}


module.exports = {
  success,
  failure,
  buildResponse,
  parseRedisObject
};
