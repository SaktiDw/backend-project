import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IExampleModel extends mongoose.Document {
  email: string;
  password: string;
  role: string;
};

const schema = new Schema({
  email: String,
  password: String,
  role: String
}, {collection: "user"});

export const Example = mongoose.model<IExampleModel>("Example", schema);