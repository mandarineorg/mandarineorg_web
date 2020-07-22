import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './exampleComponent/homepage.component';
import { NavbarHeader } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { DocsComponent } from './components/pages/docs/docs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarHeader,
    FooterComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
