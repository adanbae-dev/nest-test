import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url 을 가져오고 함수를 실행, express 의 router 같은 존재
  providers: [],
})
export class AppModule {}
