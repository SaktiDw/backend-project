import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { User, IUserModel } from '../models/user';

export class UsersService {

  async all(): Promise<IUserModel[]> {
    L.info('fetch all users');

    const docs = await User
      .find()
      .lean()
      .exec() as IUserModel[];

    return docs;
  }

  async byId(id: string): Promise<IUserModel> {
    L.info(`fetch user with id ${id}`);

    if (!mongooseTypes.ObjectId.isValid(id)) throw new errors.HttpError(HttpStatus.BAD_REQUEST);

    const doc = await User
      .findOne({ _id: id })
      .lean()
      .exec() as IUserModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }

  async create(exampleData: IUserModel): Promise<IUserModel> {
    L.info(`create user with data ${exampleData}`);

    const user = new User(exampleData);

    const doc = await user.save() as IUserModel;

    return doc;
  }

  async patch(id: string, exampleData: IUserModel): Promise<IUserModel> {
    L.info(`update user with id ${id} with data ${exampleData}`);

    const doc = await User
      .findOneAndUpdate({ _id: id }, { $set: exampleData }, { new: true })
      .lean()
      .exec() as IUserModel;

    return doc;
  }

  async remove(id: string): Promise<void> {
    L.info(`delete user with id ${id}`);

    return await User
      .findOneAndRemove({ _id: id })
      .lean()
      .exec();
  }
}

export default new UsersService();