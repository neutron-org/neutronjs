//@ts-nocheck
/* eslint-disable */
import * as _152 from "./feemarket/module/v1/module";
import * as _153 from "./feemarket/v1/genesis";
import * as _154 from "./feemarket/v1/params";
import * as _155 from "./feemarket/v1/query";
import * as _156 from "./feemarket/v1/tx";
import * as _339 from "./feemarket/v1/query.rpc.Query";
import * as _340 from "./feemarket/v1/tx.rpc.msg";
import * as _393 from "./rpc.query";
import * as _394 from "./rpc.tx";
export namespace feemarket {
  export namespace feemarket {
    export namespace module {
      export const v1 = {
        ..._152,
      };
    }
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._339,
      ..._340,
    };
  }
  export const ClientFactory = {
    ..._393,
    ..._394,
  };
}
