const express = require('express')

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

// Log in
router.post('/',
validateLogin,
  async (req, res, next) => {
    const { credential, password, firstName, lastName} = req.body;

    const user = await User.login({ credential, password, firstName, lastName });




    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    user.dataValues.token = req.cookies.token


    return res.json(
      user
      );
  }
);


// Log out
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

// Restore session user
router.get('/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      user.dataValues.token = req.cookies.token
      return res.json(
        user
      );
    } else return res.json({});
  }
);




module.exports = router;
