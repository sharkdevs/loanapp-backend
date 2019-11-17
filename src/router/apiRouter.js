import express from 'express';
import FarmersController from '../controllers/FarmersController';
import OfficerController from '../controllers/OfficerController';
import AuthController from '../controllers/AuthController';

const router = express.Router();
const apiPrefix = '/api/v1/';

router.get('/', (req, res) => {
  res.send('Welcome to Loan APIs');
});
router.get(`${apiPrefix}farmers`, FarmersController.getAllFarmers);

router.get(`${apiPrefix}farmers/:id`, FarmersController.getFarmer);

router.get(`${apiPrefix}managers`, OfficerController.getLoanOfficers);

router.post(`${apiPrefix}managers`, OfficerController.getLoanOfficers);

router.post(`${apiPrefix}auth/register`, AuthController.createUser);
router.post(`${apiPrefix}auth/login`, AuthController.loginUser);

export default router