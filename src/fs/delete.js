import { unlink } from 'fs';
import { resolvePath } from './resolvePath.js';

export const remove = async () => {
    const filePath = resolvePath("fileToRemove.txt");

    unlink(filePath, (err) => {
        try {
            if (err) throw new Error("FS operation failed");
            
            console.log("File deleted!");
        }
        catch (e) {
            console.error(e.message);
        }
    });
};

await remove();