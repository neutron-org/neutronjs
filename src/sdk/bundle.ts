//@ts-nocheck
/* eslint-disable */
import * as _135 from "./auction/module/v1/module";
import * as _136 from "./auction/v1/genesis";
import * as _137 from "./auction/v1/query";
import * as _138 from "./auction/v1/tx";
import * as _139 from "./mempool/v1/query";
import * as _140 from "./proposals/v1/types";
import * as _336 from "./auction/v1/query.rpc.Query";
import * as _337 from "./mempool/v1/query.rpc.Service";
import * as _338 from "./auction/v1/tx.rpc.msg";
import * as _391 from "./rpc.query";
import * as _392 from "./rpc.tx";
export namespace sdk {
  export namespace auction {
    export namespace module {
      export const v1 = {
        ..._135,
      };
    }
    export const v1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._336,
      ..._338,
    };
  }
  export namespace mempool {
    export const v1 = {
      ..._139,
      ..._337,
    };
  }
  export namespace proposals {
    export const v1 = {
      ..._140,
    };
  }
  export const ClientFactory = {
    ..._391,
    ..._392,
  };
}
