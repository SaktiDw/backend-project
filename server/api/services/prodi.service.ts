import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Prodi, IProdiModel } from '../models/prodi';

export class ProdisService {

  async all(): Promise<IProdiModel[]> {
    L.info('fetch all prodis');

    const docs = await Prodi
      .distinct("prodi")
      .lean()
      .exec() as IProdiModel[];

    return docs;
  }

  async byId(prodiData: IProdiModel): Promise<IProdiModel> {
    // L.info(`fetch prodi with id ${id}`);

    const doc = await Prodi
      .findOne({ kd_jurusan: prodiData.kd_jurusan })
      .lean()
      .exec() as IProdiModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }

  async create(prodiData: IProdiModel): Promise<IProdiModel> {
    L.info(`create prodi with data ${prodiData}`);

    const prodi = new Prodi(prodiData);

    const doc = await prodi
      .update({kd_jurusan: prodiData.kd_jurusan}, { $push: {prodi: [ prodiData.prodi ]}}) 
      .lean()
      .exec() as IProdiModel;

    return doc;
  }

  async patch(prodiData: IProdiModel): Promise<IProdiModel> {

    const doc = await Prodi
    .update({kd_jurusan: prodiData.kd_jurusan}, { $set: {prodi: [ prodiData.prodi ]}}) 
      .lean()
      .exec() as IProdiModel;

    return doc;
  }

  async remove(prodiData: IProdiModel): Promise<void> {
    return await Prodi
    .update({kd_jurusan: prodiData.kd_jurusan}, { $pull: {prodi: [ prodiData.prodi ]}}) 
      .lean()
      .exec();
  }
}

export default new ProdisService();