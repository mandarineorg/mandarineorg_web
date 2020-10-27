export namespace MandarineWeb {

  export enum Products {
    Mandarine = "mandarine",
    Orange = "orange",
    PgDriver = "pg-driver"
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
    "mandarine": "https://raw.githubusercontent.com/mandarineorg/mandarinets/%version%",
    "orange": "https://raw.githubusercontent.com/mandarineorg/orange/%version%",
    "pg-driver": "https://raw.githubusercontent.com/mandarineorg/mandarinets/%version%/rust-core/database/drivers/postgres/"
  };

  export const REPOSITORIES = {
    mandarine: "https://github.com/mandarineorg/mandarinets"
  };

  export const docVersions = {
    mandarine: ["v2.1.6", "v2.1.5", "v2.1.3", "v2.1.2", "v2.1.1", "v2.1.0", "v2.0.1", "v2.0.0", "v1.5.0", "v1.4.0", "v1.3.0", "v1.2.3", "v1.2.2"],
    "pg-driver": ["v2.1.6", "v2.1.5"]
  };

  export const MANDARINE_WEBSITE_REPO_RAW = "https://raw.githubusercontent.com/mandarineorg/mandarineorg_web/master";
}
