export class S3UploadResult {
  private _bucketName: string;
  private _key: string;
  private _eTag: string;
  private _versionId: string;

  constructor(bucketName: string, key: string, eTag: string, versionId: string) {
    this._bucketName = bucketName;
    this._key = key;
    this._eTag = eTag;
    this._versionId = versionId;
  }

  get versionId(): string {
    return this._versionId;
  }

  set versionId(value: string) {
    this._versionId = value;
  }
  get eTag(): string {
    return this._eTag;
  }

  set eTag(value: string) {
    this._eTag = value;
  }
  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }
  get bucketName(): string {
    return this._bucketName;
  }

  set bucketName(value: string) {
    this._bucketName = value;
  }
}
