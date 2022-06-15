import {Component, Input, OnInit} from '@angular/core';
import {PhotoCRUDService} from "../photo-saver/photo-c-r-u-d.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {Photo} from "../model/photo";
import {AppConstants} from "../constants/app-constants";

@Component({
  selector: 'app-image-uploader-component',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.less']
})
export class ImageUploaderComponent implements OnInit {
  @Input() photos: Photo[] = [];
  @Input() file?: File;
  @Input() uploading: boolean = false;

  constructor(private photoCRUDService: PhotoCRUDService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.uploading = true;
    this.photoCRUDService.getPhotos().subscribe(result => {
      result.forEach(element => this.photos.push(new Photo(element.keyName, AppConstants.BASE_64_PREFIX + element.content)));
      this.uploading = false;
    });
  }

  onFileSelected($event: Event) {
    // @ts-ignore
    this.file = $event.target?.files[0];
  }

  uploadFile(file?: File) {
    if (!file) {
      this._snackBar.open("Please select the file.", "Close", {duration: 3000});
    } else {
      this.photoCRUDService.uploadPhoto(file).subscribe(photo => {
        this.photoCRUDService.getPhotoContent(photo.key).subscribe(result => {
          this.photos.push(new Photo(photo.key, AppConstants.BASE_64_PREFIX + result.content));
          this.file = undefined;
          this._snackBar.open("Image has been uploaded.", "Done", {duration: 3000});
        });
      });
    }
  }

  deleteFile(photo: Photo) {
    this.photoCRUDService.deletePhoto(photo.keyName).subscribe(result => {
      this.photos = this.photos.filter(originPhoto => {
        return photo.keyName !== originPhoto.keyName;
      });
      this._snackBar.open("Image has been deleted.", "Done", {duration: 3000});
    });
  }
}
