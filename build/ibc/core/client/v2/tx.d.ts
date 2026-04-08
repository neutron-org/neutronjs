import { Config } from "./config.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.core.client.v2";
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterparty {
    /** client identifier */
    clientId: string;
    /** counterparty merkle prefix */
    counterpartyMerklePrefix: Uint8Array[];
    /** counterparty client identifier */
    counterpartyClientId: string;
    /** signer address */
    signer: string;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponse {
}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfig {
    /** client identifier */
    clientId: string;
    /**
     * allowed relayers
     *
     * NOTE: All fields in the config must be supplied.
     */
    config: Config;
    /** signer address */
    signer: string;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponse {
}
export declare const MsgRegisterCounterparty: {
    typeUrl: string;
    encode(message: MsgRegisterCounterparty, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterparty;
    fromJSON(object: any): MsgRegisterCounterparty;
    toJSON(message: MsgRegisterCounterparty): JsonSafe<MsgRegisterCounterparty>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterparty>, I>>(object: I): MsgRegisterCounterparty;
};
export declare const MsgRegisterCounterpartyResponse: {
    typeUrl: string;
    encode(_: MsgRegisterCounterpartyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyResponse;
    fromJSON(_: any): MsgRegisterCounterpartyResponse;
    toJSON(_: MsgRegisterCounterpartyResponse): JsonSafe<MsgRegisterCounterpartyResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyResponse>, I>>(_: I): MsgRegisterCounterpartyResponse;
};
export declare const MsgUpdateClientConfig: {
    typeUrl: string;
    encode(message: MsgUpdateClientConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfig;
    fromJSON(object: any): MsgUpdateClientConfig;
    toJSON(message: MsgUpdateClientConfig): JsonSafe<MsgUpdateClientConfig>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateClientConfig>, I>>(object: I): MsgUpdateClientConfig;
};
export declare const MsgUpdateClientConfigResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClientConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfigResponse;
    fromJSON(_: any): MsgUpdateClientConfigResponse;
    toJSON(_: MsgUpdateClientConfigResponse): JsonSafe<MsgUpdateClientConfigResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateClientConfigResponse>, I>>(_: I): MsgUpdateClientConfigResponse;
};
