import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({ timestamps: true })
export class LoginActivity extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        default: MongooseSchema.Types.ObjectId,
        unique: true
    })
    login_id: string;

    @Prop({ required: true })
    last_login: Date;
}

export const PatientSchema = SchemaFactory.createForClass(LoginActivity)