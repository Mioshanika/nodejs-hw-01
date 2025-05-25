import path from 'node:path';
import { fileURLToPath } from 'node:url';

const thisModulePath = path.dirname(fileURLToPath(import.meta.url));

export const PATH_DB = path.resolve(thisModulePath, '../db/db.json');
