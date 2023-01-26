import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: false, unique: true },
    category: { type: String, required: false },
    image: { type: String, required: true },
    price: { type: Number, required: false },
    number: { type: Number, required: true },
    video: { type: String, required: true },
    mp3: { type: String, required: true },
    date: { type: String, required: true },
    banner: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
