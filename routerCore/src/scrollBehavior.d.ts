import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from './types';
export declare type ScrollPositionCoordinates = {
    /**
     * x position. 0 if not provided
     */
    x?: number;
    /**
     * y position. 0 if not provided
     */
    y?: number;
};
export interface ScrollPositionElement {
    /**
     * A simple _id_ selector with a leading `#` or a valid CSS selector **not starting** with a `#`.
     * @example
     * Here are a few examples:
     *
     * - `.title`
     * - `.content:first-child`
     * - `#marker`
     * - `#marker~with~symbols`
     * - `#marker.with.dot`: selects `id="marker.with.dot"`, not `class="with dot" id="marker"`
     *
     */
    selector: string;
    /**
     * Relative offset to the `selector` in {@link ScrollPositionCoordinates}
     */
    offset?: ScrollPositionCoordinates;
}
export declare type ScrollPosition = ScrollPositionCoordinates | ScrollPositionElement;
declare type Awaitable<T> = T | PromiseLike<T>;
export interface ScrollBehaviorHandler<T> {
    (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: T | void): Awaitable<ScrollPosition | false | void>;
}
export declare const computeScrollPosition: () => Required<ScrollPositionCoordinates>;
export declare function scrollToPosition(position: ScrollPosition): void;
export declare function getScrollKey(path: string, delta: number): string;
export declare const scrollPositions: Map<string, Required<ScrollPositionCoordinates>>;
export declare function saveScrollPosition(key: string, scrollPosition: Required<ScrollPositionCoordinates>): void;
export declare function getSavedScrollPosition(key: string): Required<ScrollPositionCoordinates> | undefined;
export {};
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
//# sourceMappingURL=scrollBehavior.d.ts.map