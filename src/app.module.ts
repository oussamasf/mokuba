import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DimOneController } from './dim-one/dim-one.controller';

@Module({
  imports: [],
  controllers: [AppController, DimOneController],
  providers: [AppService],
})
export class AppModule {}
