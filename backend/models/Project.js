import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isTopProject: {
    type: Boolean,
    default: true,
  },
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
