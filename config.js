var config = {};


// Find how to get a token at:
// https://www.ibm.com/watson/developercloud/doc/common/getting-started-tokens.html
config.token = "";
config.username = "";
config.password = ""
config.keywords=[];
config.smart_formatting=true;
config.profanity_filter=true;
config.inactivity_timeout=-1;
config.interim_results=true;
// Some valid voices to choose
// ar-AR_BroadbandModel
// en-UK_BroadbandModel
// en-UK_NarrowbandModel
// en-US_BroadbandModel (the default)
// en-US_NarrowbandModel
// es-ES_BroadbandModel
// es-ES_NarrowbandModel
// fr-FR_BroadbandModel
// ja-JP_BroadbandModel
// ja-JP_NarrowbandModel
// pt-BR_BroadbandModel
// pt-BR_NarrowbandModel
// zh-CN_BroadbandModel
// zh-CN_NarrowbandModel
config.model="pt-BR_BroadbandModel";

module.exports = config;
