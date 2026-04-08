import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool): {
            typeUrl: string;
            value: MsgDepositValidatorRewardsPool;
        };
    };
    toJSON: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                withdrawAddress: string;
            };
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                validatorAddress: string;
            };
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: {
                validatorAddress: string;
            };
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: {
                amount: {
                    denom: string;
                    amount: string;
                }[];
                depositor: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    communityTax: string;
                    baseProposerReward: string;
                    bonusProposerReward: string;
                    withdrawAddrEnabled: boolean;
                };
            };
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: {
                authority: string;
                recipient: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool): {
            typeUrl: string;
            value: {
                depositor: string;
                validatorAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
    };
    fromJSON: {
        setWithdrawAddress(value: any): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: any): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: any): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: any): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: any): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        depositValidatorRewardsPool(value: any): {
            typeUrl: string;
            value: MsgDepositValidatorRewardsPool;
        };
    };
    fromPartial: {
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawValidatorCommission(value: MsgWithdrawValidatorCommission): {
            typeUrl: string;
            value: MsgWithdrawValidatorCommission;
        };
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool): {
            typeUrl: string;
            value: MsgDepositValidatorRewardsPool;
        };
    };
};
