import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddCurrencyPairs, MsgRemoveCurrencyPairs } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addCurrencyPairs(value: MsgAddCurrencyPairs): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        removeCurrencyPairs(value: MsgRemoveCurrencyPairs): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        addCurrencyPairs(value: MsgAddCurrencyPairs): {
            typeUrl: string;
            value: MsgAddCurrencyPairs;
        };
        removeCurrencyPairs(value: MsgRemoveCurrencyPairs): {
            typeUrl: string;
            value: MsgRemoveCurrencyPairs;
        };
    };
    toJSON: {
        addCurrencyPairs(value: MsgAddCurrencyPairs): {
            typeUrl: string;
            value: {
                authority: string;
                currencyPairs: {
                    base: string;
                    quote: string;
                }[];
            };
        };
        removeCurrencyPairs(value: MsgRemoveCurrencyPairs): {
            typeUrl: string;
            value: {
                authority: string;
                currencyPairIds: string[];
            };
        };
    };
    fromJSON: {
        addCurrencyPairs(value: any): {
            typeUrl: string;
            value: MsgAddCurrencyPairs;
        };
        removeCurrencyPairs(value: any): {
            typeUrl: string;
            value: MsgRemoveCurrencyPairs;
        };
    };
    fromPartial: {
        addCurrencyPairs(value: MsgAddCurrencyPairs): {
            typeUrl: string;
            value: MsgAddCurrencyPairs;
        };
        removeCurrencyPairs(value: MsgRemoveCurrencyPairs): {
            typeUrl: string;
            value: MsgRemoveCurrencyPairs;
        };
    };
};
