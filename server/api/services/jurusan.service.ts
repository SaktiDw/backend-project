import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Jurusan, IJurusanModel } from '../models/jurusan';

export class JurusansService {

  async all(): Promise<IJurusanModel[]> {
    L.info('fetch all jurusans');

    const docs = await Jurusan
      .find()
      .lean()
      .exec() as IJurusanModel[];

    return docs;
  }

  async byId(id: string): Promise<IJurusanModel> {
    L.info(`fetch jurusan with id ${id}`);


    const doc = await Jurusan
      .findOne({ _id: id })
      .lean()
      .exec() as IJurusanModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }

  async create(jurusanData: IJurusanModel): Promise<IJurusanModel> {
    L.info(`create jurusan with data ${jurusanData}`);

    const jurusan = new Jurusan(jurusanData);

    const doc = await jurusan.save() as IJurusanModel;

    return doc;
  }

  async patch(id: string, jurusanData: IJurusanModel): Promise<IJurusanModel> {
    L.info(`update jurusan with id ${id} with data ${jurusanData}`);

    const doc = await Jurusan
      .findOneAndUpdate({ _id: id }, { $set: jurusanData }, { new: true })
      .lean()
      .exec() as IJurusanModel;

    return doc;
  }

  async remove(id: string): Promise<void> {
    L.info(`delete jurusan with id ${id}`);

    return await Jurusan
      .findOneAndRemove({ _id: id })
      .lean()
      .exec();
  }
}

export default new JurusansService();