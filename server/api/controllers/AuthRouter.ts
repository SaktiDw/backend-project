import express from 'express';
import controller from './AuthController'
export default express.Router()
    .post('/', controller.login)