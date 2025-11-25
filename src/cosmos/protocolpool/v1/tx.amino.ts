//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import {
  MsgFundCommunityPool,
  MsgCommunityPoolSpend,
  MsgCreateContinuousFund,
  MsgCancelContinuousFund,
  MsgUpdateParams,
} from "./tx";
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgCommunityPoolSpendAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCommunityPoolSpend";
  value: {
    authority: string;
    recipient: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgCreateContinuousFundAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateContinuousFund";
  value: {
    authority: string;
    recipient: string;
    percentage: string;
    expiry: string;
  };
}
export interface MsgCancelContinuousFundAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCancelContinuousFund";
  value: {
    authority: string;
    recipient: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      enabled_distribution_denoms: string[];
      distribution_frequency: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.protocolpool.v1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({ depositor, amount }: MsgFundCommunityPool): MsgFundCommunityPoolAminoType["value"] => {
      return {
        depositor,
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
    fromAmino: ({ depositor, amount }: MsgFundCommunityPoolAminoType["value"]): MsgFundCommunityPool => {
      return {
        depositor,
        amount: amount.map?.((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
  },
  "/cosmos.protocolpool.v1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
    toAmino: ({
      authority,
      recipient,
      amount,
    }: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoType["value"] => {
      return {
        authority,
        recipient,
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
    fromAmino: ({
      authority,
      recipient,
      amount,
    }: MsgCommunityPoolSpendAminoType["value"]): MsgCommunityPoolSpend => {
      return {
        authority,
        recipient,
        amount: amount.map?.((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
  },
  "/cosmos.protocolpool.v1.MsgCreateContinuousFund": {
    aminoType: "cosmos-sdk/MsgCreateContinuousFund",
    toAmino: ({
      authority,
      recipient,
      percentage,
      expiry,
    }: MsgCreateContinuousFund): MsgCreateContinuousFundAminoType["value"] => {
      return {
        authority,
        recipient,
        percentage,
        expiry,
      };
    },
    fromAmino: ({
      authority,
      recipient,
      percentage,
      expiry,
    }: MsgCreateContinuousFundAminoType["value"]): MsgCreateContinuousFund => {
      return {
        authority,
        recipient,
        percentage,
        expiry,
      };
    },
  },
  "/cosmos.protocolpool.v1.MsgCancelContinuousFund": {
    aminoType: "cosmos-sdk/MsgCancelContinuousFund",
    toAmino: ({
      authority,
      recipient,
    }: MsgCancelContinuousFund): MsgCancelContinuousFundAminoType["value"] => {
      return {
        authority,
        recipient,
      };
    },
    fromAmino: ({
      authority,
      recipient,
    }: MsgCancelContinuousFundAminoType["value"]): MsgCancelContinuousFund => {
      return {
        authority,
        recipient,
      };
    },
  },
  "/cosmos.protocolpool.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enabled_distribution_denoms: params.enabledDistributionDenoms,
          distribution_frequency: omitDefault(params.distributionFrequency)?.toString?.(),
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
                enabledDistributionDenoms: params.enabled_distribution_denoms,
                distributionFrequency:
                  params.distribution_frequency == null
                    ? params.distribution_frequency
                    : BigInt(params.distribution_frequency),
              },
      };
    },
  },
};
