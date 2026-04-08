import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdrawal, MsgWithdrawalWithShares, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawalWithShares(value: MsgWithdrawalWithShares): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        withdrawalWithShares(value: MsgWithdrawalWithShares): {
            typeUrl: string;
            value: MsgWithdrawalWithShares;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: {
                creator: string;
                receiver: string;
                tokenA: string;
                tokenB: string;
                amountsA: string[];
                amountsB: string[];
                tickIndexesAToB: string[];
                fees: string[];
                options: {
                    disableAutoswap: boolean;
                    failTxOnBel: boolean;
                    swapOnDeposit: boolean;
                    swapOnDepositSlopToleranceBps: string;
                }[];
            };
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: {
                creator: string;
                receiver: string;
                tokenA: string;
                tokenB: string;
                sharesToRemove: string[];
                tickIndexesAToB: string[];
                fees: string[];
            };
        };
        withdrawalWithShares(value: MsgWithdrawalWithShares): {
            typeUrl: string;
            value: {
                creator: string;
                receiver: string;
                sharesToRemove: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: {
                creator: string;
                receiver: string;
                tokenIn: string;
                tokenOut: string;
                tickIndexInToOut: string;
                amountIn: string;
                orderType: import("./tx.js").LimitOrderType;
                expirationTime?: {
                    seconds: string;
                    nanos: number;
                };
                maxAmountOut?: string;
                limitSellPrice?: string;
                minAverageSellPrice?: string;
            };
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: {
                creator: string;
                trancheKey: string;
            };
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: {
                creator: string;
                trancheKey: string;
            };
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: {
                creator: string;
                receiver: string;
                routes: {
                    hops: string[];
                }[];
                amountIn: string;
                exitLimitPrice: string;
                pickBestRoute: boolean;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    feeTiers: string[];
                    paused: boolean;
                    maxJitsPerBlock: string;
                    goodTilPurgeAllowance: string;
                    whitelistedLps: string[];
                };
            };
        };
    };
    fromJSON: {
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: any): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        withdrawalWithShares(value: any): {
            typeUrl: string;
            value: MsgWithdrawalWithShares;
        };
        placeLimitOrder(value: any): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: any): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: any): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        withdrawalWithShares(value: MsgWithdrawalWithShares): {
            typeUrl: string;
            value: MsgWithdrawalWithShares;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
