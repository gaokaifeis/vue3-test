/**
 * Possible values in normalized {@link LocationQuery}
 *
 * @internal
 */
export declare type LocationQueryValue = string | null;
/**
 * Possible values when defining a query
 *
 * @internal
 */
declare type LocationQueryValueRaw = LocationQueryValue | number | undefined;
/**
 * Normalized query object that appears in {@link RouteLocationNormalized}
 *
 * @public
 */
export declare type LocationQuery = Record<string, LocationQueryValue | LocationQueryValue[]>;
/**
 * Loose {@link LocationQuery} object that can be passed to functions like
 * {@link Router.push} and {@link Router.replace} or anywhere when creating a
 * {@link RouteLocationRaw}
 *
 * @public
 */
export declare type LocationQueryRaw = Record<string | number, LocationQueryValueRaw | LocationQueryValueRaw[]>;
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 *
 * @param search - search string to parse
 * @returns a query object
 */
export declare function parseQuery(search: string): LocationQuery;
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
export declare function stringifyQuery(query: LocationQueryRaw): string;
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
export declare function normalizeQuery(query: LocationQueryRaw | undefined): LocationQuery;
export {};
//# sourceMappingURL=query.d.ts.map