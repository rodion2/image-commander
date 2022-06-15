import {Byte} from "@angular/compiler/src/util";

export class ImageDto {
  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get keyName(): string {
    return this._keyName;
  }

  set keyName(value: string) {
    this._keyName = value;
  }

  private _keyName: string;
  private _content: string;

  constructor(keyName: string, content: string) {
    this._keyName = keyName;
    this._content = content;
  }
}
