import {Byte} from "@angular/compiler/src/util";

export class Photo {
  get fileContent(): Byte[] {
    return this._fileContent;
  }

  set fileContent(value: Byte[]) {
    this._fileContent = value;
  }

  set keyName(value: String) {
    this._keyName = value;
  }



  get keyName(): String {
    return this._keyName;
  }


  private _keyName: String;
  private _fileContent: Byte[];

  constructor(fileName: String, fileContent: Byte[]) {
    this._keyName = fileName;
    this._fileContent = fileContent;
  }
}
