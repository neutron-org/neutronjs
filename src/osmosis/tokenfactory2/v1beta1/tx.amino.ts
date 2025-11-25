//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import {
  MsgCreateDenom,
  MsgMint,
  MsgBurn,
  MsgChangeAdmin,
  MsgSetDenomMetadata,
  MsgSetBeforeSendHook,
  MsgForceTransfer,
  MsgUpdateParams,
} from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/create-denom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/mint";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    mintToAddress: string;
  };
}
export interface MsgBurnAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/burn";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    burnFromAddress: string;
  };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/change-admin";
  value: {
    sender: string;
    denom: string;
    new_admin: string;
  };
}
export interface MsgSetDenomMetadataAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/set-denom-metadata";
  value: {
    sender: string;
    metadata: {
      description: string;
      denom_units: {
        denom: string;
        exponent: number;
        aliases: string[];
      }[];
      base: string;
      display: string;
      name: string;
      symbol: string;
      uri: string;
      uri_hash: string;
    };
  };
}
export interface MsgSetBeforeSendHookAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/set-beforesend-hook";
  value: {
    sender: string;
    denom: string;
    contract_addr: string;
  };
}
export interface MsgForceTransferAminoType extends AminoMsg {
  type: "osmosis/tokenfactory2/force-transfer";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    };
    transferFromAddress: string;
    transferToAddress: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "interchainqueries/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      send_enabled: {
        denom: string;
        enabled: boolean;
      }[];
      default_send_enabled: boolean;
    };
  };
}
export const AminoConverter = {
  "/osmosis.tokenfactory2.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory2/create-denom",
    toAmino: ({ sender, subdenom }: MsgCreateDenom): MsgCreateDenomAminoType["value"] => {
      return {
        sender,
        subdenom,
      };
    },
    fromAmino: ({ sender, subdenom }: MsgCreateDenomAminoType["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory2/mint",
    toAmino: ({ sender, amount, mintToAddress }: MsgMint): MsgMintAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        mintToAddress,
      };
    },
    fromAmino: ({ sender, amount, mintToAddress }: MsgMintAminoType["value"]): MsgMint => {
      return {
        sender,
        amount:
          amount == null
            ? amount
            : {
                denom: amount.denom,
                amount: amount.amount,
              },
        mintToAddress,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory2/burn",
    toAmino: ({ sender, amount, burnFromAddress }: MsgBurn): MsgBurnAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        burnFromAddress,
      };
    },
    fromAmino: ({ sender, amount, burnFromAddress }: MsgBurnAminoType["value"]): MsgBurn => {
      return {
        sender,
        amount:
          amount == null
            ? amount
            : {
                denom: amount.denom,
                amount: amount.amount,
              },
        burnFromAddress,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory2/change-admin",
    toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin): MsgChangeAdminAminoType["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin,
      };
    },
    fromAmino: ({ sender, denom, new_admin }: MsgChangeAdminAminoType["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgSetDenomMetadata": {
    aminoType: "osmosis/tokenfactory2/set-denom-metadata",
    toAmino: ({ sender, metadata }: MsgSetDenomMetadata): MsgSetDenomMetadataAminoType["value"] => {
      return {
        sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map((el0) => ({
            denom: el0.denom,
            exponent: omitDefault(el0.exponent),
            aliases: el0.aliases,
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash,
        },
      };
    },
    fromAmino: ({ sender, metadata }: MsgSetDenomMetadataAminoType["value"]): MsgSetDenomMetadata => {
      return {
        sender,
        metadata:
          metadata == null
            ? metadata
            : {
                description: metadata.description,
                denomUnits: metadata.denom_units.map?.((el1) => ({
                  denom: el1.denom,
                  exponent: el1.exponent,
                  aliases: el1.aliases,
                })),
                base: metadata.base,
                display: metadata.display,
                name: metadata.name,
                symbol: metadata.symbol,
                uri: metadata.uri,
                uriHash: metadata.uri_hash,
              },
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgSetBeforeSendHook": {
    aminoType: "osmosis/tokenfactory2/set-beforesend-hook",
    toAmino: ({
      sender,
      denom,
      contractAddr,
    }: MsgSetBeforeSendHook): MsgSetBeforeSendHookAminoType["value"] => {
      return {
        sender,
        denom,
        contract_addr: contractAddr,
      };
    },
    fromAmino: ({
      sender,
      denom,
      contract_addr,
    }: MsgSetBeforeSendHookAminoType["value"]): MsgSetBeforeSendHook => {
      return {
        sender,
        denom,
        contractAddr: contract_addr,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgForceTransfer": {
    aminoType: "osmosis/tokenfactory2/force-transfer",
    toAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress,
    }: MsgForceTransfer): MsgForceTransferAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        transferFromAddress,
        transferToAddress,
      };
    },
    fromAmino: ({
      sender,
      amount,
      transferFromAddress,
      transferToAddress,
    }: MsgForceTransferAminoType["value"]): MsgForceTransfer => {
      return {
        sender,
        amount:
          amount == null
            ? amount
            : {
                denom: amount.denom,
                amount: amount.amount,
              },
        transferFromAddress,
        transferToAddress,
      };
    },
  },
  "/osmosis.tokenfactory2.v1beta1.MsgUpdateParams": {
    aminoType: "interchainqueries/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          send_enabled: params.sendEnabled.map((el0) => ({
            denom: el0.denom,
            enabled: omitDefault(el0.enabled),
          })),
          default_send_enabled: omitDefault(params.defaultSendEnabled),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                sendEnabled: params.send_enabled.map?.((el1) => ({
                  denom: el1.denom,
                  enabled: el1.enabled,
                })),
                defaultSendEnabled: params.default_send_enabled,
              },
      };
    },
  },
};
