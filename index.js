const Alexa = require('ask-sdk-core');

const MathSkillIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'MathSkillIntent';
  },
  handle(handlerInput) {
    const answer = Alexa.getSlotValue(handlerInput.requestEnvelope, 'answer');
    const speechText = answer === '4' ? "That’s correct!" : "That’s wrong";

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  }
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    MathSkillIntentHandler
  )
  .lambda();
