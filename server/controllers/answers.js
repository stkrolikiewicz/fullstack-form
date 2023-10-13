import Answer from '../models/answers.js';

const getAnswers = async (_req, res) => {
  try {
    const answers = await Answer.find();
    res.status(200).json({success: true, data: answers});
  } catch (error) {
    console.log(error);
    res.status(400).json({success: false, data: null, error: error});
  }
};

const postAnswers = async (req, res) => {
  try {
    const {firstField, secondField, thirdField, fourthField} = req.body;
    const newAnswer = new Answer({
      firstField,
      secondField,
      thirdField,
      fourthField,
    });
    await newAnswer.save();
    res.status(201).json({success: true, data: newAnswer});
  } catch (error) {
    res.status(400).json({success: false, data: null, error: error});
  }
};

export {getAnswers, postAnswers};
