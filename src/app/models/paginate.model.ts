
  export interface Datum {
    id: number;
    nombres: string;
    apellidos: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_nacimiento: string;
    direccion: string;
    celular: string;
  }

  export interface Links {
    first: string;
    last: string;
    prev?: any;
    next?: any;
  }

  export interface Meta {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    current_page: number;
    from: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    last_page: number;
    path: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    per_page: number;
    to: number;
    total: number;
  }

  export interface Paginate {
    data: Datum[];
    message: string;
    success: boolean;
    links: Links;
    meta: Meta;
  }

