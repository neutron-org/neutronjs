//@ts-nocheck
/* eslint-disable */
import * as _282 from "./wasm/v1/authz";
import * as _283 from "./wasm/v1/genesis";
import * as _284 from "./wasm/v1/ibc";
import * as _285 from "./wasm/v1/proposal_legacy";
import * as _286 from "./wasm/v1/query";
import * as _287 from "./wasm/v1/tx";
import * as _288 from "./wasm/v1/types";
import * as _387 from "./wasm/v1/query.rpc.Query";
import * as _388 from "./wasm/v1/tx.rpc.msg";
import * as _405 from "./rpc.query";
import * as _406 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._387,
      ..._388,
    };
  }
  export const ClientFactory = {
    ..._405,
    ..._406,
  };
}
