import { Post } from '@nestjs/common';
import { Args, Float, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import { FruitsService } from 'src/fruits/fruits.service';

@Resolver()
export class HelloworldResolver {

    constructor(
        private readonly fruitService : FruitsService
     ){

    }
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

    @Mutation( () => [String])
    addFruit(@Args( {name: 'fruit',type: () => String} ) fruit: string): any{
        return this.fruitService.addFruit(fruit)
    }
    @Mutation( () => [String])
    RemoveFruit(@Args( {name: 'fruit',type: () => String} ) fruit: string): any{
        return this.fruitService.removeFruit(fruit)
    }
}

