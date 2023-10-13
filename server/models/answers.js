import mongoose from 'mongoose';

const Answer = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  firstField: {
    type: String,
    required: true,
  },
  secondField: {
    type: String,
    required: true,
  },
  thirdField: {
    type: String,
    required: true,
  },
  fourthField: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Answer', Answer);
