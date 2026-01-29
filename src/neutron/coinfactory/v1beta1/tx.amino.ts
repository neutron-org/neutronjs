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
  type: "neutron/coinfactory/create-denom";
  value: {
    sender: string;
    subdenom: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "neutron/coinfactory/mint";
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
  type: "neutron/coinfactory/burn";
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
  type: "neutron/coinfactory/change-admin";
  value: {
    sender: string;
    denom: string;
    new_admin: string;
  };
}
export interface MsgSetDenomMetadataAminoType extends AminoMsg {
  type: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata";
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
  type: "neutron/coinfactory/set-beforesend-hook";
  value: {
    sender: string;
    denom: string;
    contract_addr: string;
  };
}
export interface MsgForceTransferAminoType extends AminoMsg {
  type: "neutron/coinfactory/force-transfer";
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
  "/neutron.coinfactory.v1beta1.MsgCreateDenom": {
    aminoType: "neutron/coinfactory/create-denom",
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
  "/neutron.coinfactory.v1beta1.MsgMint": {
    aminoType: "neutron/coinfactory/mint",
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
  "/neutron.coinfactory.v1beta1.MsgBurn": {
    aminoType: "neutron/coinfactory/burn",
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
  "/neutron.coinfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "neutron/coinfactory/change-admin",
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
  "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
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
  "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook": {
    aminoType: "neutron/coinfactory/set-beforesend-hook",
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
  "/neutron.coinfactory.v1beta1.MsgForceTransfer": {
    aminoType: "neutron/coinfactory/force-transfer",
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
  "/neutron.coinfactory.v1beta1.MsgUpdateParams": {
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
