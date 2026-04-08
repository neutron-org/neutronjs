import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    baseAccount?: BaseAccount;
    accountOwner: string;
}
export declare const InterchainAccount: {
    typeUrl: string;
    encode(message: InterchainAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InterchainAccount;
    fromJSON(object: any): InterchainAccount;
    toJSON(message: InterchainAccount): JsonSafe<InterchainAccount>;
    fromPartial<I extends Exact<DeepPartial<InterchainAccount>, I>>(object: I): InterchainAccount;
};
