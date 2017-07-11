var config = require('./config');
var WebSocket = require('ws');
var fs = require('fs');

var wsURI = "wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize"
  + "?watson-token=" + config.token + '&model=' + config.model;

var websocket = new WebSocket(wsURI);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function(evt) { onClose(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };

function onOpen(evt) {
  var message = {
    action: 'start',
    'content-type': 'audio/wav',
    'interim_results': true,
    'max-alternatives': 3,
    keywords: ['colorado', 'tornado', 'tornadoes'],
    'keywords_threshold': 0.5
  };
  websocket.send(JSON.stringify(message));

  // Prepare and send the audio file.
  var file = fs.readFileSync(__dirname+"/test.wav");
  websocket.send(file);

  websocket.send(JSON.stringify({action: 'stop'}));
}

function onMessage(evt) {
  console.log(evt.data);
}

function onDlose(evt) {
  console.log("websocket closed");
}
