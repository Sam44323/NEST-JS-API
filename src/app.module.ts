import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './utils/KEYS';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot(MONGO_URI)], // the imported modules for handling all the other routes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* 
This means that when that(same for all the other modules files) when the app is loaded, nest.js will create an instance based on this class and will decorate the objects based on the decorator
*/
