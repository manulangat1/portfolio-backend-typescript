import express from 'express';
import authController from './authController';




const Router = express.Router();

Router.get('/',authController.getUser)






export default Router;