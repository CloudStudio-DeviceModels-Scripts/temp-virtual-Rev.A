
function getConfiguration(config)
{
  config.addressLabel = {en: "DevEUI", es: "DevEUI"};
  env.log('Device address: ', myDevice.address);
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "humidity sensor", endpointType.humiditySensor);
}

