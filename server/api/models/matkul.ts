import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IMatkulModel extends mongoose.Document {
  kd_matkul : String;
  name : String;
  sks : Number;
  pembagian : [];
  jenis : String;
  prasyarat : String;
  semester: String;
  praktikum : String;
};

const schema = new Schema({
  kd_matkul : String,
  name : String,
  sks : Number,
  pembagian : Array,
  jenis : String,
  prasyarat : String,
  semester: String,
  praktikum : String
}, {collection: "matkul"});

export const Matkul = mongoose.model<IMatkulModel>("Matkul", schema);