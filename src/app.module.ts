import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './module/patient/patient.module';
import { ProfileModule } from './module/profile/profile.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(process.env.MONGO_URL, { dbName: process.env.DB_NAME }),
		PatientModule,
		ProfileModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
