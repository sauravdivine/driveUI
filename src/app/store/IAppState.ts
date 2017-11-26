import { FileInfo } from '../model/file-info';
import { Command } from '../model/command';


export interface IAppState {
    selectedFileId: number;
    infoPanel:boolean;
    files: FileInfo[];
}