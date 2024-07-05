//@ts-nocheck
/* eslint-disable */
import * as _255 from "./alerts/module/v1/module";
import * as _256 from "./alerts/v1/alerts";
import * as _257 from "./alerts/v1/genesis";
import * as _258 from "./alerts/v1/query";
import * as _259 from "./alerts/v1/strategies";
import * as _260 from "./alerts/v1/tx";
import * as _261 from "./incentives/module/v1/module";
import * as _262 from "./incentives/v1/examples/badprice";
import * as _263 from "./incentives/v1/examples/goodprice";
import * as _264 from "./incentives/v1/genesis";
import * as _265 from "./incentives/v1/query";
import * as _266 from "./marketmap/module/v1/module";
import * as _267 from "./marketmap/v1/genesis";
import * as _268 from "./marketmap/v1/market";
import * as _269 from "./marketmap/v1/params";
import * as _270 from "./marketmap/v1/query";
import * as _271 from "./marketmap/v1/tx";
import * as _272 from "./oracle/module/v1/module";
import * as _273 from "./oracle/v1/genesis";
import * as _274 from "./oracle/v1/query";
import * as _275 from "./oracle/v1/tx";
import * as _276 from "./service/v1/oracle";
import * as _277 from "./sla/module/v1/module";
import * as _278 from "./sla/v1/genesis";
import * as _279 from "./sla/v1/query";
import * as _280 from "./sla/v1/tx";
import * as _281 from "./types/v1/currency_pair";
import * as _378 from "./alerts/v1/query.rpc.Query";
import * as _379 from "./incentives/v1/query.rpc.Query";
import * as _380 from "./marketmap/v1/query.rpc.Query";
import * as _381 from "./oracle/v1/query.rpc.Query";
import * as _382 from "./sla/v1/query.rpc.Query";
import * as _383 from "./alerts/v1/tx.rpc.msg";
import * as _384 from "./marketmap/v1/tx.rpc.msg";
import * as _385 from "./oracle/v1/tx.rpc.msg";
import * as _386 from "./sla/v1/tx.rpc.msg";
import * as _403 from "./rpc.query";
import * as _404 from "./rpc.tx";
export namespace slinky {
  export namespace alerts {
    export namespace module {
      export const v1 = {
        ..._255,
      };
    }
    export const v1 = {
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._378,
      ..._383,
    };
  }
  export namespace incentives {
    export namespace module {
      export const v1 = {
        ..._261,
      };
    }
    export const v1 = {
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._379,
    };
  }
  export namespace marketmap {
    export namespace module {
      export const v1 = {
        ..._266,
      };
    }
    export const v1 = {
      ..._267,
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._380,
      ..._384,
    };
  }
  export namespace oracle {
    export namespace module {
      export const v1 = {
        ..._272,
      };
    }
    export const v1 = {
      ..._273,
      ..._274,
      ..._275,
      ..._381,
      ..._385,
    };
  }
  export namespace service {
    export const v1 = {
      ..._276,
    };
  }
  export namespace sla {
    export namespace module {
      export const v1 = {
        ..._277,
      };
    }
    export const v1 = {
      ..._278,
      ..._279,
      ..._280,
      ..._382,
      ..._386,
    };
  }
  export namespace types {
    export const v1 = {
      ..._281,
    };
  }
  export const ClientFactory = {
    ..._403,
    ..._404,
  };
}
