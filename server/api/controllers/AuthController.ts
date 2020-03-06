import AuthService from '../services/auth.service';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status-codes';

export class Controller {

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await AuthService.login(req.body);
      return res.status(HttpStatus.OK).location(`/api/user/${doc._id}`).json(doc);
    }
    catch (err) {
      return next(err);
    }
  }

}

export default new Controller();
