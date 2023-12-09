import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle('API Professional and Professional Type')
    .setDescription(
      'Esta aplicação tem como objetivo poder cadastrar profissional e seu tipo de profissão. ',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(3001);
}
bootstrap();
