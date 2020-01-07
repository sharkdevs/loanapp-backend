import twilio from 'twilio';

class SmsWebhook {
  static getResponseWebhook(req, res) {
    const { query } = req;
    console.log('-------------', query);

    res.json({
      status: 'success',
      message: 'Welcome to the webhook services',
      type: 'sms',
    });
  }

  static postResponseWebhook(req, res) {
    const { query } = req;
    const { body: { Body: command, From } } = req;
    const { MessagingResponse } = twilio.twiml;
    const twiml = new MessagingResponse();
    console.log('-------------', query, command, From);

    switch (command) {
      case '1':
        twiml.message('ILAM Registration:  Enter Your name');
        break;
      case 'Start':
      default:
        twiml.message(`${'Welcome to *ILAM API*'}. Respond with: \n 1. Register, \n 2. Login`);
        break;
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
}
export default SmsWebhook;
