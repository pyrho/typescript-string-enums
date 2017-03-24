export declare function Enum<V extends string>(...values: V[]): {
    [K in V]: K;
};
export declare function Enum<T extends {
    [_: string]: V;
}, V extends string>(definition: T): T;
export declare type Enum<T extends Object> = T[keyof T];
export declare namespace Enum {
    function keys<T extends {
        [_: string]: any;
    }>(e: T): Array<keyof T>;
    function values<T extends {
        [_: string]: any;
    }>(e: T): Array<Enum<T>>;
}
