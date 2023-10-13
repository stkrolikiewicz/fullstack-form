import express from 'express';
import {getAnswers, postAnswers} from '../controllers/answers.js';

const router = express.Router();

router.get('/', getAnswers);
router.post('/add', postAnswers);

export default router;
