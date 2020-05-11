import { InjectionKey, ComputedRef } from 'vue';
import { RouteLocationNormalizedLoaded } from './types';
import { Router } from './router';
import { RouteRecordNormalized } from './matcher/types';
export declare const hasSymbol: boolean;
export declare const PolySymbol: (name: string) => string | symbol;
export declare const matchedRouteKey: InjectionKey<ComputedRef<RouteRecordNormalized | undefined>>;
export declare const viewDepthKey: InjectionKey<number>;
export declare const routerKey: InjectionKey<Router>;
export declare const routeLocationKey: InjectionKey<RouteLocationNormalizedLoaded>;
//# sourceMappingURL=injectionSymbols.d.ts.map