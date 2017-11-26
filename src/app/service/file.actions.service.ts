import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/iAppState';
import { Injectable } from '@angular/core';
import { FileServices } from './file.services';
import { FILE_ADD, FILE_DELETE, FILE_UPDATE_SELECTION, TOGGLE_INFO_PANEL } from '../store/actions';



@Injectable()
export class FileActions {

    constructor(
        private ngRedux: NgRedux<IAppState>, private fileServices: FileServices
    ) { }

    addFile() {
        let newFile = this.fileServices.addFile();
        this.ngRedux.dispatch({
            type: FILE_ADD,
            newFile
        });
        console.log("dispatched.....");
    }

    deleteFile() {
        // let id = this.fileServices.deleteFile();
        this.ngRedux.dispatch({
            type: FILE_DELETE
        })
    }

    updateSelection(id:number) {
        this.ngRedux.dispatch({
            type: FILE_UPDATE_SELECTION,
            id
        })
    }

    toggleInfoPanel(){
        this.ngRedux.dispatch({
            type: TOGGLE_INFO_PANEL,
        })
    }

}