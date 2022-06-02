import {Byte} from "@angular/compiler/src/util";

export class ImageDto {
  get content(): number[] {
    return this._content;
  }

  set content(value: Byte[]) {
    this._content = value;
  }

  get keyName(): string {
    return this._keyName;
  }

  set keyName(value: string) {
    this._keyName = value;
  }

  private _keyName: string;
  private _content: Byte[];

  constructor(keyName: string, content: number[]) {
    this._keyName = keyName;
    this._content = content;
  }
}
