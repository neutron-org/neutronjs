import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as feemarketFeemarketV1TxAmino from "./feemarket/v1/tx.amino.js";
export declare const feemarketAminoConverters: {
    "/feemarket.feemarket.v1.MsgParams": {
        aminoType: string;
        toAmino: ({ params, authority }: import("./feemarket/v1/tx.js").MsgParams) => feemarketFeemarketV1TxAmino.MsgParamsAminoType["value"];
        fromAmino: ({ params, authority }: feemarketFeemarketV1TxAmino.MsgParamsAminoType["value"]) => import("./feemarket/v1/tx.js").MsgParams;
    };
};
export declare const feemarketProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningFeemarketClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningFeemarketClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
