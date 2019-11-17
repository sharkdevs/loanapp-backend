import AuthService from '../services/AuthService';
import jwt from 'jsonwebtoken';

class AuthController{
  static async createUser(req, res) {
    const { body } = req
    const user = await AuthService.createUser(body);
    const token = AuthController.generateToken(user.id);

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      user,
      token
    });

  }
  
  static generateToken(id){
    let token = jwt.sign(
      {userId: id},
      'MY.secret',
      { expiresIn: '24h'}
    );
    return token;
  }

  static async loginUser(req, res){
    const { body } = req;
    const user = await AuthService.getUser(body);
    if(!user){
      res.status(404).json({
        message: 'nothing was found'
      });
    }else{
      const token = AuthController.generateToken(user.id);
      res.status(200).json({
        success: true,
        message: 'User Logged In successfully!',
        user,
        token
      });
    }
    
  }
 
}

export default AuthController;