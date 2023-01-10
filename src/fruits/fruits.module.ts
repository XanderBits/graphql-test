import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
@Module({
  providers: [FruitsService],
  exports: [FruitsService]
})
export class FruitsModule {}
