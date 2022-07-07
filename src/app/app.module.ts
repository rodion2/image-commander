import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageSearcherComponent} from './image-searcher-component/image-searcher.component';
import {ImageUploaderComponent} from "./image-uploader-component/image-uploader.component";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexModule} from "@angular/flex-layout";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoginPageComponent } from './login-page/login-page.component';
import { ImageComponent } from './image-component/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageSearcherComponent,
    LoginPageComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    FlexModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
