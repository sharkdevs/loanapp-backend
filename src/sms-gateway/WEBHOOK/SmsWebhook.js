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
    let message = 'Welcome';
    console.log('-------------', query, command, From);

    switch (command) {
      case 1:
        message = '\b ILAM Registration: \b \n Enter Your name';
        break;
      case 'Start':
      default:
        message = 'Welcome to \b ILAM API \b \n 1. Register,\n 2. Login';
        break;
    }

    res.json({
      message,
      status: 'success',
      type: 'sms',
    });
  }
}
export default SmsWebhook;
