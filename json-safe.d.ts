/**
 * This file and any referenced files were automatically generated by @cosmology/telescope@1.8.3
 * DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
 * and run the transpile command or npm scripts command that is used to regenerate this bundle.
 */
export type JsonSafe<T> = {
    [Prop in keyof T]: T[Prop] extends Uint8Array | bigint | Date ? string : T[Prop];
};
