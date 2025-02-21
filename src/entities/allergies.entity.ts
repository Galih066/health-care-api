import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Patient } from "./patients.entity";


@Schema({ timestamps: true })
export class Allergies extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    allergy_id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Patient' })
    patient_id: Patient;

    @Prop({ required: true })
    allergen: string;

    @Prop({ required: true })
    reaction: string;

    @Prop({ required: true })
    severity: string;
}

export const PatientSchema = SchemaFactory.createForClass(Allergies)