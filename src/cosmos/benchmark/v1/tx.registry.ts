//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgLoadTest } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/cosmos.benchmark.v1.MsgLoadTest", MsgLoadTest],
];
export const MessageComposer = {
  encoded: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value,
      };
    },
  },
  toJSON: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.toJSON(value),
      };
    },
  },
  fromJSON: {
    loadTest(value: any) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.fromJSON(value),
      };
    },
  },
  fromPartial: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.fromPartial(value),
      };
    },
  },
};
