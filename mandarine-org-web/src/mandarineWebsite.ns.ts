export namespace MandarineWeb {

  export enum Products {
    Mandarine = "mandarine",
    Orange = "orange"
  }

  export type ProductType = "mandarine" | "orange";

  export interface DocRouteMetadata {
    url: string;
    document: string;
  }

  export interface DocRoutes {
    "mandarine"?: Array<DocRouteMetadata>;
    "orange"?: Array<DocRouteMetadata>;
  }

  export interface DocRoutesMenuItem {
    title: string;
    url?: string;
    children?: Array<DocRoutesMenuItem>
  }

  export interface DocRoutesMenu {
    "mandarine"?: Array<DocRoutesMenuItem>;
    "orange"?: Array<DocRoutesMenuItem>;
  }

  export const REPOSITORIES_RAW_CONTENT = {
    "mandarine": "https://raw.githubusercontent.com/mandarineorg/mandarinets",
    "orange": "https://raw.githubusercontent.com/mandarineorg/orange"
  };

  export const REPOSITORIES = {
    mandarine: "https://github.com/mandarineorg/mandarinets"
  }

  export const docVersions = ["v1.5.0", "v1.4.0", "v1.3.0", "v1.2.3", "v1.2.2"]

}
