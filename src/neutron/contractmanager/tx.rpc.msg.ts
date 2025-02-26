/* eslint-disable */
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import {
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgResubmitFailure,
  MsgResubmitFailureResponse,
} from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  resubmitFailure(request: MsgResubmitFailure): Promise<MsgResubmitFailureResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.resubmitFailure = this.resubmitFailure.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.contractmanager.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  resubmitFailure(request: MsgResubmitFailure): Promise<MsgResubmitFailureResponse> {
    const data = MsgResubmitFailure.encode(request).finish();
    const promise = this.rpc.request("neutron.contractmanager.Msg", "ResubmitFailure", data);
    return promise.then((data) => MsgResubmitFailureResponse.decode(new BinaryReader(data)));
  }
}
