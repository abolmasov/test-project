import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { PostsService } from "./services/posts.service";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  posts: any[];
  modalRef: BsModalRef;
  postContent: any;
  searchString: string;
  constructor(
    private postsService: PostsService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    interval(1e4)
      .pipe(
        startWith(0),
        switchMap(() => this.postsService.getPosts())
      )
      .subscribe(res => (this.posts = res.hits));
  }

  openModal(template: TemplateRef<any>, postContent) {
    this.postContent = postContent;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }
}
