import { RouterHistory } from './common';
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location.
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
export declare function createMemoryHistory(base?: string): RouterHistory;
//# sourceMappingURL=memory.d.ts.map