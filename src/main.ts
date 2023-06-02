import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({ credentials: true, origin: true });

  const config = new DocumentBuilder()
    .setTitle('Cloud storage')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(4000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
