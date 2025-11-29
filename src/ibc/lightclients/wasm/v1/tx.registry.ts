//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../../types.js";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/ibc.lightclients.wasm.v1.MsgStoreCode", MsgStoreCode],
  ["/ibc.lightclients.wasm.v1.MsgRemoveChecksum", MsgRemoveChecksum],
  ["/ibc.lightclients.wasm.v1.MsgMigrateContract", MsgMigrateContract],
];
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish(),
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.encode(value).finish(),
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value,
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value,
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value,
      };
    },
  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.toJSON(value),
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.toJSON(value),
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.toJSON(value),
      };
    },
  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value),
      };
    },
    removeChecksum(value: any) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.fromJSON(value),
      };
    },
    migrateContract(value: any) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromJSON(value),
      };
    },
  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value),
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.fromPartial(value),
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value),
      };
    },
  },
};
