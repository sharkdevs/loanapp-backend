import express from 'express';
import AuthController from '../controllers/AuthController';
import FarmersController from '../controllers/FarmersController';
import MessageController from '../sms-gateway/controller/SendMessage';
import OfficerController from '../controllers/OfficerController';
import SmsWebhook from '../sms-gateway/WEBHOOK/SmsWebhook';

const router = express.Router();
const apiPrefix = '/api/v1/';
const webhookPrefix = '/webhook/v1/';

router.get('/', (req, res) => {
  res.send('Welcome to Loan APIs');
});
router.get(`${apiPrefix}farmers`, FarmersController.getAllFarmers);

router.get(`${apiPrefix}farmers/:id`, FarmersController.getFarmer);

router.get(`${apiPrefix}managers`, OfficerController.getLoanOfficers);

router.post(`${apiPrefix}managers`, OfficerController.getLoanOfficers);

router.post(`${apiPrefix}auth/register`, AuthController.createUser);

router.post(`${apiPrefix}auth/login`, AuthController.loginUser);

router.post(`${apiPrefix}sms/send`, MessageController.sendMessage);

router.post(`${apiPrefix}farmers/repayment`, FarmersController.makePayment);

router.post(`${webhookPrefix}`, SmsWebhook.postResponseWebhook);

router.get(`${webhookPrefix}`, SmsWebhook.getResponseWebhook);

export default router;
