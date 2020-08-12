import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MandarineWeb } from '../../../../mandarineWebsite.ns';
import { CommonsUtils } from '../../../../utils/commons';

interface GithubTreeItem {
  path: string;
  type: "tree" | "blob";
  url: string;
}

export interface PostMetadata {
  postPath: string;
  title: string;
  sanitizedTitle: string;
  description: string;
  author: number;
  date: string;
}

export interface BlogUser {
  id: number;
  name: string;
}

@Injectable()
export class BlogService {

  private readonly GITHUB_API_LINK = "https://api.github.com/repos/mandarineorg/mandarineorg_web/git/trees/master?recursive=1";

  constructor(private readonly httpClient: HttpClient) {}

  public async getPosts() {
    const treeItems = (await (this.httpClient.get(this.GITHUB_API_LINK).toPromise()))["tree"];
    // @ts-ignore
    const apiPosts: Array<GithubTreeItem> = treeItems.filter((item: GithubTreeItem) => item.path.startsWith("blog/posts") && item.path !== "blog/posts" && item.type === "tree");

    return await (Promise.all(apiPosts.map(async (post) => {
      const postPath = `${post.path}`;
      const postMetadataUrl =  treeItems.find((item) => item.path === `${postPath}/blog.json`);
      const requestMetadata = await (this.httpClient.get(postMetadataUrl.url).toPromise());
      const parseMetadata = atob(requestMetadata["content"]);
      const metadata = JSON.parse(parseMetadata);
      metadata.postPath = postPath;
      metadata.sanitizedTitle = CommonsUtils.sanitizeTitles(metadata.title);
      return metadata;
    })));
  }

  public async getUser(uId: number) {
    // @ts-ignore
    const users: Array<BlogUser> = (await (this.httpClient.get(`${MandarineWeb.MANDARINE_WEBSITE_REPO_RAW}/blog/users.json`)).toPromise());
    return users.find((user) => user.id === uId);
  }


}
