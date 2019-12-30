import twilio from 'twilio';

const accountSid = 'ACe40cb87b83b29366d1b93ed29560ac0a';
const authToken = '6eadede692ff257e91661b883c990cb1';
const client = twilio(accountSid, authToken);

class SendMessageService {
  static async createMessage(payload) {
    console.log('-------2');

    const { from, body, to } = payload;
    const message = await client.messages.create({
      from, body, to,
    });

    return message;
  }
}
export default SendMessageService;
