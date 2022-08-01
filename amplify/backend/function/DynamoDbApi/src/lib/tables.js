const {
        API_DYNAMODBAPIGRAPHQL_BLOGTABLE_NAME,
        API_DYNAMODBAPIGRAPHQL_COMMENTTABLE_NAME,
        API_DYNAMODBAPIGRAPHQL_NESTTABLETABLE_NAME,
        API_DYNAMODBAPIGRAPHQL_POSTTABLE_NAME,
        API_DYNAMODBAPIGRAPHQL_PRIVATENOTETABLE_NAME,
        API_DYNAMODBAPIGRAPHQL_TASKTABLE_NAME
      } = process.env;

module.exports = {
  Blog: {
    TableName: API_DYNAMODBAPIGRAPHQL_BLOGTABLE_NAME,
    Key: {
      id: ``
    }
  },
  BlogPostComment: {
    TableName: API_DYNAMODBAPIGRAPHQL_COMMENTTABLE_NAME,
    Key: {
      id: ``
    }
  },
  Nests: {
    TableName: API_DYNAMODBAPIGRAPHQL_NESTTABLETABLE_NAME,
    Key: {
      id: ``
    }
  },
  BlogPost: {
    TableName: API_DYNAMODBAPIGRAPHQL_POSTTABLE_NAME,
    Key: {
      id: ``
    }
  },
  PrivateNote: {
    TableName: API_DYNAMODBAPIGRAPHQL_PRIVATENOTETABLE_NAME,
    Key: {
      id: ``
    }
  },
  Task: {
    TableName: API_DYNAMODBAPIGRAPHQL_TASKTABLE_NAME,
    Key: {
      id: ``
    }
  }
};
