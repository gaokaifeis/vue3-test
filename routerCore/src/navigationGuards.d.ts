import { NavigationGuard, RouteLocationNormalized, RouteLocationNormalizedLoaded } from './types';
import { ComponentPublicInstance } from 'vue';
import { RouteRecordNormalized } from './matcher/types';
/**
 * Add a navigation guard that triggers whenever the current location is
 * left. Similarly to {@link beforeRouteLeave}, it has access to the
 * component instance as `this`.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
export declare function onBeforeRouteLeave(leaveGuard: NavigationGuard): void;
/**
 * Add a navigation guard that triggers whenever the current location is
 * updated. Similarly to {@link beforeRouteUpdate}, it has access to the
 * component instance as `this`.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
export declare function onBeforeRouteUpdate(updateGuard: NavigationGuard): void;
export declare function guardToPromiseFn(guard: NavigationGuard, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, instance?: ComponentPublicInstance | undefined | null): () => Promise<void>;
declare type GuardType = 'beforeRouteEnter' | 'beforeRouteUpdate' | 'beforeRouteLeave';
export declare function extractComponentsGuards(matched: RouteRecordNormalized[], guardType: GuardType, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded): (() => Promise<void>)[];
export {};
//# sourceMappingURL=navigationGuards.d.ts.map