import { join } from 'node:path';
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    client: '@hey-api/client-fetch',
    input: join(__dirname, '..', 'openapi.json'),
    output: join(__dirname, 'src', 'generated'),
});