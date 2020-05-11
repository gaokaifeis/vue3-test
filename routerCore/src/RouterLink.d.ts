import { Component } from 'vue';
import { RouteLocationRaw, VueUseOptions, RouteLocation } from './types';
interface LinkProps {
    to: RouteLocationRaw;
    replace?: boolean;
}
declare type UseLinkOptions = VueUseOptions<LinkProps>;
export declare function useLink(props: UseLinkOptions): {
    route: import("vue").ComputedRef<RouteLocation & {
        href: string;
    }>;
    href: import("vue").ComputedRef<string>;
    isActive: import("vue").ComputedRef<boolean>;
    isExactActive: import("vue").ComputedRef<boolean>;
    navigate: (e?: MouseEvent) => Promise<any>;
};
export declare const RouterLink: Component;
export {};
//# sourceMappingURL=RouterLink.d.ts.map