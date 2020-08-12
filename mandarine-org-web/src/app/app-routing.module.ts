import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './exampleComponent/homepage.component';
import { DocsComponent } from './components/pages/docs/docs.component';
import { BlogComponent } from './components/pages/blog/blog.component';


const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "docs/:version/:product/:doc",
    component: DocsComponent,
    data: {
      title: "Documentation"
    }
  },
  {
    path: "docs/:product/:doc",
    component: DocsComponent,
    data: {
      title: "Documentation"
    }
  },
  {
    path: "posts",
    component: BlogComponent,
    data: {
      title: "News"
    }
  },
  {
    path: "posts/:postName",
    component: BlogComponent,
    data: {
      title: "Post"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
