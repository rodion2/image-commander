import {Component, Input, OnInit} from '@angular/core';
import {PhotoCRUDService} from "../photo-saver/photo-c-r-u-d.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {Photo} from "../model/photo";

@Component({
  selector: 'app-image-uploader-component',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.less']
})
export class ImageUploaderComponent implements OnInit {
  @Input() photos: Photo[] = [];
  @Input() file?: File;

  constructor(private photoCRUDService: PhotoCRUDService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.photoCRUDService.getPhotos().subscribe(result => {
      // @ts-ignore
      result.forEach(element => this.photos.push(new Photo(element.keyName, 'data:image/jpeg;base64,' + element.content)));
    });
  }

  onFileSelected($event: Event) {
    // @ts-ignore
    this.file = $event.target?.files[0];
  }

  uploadFile(file?: File) {
    if (!file) {
      this._snackBar.open("Please select the file.", "Close.");
    } else {
      this.photoCRUDService.uploadPhoto(file).subscribe(photo => {
        var fileContent;
        this.photoCRUDService.getPhotoContent(photo.key).subscribe(result => {
          // @ts-ignore
          this.photos.push(new Photo(photo.key, 'data:image/jpeg;base64,' + result.content));
          this._snackBar.open("Image has been uploaded.", "Done.");
        });
      });
    }
  }

  deleteFile(photo: Photo) {
    this.photoCRUDService.deletePhoto(photo.keyName).subscribe(result => {
      this.photos = this.photos.filter(originPhoto => {
        return photo.keyName !== originPhoto.keyName;
      });
      this._snackBar.open("Image has been deleted.", "Done.");
    });
  }
}
