import { IAppState } from './iAppState';
import { FileInfo } from '../model/file-info';
import { FILE_ADD, FILE_DELETE, FILE_UPDATE_SELECTION, TOGGLE_INFO_PANEL } from './actions';

const commands = [{ id: 'INFO', enabled: true }];

const files = [
    { id: 1, name: 'folder1', owner: 'me', last_modified:'Today at 2 AM , me', size: '1 mb' },
    { id: 2, name: 'mp3', owner: 'me', last_modified:'Today at 2 AM , me', size: '2 mb' },
    { id: 3, name: 'Waynad trip', owner: 'me', last_modified:'Today at 2 AM , me', size: '1 mb' },
    { id: 4, name: 'Beryllium', owner: 'me', last_modified:'Today at 2 AM , me', size: '1 mb' },
    { id: 5, name: 'Boron', owner: 'me', last_modified:'Today at 2 AM , me', size: '5 mb ' },
    { id: 6, name: 'Carbon', owner: 'me', last_modified:'Today at 2 AM , me', size: '15 mb' },
    { id: 7, name: 'Nitrogen', owner: 'me', last_modified:'Today at 2 AM , me', size: '18 mb' },
    { id: 8, name: 'Oxygen', owner: 'me', last_modified:'Today at 2 AM , me', size: '12 mb ' },
    { id: 9, name: 'Fluorine', owner: 'me', last_modified:'Today at 2 AM , me', size: '51 mb ' },
    { id: 10, name: 'Neon', owner: 'me', last_modified:'Today at 2 AM , me', size: '21 mb' },
    { id: 11, name: 'Sodium', owner: 'me', last_modified:'Today at 2 AM , me', size: '13 mb' },
    { id: 12, name: 'Magnesium', owner: 'me', last_modified:'Today at 2 AM , me', size: '122 mb' },
    { id: 13, name: 'Aluminum', owner: 'me', last_modified:'Today at 2 AM , me', size: '11 mb' },
    { id: 14, name: 'Silicon', owner: 'me', last_modified:'Today at 2 AM , me', size: '14 mb' },
    { id: 15, name: 'Phosphorus', owner: 'me', last_modified:'Today at 2 AM , me', size: '51 mb' },
    { id: 16, name: 'Sulfur', owner: 'me', last_modified:'Today at 2 AM , me', size: '15 mb ' },
    { id: 17, name: 'Chlorine', owner: 'me', last_modified:'Today at 2 AM , me', size: '21 mb' },
    { id: 18, name: 'Argon', owner: 'me', last_modified:'Today at 2 AM , me', size: '155 mb' },
    { id: 19, name: 'Potassium', owner: 'me', last_modified:'Today at 2 AM , me', size: '156 mb' },
    { id: 20, name: 'Calcium', owner: 'me', last_modified:'Today at 2 AM , me', size: '19 mb' },
];
var initialState: IAppState = {
    selectedFileId: 0,
    infoPanel: false,
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

function toggleInfoPanel(state, action): IAppState {
    return Object.assign({}, state, {
        infoPanel: !state.infoPanel
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
        case TOGGLE_INFO_PANEL:
            return toggleInfoPanel(state, action);
        default:
            return state;
    }
}