export class Photo {
  private _keyName: string;
  private _fileContent: string;

  get fileContent(): string {
    return this._fileContent;
  }

  set fileContent(value: string) {
    this._fileContent = value;
  }

  set keyName(value: string) {
    this._keyName = value;
  }


  get keyName(): string {
    return this._keyName;
  }

  constructor(fileName: string, fileContent: string) {
    this._keyName = fileName;
    this._fileContent = fileContent;
  }
}
