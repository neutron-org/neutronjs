import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgFundTreasury } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        fundTreasury(value: MsgFundTreasury): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        fundTreasury(value: MsgFundTreasury): {
            typeUrl: string;
            value: MsgFundTreasury;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    rewardAsset: string;
                    rewardQuote?: {
                        amount: string;
                        asset: string;
                    };
                    blocksPerformanceRequirement?: {
                        allowedToMiss: string;
                        requiredAtLeast: string;
                    };
                    oracleVotesPerformanceRequirement?: {
                        allowedToMiss: string;
                        requiredAtLeast: string;
                    };
                    paymentScheduleType?: {
                        monthlyPaymentScheduleType?: {};
                        blockBasedPaymentScheduleType?: {
                            blocksPerPeriod: string;
                        };
                        emptyPaymentScheduleType?: {};
                    };
                    twapWindow: string;
                };
            };
        };
        fundTreasury(value: MsgFundTreasury): {
            typeUrl: string;
            value: {
                sender: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        fundTreasury(value: any): {
            typeUrl: string;
            value: MsgFundTreasury;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        fundTreasury(value: MsgFundTreasury): {
            typeUrl: string;
            value: MsgFundTreasury;
        };
    };
};
