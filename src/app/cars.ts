export interface COLOR {
    code: string;
    description: string;
    price: number;
}
export interface CAR {
    code: string;
    description: string;
    colors: COLOR[];
}

export interface CONFIG {
    id: number,
    description: string,
    range: number
    speed: number
    price: number,
}

export interface OPTION {
    configs: CONFIG[],
    towHitch: boolean,
    yoke: boolean,
}

export type Summary = {
    code?: string,
    description?: string
    color?: COLOR
    config?: CONFIG
    towHitch?: boolean
    yoke?: boolean
}



export interface State {
    codeModelSelected: string;
    codeColorSelected: string;
    // isCheckedYoke: boolean;
    // isCheckedTow: boolean;
}