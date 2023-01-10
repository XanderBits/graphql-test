import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
    @Query( () => String ) 
    helloWorld(): string{
        return 'Hello World';
    }

    @Query(() => Float, {name: "RandomNumber", description: "This query return a random number"})
    GetRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, {name: "RandomNumberZeroTo", description: "This query return a random number from zero to Argument 'TO' "})
    GetRandomFromZeroTo( @Args('to', { type: () => Int, nullable: true}) to: number ): number {
        return Math.floor(Math.random() * to)
    }
}
