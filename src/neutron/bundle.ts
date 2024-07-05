//@ts-nocheck
/* eslint-disable */
import * as _208 from "./contractmanager/failure";
import * as _209 from "./contractmanager/genesis";
import * as _210 from "./contractmanager/params";
import * as _211 from "./contractmanager/query";
import * as _212 from "./contractmanager/tx";
import * as _213 from "./cron/genesis";
import * as _214 from "./cron/params";
import * as _215 from "./cron/query";
import * as _216 from "./cron/schedule";
import * as _217 from "./cron/tx";
import * as _218 from "./dex/deposit_record";
import * as _219 from "./dex/limit_order_expiration";
import * as _220 from "./dex/limit_order_tranche_user";
import * as _221 from "./dex/limit_order_tranche";
import * as _222 from "./dex/pair_id";
import * as _223 from "./dex/params";
import * as _224 from "./dex/pool_metadata";
import * as _225 from "./dex/pool_reserves";
import * as _226 from "./dex/pool";
import * as _227 from "./dex/query";
import * as _228 from "./dex/tick_liquidity";
import * as _229 from "./dex/trade_pair_id";
import * as _230 from "./dex/tx";
import * as _231 from "./dynamicfees/v1/genesis";
import * as _232 from "./dynamicfees/v1/params";
import * as _233 from "./dynamicfees/v1/query";
import * as _234 from "./dynamicfees/v1/tx";
import * as _235 from "./feeburner/genesis";
import * as _236 from "./feeburner/params";
import * as _237 from "./feeburner/query";
import * as _238 from "./feeburner/total_burned_neutrons_amount";
import * as _239 from "./feeburner/tx";
import * as _240 from "./feerefunder/fee";
import * as _241 from "./feerefunder/genesis";
import * as _242 from "./feerefunder/params";
import * as _243 from "./feerefunder/query";
import * as _244 from "./feerefunder/tx";
import * as _245 from "./interchainqueries/genesis";
import * as _246 from "./interchainqueries/params";
import * as _247 from "./interchainqueries/query";
import * as _248 from "./interchainqueries/tx";
import * as _249 from "./interchaintxs/v1/genesis";
import * as _250 from "./interchaintxs/v1/params";
import * as _251 from "./interchaintxs/v1/query";
import * as _252 from "./interchaintxs/v1/tx";
import * as _253 from "./transfer/v1/tx";
import * as _359 from "./contractmanager/query.rpc.Query";
import * as _360 from "./cron/query.rpc.Query";
import * as _361 from "./dex/query.rpc.Query";
import * as _362 from "./dynamicfees/v1/query.rpc.Query";
import * as _363 from "./feeburner/query.rpc.Query";
import * as _364 from "./feerefunder/query.rpc.Query";
import * as _365 from "./interchainqueries/query.rpc.Query";
import * as _366 from "./interchaintxs/v1/query.rpc.Query";
import * as _367 from "./contractmanager/tx.rpc.msg";
import * as _368 from "./cron/tx.rpc.msg";
import * as _369 from "./dex/tx.rpc.msg";
import * as _370 from "./dynamicfees/v1/tx.rpc.msg";
import * as _371 from "./feeburner/tx.rpc.msg";
import * as _372 from "./feerefunder/tx.rpc.msg";
import * as _373 from "./interchainqueries/tx.rpc.msg";
import * as _374 from "./interchaintxs/v1/tx.rpc.msg";
import * as _375 from "./transfer/v1/tx.rpc.msg";
import * as _399 from "./rpc.query";
import * as _400 from "./rpc.tx";
export namespace neutron {
  export const contractmanager = {
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._359,
    ..._367,
  };
  export const cron = {
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._360,
    ..._368,
  };
  export const dex = {
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._361,
    ..._369,
  };
  export namespace dynamicfees {
    export const v1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._362,
      ..._370,
    };
  }
  export const feeburner = {
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._363,
    ..._371,
  };
  export const feerefunder = {
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._364,
    ..._372,
  };
  export const interchainqueries = {
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._365,
    ..._373,
  };
  export namespace interchaintxs {
    export const v1 = {
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._366,
      ..._374,
    };
  }
  export const transfer = {
    ..._253,
    ..._375,
  };
  export const ClientFactory = {
    ..._399,
    ..._400,
  };
}
