import { FileInfo } from '../model/file-info';


export interface IAppState {
    selectedFileId: number;
    files: FileInfo[];
}