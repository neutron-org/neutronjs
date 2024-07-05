//@ts-nocheck
/* eslint-disable */
import * as _159 from "./applications/fee/v1/ack";
import * as _160 from "./applications/fee/v1/fee";
import * as _161 from "./applications/fee/v1/genesis";
import * as _162 from "./applications/fee/v1/metadata";
import * as _163 from "./applications/fee/v1/query";
import * as _164 from "./applications/fee/v1/tx";
import * as _165 from "./applications/interchain_accounts/controller/v1/controller";
import * as _166 from "./applications/interchain_accounts/controller/v1/query";
import * as _167 from "./applications/interchain_accounts/controller/v1/tx";
import * as _168 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _169 from "./applications/interchain_accounts/host/v1/host";
import * as _170 from "./applications/interchain_accounts/host/v1/query";
import * as _171 from "./applications/interchain_accounts/host/v1/tx";
import * as _172 from "./applications/interchain_accounts/v1/account";
import * as _173 from "./applications/interchain_accounts/v1/metadata";
import * as _174 from "./applications/interchain_accounts/v1/packet";
import * as _175 from "./applications/transfer/v1/authz";
import * as _176 from "./applications/transfer/v1/genesis";
import * as _177 from "./applications/transfer/v1/query";
import * as _178 from "./applications/transfer/v1/transfer";
import * as _179 from "./applications/transfer/v1/tx";
import * as _180 from "./applications/transfer/v2/packet";
import * as _181 from "./core/channel/v1/channel";
import * as _182 from "./core/channel/v1/genesis";
import * as _183 from "./core/channel/v1/query";
import * as _184 from "./core/channel/v1/tx";
import * as _185 from "./core/channel/v1/upgrade";
import * as _186 from "./core/client/v1/client";
import * as _187 from "./core/client/v1/genesis";
import * as _188 from "./core/client/v1/query";
import * as _189 from "./core/client/v1/tx";
import * as _190 from "./core/commitment/v1/commitment";
import * as _191 from "./core/connection/v1/connection";
import * as _192 from "./core/connection/v1/genesis";
import * as _193 from "./core/connection/v1/query";
import * as _194 from "./core/connection/v1/tx";
import * as _195 from "./core/types/v1/genesis";
import * as _196 from "./lightclients/localhost/v2/localhost";
import * as _197 from "./lightclients/solomachine/v2/solomachine";
import * as _198 from "./lightclients/solomachine/v3/solomachine";
import * as _199 from "./lightclients/tendermint/v1/tendermint";
import * as _200 from "./lightclients/wasm/v1/genesis";
import * as _201 from "./lightclients/wasm/v1/query";
import * as _202 from "./lightclients/wasm/v1/tx";
import * as _203 from "./lightclients/wasm/v1/wasm";
import * as _341 from "./applications/fee/v1/query.rpc.Query";
import * as _342 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _343 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _344 from "./applications/transfer/v1/query.rpc.Query";
import * as _345 from "./core/channel/v1/query.rpc.Query";
import * as _346 from "./core/client/v1/query.rpc.Query";
import * as _347 from "./core/connection/v1/query.rpc.Query";
import * as _348 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _349 from "./applications/fee/v1/tx.rpc.msg";
import * as _350 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _351 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _352 from "./applications/transfer/v1/tx.rpc.msg";
import * as _353 from "./core/channel/v1/tx.rpc.msg";
import * as _354 from "./core/client/v1/tx.rpc.msg";
import * as _355 from "./core/connection/v1/tx.rpc.msg";
import * as _356 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _395 from "./rpc.query";
import * as _396 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._341,
        ..._349,
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._165,
          ..._166,
          ..._167,
          ..._342,
          ..._350,
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._168,
        };
      }
      export namespace host {
        export const v1 = {
          ..._169,
          ..._170,
          ..._171,
          ..._343,
          ..._351,
        };
      }
      export const v1 = {
        ..._172,
        ..._173,
        ..._174,
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._344,
        ..._352,
      };
      export const v2 = {
        ..._180,
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._185,
        ..._345,
        ..._353,
      };
    }
    export namespace client {
      export const v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._346,
        ..._354,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._190,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._191,
        ..._192,
        ..._193,
        ..._194,
        ..._347,
        ..._355,
      };
    }
    export namespace types {
      export const v1 = {
        ..._195,
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._196,
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._197,
      };
      export const v3 = {
        ..._198,
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._199,
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._200,
        ..._201,
        ..._202,
        ..._203,
        ..._348,
        ..._356,
      };
    }
  }
  export const ClientFactory = {
    ..._395,
    ..._396,
  };
}
