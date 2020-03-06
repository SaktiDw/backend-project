import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IAuthModel extends mongoose.Document {
  email: string;
  password: string;
};

const schema = new Schema({
  email: String,
  password: String,
}, {collection: "user"});

export const Auth = mongoose.model<IAuthModel>("Auth", schema);