var watson = require('watson-developer-cloud'); //to connect to Watson developer cloud
var mic = require('mic');
var config = require("./config.js") // to get our credentials and the attention word from the config.js files


var speech_to_text = watson.speech_to_text({
  username: config.username,
  password: config.password,
  version: 'v1'
});


// Initiate Microphone Instance to Get audio samples
console.log("Configurando microfone");
var micInstance = mic({ 'rate': '44100', 'channels': '2', 'debug': false, 'exitOnSilence': 6 });
var micInputStream = micInstance.getAudioStream();

micInputStream.on('data', function(data) {
  // console.log("Recieved Input Stream: " + data.length);
});

micInputStream.on('error', function(err) {
  console.log("Error in Input Stream: " + err);
});

micInputStream.on('silence', function() {
  // detect silence.
});

micInstance.start();
console.log("Microfone ligado");


function initTextStream(){
  console.log("init text stream")
  textStream = micInputStream.pipe(speech_to_text.createRecognizeStream({
    content_type: 'audio/l16; rate=44100; channels=2',
    model: config.model,
    customization_id: config.STTCustomizationID,
    interim_results: config.interim_results,
    inactivity_timeout: config.inactivity_timeout,
    profanity_filter: config.profanity_filter,
    keywords: config.keywords,
    smart_formatting: config.smart_formatting
  }));

  textStream.setEncoding('utf8');

  var context = {} ; // Save information on conversation context/stage for continous conversation
  textStream.setEncoding('utf8');

  textStream.on('close', function(event) {
    console.log("Speech to Text Stream closed");
    console.log(JSON.stringify(event, null, 2));
    initTextStream();
  });

  textStream.on('data', function(str) {
    console.log(str); // print the text once received
  });

  textStream.on('error', function(err) {
    console.log(' === Watson Speech to Text : An Error has occurred =====') ; // handle errors
    console.log(err) ;
    console.log("Press <ctrl>+C to exit.") ;
  });
}
initTextStream();
