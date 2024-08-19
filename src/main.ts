import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpErrorFilter } from './filters/ErrorFilter';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    disableErrorMessages: false,
    stopAtFirstError: false, // Cambiado a false para capturar todos los errores
    exceptionFactory: (errors) => {
      const errorMessages = errors.reduce((acc, error) => {
        if (error.constraints) {
          acc.push(`${error.property} - ${Object.values(error.constraints).join(', ')}`);
        }
        return acc;
      }, []);
      return new BadRequestException({
        statusCode: 400,
        message: errorMessages,
      });
    },
  }));

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpErrorFilter());
  
  await app.listen(3000);
}
bootstrap();
