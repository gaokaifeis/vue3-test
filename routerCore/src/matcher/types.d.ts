import { RouteRecordMultipleViews, NavigationGuard, _RouteRecordBase, RouteRecordRedirectRaw } from '../types';
import { ComponentPublicInstance } from 'vue';
export interface RouteRecordNormalized {
    path: RouteRecordMultipleViews['path'];
    name: RouteRecordMultipleViews['name'];
    components: RouteRecordMultipleViews['components'];
    children: Exclude<RouteRecordMultipleViews['children'], void>;
    meta: Exclude<RouteRecordMultipleViews['meta'], void>;
    props: Exclude<_RouteRecordBase['props'], void>;
    beforeEnter: RouteRecordMultipleViews['beforeEnter'];
    leaveGuards: NavigationGuard[];
    updateGuards: NavigationGuard[];
    instances: Record<string, ComponentPublicInstance | undefined | null>;
    aliasOf: RouteRecordNormalized | undefined;
}
export interface RouteRecordRedirect {
    path: RouteRecordMultipleViews['path'];
    name: RouteRecordMultipleViews['name'];
    redirect: RouteRecordRedirectRaw['redirect'];
    aliasOf: RouteRecordRedirect | undefined;
    meta: Exclude<RouteRecordMultipleViews['meta'], void>;
    components: RouteRecordMultipleViews['components'];
}
export declare type RouteRecord = RouteRecordNormalized | RouteRecordRedirect;
//# sourceMappingURL=types.d.ts.map