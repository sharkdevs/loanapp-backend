import FarmersService from '../services/FarmerService';

class FarmersController{
  
  static async getAllFarmers(req, res) {
    const params = {
        RoleId: 1,
      };
    await FarmersController.farmerQueryMethod(params, req, res)
  }

  static async getFarmer(req, res) {
    const params = {
      RoleId: 1,
      id: req.params.id
    };
    await FarmersController.farmerQueryMethod(params, req, res);
  }
  static async farmerQueryMethod(params, req, res) {
    const farmers = await FarmersService.getFarmers(params);
    res.status(200).json({
      message: 'successfully retrieved farmers',
      farmers
    });
  }
}

export default FarmersController;