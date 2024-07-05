//@ts-nocheck
/* eslint-disable */
import * as _2 from "./adminmodule/adminmodule/genesis";
import * as _3 from "./adminmodule/adminmodule/query";
import * as _4 from "./adminmodule/adminmodule/tx";
import * as _5 from "./base/v1beta1/coin";
import * as _6 from "./base/abci/v1beta1/abci";
import * as _7 from "./base/node/v1beta1/query";
import * as _8 from "./base/query/v1beta1/pagination";
import * as _9 from "./base/reflection/v1beta1/reflection";
import * as _10 from "./base/reflection/v2alpha1/reflection";
import * as _11 from "./base/tendermint/v1beta1/query";
import * as _12 from "./base/tendermint/v1beta1/types";
import * as _13 from "./gov/v1/gov";
import * as _14 from "./gov/v1/genesis";
import * as _15 from "./gov/v1/query";
import * as _16 from "./gov/v1/tx";
import * as _17 from "./gov/v1beta1/gov";
import * as _18 from "./gov/v1beta1/genesis";
import * as _19 from "./gov/v1beta1/query";
import * as _20 from "./gov/v1beta1/tx";
import * as _21 from "./gov/module/v1/module";
import * as _22 from "./msg/v1/msg";
import * as _23 from "./msg/textual/v1/textual";
import * as _24 from "./app/v1alpha1/module";
import * as _25 from "./app/v1alpha1/config";
import * as _26 from "./app/v1alpha1/query";
import * as _27 from "./app/runtime/v1alpha1/module";
import * as _28 from "./query/v1/query";
import * as _29 from "./auth/module/v1/module";
import * as _30 from "./auth/v1beta1/auth";
import * as _31 from "./auth/v1beta1/genesis";
import * as _32 from "./auth/v1beta1/query";
import * as _33 from "./auth/v1beta1/tx";
import * as _34 from "./authz/module/v1/module";
import * as _35 from "./authz/v1beta1/authz";
import * as _36 from "./authz/v1beta1/event";
import * as _37 from "./authz/v1beta1/genesis";
import * as _38 from "./authz/v1beta1/query";
import * as _39 from "./authz/v1beta1/tx";
import * as _40 from "./autocli/v1/options";
import * as _41 from "./autocli/v1/query";
import * as _42 from "./bank/module/v1/module";
import * as _43 from "./bank/v1beta1/authz";
import * as _44 from "./bank/v1beta1/bank";
import * as _45 from "./bank/v1beta1/genesis";
import * as _46 from "./bank/v1beta1/query";
import * as _47 from "./bank/v1beta1/tx";
import * as _48 from "./circuit/module/v1/module";
import * as _49 from "./circuit/v1/query";
import * as _50 from "./circuit/v1/tx";
import * as _51 from "./circuit/v1/types";
import * as _52 from "./consensus/module/v1/module";
import * as _53 from "./consensus/v1/query";
import * as _54 from "./consensus/v1/tx";
import * as _55 from "./crisis/module/v1/module";
import * as _56 from "./crisis/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/tx";
import * as _58 from "./crypto/ed25519/keys";
import * as _59 from "./crypto/hd/v1/hd";
import * as _60 from "./crypto/keyring/v1/record";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/module/v1/module";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/module/v1/module";
import * as _70 from "./evidence/v1beta1/evidence";
import * as _71 from "./evidence/v1beta1/genesis";
import * as _72 from "./evidence/v1beta1/query";
import * as _73 from "./evidence/v1beta1/tx";
import * as _74 from "./feegrant/module/v1/module";
import * as _75 from "./feegrant/v1beta1/feegrant";
import * as _76 from "./feegrant/v1beta1/genesis";
import * as _77 from "./feegrant/v1beta1/query";
import * as _78 from "./feegrant/v1beta1/tx";
import * as _79 from "./genutil/module/v1/module";
import * as _80 from "./genutil/v1beta1/genesis";
import * as _81 from "./group/module/v1/module";
import * as _82 from "./group/v1/events";
import * as _83 from "./group/v1/genesis";
import * as _84 from "./group/v1/query";
import * as _85 from "./group/v1/tx";
import * as _86 from "./group/v1/types";
import * as _87 from "./mint/module/v1/module";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _91 from "./mint/v1beta1/tx";
import * as _92 from "./nft/module/v1/module";
import * as _93 from "./nft/v1beta1/event";
import * as _94 from "./nft/v1beta1/genesis";
import * as _95 from "./nft/v1beta1/nft";
import * as _96 from "./nft/v1beta1/query";
import * as _97 from "./nft/v1beta1/tx";
import * as _98 from "./orm/module/v1alpha1/module";
import * as _99 from "./orm/query/v1alpha1/query";
import * as _100 from "./orm/v1/orm";
import * as _101 from "./orm/v1alpha1/schema";
import * as _102 from "./params/module/v1/module";
import * as _103 from "./params/v1beta1/params";
import * as _104 from "./params/v1beta1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/module/v1/module";
import * as _112 from "./staking/v1beta1/authz";
import * as _113 from "./staking/v1beta1/genesis";
import * as _114 from "./staking/v1beta1/query";
import * as _115 from "./staking/v1beta1/staking";
import * as _116 from "./staking/v1beta1/tx";
import * as _117 from "./store/internal/kv/v1beta1/kv";
import * as _118 from "./store/snapshots/v1/snapshot";
import * as _119 from "./store/streaming/abci/grpc";
import * as _120 from "./store/v1beta1/commit_info";
import * as _121 from "./store/v1beta1/listening";
import * as _122 from "./tx/config/v1/config";
import * as _123 from "./tx/signing/v1beta1/signing";
import * as _124 from "./tx/v1beta1/service";
import * as _125 from "./tx/v1beta1/tx";
import * as _126 from "./upgrade/module/v1/module";
import * as _127 from "./upgrade/v1beta1/query";
import * as _128 from "./upgrade/v1beta1/tx";
import * as _129 from "./upgrade/v1beta1/upgrade";
import * as _130 from "./vesting/module/v1/module";
import * as _131 from "./vesting/v1beta1/tx";
import * as _132 from "./vesting/v1beta1/vesting";
import * as _133 from "./ics23/v1/proofs";
import * as _293 from "./adminmodule/adminmodule/query.rpc.Query";
import * as _294 from "./app/v1alpha1/query.rpc.Query";
import * as _295 from "./auth/v1beta1/query.rpc.Query";
import * as _296 from "./authz/v1beta1/query.rpc.Query";
import * as _297 from "./autocli/v1/query.rpc.Query";
import * as _298 from "./bank/v1beta1/query.rpc.Query";
import * as _299 from "./base/node/v1beta1/query.rpc.Service";
import * as _300 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _301 from "./circuit/v1/query.rpc.Query";
import * as _302 from "./consensus/v1/query.rpc.Query";
import * as _303 from "./distribution/v1beta1/query.rpc.Query";
import * as _304 from "./evidence/v1beta1/query.rpc.Query";
import * as _305 from "./feegrant/v1beta1/query.rpc.Query";
import * as _306 from "./gov/v1/query.rpc.Query";
import * as _307 from "./gov/v1beta1/query.rpc.Query";
import * as _308 from "./group/v1/query.rpc.Query";
import * as _309 from "./mint/v1beta1/query.rpc.Query";
import * as _310 from "./nft/v1beta1/query.rpc.Query";
import * as _311 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _312 from "./params/v1beta1/query.rpc.Query";
import * as _313 from "./slashing/v1beta1/query.rpc.Query";
import * as _314 from "./staking/v1beta1/query.rpc.Query";
import * as _315 from "./tx/v1beta1/service.rpc.Service";
import * as _316 from "./upgrade/v1beta1/query.rpc.Query";
import * as _317 from "./adminmodule/adminmodule/tx.rpc.msg";
import * as _318 from "./auth/v1beta1/tx.rpc.msg";
import * as _319 from "./authz/v1beta1/tx.rpc.msg";
import * as _320 from "./bank/v1beta1/tx.rpc.msg";
import * as _321 from "./circuit/v1/tx.rpc.msg";
import * as _322 from "./consensus/v1/tx.rpc.msg";
import * as _323 from "./crisis/v1beta1/tx.rpc.msg";
import * as _324 from "./distribution/v1beta1/tx.rpc.msg";
import * as _325 from "./evidence/v1beta1/tx.rpc.msg";
import * as _326 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _327 from "./gov/v1/tx.rpc.msg";
import * as _328 from "./gov/v1beta1/tx.rpc.msg";
import * as _329 from "./group/v1/tx.rpc.msg";
import * as _330 from "./mint/v1beta1/tx.rpc.msg";
import * as _331 from "./nft/v1beta1/tx.rpc.msg";
import * as _332 from "./slashing/v1beta1/tx.rpc.msg";
import * as _333 from "./staking/v1beta1/tx.rpc.msg";
import * as _334 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _335 from "./vesting/v1beta1/tx.rpc.msg";
import * as _389 from "./rpc.query";
import * as _390 from "./rpc.tx";
export namespace cosmos {
  export namespace adminmodule {
    export const adminmodule = {
      ..._2,
      ..._3,
      ..._4,
      ..._293,
      ..._317,
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._5,
    };
    export namespace abci {
      export const v1beta1 = {
        ..._6,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._7,
        ..._299,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._8,
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._9,
      };
      export const v2alpha1 = {
        ..._10,
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._11,
        ..._12,
        ..._300,
      };
    }
  }
  export namespace gov {
    export const v1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._306,
      ..._327,
    };
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._307,
      ..._328,
    };
    export namespace module {
      export const v1 = {
        ..._21,
      };
    }
  }
  export namespace msg {
    export const v1 = {
      ..._22,
    };
    export namespace textual {
      export const v1 = {
        ..._23,
      };
    }
  }
  export namespace app {
    export const v1alpha1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._294,
    };
    export namespace runtime {
      export const v1alpha1 = {
        ..._27,
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._28,
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._29,
      };
    }
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._295,
      ..._318,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._34,
      };
    }
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._296,
      ..._319,
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._40,
      ..._41,
      ..._297,
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._42,
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._298,
      ..._320,
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._48,
      };
    }
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._301,
      ..._321,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._52,
      };
    }
    export const v1 = {
      ..._53,
      ..._54,
      ..._302,
      ..._322,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._55,
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._323,
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._58,
    };
    export namespace hd {
      export const v1 = {
        ..._59,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._60,
      };
    }
    export const multisig = {
      ..._61,
    };
    export const secp256k1 = {
      ..._62,
    };
    export const secp256r1 = {
      ..._63,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._64,
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._303,
      ..._324,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._69,
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._304,
      ..._325,
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._74,
      };
    }
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._305,
      ..._326,
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._79,
      };
    }
    export const v1beta1 = {
      ..._80,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._81,
      };
    }
    export const v1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._308,
      ..._329,
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._87,
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._309,
      ..._330,
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._92,
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._310,
      ..._331,
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._98,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._99,
        ..._311,
      };
    }
    export const v1 = {
      ..._100,
    };
    export const v1alpha1 = {
      ..._101,
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._102,
      };
    }
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._312,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._105,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._106,
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._313,
      ..._332,
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._111,
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._314,
      ..._333,
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._117,
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._118,
      };
    }
    export namespace streaming {
      export const abci = {
        ..._119,
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._122,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._123,
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._315,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._126,
      };
    }
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._316,
      ..._334,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._130,
      };
    }
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._335,
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._133,
    };
  }
  export const ClientFactory = {
    ..._389,
    ..._390,
  };
}
