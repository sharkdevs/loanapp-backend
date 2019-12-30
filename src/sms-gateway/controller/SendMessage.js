import SendMessageService from '../service/SendMsgService';

class MessageController {
  static async sendMessage(req, res) {
    const sms = await SendMessageService.createMessage(req.body);
    res.json({
      message: 'Successfully sent',
      sms,
    });
  }
}

export default MessageController;
