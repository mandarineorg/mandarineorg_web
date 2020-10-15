import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogService, BlogUser, PostMetadata } from './blog.service';
import { ActivatedRoute } from '@angular/router';
import { CommonsUtils } from '../../../../utils/commons';
import { MandarineWeb } from '../../../../mandarineWebsite.ns';
import { MetaService } from '../../../MetaService';

interface Post {
  title: string;
  author: number;
  authorObject: BlogUser;
  date: string;
  postResourceUrl: string;
}

@Component({
  selector: 'mandarine-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [
    BlogService
  ]
})
export class BlogComponent implements OnInit {

  public isPost: boolean = false;
  public loadingStatus: number = 0;
  public post: Post = undefined;
  public posts: Array<PostMetadata> = new Array<PostMetadata>();
  private readonly GITHUB_RAW_API_URL = MandarineWeb.MANDARINE_WEBSITE_REPO_RAW;

  constructor(private readonly blogsService: BlogService, private route: ActivatedRoute, private meta: MetaService) {
  }

  public ngOnInit(): void {
    (async () => {
      await this.loadPosts();
      this.route.params.subscribe((params: object) => this.handleRouteInitialization(params));
    })();
  }

  public async handleRouteInitialization(params: object) {
    if(params["postName"]) {

      const postName = params["postName"];
      const post = this.posts.find((post) => post.sanitizedTitle === CommonsUtils.sanitizeTitles(postName));
      if(post)  {
        this.post = {
            title: post.title,
            author: post.author,
            date: post.date,
            postResourceUrl: this.getPostMarkdownUrl(post.postPath),
            authorObject: undefined
        };

        await this.loadUser();
        this.isPost = true;

        this.meta.updateMetaInfo(post.description, this.post.authorObject.name, "mandarine,typescript,framework,deno");
        this.meta.updateTitle(post.title);
      }
    }
    this.loadingStatus = 1;
  }

  public getPostMarkdownUrl(blogPath) {
    return `${this.GITHUB_RAW_API_URL}/${blogPath}/blog.md`
  }

  public async loadUser() {
    this.post.authorObject = await (this.blogsService.getUser(this.post.author));
  }

  public async loadPosts() {
      this.posts = await this.blogsService.getPosts();
      this.posts = this.posts.sort((a: PostMetadata,b: PostMetadata)=> b.date.localeCompare(a.date));
  }
}
