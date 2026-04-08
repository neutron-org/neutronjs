import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as osmosisTokenfactoryV1beta1TxAmino from "./tokenfactory/v1beta1/tx.amino.js";
export declare const osmosisAminoConverters: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./tokenfactory/v1beta1/tx.js").MsgCreateDenom) => osmosisTokenfactoryV1beta1TxAmino.MsgCreateDenomAminoType["value"];
        fromAmino: ({ sender, subdenom }: osmosisTokenfactoryV1beta1TxAmino.MsgCreateDenomAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount, mintToAddress }: import("./tokenfactory/v1beta1/tx.js").MsgMint) => osmosisTokenfactoryV1beta1TxAmino.MsgMintAminoType["value"];
        fromAmino: ({ sender, amount, mintToAddress }: osmosisTokenfactoryV1beta1TxAmino.MsgMintAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount, burnFromAddress }: import("./tokenfactory/v1beta1/tx.js").MsgBurn) => osmosisTokenfactoryV1beta1TxAmino.MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount, burnFromAddress }: osmosisTokenfactoryV1beta1TxAmino.MsgBurnAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./tokenfactory/v1beta1/tx.js").MsgChangeAdmin) => osmosisTokenfactoryV1beta1TxAmino.MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, new_admin }: osmosisTokenfactoryV1beta1TxAmino.MsgChangeAdminAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: import("./tokenfactory/v1beta1/tx.js").MsgSetDenomMetadata) => osmosisTokenfactoryV1beta1TxAmino.MsgSetDenomMetadataAminoType["value"];
        fromAmino: ({ sender, metadata }: osmosisTokenfactoryV1beta1TxAmino.MsgSetDenomMetadataAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgSetDenomMetadata;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: string;
        toAmino: ({ sender, denom, contractAddr, }: import("./tokenfactory/v1beta1/tx.js").MsgSetBeforeSendHook) => osmosisTokenfactoryV1beta1TxAmino.MsgSetBeforeSendHookAminoType["value"];
        fromAmino: ({ sender, denom, contract_addr, }: osmosisTokenfactoryV1beta1TxAmino.MsgSetBeforeSendHookAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgSetBeforeSendHook;
    };
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress, }: import("./tokenfactory/v1beta1/tx.js").MsgForceTransfer) => osmosisTokenfactoryV1beta1TxAmino.MsgForceTransferAminoType["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress, }: osmosisTokenfactoryV1beta1TxAmino.MsgForceTransferAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgForceTransfer;
    };
    "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./tokenfactory/v1beta1/tx.js").MsgUpdateParams) => osmosisTokenfactoryV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: osmosisTokenfactoryV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./tokenfactory/v1beta1/tx.js").MsgUpdateParams;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
