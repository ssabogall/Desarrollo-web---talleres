"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process_1 = __importDefault(require("process"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOrigins = process_1.default.env.CORS_ORIGIN?.split(',').map((s) => s.trim());
    app.enableCors({
        origin: corsOrigins?.length ? corsOrigins : ['http://localhost:5173', 'http://localhost', 'http://127.0.0.1'],
    });
    app.setGlobalPrefix('api');
    await app.listen(process_1.default.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map