declare const InfoWraper: import("vue").DefineComponent<{
    [x: number]: string;
} & {
    [Symbol.iterator]?: IterableIterator<string> | undefined;
    [Symbol.unscopables]?: {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    } | undefined;
    map?: (<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | undefined;
    filter?: {
        <S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): string[];
    } | undefined;
    length?: number | undefined;
    toString?: string | undefined;
    toLocaleString?: string | undefined;
    concat?: string[] | undefined;
    join?: string | undefined;
    slice?: string[] | undefined;
    indexOf?: ((searchElement: string, fromIndex?: number | undefined) => number) | undefined;
    lastIndexOf?: ((searchElement: string, fromIndex?: number | undefined) => number) | undefined;
    every?: {
        <S_1 extends string>(predicate: (value: string, index: number, array: string[]) => value is S_1, thisArg?: any): this is S_1[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): boolean;
    } | undefined;
    some?: ((predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any) => boolean) | undefined;
    forEach?: ((callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any) => void) | undefined;
    reduce?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: string[]) => U_1, initialValue: U_1): U_1;
    } | undefined;
    reduceRight?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: string[]) => U_2, initialValue: U_2): U_2;
    } | undefined;
    find?: {
        <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: string[]) => value is S_2, thisArg?: any): S_2 | undefined;
        (predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): string | undefined;
    } | undefined;
    findIndex?: ((predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any) => number) | undefined;
    entries?: IterableIterator<[number, string]> | undefined;
    keys?: IterableIterator<number> | undefined;
    values?: IterableIterator<string> | undefined;
    includes?: ((searchElement: string, fromIndex?: number | undefined) => boolean) | undefined;
    flatMap?: (<U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) | undefined;
    flat?: unknown[] | undefined;
    at?: ((index: number) => string | undefined) | undefined;
    pop?: string | undefined;
    push?: number | undefined;
    reverse?: string[] | undefined;
    shift?: string | undefined;
    sort?: string[] | undefined;
    splice?: {
        (start: number, deleteCount?: number | undefined): string[];
        (start: number, deleteCount: number, ...items: string[]): string[];
    } | undefined;
    unshift?: number | undefined;
    fill?: ((value: string, start?: number | undefined, end?: number | undefined) => string[]) | undefined;
    copyWithin?: ((target: number, start: number, end?: number | undefined) => string[]) | undefined;
} & import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: number]: string;
} & {
    [Symbol.iterator]?: IterableIterator<string> | undefined;
    [Symbol.unscopables]?: {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    } | undefined;
    map?: (<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | undefined;
    filter?: {
        <S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): string[];
    } | undefined;
    length?: number | undefined;
    toString?: string | undefined;
    toLocaleString?: string | undefined;
    concat?: string[] | undefined;
    join?: string | undefined;
    slice?: string[] | undefined;
    indexOf?: ((searchElement: string, fromIndex?: number | undefined) => number) | undefined;
    lastIndexOf?: ((searchElement: string, fromIndex?: number | undefined) => number) | undefined;
    every?: {
        <S_1 extends string>(predicate: (value: string, index: number, array: string[]) => value is S_1, thisArg?: any): this is S_1[];
        (predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): boolean;
    } | undefined;
    some?: ((predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any) => boolean) | undefined;
    forEach?: ((callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any) => void) | undefined;
    reduce?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: string[]) => U_1, initialValue: U_1): U_1;
    } | undefined;
    reduceRight?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: string[]) => U_2, initialValue: U_2): U_2;
    } | undefined;
    find?: {
        <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: string[]) => value is S_2, thisArg?: any): S_2 | undefined;
        (predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): string | undefined;
    } | undefined;
    findIndex?: ((predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any) => number) | undefined;
    entries?: IterableIterator<[number, string]> | undefined;
    keys?: IterableIterator<number> | undefined;
    values?: IterableIterator<string> | undefined;
    includes?: ((searchElement: string, fromIndex?: number | undefined) => boolean) | undefined;
    flatMap?: (<U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) | undefined;
    flat?: unknown[] | undefined;
    at?: ((index: number) => string | undefined) | undefined;
    pop?: string | undefined;
    push?: number | undefined;
    reverse?: string[] | undefined;
    shift?: string | undefined;
    sort?: string[] | undefined;
    splice?: {
        (start: number, deleteCount?: number | undefined): string[];
        (start: number, deleteCount: number, ...items: string[]): string[];
    } | undefined;
    unshift?: number | undefined;
    fill?: ((value: string, start?: number | undefined, end?: number | undefined) => string[]) | undefined;
    copyWithin?: ((target: number, start: number, end?: number | undefined) => string[]) | undefined;
} & import("vue").HTMLAttributes>, {}>;
declare const SettingDropdown: import("vue").DefineComponent<import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").HTMLAttributes>, {
    class?: any;
    inlist?: any;
}>;
declare const NestedDropdown: import("vue").DefineComponent<import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").HTMLAttributes>, {
    class?: any;
    inlist?: any;
}>;
declare const UserDropDown: import("vue").DefineComponent<import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").HTMLAttributes>, {
    class?: any;
    inlist?: any;
}>;
declare const NinjadashTopDropdown: import("vue").DefineComponent<import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").HTMLAttributes>, {
    class?: any;
    inlist?: any;
}>;
declare const NavAuth: import("vue").DefineComponent<import("vue").HTMLAttributes, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").HTMLAttributes>, {
    class?: any;
    inlist?: any;
}>;
export { InfoWraper, SettingDropdown, NestedDropdown, UserDropDown, NinjadashTopDropdown, NavAuth };
