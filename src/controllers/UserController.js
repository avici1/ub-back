import generateToken from '../helpers/generateToken';
require('dotenv').config();

class Users {
  static async signin(req, res) {
    const { username } = req.body;
    const { password } = req.body;
    if (username === process.env.UNAME && password === process.env.UPASS) {
      const token = generateToken(username, password);
      return res.status(200).send({
        status: 200,
        data: {
          token,
        },
      });
    }
    return res.status(400).send({ status: 404, message: 'Worng details' });
  }
}
export default Users;