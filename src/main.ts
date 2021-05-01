import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config= new DocumentBuilder()
      .setTitle('Ejemplo de swagger')
      .setDescription('ejemplo de api ')
      .setVersion('1.0.0')
      .addTag('product')
      .build();
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
