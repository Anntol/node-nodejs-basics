import { readdir } from 'fs';
import { resolvePath } from './resolvePath.js';

export const list = async () => {
    const dirPath = resolvePath("");

    readdir(dirPath, (err, data) => {
        try {
            if (err) throw new Error("FS operation failed");
            
            data.forEach((file) => console.log(file));
        }
        catch (e) {
            console.error(e.message);
        }
    });
};

await list();
