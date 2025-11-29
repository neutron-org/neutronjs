//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgIncreaseCounter } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/cosmos.counter.v1.MsgIncreaseCounter", MsgIncreaseCounter],
];
export const MessageComposer = {
  encoded: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value,
      };
    },
  },
  toJSON: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.toJSON(value),
      };
    },
  },
  fromJSON: {
    increaseCount(value: any) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.fromJSON(value),
      };
    },
  },
  fromPartial: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.fromPartial(value),
      };
    },
  },
};
