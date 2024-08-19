import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvConfig } from './env.config';
@Injectable()
export class DatabaseconfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const envConfig = EnvConfig();
    console.log({ envConfig }); // Para verificar que las variables se cargan correctamente
    return {
      type: 'mysql',
      host: envConfig.host,
      port: envConfig.port,
      username: envConfig.usernameDb,
      password: envConfig.password,
      database: envConfig.database,
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo; no usar en producción
    };
  }
}
