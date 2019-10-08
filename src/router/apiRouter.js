import express from 'express';
import FarmersController from '../controllers/FarmersController';
import OfficerController from '../controllers/OfficerController';

const router = express.Router();
const apiPrefix = '/api/v1/';

router.get('/', (req, res) => {
  res.send('Welcome to Loan APIs');
});
router.get(`${apiPrefix}farmers`, FarmersController.getAllFarmers);

router.get(`${apiPrefix}farmers/:id`, FarmersController.getFarmer);

router.get(`${apiPrefix}managers`, OfficerController.getLoanOfficers);


export default router