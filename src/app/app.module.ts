import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { PostsService } from "./services/posts.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { FilterPipe } from "./pipes/filter.pipe";
@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
  exports: [FilterPipe]
})
export class AppModule {}
