import { Injectable } from '@angular/core';

@Injectable()
export class FileServices {

    addFile() {
        console.log("FileServices dummy.....");
        
        return { id: 21,name: 'saurav', owner: 'me', last_modified: 40.078, size: '2 mb' };
    }

    deleteFile() {
        return 21;
    }
}