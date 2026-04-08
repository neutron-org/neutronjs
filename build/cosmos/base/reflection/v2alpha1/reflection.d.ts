import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn?: AuthnDescriptor;
    /** chain provides the chain descriptor */
    chain?: ChainDescriptor;
    /** codec provides metadata information regarding codec related types */
    codec?: CodecDescriptor;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration?: ConfigurationDescriptor;
    /** query_services provides metadata information regarding the available queriable endpoints */
    queryServices?: QueryServicesDescriptor;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx?: TxDescriptor;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname: string;
    /** msgs lists the accepted application messages (sdk.Msg) */
    msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    signModes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
    /** name defines the unique name of the signing mode */
    name: string;
    /** number is the unique int32 identifier for the sign_mode enum */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authnInfoProviderMethodFullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
    /** fullname is the name of the interface */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /** interface_implementers is a list of the descriptors of the interface implementers */
    interfaceImplementers: InterfaceImplementerDescriptor[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
    /** fullname is the protobuf queryable name of the interface implementer */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    typeUrl: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
    /** fullname is the protobuf fullname of the type containing the interface */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    fieldDescriptorNames: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32AccountAddressPrefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msgTypeUrl: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn?: AuthnDescriptor;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain?: ChainDescriptor;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec?: CodecDescriptor;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config?: ConfigurationDescriptor;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries?: QueryServicesDescriptor;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx?: TxDescriptor;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    queryServices: QueryServiceDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
    /** fullname is the protobuf fullname of the service descriptor */
    fullname: string;
    /** is_module describes if this service is actually exposed by an application's module */
    isModule: boolean;
    /** methods provides a list of query service methods */
    methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
    /** name is the protobuf name (not fullname) of the method */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    fullQueryPath: string;
}
export declare const AppDescriptor: {
    typeUrl: string;
    encode(message: AppDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppDescriptor;
    fromJSON(object: any): AppDescriptor;
    toJSON(message: AppDescriptor): JsonSafe<AppDescriptor>;
    fromPartial<I extends Exact<DeepPartial<AppDescriptor>, I>>(object: I): AppDescriptor;
};
export declare const TxDescriptor: {
    typeUrl: string;
    encode(message: TxDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDescriptor;
    fromJSON(object: any): TxDescriptor;
    toJSON(message: TxDescriptor): JsonSafe<TxDescriptor>;
    fromPartial<I extends Exact<DeepPartial<TxDescriptor>, I>>(object: I): TxDescriptor;
};
export declare const AuthnDescriptor: {
    typeUrl: string;
    encode(message: AuthnDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AuthnDescriptor;
    fromJSON(object: any): AuthnDescriptor;
    toJSON(message: AuthnDescriptor): JsonSafe<AuthnDescriptor>;
    fromPartial<I extends Exact<DeepPartial<AuthnDescriptor>, I>>(object: I): AuthnDescriptor;
};
export declare const SigningModeDescriptor: {
    typeUrl: string;
    encode(message: SigningModeDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SigningModeDescriptor;
    fromJSON(object: any): SigningModeDescriptor;
    toJSON(message: SigningModeDescriptor): JsonSafe<SigningModeDescriptor>;
    fromPartial<I extends Exact<DeepPartial<SigningModeDescriptor>, I>>(object: I): SigningModeDescriptor;
};
export declare const ChainDescriptor: {
    typeUrl: string;
    encode(message: ChainDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ChainDescriptor;
    fromJSON(object: any): ChainDescriptor;
    toJSON(message: ChainDescriptor): JsonSafe<ChainDescriptor>;
    fromPartial<I extends Exact<DeepPartial<ChainDescriptor>, I>>(object: I): ChainDescriptor;
};
export declare const CodecDescriptor: {
    typeUrl: string;
    encode(message: CodecDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CodecDescriptor;
    fromJSON(object: any): CodecDescriptor;
    toJSON(message: CodecDescriptor): JsonSafe<CodecDescriptor>;
    fromPartial<I extends Exact<DeepPartial<CodecDescriptor>, I>>(object: I): CodecDescriptor;
};
export declare const InterfaceDescriptor: {
    typeUrl: string;
    encode(message: InterfaceDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceDescriptor;
    fromJSON(object: any): InterfaceDescriptor;
    toJSON(message: InterfaceDescriptor): JsonSafe<InterfaceDescriptor>;
    fromPartial<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(object: I): InterfaceDescriptor;
};
export declare const InterfaceImplementerDescriptor: {
    typeUrl: string;
    encode(message: InterfaceImplementerDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceImplementerDescriptor;
    fromJSON(object: any): InterfaceImplementerDescriptor;
    toJSON(message: InterfaceImplementerDescriptor): JsonSafe<InterfaceImplementerDescriptor>;
    fromPartial<I extends Exact<DeepPartial<InterfaceImplementerDescriptor>, I>>(object: I): InterfaceImplementerDescriptor;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    typeUrl: string;
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor;
    fromJSON(object: any): InterfaceAcceptingMessageDescriptor;
    toJSON(message: InterfaceAcceptingMessageDescriptor): JsonSafe<InterfaceAcceptingMessageDescriptor>;
    fromPartial<I extends Exact<DeepPartial<InterfaceAcceptingMessageDescriptor>, I>>(object: I): InterfaceAcceptingMessageDescriptor;
};
export declare const ConfigurationDescriptor: {
    typeUrl: string;
    encode(message: ConfigurationDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationDescriptor;
    fromJSON(object: any): ConfigurationDescriptor;
    toJSON(message: ConfigurationDescriptor): JsonSafe<ConfigurationDescriptor>;
    fromPartial<I extends Exact<DeepPartial<ConfigurationDescriptor>, I>>(object: I): ConfigurationDescriptor;
};
export declare const MsgDescriptor: {
    typeUrl: string;
    encode(message: MsgDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDescriptor;
    fromJSON(object: any): MsgDescriptor;
    toJSON(message: MsgDescriptor): JsonSafe<MsgDescriptor>;
    fromPartial<I extends Exact<DeepPartial<MsgDescriptor>, I>>(object: I): MsgDescriptor;
};
export declare const GetAuthnDescriptorRequest: {
    typeUrl: string;
    encode(_: GetAuthnDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorRequest;
    fromJSON(_: any): GetAuthnDescriptorRequest;
    toJSON(_: GetAuthnDescriptorRequest): JsonSafe<GetAuthnDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorRequest>, I>>(_: I): GetAuthnDescriptorRequest;
};
export declare const GetAuthnDescriptorResponse: {
    typeUrl: string;
    encode(message: GetAuthnDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorResponse;
    fromJSON(object: any): GetAuthnDescriptorResponse;
    toJSON(message: GetAuthnDescriptorResponse): JsonSafe<GetAuthnDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorResponse>, I>>(object: I): GetAuthnDescriptorResponse;
};
export declare const GetChainDescriptorRequest: {
    typeUrl: string;
    encode(_: GetChainDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorRequest;
    fromJSON(_: any): GetChainDescriptorRequest;
    toJSON(_: GetChainDescriptorRequest): JsonSafe<GetChainDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetChainDescriptorRequest>, I>>(_: I): GetChainDescriptorRequest;
};
export declare const GetChainDescriptorResponse: {
    typeUrl: string;
    encode(message: GetChainDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorResponse;
    fromJSON(object: any): GetChainDescriptorResponse;
    toJSON(message: GetChainDescriptorResponse): JsonSafe<GetChainDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetChainDescriptorResponse>, I>>(object: I): GetChainDescriptorResponse;
};
export declare const GetCodecDescriptorRequest: {
    typeUrl: string;
    encode(_: GetCodecDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorRequest;
    fromJSON(_: any): GetCodecDescriptorRequest;
    toJSON(_: GetCodecDescriptorRequest): JsonSafe<GetCodecDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorRequest>, I>>(_: I): GetCodecDescriptorRequest;
};
export declare const GetCodecDescriptorResponse: {
    typeUrl: string;
    encode(message: GetCodecDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorResponse;
    fromJSON(object: any): GetCodecDescriptorResponse;
    toJSON(message: GetCodecDescriptorResponse): JsonSafe<GetCodecDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorResponse>, I>>(object: I): GetCodecDescriptorResponse;
};
export declare const GetConfigurationDescriptorRequest: {
    typeUrl: string;
    encode(_: GetConfigurationDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorRequest;
    fromJSON(_: any): GetConfigurationDescriptorRequest;
    toJSON(_: GetConfigurationDescriptorRequest): JsonSafe<GetConfigurationDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetConfigurationDescriptorRequest>, I>>(_: I): GetConfigurationDescriptorRequest;
};
export declare const GetConfigurationDescriptorResponse: {
    typeUrl: string;
    encode(message: GetConfigurationDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorResponse;
    fromJSON(object: any): GetConfigurationDescriptorResponse;
    toJSON(message: GetConfigurationDescriptorResponse): JsonSafe<GetConfigurationDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetConfigurationDescriptorResponse>, I>>(object: I): GetConfigurationDescriptorResponse;
};
export declare const GetQueryServicesDescriptorRequest: {
    typeUrl: string;
    encode(_: GetQueryServicesDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest;
    fromJSON(_: any): GetQueryServicesDescriptorRequest;
    toJSON(_: GetQueryServicesDescriptorRequest): JsonSafe<GetQueryServicesDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetQueryServicesDescriptorRequest>, I>>(_: I): GetQueryServicesDescriptorRequest;
};
export declare const GetQueryServicesDescriptorResponse: {
    typeUrl: string;
    encode(message: GetQueryServicesDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse;
    fromJSON(object: any): GetQueryServicesDescriptorResponse;
    toJSON(message: GetQueryServicesDescriptorResponse): JsonSafe<GetQueryServicesDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetQueryServicesDescriptorResponse>, I>>(object: I): GetQueryServicesDescriptorResponse;
};
export declare const GetTxDescriptorRequest: {
    typeUrl: string;
    encode(_: GetTxDescriptorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorRequest;
    fromJSON(_: any): GetTxDescriptorRequest;
    toJSON(_: GetTxDescriptorRequest): JsonSafe<GetTxDescriptorRequest>;
    fromPartial<I extends Exact<DeepPartial<GetTxDescriptorRequest>, I>>(_: I): GetTxDescriptorRequest;
};
export declare const GetTxDescriptorResponse: {
    typeUrl: string;
    encode(message: GetTxDescriptorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorResponse;
    fromJSON(object: any): GetTxDescriptorResponse;
    toJSON(message: GetTxDescriptorResponse): JsonSafe<GetTxDescriptorResponse>;
    fromPartial<I extends Exact<DeepPartial<GetTxDescriptorResponse>, I>>(object: I): GetTxDescriptorResponse;
};
export declare const QueryServicesDescriptor: {
    typeUrl: string;
    encode(message: QueryServicesDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesDescriptor;
    fromJSON(object: any): QueryServicesDescriptor;
    toJSON(message: QueryServicesDescriptor): JsonSafe<QueryServicesDescriptor>;
    fromPartial<I extends Exact<DeepPartial<QueryServicesDescriptor>, I>>(object: I): QueryServicesDescriptor;
};
export declare const QueryServiceDescriptor: {
    typeUrl: string;
    encode(message: QueryServiceDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDescriptor;
    fromJSON(object: any): QueryServiceDescriptor;
    toJSON(message: QueryServiceDescriptor): JsonSafe<QueryServiceDescriptor>;
    fromPartial<I extends Exact<DeepPartial<QueryServiceDescriptor>, I>>(object: I): QueryServiceDescriptor;
};
export declare const QueryMethodDescriptor: {
    typeUrl: string;
    encode(message: QueryMethodDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMethodDescriptor;
    fromJSON(object: any): QueryMethodDescriptor;
    toJSON(message: QueryMethodDescriptor): JsonSafe<QueryMethodDescriptor>;
    fromPartial<I extends Exact<DeepPartial<QueryMethodDescriptor>, I>>(object: I): QueryMethodDescriptor;
};
