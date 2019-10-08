import models from '../database/models';
const { User, LoanManager, Loan, Payment } = models;
class OfficerService {

  static async getLoanOfficer(params = {}) {
    const managers = await LoanManager.findAll({
      where: params,
      include: [
        {
          model: User,
          include: [
            {
              model: Loan,
              include: [
                { model: Payment },
              ]
            },
          ]
        },
      ]
    });
    return managers;
  }

}
export default OfficerService;
