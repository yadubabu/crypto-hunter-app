import express from 'express';
import {coinController, getCoins} from '../controllers/coinController';
import { getStocks, stockController } from '../controllers/stockController';

const stockRouter=express.Router();

stockRouter.route('/addstocks').post(stockController)
stockRouter.route('/getstocks').get(getStocks)

export default stockRouter