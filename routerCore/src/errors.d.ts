import { MatcherLocationRaw, MatcherLocation, RouteLocationRaw, RouteLocationNormalized } from './types';
export declare const enum ErrorTypes {
    MATCHER_NOT_FOUND = 0,
    NAVIGATION_GUARD_REDIRECT = 1,
    NAVIGATION_ABORTED = 2,
    NAVIGATION_CANCELLED = 3,
    NAVIGATION_DUPLICATED = 4
}
interface RouterErrorBase extends Error {
    type: ErrorTypes;
}
export interface MatcherError extends RouterErrorBase {
    type: ErrorTypes.MATCHER_NOT_FOUND;
    location: MatcherLocationRaw;
    currentLocation?: MatcherLocation;
}
export declare enum NavigationFailureType {
    cancelled = 3,
    aborted = 2,
    duplicated = 4
}
export interface NavigationFailure extends RouterErrorBase {
    type: ErrorTypes.NAVIGATION_CANCELLED | ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED;
    from: RouteLocationNormalized;
    to: RouteLocationNormalized;
}
export interface NavigationRedirectError extends Omit<NavigationFailure, 'to' | 'type'> {
    type: ErrorTypes.NAVIGATION_GUARD_REDIRECT;
    to: RouteLocationRaw;
}
declare type RouterError = NavigationFailure | NavigationRedirectError | MatcherError;
export declare function createRouterError<E extends RouterError>(type: E['type'], params: Omit<E, 'type' | keyof Error>): E;
export {};
//# sourceMappingURL=errors.d.ts.map