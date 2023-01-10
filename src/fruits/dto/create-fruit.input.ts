import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFruitInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
