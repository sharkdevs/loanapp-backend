import models from '../database/models';
const { User, Role, Loan, Payment, LoanManager } = models;
class FarmersService{

  static async getFarmers(params) {
    const farmers = await User.findAll({
      where:params,
      include: [
        { model: Role },
        { model: LoanManager },
        {
          model: Loan,
          include: [{
            model: Payment
          }]
        },
        ]
    });
    return farmers;
  }

}
export default FarmersService;
