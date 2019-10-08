import OfficerService from '../services/OfficerService';

class OfficerController{

  static async getLoanOfficers(req, res) {
    const officerData = await OfficerService.getLoanOfficer();
    res.status(200).json({
      message: 'successfully Retrieved',
      officerData
    });
  }
}

export default OfficerController;