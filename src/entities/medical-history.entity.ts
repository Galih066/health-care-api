import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({ timestamps: true })
export class MedicalHistory extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    history_id: string;

    @Prop({ required: true })
    patient_id: string;

    @Prop({ required: true })
    condition: string;

    @Prop({ required: true })
    diagnosis_date: Date;

    @Prop({ required: true })
    notes: string;
}

export const MedicalHistorySchema = SchemaFactory.createForClass(MedicalHistory)