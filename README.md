Falta o arquivo .env 
comandos para criar migration 
npm run migration:create ''
npm run migration:run
npm run typeorm migration:create src/shared/typeorm/migration/CreateUsuarioTable
npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run 
