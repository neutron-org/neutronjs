import { FileDescriptorProto } from "../../../google/protobuf/descriptor.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "cosmos.reflection.v1";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
export declare const FileDescriptorsRequest: {
    typeUrl: string;
    encode(_: FileDescriptorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsRequest;
    fromJSON(_: any): FileDescriptorsRequest;
    toJSON(_: FileDescriptorsRequest): JsonSafe<FileDescriptorsRequest>;
    fromPartial<I extends Exact<DeepPartial<FileDescriptorsRequest>, I>>(_: I): FileDescriptorsRequest;
};
export declare const FileDescriptorsResponse: {
    typeUrl: string;
    encode(message: FileDescriptorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsResponse;
    fromJSON(object: any): FileDescriptorsResponse;
    toJSON(message: FileDescriptorsResponse): JsonSafe<FileDescriptorsResponse>;
    fromPartial<I extends Exact<DeepPartial<FileDescriptorsResponse>, I>>(object: I): FileDescriptorsResponse;
};
