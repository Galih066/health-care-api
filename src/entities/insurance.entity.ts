import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Patient } from "./patients.entity";


@Schema({ timestamps: true })
export class Insurance extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    insurance_id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Patient' })
    patient_id: Patient;

    @Prop({ required: true })
    insurance_provider: string;

    @Prop({ required: true })
    policy_number: string;

    @Prop({ required: true })
    coverage_details: string;

    @Prop({ required: true })
    valid_until: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Insurance)