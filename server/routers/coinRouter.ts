import express from 'express';
import {coinController, getCoins} from '../controllers/coinController';

const coinRouter=express.Router();

coinRouter.route('/addcoins').post(coinController)
coinRouter.route('/getcoins').get(getCoins)

export default coinRouter