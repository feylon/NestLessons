import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioMOdule } from './bio/bio.module';
import { AuthModule } from './auth/auth.module';
import { ChangepasswordController } from './changepassword/changepassword.controller';
import { ChangepasswordService } from './changepassword/changepassword.service';
import { ChangepasswordModule } from './changepassword/changepassword.module';
import { TeacherModule } from './teacher/teacher.module';
import { studentModule } from './student/student.module';

@Module({
  imports: [BioMOdule, AuthModule, ChangepasswordModule, TeacherModule, studentModule],
  
  controllers: [AppController, ChangepasswordController],
  providers: [AppService, ChangepasswordService],
})
export class AppModule {}
