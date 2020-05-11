/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export declare function encodeHash(text: string): string;
/**
 * Encode characters that need to be encoded query keys and values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export declare function encodeQueryProperty(text: string | number): string;
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export declare function encodePath(text: string | number): string;
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character.
 *
 * @param text - string to encode
 * @returns encoded string
 */
export declare function encodeParam(text: string | number): string;
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
export declare function decode(text: string | number): string;
//# sourceMappingURL=encoding.d.ts.map