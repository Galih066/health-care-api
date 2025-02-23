import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.entity";
import { Allergies } from "./allergies.entity";
import { Insurance } from "./insurance.entity";
import { LoginActivity } from "./login-activity.entity";
import { MedicalHistory } from "./medical-history.entity";

@Schema({ timestamps: true })
export class Patient extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    patient_id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
    user_id: User;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Allergies' })
    allergy_id: Allergies;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Insurance' })
    insurance_id: Insurance;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'LoginActivity' })
    login_id: LoginActivity;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'MedicalHistory' })
    history_id: MedicalHistory;
}

export const PatientSchema = SchemaFactory.createForClass(Patient)