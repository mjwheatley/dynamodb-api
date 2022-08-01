# Authentication
* The DynamoDb API is secured by an API Gateway Cognito Authorizer
* A Cognito ID token is required as a Bearer token in the Authorization header
* Go to DynamoDb API webpage to copy your ID token to use with Postman

# Resource Path and QueryString Parameters
`/endpoint?table=TableAlias&id=1`
* The `table` querystring parameter is required
* The value of the `table` querystring parameter should be the TableAlias the AdminAPI has mapped to the actual DynamoDb table name. i.e. `Workers: ttd-Workers` where `Workers` is the TableAlias
* The AdminAPI has a map of all the TableAlias values as well as the primary/partition key names for the corresponding DynamoDb tables
* The `id` querystring parameter is optional depending on the request type
* The value of the `id` querystring parameter should be the primary/partition key for the record in the table to act on
* The `id` querystring parameter is used regardless of the name of the primary/partition key of the table


# HTTP Method Map
```
{
   GET: `get`, // get | list
   POST: `create`, // create | scan
   PUT: `update`,
   DELETE: `delete`,
   OPTIONS: `options`
}
```
* If the HTTP method is `GET` and there is an `id` querystring parameter, the `get()` method will be executed, if the `id` querystring parameter is not present then the `list()` method will be executed. 
* If the HTTP method is `POST` and there is an `action` querystring parameter with value `scan` the `scan()` method will be executed, if not the `create()` method will be executed. 

# CREATE
### HTTP METHOD: POST
`/endpoint?table=TableAlias`
* If the primary/partition key is included in the payload the supplied value will be used.
    * This allows the requestor to specify the value to use for the primary/partition key
    * This allows you to overwrite/replace the entire record with a new object
* If the primary/partition key is not supplied, the AdminAPI will auto-generate one using uuidv4
* The following properties will be auto-generated
```
created: now.toISOString(),
createdBy: identity,
lastUpdatedBy: identity,
lastUpdatedDateTime: now.toISOString()
```
* The identity listed above will come from Cognito
```
let identity = identity = event.requestContext.authorizer.claims[`custom:username`];
identity = identity.split(`.`).reverse().join(`, `);
```
### Response
* The response will contain the newly created item containing all the auto-generated properties
```
{ success: true, item: data }
```

# GET
`/endpoint?table=TableAlias&id=1`
### HTTP METHOD: GET
* Returns the item from the specified table by primary/partition key
### Response
```
// statusCode 200
{ success: true, item: data }
```
```
// statusCode 404
{
    success: false,
    error: `Item not found.`
}
```

# LIST
`/endpoint?table=TableAlias`
### HTTP METHOD: GET
* No `id` querystring parameter
* Returns all records in the specified table
### QueryString Parameters
* table=Workers
* paginate=true
* LastEvaluatedKey=%7B%22empId%22%3A%22110741%22%7D //`${encodeURIComponent(JSON.stringify({"empId": "110741"}))}`

### Response
* Returns an array on success
* If paginate is true then returns an Object
* JSON Object on error
```
// statusCode 200
[]
```
```
// statusCode 200 with paginate specified
{
    "Items": [],
    "Count": 0,
    "ScannedCount": 60,
    "LastEvaluatedKey": {
        "empId": "352846"
    }
}
```
```
// statusCode 400
{
  success: false,
  error
}
```

# SCAN
`/endpoint?table=TableAlias&action=scan`
### HTTP METHOD: POST
* Scans the specified table based on the supplied payload
* Supports dot-notation for updating nested values
* Use `attributesToGet` to return a subset of properties from the records
### Payload
* Required to have a `scan` property
* Optionally contains an `attributesToGet` property
```
{
    "scan": {},
    "attributesToGet": [],
    "paginate": true,
    "LastEvaluatedKey": {
        "empId": "352846"
    }
}
```
#### The `scan` Object
* The `scan` object may contain the following keywords
    * `attributesExist`
    * `attributesNotExist`
##### Special attribute value handling
* Arrays
    * If the value of the specified attribute is a string array `OR` logic will be applied
    * If the value of the specified attribute is an array of string arrays, `OR` logic will be applied within the arrays and `AND` logic applied between arrays
```
// colors array contains red OR blue
{
    "scan": {
        "colors": ["red","blue"]
    }
}
```
* Same effect as above
```
// colors array contain red OR blue
{
    "scan": {
        "colors": [["red","blue"]]
    }
}
```
```
// colors array contains (red OR pink) AND blue
// colors array contains (red and blue) or (pink and blue)
{
    "scan": {
        "colors": [["red", "pink"],["blue"]]
    }
}
```
    
* JSON Objects
    * If the value of the specified attribute is a JSON Object the AdminAPI will expect a `comparator` and `value` property on the object
```
{
    "scan": {
        "total": {
            "comparator": "<",
            "value": 100
        }
    }
}
```
```
{
    "attributesToGet": ["worker"],
    "scan": {
        "worker.empGroupIds": [["-989357139129.0"],["-988766726027.0"]],
        "training.status": ["completed", "timelimitmet"],
        "training.isActive": "1",
        "attributesNotExist": [
            "training.timeOfCompletion"
        ],
        "dueDays": {
            "comparator": "<=",
            "value": "10"
        }
    }
}
```

### Response
```
// statusCode 200
[]
```
```
// statusCode 200 with paginate specified
{
    "Items": [],
    "Count": 0,
    "ScannedCount": 60,
    "LastEvaluatedKey": {
        "empId": "352846"
    }
}
```
```
// statusCode 400
{
  success: false,
  error
}
```

# UPDATE
`/endpoint?table=TableAlias&id=1`
### HTTP METHOD: PUT
* Updates the specified properties for the item specified by the primary/partition key in the specified table
### Payload
* Payload must contain one of the following allowed actions
    * set
    * remove
    * add
    * delete
    * setListAppend
```
{
    "set": {},
    "remove": {},
    "add": {},
    "delete": {},
    "setListAppend": {}
}
```
* Any combination of the above actions can be present in the payload
* All actions support dot-notation for updating nested values
#### set
* Updates the values stored at the specified keys
#### remove
* Remove the property from the record
#### add
* Increment the value stored at the specified keys
#### delete
* Removing elements from a set
* The DELETE action supports only Set data types.
#### setListAppend
* Push the specified values to the list/array stored at the specified keys

```
{
  "set":{
      "training.status": "timelimitmet"
  },
  "add":{
      "training.timeInTraining": 180000
  },
  "setListAppend": {
      "training.taskSids": ["WT1e33bd86f2b02bd941b07460e3a984e6","WT23f871f71f44752a3f14ea3e9349e253"]
  }
}
```

### Response
* The update response will contain a `results` property containing the result of all the actions included in the update.
* Some actions may succeed while others fail.  A statusCode of 400 will be returned with a `results` array so you can determine which actions succeed or failed.
```
// statusCode 200
{ success: true, results }
```
```
// statusCode 400
{ success: false, results }
```
```
// statusCode 400
{
  success: false,
  error
}
```

# DELETE
`/endpoint?table=TableAlias&id=1`
### HTTP METHOD: DEL
* Deletes the item from the specified table by primary/partition key
### Response
```
// statusCode 200
{ success: true }
```
```
// statusCode 400
{
  success: false,
  error
}
```

# OPTIONS
`/endpoint?table=TableAlias&id=1`
### HTTP METHOD: OPTIONS
* For CORS pre-flight requests
### Response
```
// statusCode 200
{ success: true }
```
