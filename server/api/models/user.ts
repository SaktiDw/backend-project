import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IUserModel extends mongoose.Document {
  nip: String;
  name : String;
  email : String;
  password : String;
  role : String;
  jurusan: String;
  prodi: String;
};

const schema = new Schema({
  nip: String,
  name : String,
  email : String,
  password : String,
  role : String,
  jurusan: String,
  prodi: String
}, {collection: "user" });

export const User = mongoose.model<IUserModel>("User", schema);