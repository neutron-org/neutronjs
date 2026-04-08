import { ModuleOptions } from "./options.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "cosmos.autocli.v1";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value?: ModuleOptions;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions: {
        [key: string]: ModuleOptions;
    };
}
export declare const AppOptionsRequest: {
    typeUrl: string;
    encode(_: AppOptionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsRequest;
    fromJSON(_: any): AppOptionsRequest;
    toJSON(_: AppOptionsRequest): JsonSafe<AppOptionsRequest>;
    fromPartial<I extends Exact<DeepPartial<AppOptionsRequest>, I>>(_: I): AppOptionsRequest;
};
export declare const AppOptionsResponse_ModuleOptionsEntry: {
    encode(message: AppOptionsResponse_ModuleOptionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry;
    fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry;
    toJSON(message: AppOptionsResponse_ModuleOptionsEntry): JsonSafe<AppOptionsResponse_ModuleOptionsEntry>;
    fromPartial<I extends Exact<DeepPartial<AppOptionsResponse_ModuleOptionsEntry>, I>>(object: I): AppOptionsResponse_ModuleOptionsEntry;
};
export declare const AppOptionsResponse: {
    typeUrl: string;
    encode(message: AppOptionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse;
    fromJSON(object: any): AppOptionsResponse;
    toJSON(message: AppOptionsResponse): JsonSafe<AppOptionsResponse>;
    fromPartial<I extends Exact<DeepPartial<AppOptionsResponse>, I>>(object: I): AppOptionsResponse;
};
