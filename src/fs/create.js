import { writeFile } from 'fs';
import { resolvePath } from './resolvePath.js';

export const create = async () => {
    const filePath = resolvePath("fresh.txt");
    const fileData = "I am fresh and young"; 

    writeFile(filePath, fileData, 
        { encoding: 'utf8', flag: 'wx+'}, (err, data) => {
        try {
            if (err) throw new Error("FS operation failed");
            
            console.log(data);
        }
        catch (e) {
            console.error(e.message);
        }
    });
};

await create();