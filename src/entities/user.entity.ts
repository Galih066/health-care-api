import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    user_id: string;

    @Prop({ required: true })
    contact_number: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;
}

export const PatientSchema = SchemaFactory.createForClass(User)