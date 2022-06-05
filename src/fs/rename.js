import { accessSync, rename as fsRename } from 'fs';
import { resolvePath } from './resolvePath.js';

export const rename = async () => {
    const oldPath = resolvePath("wrongFilename.txt");
    const newPath = resolvePath("properFilename.md");

    const isNewFileExist = false;
    try {
        accessSync(newPath);
        isNewFileExist = true; 
    } catch (e) {}
    
    try {
        if (isNewFileExist) {
            throw new Error("FS operation failed");
        } else {
            fsRename(oldPath, newPath, (err) => {
                try {
                    if (err) throw new Error("FS operation failed");
                    
                    console.log("File renamed!");
                }
                catch (e) {
                    console.error(e.message);
                }
            });
        }
    } catch (e) {
        console.error(e.message);
    }
    
};

await rename();