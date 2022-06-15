import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageDto} from "../model/image-dto";
import {S3UploadResult} from "../model/s3-upload-result";

@Injectable({
  providedIn: 'root',
})
export class PhotoCRUDService {
  private UPLOAD_PHOTO_URI = "object/upload/";
  private OBJECT_URI = "object";
  private BASE_SERVER_URI = "http://localhost:8080/";


  constructor(private httpClient: HttpClient) {
  }

  getPhotoContent(fileName: String): Observable<ImageDto> {
    return this.httpClient.get<ImageDto>(this.BASE_SERVER_URI + this.OBJECT_URI + "/?object-name=" + fileName);
  }

  getPhotos(): Observable<ImageDto[]> {
    return this.httpClient.get<ImageDto[]>(this.BASE_SERVER_URI + this.OBJECT_URI + "/list");
  }

  uploadPhoto(file: File): Observable<S3UploadResult> {
    const uploadImageData = new FormData();
    uploadImageData.append('file', file);
    return this.httpClient.post<S3UploadResult>(this.BASE_SERVER_URI + this.UPLOAD_PHOTO_URI, uploadImageData);
  }

  deletePhoto(fileName: String): Observable<any> {
    return this.httpClient.delete(this.BASE_SERVER_URI + this.OBJECT_URI + "/" + encodeURI(fileName.toString()), {responseType: 'text'});
  }


}
