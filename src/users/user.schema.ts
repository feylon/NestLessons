
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ minlength : 3, maxlength : 30})
  firstname: string;

  @Prop({unique : true, minlength : 3, maxlength : 30})
  username: string;

  @Prop({ minlength : 3, maxlength : 30})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
