import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Auth, IAuthModel } from '../models/auth';

export class AuthsService {

  async login(authData: IAuthModel): Promise<IAuthModel> {
    L.info(`fetch auth with email ${authData.email} and ${authData.password}`);

    let doc = await Auth
      .findOne({ email: authData.email , password : authData.password})
      .lean()
      .exec() as IAuthModel;

    if (!doc) doc = JSON.parse('{"success":false}');

    return doc;
  }
  
}

export default new AuthsService();