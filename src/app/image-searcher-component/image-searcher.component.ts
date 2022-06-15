import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageDto} from "../model/image-dto";
import {AppConstants} from "../constants/app-constants";

@Component({
  selector: 'app-image-searcher-component',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.less']
})
export class ImageSearcherComponent implements OnInit {


  constructor(private httpClient: HttpClient) {
  }

  @Input() photos: ImageDto[] = [];
  @Input() keyWord: String = "";
  @Input() searching: boolean = false;
  @Input() emptyPhoto: boolean = false;


  ngOnInit(): void {
  }

  public searchPhotos(keyWord: String) {
    this.searching = true;
    this.emptyPhoto = false;
    if (this.photos) {
      this.photos = [];
    }
    this.httpClient.get(AppConstants.BASE_SERVER_URI + AppConstants.SEARCH_URI + AppConstants.GET_IMAGES_URI + "/?object-name=" + keyWord)
      .subscribe(result => {
        this.photos = result as ImageDto[];
        this.photos.forEach(photo => {
          photo.content = AppConstants.BASE_64_PREFIX + photo.content;
        });
        this.emptyPhoto = this.photos.length === 0;
        this.searching = false;
      });
  }

}
