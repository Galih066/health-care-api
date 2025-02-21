import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { Patient } from 'src/entities/patients.entity';
import { PatientSchema } from 'src/entities/patients.entity';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Patient.name, schema: PatientSchema },
		])
	],
	controllers: [PatientController],
	providers: [PatientService],
})
export class PatientModule { }
