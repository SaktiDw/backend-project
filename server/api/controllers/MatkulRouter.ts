import express from 'express';
import controller from './MatkulController'
export default express.Router()
    .post('/', controller.create)
    .get('/', controller.all)
    .get('/:id', controller.byId)
    .patch('/:id', controller.patch)
    .delete('/:id', controller.remove);