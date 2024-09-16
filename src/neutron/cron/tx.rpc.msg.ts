/* eslint-disable */
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import {
  MsgAddSchedule,
  MsgAddScheduleResponse,
  MsgRemoveSchedule,
  MsgRemoveScheduleResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "./tx";
/** Defines the Msg service. */
export interface Msg {
  /** Adds new schedule. */
  addSchedule(request: MsgAddSchedule): Promise<MsgAddScheduleResponse>;
  /** Removes schedule. */
  removeSchedule(request: MsgRemoveSchedule): Promise<MsgRemoveScheduleResponse>;
  /** Updates the module parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addSchedule = this.addSchedule.bind(this);
    this.removeSchedule = this.removeSchedule.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  addSchedule(request: MsgAddSchedule): Promise<MsgAddScheduleResponse> {
    const data = MsgAddSchedule.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Msg", "AddSchedule", data);
    return promise.then((data) => MsgAddScheduleResponse.decode(new BinaryReader(data)));
  }
  removeSchedule(request: MsgRemoveSchedule): Promise<MsgRemoveScheduleResponse> {
    const data = MsgRemoveSchedule.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Msg", "RemoveSchedule", data);
    return promise.then((data) => MsgRemoveScheduleResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
