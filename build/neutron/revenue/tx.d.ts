import { Params } from "./params.js";
import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.revenue";
/** Request type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParams {
    /** The address of the authority of the module. */
    authority: string;
    /** The new parameters of the module. All parameters must be supplied. */
    params: Params;
}
/** Response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponse {
}
/** Request type for the Msg/FundTreasury RPC method. */
export interface MsgFundTreasury {
    /** The signer of the message. */
    sender: string;
    /** The amount of coins to fund the revenue treasury pool with. Must match the reward asset denom. */
    amount: Coin[];
}
/** Response type for the Msg/FundTreasury RPC method. */
export interface MsgFundTreasuryResponse {
}
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
export declare const MsgFundTreasury: {
    typeUrl: string;
    encode(message: MsgFundTreasury, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundTreasury;
    fromJSON(object: any): MsgFundTreasury;
    toJSON(message: MsgFundTreasury): JsonSafe<MsgFundTreasury>;
    fromPartial<I extends Exact<DeepPartial<MsgFundTreasury>, I>>(object: I): MsgFundTreasury;
};
export declare const MsgFundTreasuryResponse: {
    typeUrl: string;
    encode(_: MsgFundTreasuryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundTreasuryResponse;
    fromJSON(_: any): MsgFundTreasuryResponse;
    toJSON(_: MsgFundTreasuryResponse): JsonSafe<MsgFundTreasuryResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgFundTreasuryResponse>, I>>(_: I): MsgFundTreasuryResponse;
};
