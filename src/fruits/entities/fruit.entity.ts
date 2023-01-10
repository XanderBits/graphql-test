import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fruit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
