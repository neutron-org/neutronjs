import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as slinkyOracleV1TxAmino from "./oracle/v1/tx.amino.js";
export declare const slinkyAminoConverters: {
    "/slinky.oracle.v1.MsgAddCurrencyPairs": {
        aminoType: string;
        toAmino: ({ authority, currencyPairs }: import("./oracle/v1/tx.js").MsgAddCurrencyPairs) => slinkyOracleV1TxAmino.MsgAddCurrencyPairsAminoType["value"];
        fromAmino: ({ authority, currency_pairs, }: slinkyOracleV1TxAmino.MsgAddCurrencyPairsAminoType["value"]) => import("./oracle/v1/tx.js").MsgAddCurrencyPairs;
    };
    "/slinky.oracle.v1.MsgRemoveCurrencyPairs": {
        aminoType: string;
        toAmino: ({ authority, currencyPairIds, }: import("./oracle/v1/tx.js").MsgRemoveCurrencyPairs) => slinkyOracleV1TxAmino.MsgRemoveCurrencyPairsAminoType["value"];
        fromAmino: ({ authority, currency_pair_ids, }: slinkyOracleV1TxAmino.MsgRemoveCurrencyPairsAminoType["value"]) => import("./oracle/v1/tx.js").MsgRemoveCurrencyPairs;
    };
};
export declare const slinkyProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSlinkyClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSlinkyClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
