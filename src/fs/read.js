import * as path from 'path';
import { readFile } from 'fs';
import { fileURLToPath } from 'url';

export const read = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const filesDirPath = path.join(dirname, './files');

    const filePath = path.resolve(filesDirPath, "fileToRead.txt");    

    readFile(filePath, 'utf8', (err, data) => {
        try {
            if (err) throw new Error("FS operation failed");
            
            console.log(data);
        }
        catch (e) {
            console.error(e.message);
        }
    });
};

await read();
