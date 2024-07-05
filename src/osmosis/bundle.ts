//@ts-nocheck
/* eslint-disable */
import * as _254 from "./tokenfactory/params";
import * as _376 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _377 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _401 from "./rpc.query";
import * as _402 from "./rpc.tx";
export namespace osmosis {
  export const tokenfactory = {
    ..._254,
    v1beta1: {
      ..._376,
      ..._377,
    },
  };
  export const ClientFactory = {
    ..._401,
    ..._402,
  };
}
