import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: {
                description: {
                    moniker: string;
                    identity: string;
                    website: string;
                    securityContact: string;
                    details: string;
                };
                commission: {
                    rate: string;
                    maxRate: string;
                    maxChangeRate: string;
                };
                minSelfDelegation: string;
                delegatorAddress: string;
                validatorAddress: string;
                pubkey?: {
                    typeUrl: string;
                    value: string;
                };
                value: {
                    denom: string;
                    amount: string;
                };
            };
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: {
                description: {
                    moniker: string;
                    identity: string;
                    website: string;
                    securityContact: string;
                    details: string;
                };
                validatorAddress: string;
                commissionRate: string;
                minSelfDelegation: string;
            };
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                validatorAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                };
            };
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                validatorSrcAddress: string;
                validatorDstAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                };
            };
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                validatorAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                };
            };
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: {
                delegatorAddress: string;
                validatorAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                creationHeight: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    unbondingTime: {
                        seconds: string;
                        nanos: number;
                    };
                    maxValidators: number;
                    maxEntries: number;
                    historicalEntries: number;
                    bondDenom: string;
                    minCommissionRate: string;
                };
            };
        };
    };
    fromJSON: {
        createValidator(value: any): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: any): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: any): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: any): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
