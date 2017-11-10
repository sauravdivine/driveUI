import { IAppState } from './iAppState';
import { FileInfo } from '../model/file-info';
import { FILE_ADD, FILE_DELETE, FILE_UPDATE_SELECTION } from './actions';

const files = [
    { id: 1, name: 'folder1', owner: 'me', last_modified: 1.0079, size: '1 mb' },
    { id: 2, name: 'mp3', owner: 'me', last_modified: 4.0026, size: '1 mb' },
    { id: 3, name: 'Waynad trip', owner: 'me', last_modified: 6.941, size: '1 mb' },
    { id: 4, name: 'Beryllium', owner: 'me', last_modified: 9.0122, size: '1 mb' },
    { id: 5, name: 'Boron', owner: 'me', last_modified: 10.811, size: '1 mb ' },
    { id: 6, name: 'Carbon', owner: 'me', last_modified: 12.0107, size: '1 mb' },
    { id: 7, name: 'Nitrogen', owner: 'me', last_modified: 14.0067, size: '1 mb' },
    { id: 8, name: 'Oxygen', owner: 'me', last_modified: 15.9994, size: '1 mb ' },
    { id: 9, name: 'Fluorine', owner: 'me', last_modified: 18.9984, size: '1 mb ' },
    { id: 10, name: 'Neon', owner: 'me', last_modified: 20.1797, size: '1 mb' },
    { id: 11, name: 'Sodium', owner: 'me', last_modified: 22.9897, size: '1 mb' },
    { id: 12, name: 'Magnesium', owner: 'me', last_modified: 24.305, size: '1 mb' },
    { id: 13, name: 'Aluminum', owner: 'me', last_modified: 26.9815, size: '1 mb' },
    { id: 14, name: 'Silicon', owner: 'me', last_modified: 28.0855, size: '1 mb' },
    { id: 15, name: 'Phosphorus', owner: 'me', last_modified: 30.9738, size: '1 mb' },
    { id: 16, name: 'Sulfur', owner: 'me', last_modified: 32.065, size: '1 mb ' },
    { id: 17, name: 'Chlorine', owner: 'me', last_modified: 35.453, size: '1 mb' },
    { id: 18, name: 'Argon', owner: 'me', last_modified: 39.948, size: '1 mb' },
    { id: 19, name: 'Potassium', owner: 'me', last_modified: 39.0983, size: '1 mb' },
    { id: 20, name: 'Calcium', owner: 'me', last_modified: 40.078, size: '1 mb' },
];
var initialState: IAppState = {
    selectedFileId: 0,
    files: files
};

function updateSelection(state, action): IAppState {

    return Object.assign({}, state, {
        selectedFileId: action.id
    });

}

function addFile(state, action): IAppState {

    console.log("from reducer =>  " + action.newFile);
    return Object.assign({}, state, {
        selectedFileId: 0,
        files: state.files.concat(Object.assign({}, action.newFile))
    });

}

function deleteFile(state, action): IAppState {
    return Object.assign({}, state, {
        selectedFileId: 0,
        files: state.files.filter(t => t.id !== state.selectedFileId),
    })
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        case FILE_ADD:
            return addFile(state, action);
        case FILE_DELETE:
            return deleteFile(state, action);
        case FILE_UPDATE_SELECTION:
            return updateSelection(state, action);
        default:
            return state;
    }
}