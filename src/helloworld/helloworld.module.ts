import { Module } from '@nestjs/common';
import { FruitsModule } from 'src/fruits/fruits.module';
import { FruitsService } from 'src/fruits/fruits.service';
import { HelloworldResolver } from './helloworld.resolver';

@Module({
  providers: [HelloworldResolver],
  imports: [FruitsModule]
})
export class HelloworldModule {}
