import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Matkul, IMatkulModel } from '../models/matkul';

export class MatkulsService {

  async all(): Promise<IMatkulModel[]> {
    L.info('fetch all matkuls');

    const docs = await Matkul
      .find()
      .lean()
      .exec() as IMatkulModel[];

    return docs;
  }

  async byId(id: string): Promise<IMatkulModel> {
    L.info(`fetch matkul with id ${id}`);

    if (!mongooseTypes.ObjectId.isValid(id)) throw new errors.HttpError(HttpStatus.BAD_REQUEST);

    const doc = await Matkul
      .findOne({ _id: id })
      .lean()
      .exec() as IMatkulModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }

  async create(matkulData: IMatkulModel): Promise<IMatkulModel> {
    L.info(`create matkul with data ${matkulData}`);

    const matkul = new Matkul(matkulData);

    const doc = await matkul.save() as IMatkulModel;

    return doc;
  }

  async patch(id: string, matkulData: IMatkulModel): Promise<IMatkulModel> {
    L.info(`update matkul with id ${id} with data ${matkulData}`);

    const doc = await Matkul
      .findOneAndUpdate({ _id: id }, { $set: matkulData }, { new: true })
      .lean()
      .exec() as IMatkulModel;

    return doc;
  }

  async remove(id: string): Promise<void> {
    L.info(`delete matkul with id ${id}`);

    return await Matkul
      .findOneAndRemove({ _id: id })
      .lean()
      .exec();
  }
}

export default new MatkulsService();