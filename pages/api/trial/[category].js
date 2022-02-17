import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.find({category:req.query.category});
  console.log(product);
  await db.disconnect();
  res.send(product);
});

export default handler;