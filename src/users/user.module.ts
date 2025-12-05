import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { UserService } from "./user.service";
import { UserDocument, UserSchema, User } from "./user.schema"
import { Mongoose } from "mongoose";
import { MongooseModule, Schema } from "@nestjs/mongoose";


@Module({
    controllers: [userController],
    providers: [UserService],
    imports : [MongooseModule.forFeature([{name : User.name, schema : UserSchema}])]
})
export class userModule { }