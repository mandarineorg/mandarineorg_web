import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MandarineWeb } from '../../../../mandarineWebsite.ns';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { CommonsUtils } from '../../../../utils/commons';

@Component({
  selector: 'mandarine-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit, AfterViewInit {

  public data: {
    product: string,
    requestedDocs: string,
    docVersion: string,
    requestedDocMetadata: MandarineWeb.DocRouteMetadata,
  } = {
    product: undefined,
    requestedDocs: undefined,
    docVersion: undefined,
    requestedDocMetadata: undefined,
  };

  public core = {
    menuItems: undefined,
    documentationRoutes: undefined,
    loaded: false
  };

  @ViewChild('toggleElement')
  public toggleElement: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private markdownService: MarkdownService, private httpClient: HttpClient) {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = CommonsUtils.sanitizeTitles(text);
      return `<h${level} class="${level == 1 ? 'h1-doc-markdown' : ''}">
              <a class="anchor" href="#${escapedText}">
                <a class="anchor" href="${location.href}#${escapedText}">
                    <span class="header-link ${level == 1 ? 'show-el' : 'hide-el'}">#</span>
                </a>
              </a>
              ${text}
              </h${level}>`
    };

    this.markdownService.renderer.paragraph = (text: string) => {
      return `<p class="p-doc-markdown">${text}</p>`
    }

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: object) => this.handleRouteInitialization(params));
  }

  async ngAfterViewInit() {
  }

  async processGithubFiles() {
    try {
      if (!this.core.documentationRoutes) {
        this.core.documentationRoutes = await this.httpClient.get(`${this.getGithubDocsUrl()}/endpoints.json`).toPromise();
      }

      this.data.requestedDocMetadata = this.core.documentationRoutes.find((item) => item.url === this.data.requestedDocs);
      if (!this.data.requestedDocMetadata) {
        this.handleNonValidRoute();
      }

      if (!this.core.menuItems) {
        this.core.menuItems = await this.httpClient.get(`${MandarineWeb.REPOSITORIES_RAW_CONTENT[this.data.product]}/${this.getVersion()}/docs/web/${this.data.product}/menu-items.json`).toPromise();
      }

      this.core.loaded = true;
    } catch (e) {
      this.handleNonValidRoute();
    }
  }

  toggleClass(event: any, cssClass: string) {
    event.preventDefault();
    const hasClass = this.toggleElement.nativeElement.classList.contains(cssClass);
    console.log(this.toggleElement);
    if(hasClass) {
      this.toggleElement.nativeElement.classList.remove(cssClass);
    } else {
      this.toggleElement.nativeElement.classList.add(cssClass);
    }
  }

  async handleRouteInitialization(params: object) {
      this.data.product = params['product'];

      if(!this.data.product || !Object.values(MandarineWeb.Products).includes(<MandarineWeb.Products> this.data.product)) {
        this.handleNonValidRoute();
        return;
      }

      this.data.requestedDocs = params['doc'];
      this.data.docVersion = params['version'];

      await this.processGithubFiles();
  }

  public getDocUrl() {
    return `${this.getGithubDocsUrl()}/${this.data.requestedDocMetadata.document}`;
  }

  public handleNonValidRoute() {
    this.router.navigate(['']);
  }

  public getMenuItems(): Array<MandarineWeb.DocRoutesMenuItem> {
    return this.core.menuItems;
  }

  public toggleMenuItems($event: any, item: MandarineWeb.DocRoutesMenuItem, parentItem: MandarineWeb.DocRoutesMenuItem) {
    let toggleableId = this.getToggeableId(item, parentItem, 'toggeable');
    let toggleIdArrow = this.getToggeableId(item, parentItem, 'toggle-arrow');
    let isHidden = window.document.getElementById(toggleableId).classList.contains('hide-el');
    if(isHidden) {
      window.document.getElementById(toggleableId).classList.remove('hide-el');
      window.document.getElementById(toggleableId).classList.add('show-el');

      window.document.getElementById(toggleIdArrow).classList.remove('down');
      window.document.getElementById(toggleIdArrow).classList.add('up');
    } else {
      window.document.getElementById(toggleableId).classList.remove('show-el');
      window.document.getElementById(toggleableId).classList.add('hide-el');

      window.document.getElementById(toggleIdArrow).classList.remove('up');
      window.document.getElementById(toggleIdArrow).classList.add('down');
    }
  }

  public getVersion() {
    return (this.data.docVersion) ? this.data.docVersion : "master";
  }

  public getGithubDocsUrl() {
    return `${MandarineWeb.REPOSITORIES_RAW_CONTENT[this.data.product]}/${this.getVersion()}/docs/web/${this.data.product}`;
  }

  public getToggeableId(item, parent, type) {
    if(parent) {
      return `${CommonsUtils.sanitizeTitles(item.title)}-${CommonsUtils.sanitizeTitles(parent.title)}-${type}`;
    } else {
      return `${CommonsUtils.sanitizeTitles(item.title)}-${type}`;
    }
  }
}
