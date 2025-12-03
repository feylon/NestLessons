import { Module } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
    controllers : [StudentController],
    imports : [ ThrottlerModule.forRoot({
          throttlers: [
            {
              ttl: 60000,
              limit: 1,
            },
          ],
        }),],
    providers : [StudentService, {
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}],
   
})
export class studentModule {}