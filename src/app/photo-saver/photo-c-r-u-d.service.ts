import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PhotoCRUDService {
  private IDENTITY_POOL_ID = "eu-central-1:644d5f7e-0a97-41dc-bbc4-799686180614";
  private REGION = "eu-central-1";
  private bucketName = "homeassigmentphotosbucket";
  private UPLOAD_PHOTO_URI = "object/upload/";
  private OBJECT_URI = "object";
  private BASE_SERVER_URI = "http://localhost:8080/";


  constructor(private httpClient: HttpClient) {
  }

  getPhotoContent(fileName: String): Observable<Object> {
    return this.httpClient.get(this.BASE_SERVER_URI + this.OBJECT_URI + "/?object-key=" + fileName);
  }

  getPhotos(): Observable<Object> {
    return this.httpClient.get(this.BASE_SERVER_URI + this.OBJECT_URI + "/list");
  }

  uploadPhoto(file: File): any {
    const uploadImageData = new FormData();
    uploadImageData.append('file', file);
    return this.httpClient.post(this.BASE_SERVER_URI + this.UPLOAD_PHOTO_URI, uploadImageData);
  }

  deletePhoto(fileName: String): Observable<any> {
    return this.httpClient.delete(this.BASE_SERVER_URI + this.OBJECT_URI + "/" + encodeURI(fileName.toString()), {responseType: 'text'});
  }


}
