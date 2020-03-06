import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IProdiModel extends mongoose.Document {
  kd_jurusan: String;
  prodi: [];
};

const schema = new Schema({
  kd_jurusan: String,
  prodi: Array
}, {collection: "jurusan"});

export const Prodi = mongoose.model<IProdiModel>("Prodi", schema);