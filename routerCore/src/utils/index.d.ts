import { RouteParams, RouteComponent, RouteParamsRaw } from '../types';
export * from './env';
export declare function isESModule(obj: any): obj is {
    default: RouteComponent;
};
export declare function applyToParams(fn: (v: string | number) => string, params: RouteParamsRaw | undefined): RouteParams;
//# sourceMappingURL=index.d.ts.map