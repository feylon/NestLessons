
import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';

@Injectable()
export class JuftSon implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    const son = Number(value);
    if(son % 2 == 1) throw new HttpException({
        message : "Siz toq son junatdigniz"
    }, 401);
    return value;
  }
}
