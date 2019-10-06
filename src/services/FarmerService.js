import models from '../database/models';
const { User, Role, Loan, Payment, FarmersLoanManager } = models;
class FarmersService{

  static async getFarmers() {
    const users = await User.findAll({
      include: [
        { model: Role },
        {
          model: Loan,
          include: [{
            model: Payment
          }]
        },
        ]
    });
    return users;
  }

}
export default FarmersService;
