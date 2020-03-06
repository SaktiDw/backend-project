import JurusanService from '../services/jurusan.service';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status-codes';

export class Controller {

  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const docs = await JurusanService.all();
      return res.status(HttpStatus.OK).json(docs);
    }
    catch (err) {
      return next(err);
    }
  }

  async byId(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await JurusanService.byId(req.params.id);
      return res.status(HttpStatus.OK).json(doc);
    }
    catch (err) {
      return next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await JurusanService.create(req.body);
      return res.status(HttpStatus.CREATED).location(`/api/jurusan/${doc._id}`).json(doc);
    }
    catch (err) {
      return next(err);
    }
  }

  async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await JurusanService.patch(req.params.id, req.body);
      return res.status(HttpStatus.OK).location(`/api/jurusan/${doc._id}`).json(doc);
    }
    catch (err) {
      return next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await JurusanService.remove(req.params.id);
      return res.status(HttpStatus.NO_CONTENT).send();
    }
    catch (err) {
      return next(err);
    }
  }

}

export default new Controller();
