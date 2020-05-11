import { LocationQuery, LocationQueryRaw } from '../query';
import { PathParserOptions } from '../matcher';
import { Ref, ComputedRef, ComponentOptions } from 'vue';
import { RouteRecord, RouteRecordNormalized } from '../matcher/types';
import { HistoryState } from '../history/common';
import { NavigationFailure } from '../errors';
export declare type Lazy<T> = () => Promise<T>;
export declare type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export declare type Immutable<T> = {
    readonly [P in keyof T]: Immutable<T[P]>;
};
export declare type VueUseOptions<T> = {
    [k in keyof T]: Ref<T[k]> | T[k] | ComputedRef<T[k]>;
};
export declare type TODO = any;
export declare type RouteParamValue = string;
export declare type RouteParamValueRaw = RouteParamValue | number;
export declare type RouteParams = Record<string, RouteParamValue | RouteParamValue[]>;
export declare type RouteParamsRaw = Record<string, RouteParamValueRaw | RouteParamValueRaw[]>;
export interface RouteQueryAndHash {
    query?: LocationQueryRaw;
    hash?: string;
}
export interface LocationAsPath {
    path: string;
}
export interface LocationAsNameRaw {
    name: RouteRecordName;
    params?: RouteParamsRaw;
}
export interface LocationAsName {
    name: RouteRecordName;
    params?: RouteParams;
}
export interface LocationAsRelativeRaw {
    params?: RouteParamsRaw;
}
export interface LocationAsRelative {
    params?: RouteParams;
}
export interface RouteLocationOptions {
    /**
     * Replace the entry in the history instead of pushing a new entry
     */
    replace?: boolean;
    /**
     * Triggers the navigation even if the location is the same as the current one
     */
    force?: boolean;
    /**
     * State to save using the History API. This cannot contain any reactive values and some primitives like Symbols are forbidden. More info at TODO: link mdn
     */
    state?: HistoryState;
}
/**
 * User-level route location
 */
export declare type RouteLocationRaw = string | (RouteQueryAndHash & LocationAsPath & RouteLocationOptions) | (RouteQueryAndHash & LocationAsNameRaw & RouteLocationOptions) | (RouteQueryAndHash & LocationAsRelativeRaw & RouteLocationOptions);
export interface RouteLocationMatched extends RouteRecordNormalized {
    components: Record<string, RouteComponent>;
}
/**
 * Base properties for a normalized route location.
 *
 * @internal
 */
export interface _RouteLocationBase {
    path: string;
    fullPath: string;
    query: LocationQuery;
    hash: string;
    name: RouteRecordName | null | undefined;
    params: RouteParams;
    redirectedFrom: RouteLocation | undefined;
    meta: Record<string | number | symbol, any>;
}
/**
 * {@link RouteLocationRaw} with
 */
export interface RouteLocationNormalizedLoaded extends _RouteLocationBase {
    /**
     * Array of {@link RouteLocationMatched} containing only plain components (any
     * lazy-loaded components have been loaded and were replaced inside of the
     * `components` object) so it can be directly used to display routes. It
     * cannot contain redirect records either
     */
    matched: RouteLocationMatched[];
}
/**
 * {@link RouteLocationRaw} resolved using the matcher
 */
export interface RouteLocation extends _RouteLocationBase {
    /**
     * Array of {@link RouteRecord} containing components as they were
     * passed when adding records. It can also contain redirect records. This
     * can't be used directly
     */
    matched: RouteRecord[];
}
/**
 * Similar to {@link RouteLocation} but its
 * {@link RouteLocationNormalized.matched} cannot contain redirect records
 */
export interface RouteLocationNormalized extends _RouteLocationBase {
    /**
     * Array of {@link RouteRecordNormalized}
     */
    matched: RouteRecordNormalized[];
}
export declare type RouteComponent = ComponentOptions;
export declare type RawRouteComponent = RouteComponent | Lazy<RouteComponent>;
export declare type RouteRecordName = string | symbol;
/**
 * Common properties among all kind of {@link RouteRecordRaw}
 */
export interface _RouteRecordBase extends PathParserOptions {
    /**
     * Path of the record. Should start with `/` unless the record is the child of
     * another record.
     */
    path: string;
    /**
     * Aliases for the record. Allows defining extra paths that will behave like a
     * copy of the record. Allows having paths shorthands like `/users/:id` and
     * `/u/:id`. All `alias` and `path` values must share the same params.
     */
    alias?: string | string[];
    /**
     * Name for the route record.
     */
    name?: RouteRecordName;
    /**
     * Allow passing down params as props to the component rendered by `router-view`.
     */
    props?: boolean | Record<string, any> | ((to: RouteLocationNormalized) => Record<string, any>);
    /**
     * Before Enter guard specific to this record. Note `beforeEnter` has no
     * effect if the record has a `redirect` property.
     */
    beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[];
    /**
     * Arbitrary data attached to the record.
     */
    meta?: Record<string | number | symbol, any>;
}
export declare type RouteRecordRedirectOption = RouteLocationRaw | ((to: RouteLocation) => RouteLocationRaw);
export interface RouteRecordRedirectRaw extends _RouteRecordBase {
    redirect: RouteRecordRedirectOption;
    beforeEnter?: never;
    component?: never;
    components?: never;
}
export interface RouteRecordSingleView extends _RouteRecordBase {
    component: RawRouteComponent;
    children?: RouteRecordRaw[];
}
export interface RouteRecordMultipleViews extends _RouteRecordBase {
    components: Record<string, RawRouteComponent>;
    children?: RouteRecordRaw[];
}
export declare type RouteRecordRaw = RouteRecordSingleView | RouteRecordMultipleViews | RouteRecordRedirectRaw;
export declare const START_LOCATION_NORMALIZED: RouteLocationNormalizedLoaded;
export declare type MatcherLocationRaw = LocationAsPath | LocationAsName | LocationAsRelative;
export interface MatcherLocation extends Pick<RouteLocation, 'name' | 'path' | 'params' | 'matched' | 'meta'> {
}
export interface NavigationGuardCallback {
    (): void;
    (error: Error): void;
    (location: RouteLocationRaw): void;
    (valid: boolean): void;
    (cb: NavigationGuardNextCallback): void;
}
export declare type NavigationGuardNextCallback = (vm: any) => any;
export interface NavigationGuard {
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardCallback): any;
}
export interface NavigationGuardWithThis<T> {
    (this: T, to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardCallback): any;
}
export interface PostNavigationGuard {
    (to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void): any;
}
export * from './typeGuards';
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
//# sourceMappingURL=index.d.ts.map