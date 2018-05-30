'use strict';
var AWS = require('aws-sdk')
var uuid = require('uuid')
var	documentClient = new AWS.DynamoDB.DocumentClient()
var tableName = 'Usages'


exports.writeUsage = function(event, context, callback){
  var patientId = event['patientId'].toString()
  var recId = uuid.v1()
	var params = {
		Item : {
			patientId: patientId,
      recId: recId,
      reqData: event
    },
		TableName : process.env.TABLE_NAME
	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
  callback(null, {id: recId});
}

