//@ts-nocheck
/* eslint-disable */
import { Rpc } from "../../../helpers.js";
import { BinaryReader } from "../../../binary.js";
import { MsgLoadTest, MsgLoadTestResponse } from "./tx.js";
/** Msg defines the benchmark Msg service. */
export interface Msg {
  /** LoadTest defines a method for executing a sequence of load test operations. */
  loadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.loadTest = this.loadTest.bind(this);
  }
  loadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse> {
    const data = MsgLoadTest.encode(request).finish();
    const promise = this.rpc.request("cosmos.benchmark.v1.Msg", "LoadTest", data);
    return promise.then((data) => MsgLoadTestResponse.decode(new BinaryReader(data)));
  }
}
