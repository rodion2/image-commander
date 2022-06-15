import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageDto} from "../model/image-dto";
import {S3UploadResult} from "../model/s3-upload-result";
import {AppConstants} from "../constants/app-constants";

@Injectable({
  providedIn: 'root',
})
export class PhotoCRUDService {


  constructor(private httpClient: HttpClient) {
  }

  getPhotoContent(fileName: String): Observable<ImageDto> {
    return this.httpClient.get<ImageDto>(AppConstants.BASE_SERVER_URI + AppConstants.OBJECT_URI + "/?object-name=" + fileName);
  }

  getPhotos(): Observable<ImageDto[]> {
    return this.httpClient.get<ImageDto[]>(AppConstants.BASE_SERVER_URI + AppConstants.OBJECT_URI + "/list");
  }

  uploadPhoto(file: File): Observable<S3UploadResult> {
    const uploadImageData = new FormData();
    uploadImageData.append('file', file);
    return this.httpClient.post<S3UploadResult>(AppConstants.BASE_SERVER_URI + AppConstants.UPLOAD_PHOTO_URI, uploadImageData);
  }

  deletePhoto(fileName: String): Observable<any> {
    return this.httpClient.delete(AppConstants.BASE_SERVER_URI + AppConstants.OBJECT_URI + "/" + encodeURI(fileName.toString()), {responseType: 'text'});
  }


}
