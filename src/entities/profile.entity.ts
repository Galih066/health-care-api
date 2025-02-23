import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.entity";

export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

@Schema({ timestamps: true })
export class Profile extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    profile_id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
    user_id: User;

    @Prop({ required: true })
    dob: Date;

    @Prop({ required: true, enum: Gender })
    gender: Gender;

    @Prop({ required: true })
    contact_number: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    zip_code: string;

    @Prop()
    profile_picture: string;
}

export const PatientSchema = SchemaFactory.createForClass(Profile)