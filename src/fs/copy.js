import { copyFile, readdir, existsSync, mkdir } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const fromPath = path.join(dirname, './files');
    const toPath = path.join(dirname, './files_copy');
    try {
        if (!existsSync(toPath)) {
            mkdir(toPath, (e) => {            
                readdir(fromPath, (err, data) => {
                    try {
                        if (err) throw new Error("FS operation failed");
                        
                        data.forEach((entry) => {
                            const srcPath = path.join(fromPath, entry);
                            const destPath = path.join(toPath, entry);

                            copyFile(srcPath, destPath, (e) => {
                                try {
                                    if (err) throw new Error("FS operation failed");
                                } catch (error) {
                                    console.error(e.message);
                                }
                            });
                        });
                        console.log('Files copied!');
                    }
                    catch (e) {
                        console.error(e.message);
                    }
                });
            });
        } else {
            throw new Error("FS operation failed");
        }
    } catch (error) {
        console.error(error.message);
    }
};

await copy();
