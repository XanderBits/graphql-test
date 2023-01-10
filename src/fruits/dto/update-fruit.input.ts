import { CreateFruitInput } from './create-fruit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFruitInput extends PartialType(CreateFruitInput) {
  @Field(() => Int)
  id: number;
}
