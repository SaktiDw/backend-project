import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IJurusanModel extends mongoose.Document {
  kd_jurusan: String;
  name: String;
  prodi: String[];
};

const schema = new Schema({
  kd_jurusan: String,
  name: String,
  prodi: Array
}, {collection: "jurusan"});

export const Jurusan = mongoose.model<IJurusanModel>("Jurusan", schema);