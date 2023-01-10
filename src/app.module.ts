import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloworldModule } from './helloworld/helloworld.module';
import { FruitsService } from './fruits/fruits.service';
import { FruitsModule } from './fruits/fruits.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }), HelloworldModule,FruitsModule
  ],
  controllers:[],
  providers: [FruitsService],
})
export class AppModule {}
