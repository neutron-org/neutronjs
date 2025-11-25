//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgFundCommunityPool,
  MsgCommunityPoolSpend,
  MsgCreateContinuousFund,
  MsgCancelContinuousFund,
  MsgUpdateParams,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.protocolpool.v1.MsgFundCommunityPool", MsgFundCommunityPool],
  ["/cosmos.protocolpool.v1.MsgCommunityPoolSpend", MsgCommunityPoolSpend],
  ["/cosmos.protocolpool.v1.MsgCreateContinuousFund", MsgCreateContinuousFund],
  ["/cosmos.protocolpool.v1.MsgCancelContinuousFund", MsgCancelContinuousFund],
  ["/cosmos.protocolpool.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish(),
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.encode(value).finish(),
      };
    },
    createContinuousFund(value: MsgCreateContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
        value: MsgCreateContinuousFund.encode(value).finish(),
      };
    },
    cancelContinuousFund(value: MsgCancelContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
        value: MsgCancelContinuousFund.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
        value,
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
        value,
      };
    },
    createContinuousFund(value: MsgCreateContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
        value,
      };
    },
    cancelContinuousFund(value: MsgCancelContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.toJSON(value),
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.toJSON(value),
      };
    },
    createContinuousFund(value: MsgCreateContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
        value: MsgCreateContinuousFund.toJSON(value),
      };
    },
    cancelContinuousFund(value: MsgCancelContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
        value: MsgCancelContinuousFund.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    fundCommunityPool(value: any) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromJSON(value),
      };
    },
    communityPoolSpend(value: any) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.fromJSON(value),
      };
    },
    createContinuousFund(value: any) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
        value: MsgCreateContinuousFund.fromJSON(value),
      };
    },
    cancelContinuousFund(value: any) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
        value: MsgCancelContinuousFund.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value),
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.fromPartial(value),
      };
    },
    createContinuousFund(value: MsgCreateContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
        value: MsgCreateContinuousFund.fromPartial(value),
      };
    },
    cancelContinuousFund(value: MsgCancelContinuousFund) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
        value: MsgCancelContinuousFund.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
