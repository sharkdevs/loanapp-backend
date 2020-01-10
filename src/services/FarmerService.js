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

  static async makePayment(loanId, amount) {
    const payload = { 
      LoanId: loanId, 
      amountPaid: amount
    };
    const payment = await Payment.create(payload);
    return payment;
  }

}
export default FarmersService;
