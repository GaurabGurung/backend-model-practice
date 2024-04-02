import mongoose from "mongoose";

const medicatlRecordSchema = new mongoose.Schema({}, { timestamps });

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicatlRecordSchema
);
