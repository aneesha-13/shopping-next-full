import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
// add JWT_SECRET=secret in .env file
    process.env.JWT_SECRET,
    {
      expiresIn: '15d',
    }
  );
};

export { signToken };