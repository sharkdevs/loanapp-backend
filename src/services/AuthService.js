import models from '../database/models';
const { User} = models;
class AuthService {

  static async createUser(body) {
    const user = await User.create(body);
    return user;
  }
  static async getUser(params) {
    const user = await User.findOne({
      where:params,
    });
    return user;
  }

}
export default AuthService;
