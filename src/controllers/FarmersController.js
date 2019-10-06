import FarmersService from '../services/FarmerService';

class FarmersController{
  
  static async getAllFarmers(req, res) {
    const farmers = await FarmersService.getFarmers();

    res.status(200).json({
      message: 'successfully retrieved farmers',
      farmers
    });
  }
}

export default FarmersController;