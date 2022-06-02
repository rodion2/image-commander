import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageDto} from "../model/image-dto";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-image-searcher-component',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.less']
})
export class ImageSearcherComponent implements OnInit {
  private BASE_SERVER_URI = "http://localhost:8080/";
  private SEARCH_URI = "search/";
  private GET_IMAGES_URI = "images"

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  @Input() photos: ImageDto[];
  // @ts-ignore
  @Input() keyWord: String;
  // @ts-ignore
  @Input() searching: boolean;


  ngOnInit(): void {
  }

  public searchPhotos(keyWord: String) {
    this.searching = true;
    if (this.photos) {
      this.photos = [];
    }
    this.httpClient.get(this.BASE_SERVER_URI + this.SEARCH_URI + this.GET_IMAGES_URI + "/?object-name=" + keyWord)
      .subscribe(result => {
        this.photos = result as ImageDto[];
        this.searching = false;
      });
  }

}
