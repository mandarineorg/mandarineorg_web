import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './exampleComponent/homepage.component';
import { DocsComponent } from './components/pages/docs/docs.component';


const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "docs/:version/:product/:doc",
    component: DocsComponent
  },
  {
    path: "docs/:product/:doc",
    component: DocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
