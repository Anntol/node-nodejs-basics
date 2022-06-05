import * as path from 'path';
import { fileURLToPath } from 'url';

export const resolvePath = (fileName) => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const filesDirPath = path.join(dirname, './files');

    return path.resolve(filesDirPath, fileName);
}
