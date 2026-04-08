import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: MsgCreatePermanentLockedAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
    };
    toJSON: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: {
                fromAddress: string;
                toAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
                endTime: string;
                delayed: boolean;
            };
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: {
                fromAddress: string;
                toAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: {
                fromAddress: string;
                toAddress: string;
                startTime: string;
                vestingPeriods: {
                    length: string;
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                }[];
            };
        };
    };
    fromJSON: {
        createVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPermanentLockedAccount(value: any): {
            typeUrl: string;
            value: MsgCreatePermanentLockedAccount;
        };
        createPeriodicVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: MsgCreatePermanentLockedAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
    };
};
