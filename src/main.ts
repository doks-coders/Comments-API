import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('User Authentication Documentation')
  .setDescription('Authentication API using Nestjs that provides access to various features and such as account creation, log in, email verification and password reset')
  .setVersion('0.0.1')
  .addTag('api').build();
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
app.enableCors()
await app.listen(process.env.PORT || 3000);
}
bootstrap();
 