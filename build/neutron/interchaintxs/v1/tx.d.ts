import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { Order } from "../../../ibc/core/channel/v1/channel.js";
import { Any } from "../../../google/protobuf/any.js";
import { Fee } from "../../feerefunder/fee.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.interchaintxs.v1";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
    fromAddress: string;
    connectionId: string;
    interchainAccountId: string;
    registerFee: Coin[];
    ordering: Order;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {
    channelId: string;
    portId: string;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    fromAddress: string;
    /**
     * interchain_account_id is supposed to be the unique identifier, e.g.,
     * lido/kava. This allows contracts to have more than one interchain accounts
     * on remote zone This identifier will be a part of the portID that we'll
     * claim our capability for.
     */
    interchainAccountId: string;
    connectionId: string;
    msgs: Any[];
    memo: string;
    /** timeout in seconds after which the packet times out */
    timeout: bigint;
    fee: Fee;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
    /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
    sequenceId: bigint;
    /** channel src channel on neutron side transaction was submitted from */
    channel: string;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/interchaintxs parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgRegisterInterchainAccount: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount;
    fromJSON(object: any): MsgRegisterInterchainAccount;
    toJSON(message: MsgRegisterInterchainAccount): JsonSafe<MsgRegisterInterchainAccount>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccount>, I>>(object: I): MsgRegisterInterchainAccount;
};
export declare const MsgRegisterInterchainAccountResponse: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse;
    fromJSON(object: any): MsgRegisterInterchainAccountResponse;
    toJSON(message: MsgRegisterInterchainAccountResponse): JsonSafe<MsgRegisterInterchainAccountResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccountResponse>, I>>(object: I): MsgRegisterInterchainAccountResponse;
};
export declare const MsgSubmitTx: {
    typeUrl: string;
    encode(message: MsgSubmitTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTx;
    fromJSON(object: any): MsgSubmitTx;
    toJSON(message: MsgSubmitTx): JsonSafe<MsgSubmitTx>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitTx>, I>>(object: I): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    typeUrl: string;
    encode(message: MsgSubmitTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTxResponse;
    fromJSON(object: any): MsgSubmitTxResponse;
    toJSON(message: MsgSubmitTxResponse): JsonSafe<MsgSubmitTxResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitTxResponse>, I>>(object: I): MsgSubmitTxResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
