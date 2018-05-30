module.exports = {
  setJSONBody: setJSONBody
}

function setJSONBody(requestParams, context, ee, next) {
  requestParams.json['patientId'] = new Date().getTime().toString();
  return next();
}


