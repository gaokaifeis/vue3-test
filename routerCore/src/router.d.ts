import { RouteLocationNormalized, RouteRecordRaw, RouteLocationRaw, PostNavigationGuard, RouteLocationNormalizedLoaded, RouteLocation, RouteRecordName, NavigationGuardWithThis } from './types';
import { RouterHistory } from './history/common';
import { ScrollPositionCoordinates, ScrollPosition } from './scrollBehavior';
import { PathParserOptions } from './matcher';
import { NavigationFailure } from './errors';
import { parseQuery as originalParseQuery, stringifyQuery as originalStringifyQuery } from './query';
import { Ref, App } from 'vue';
import { RouteRecord } from './matcher/types';
/**
 * Internal type to define an ErrorHandler
 * @internal
 */
export declare type ErrorHandler = (error: any) => any;
declare type Awaitable<T> = T | Promise<T>;
export interface ScrollBehavior {
    (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: Required<ScrollPositionCoordinates> | null): Awaitable<ScrollPosition | false | void>;
}
export interface RouterOptions extends PathParserOptions {
    /**
     * History implementation used by the router. Most web applications should use
     * `createWebHistory` but it requires the server to be properly configured.
     * You can also use a _hash_ based history with `createWebHashHistory` that
     * does not require any configuration on the server but isn't handled at all
     * by search engines and does poorly on SEO.
     *
     * @example
     * ```js
     * createRouter({
     *   history: createWebHistory(),
     *   // other options...
     * })
     * ```
     */
    history: RouterHistory;
    /**
     * Initial list of routes that should be added to the router.
     */
    routes: RouteRecordRaw[];
    /**
     * Function to control scrolling when navigating between pages.
     */
    scrollBehavior?: ScrollBehavior;
    /**
     * Custom implementation to parse a query.
     *
     * @example
     * Let's say you want to use the package {@link https://github.com/ljharb/qs | `qs`}
     * to parse queries, you would need to provide both `parseQuery` and
     * {@link RouterOptions.stringifyQuery | `stringifyQuery`}:
     * ```js
     * import qs from 'qs'
     *
     * createRouter({
     *   // other options...
     *   parse: qs.parse,
     *   stringifyQuery: qs.stringify,
     * })
     * ```
     */
    parseQuery?: typeof originalParseQuery;
    /**
     * {@link RouterOptions.parseQuery | `parseQuery`} counterpart to handle query parsing.
     */
    stringifyQuery?: typeof originalStringifyQuery;
    /**
     * Default class applied to active {@link RouterLink}. If none is provided,
     * `router-link-active` will be applied.
     */
    linkActiveClass?: string;
    /**
     * Default class applied to exact active {@link RouterLink}. If none is provided,
     * `router-link-exact-active` will be applied.
     */
    linkExactActiveClass?: string;
}
export interface Router {
    readonly history: RouterHistory;
    readonly currentRoute: Ref<RouteLocationNormalizedLoaded>;
    readonly options: RouterOptions;
    addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void;
    addRoute(route: RouteRecordRaw): () => void;
    removeRoute(name: RouteRecordName): void;
    hasRoute(name: RouteRecordName): boolean;
    getRoutes(): RouteRecord[];
    resolve(to: RouteLocationRaw): RouteLocation & {
        href: string;
    };
    push(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>;
    replace(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>;
    back(): Promise<NavigationFailure | void | undefined>;
    forward(): Promise<NavigationFailure | void | undefined>;
    go(delta: number): Promise<NavigationFailure | void | undefined>;
    beforeEach(guard: NavigationGuardWithThis<undefined>): () => void;
    beforeResolve(guard: NavigationGuardWithThis<undefined>): () => void;
    afterEach(guard: PostNavigationGuard): () => void;
    onError(handler: ErrorHandler): () => void;
    isReady(): Promise<void>;
    install(app: App): void;
}
/**
 * Create a Router instance that can be used on a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
export declare function createRouter(options: RouterOptions): Router;
export {};
//# sourceMappingURL=router.d.ts.map