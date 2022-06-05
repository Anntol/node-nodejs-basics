import { readFile } from 'fs';
import { resolvePath } from './resolvePath.js';

export const read = async () => {
    const filePath = resolvePath("fileToRead.txt");    

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
