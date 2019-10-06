import express from 'express';
import FarmersController from '../controllers/FarmersController';

const router = express.Router();
const apiPrefix = '/api/v1/';

router.get('/', (req, res) => {
  res.send('Welcome to Loan APIs');
});
router.get(`${apiPrefix}users`, FarmersController.getAllFarmers);

export default router