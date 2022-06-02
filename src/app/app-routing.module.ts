import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageUploaderComponent} from "./image-uploader-component/image-uploader.component";
import {ImageSearcherComponent} from "./image-searcher-component/image-searcher.component";

const routes: Routes = [
  // {path: 'upload', component: ImageUploaderComponent},
  // {path: 'search', component: ImageSearcherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
