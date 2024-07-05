//@ts-nocheck
/* eslint-disable */
import * as _204 from "./globalfee/v1beta1/genesis";
import * as _205 from "./globalfee/v1beta1/params";
import * as _206 from "./globalfee/v1beta1/query";
import * as _207 from "./globalfee/v1beta1/tx";
import * as _357 from "./globalfee/v1beta1/query.rpc.Query";
import * as _358 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _397 from "./rpc.query";
import * as _398 from "./rpc.tx";
export namespace gaia {
  export namespace globalfee {
    export const v1beta1 = {
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._357,
      ..._358,
    };
  }
  export const ClientFactory = {
    ..._397,
    ..._398,
  };
}
