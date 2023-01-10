import { BadRequestException, HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFruitInput } from './dto/create-fruit.input';
import { UpdateFruitInput } from './dto/update-fruit.input';

@Injectable()
export class FruitsService {
  private fruits = ['Fresa', 'Coco', 'Manzana', 'Pera', 'Tomate']

  addFruit(fruit) {
    const fruitIndex = this.fruits.indexOf(fruit)
    if(fruitIndex === -1){
      this.fruits.push(fruit)
      return this.fruits
    }
    throw new BadRequestException(`The fruit ${ fruit } already exists`);
  }
  removeFruit(fruit){
    const fruitIndex = this.fruits.indexOf(fruit)
    if(fruitIndex !== -1){
      this.fruits.splice(fruitIndex, 1); 
      return this.fruits
    }
    throw new NotFoundException(`Product with term ${ fruit } not found`);
  }
}
