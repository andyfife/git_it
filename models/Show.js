import mongoose from 'mongoose';

const showSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    _id: { type: Number, required: true },
    video: { type: String, required: true },
    mp3: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },

    isFeatured: { type: Boolean, default: false },
    banner: String,
  },
  {
    timestamps: true,
  }
);

const Show = mongoose.models.Show || mongoose.model('Show', showSchema);
export default Show;
