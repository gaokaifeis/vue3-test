import { RouteRecordRaw, MatcherLocationRaw, MatcherLocation, RouteRecordName } from '../types';
import { RouteRecordMatcher } from './pathMatcher';
import { RouteRecordRedirect, RouteRecordNormalized } from './types';
import { PathParserOptions, _PathParserOptions } from './pathParserRanker';
interface RouterMatcher {
    addRoute: (record: RouteRecordRaw, parent?: RouteRecordMatcher) => () => void;
    removeRoute: {
        (matcher: RouteRecordMatcher): void;
        (name: RouteRecordName): void;
    };
    getRoutes: () => RouteRecordMatcher[];
    getRecordMatcher: (name: RouteRecordName) => RouteRecordMatcher | undefined;
    resolve: (location: MatcherLocationRaw, currentLocation: MatcherLocation) => MatcherLocation;
}
export declare function createRouterMatcher(routes: RouteRecordRaw[], globalOptions: PathParserOptions): RouterMatcher;
/**
 * Normalizes a RouteRecordRaw. Transforms the `redirect` option into a `beforeEnter`
 * @param record
 * @returns the normalized version
 */
export declare function normalizeRouteRecord(record: RouteRecordRaw): RouteRecordNormalized | RouteRecordRedirect;
export { PathParserOptions, _PathParserOptions };
//# sourceMappingURL=index.d.ts.map