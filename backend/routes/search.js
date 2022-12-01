import express from 'express';
import { search } from '../controller/search-contoller';

const searchRouter = express.Router();

searchRouter.get('/',search);

export default searchRouter;