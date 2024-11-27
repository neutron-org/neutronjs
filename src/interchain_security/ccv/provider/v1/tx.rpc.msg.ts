/* eslint-disable */
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import {
  MsgAssignConsumerKey,
  MsgAssignConsumerKeyResponse,
  MsgSubmitConsumerMisbehaviour,
  MsgSubmitConsumerMisbehaviourResponse,
  MsgSubmitConsumerDoubleVoting,
  MsgSubmitConsumerDoubleVotingResponse,
  MsgConsumerAddition,
  MsgConsumerAdditionResponse,
  MsgConsumerRemoval,
  MsgConsumerRemovalResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgOptIn,
  MsgOptInResponse,
  MsgOptOut,
  MsgOptOutResponse,
  MsgSetConsumerCommissionRate,
  MsgSetConsumerCommissionRateResponse,
  MsgConsumerModification,
  MsgConsumerModificationResponse,
} from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  assignConsumerKey(request: MsgAssignConsumerKey): Promise<MsgAssignConsumerKeyResponse>;
  submitConsumerMisbehaviour(
    request: MsgSubmitConsumerMisbehaviour,
  ): Promise<MsgSubmitConsumerMisbehaviourResponse>;
  submitConsumerDoubleVoting(
    request: MsgSubmitConsumerDoubleVoting,
  ): Promise<MsgSubmitConsumerDoubleVotingResponse>;
  consumerAddition(request: MsgConsumerAddition): Promise<MsgConsumerAdditionResponse>;
  consumerRemoval(request: MsgConsumerRemoval): Promise<MsgConsumerRemovalResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  optIn(request: MsgOptIn): Promise<MsgOptInResponse>;
  optOut(request: MsgOptOut): Promise<MsgOptOutResponse>;
  setConsumerCommissionRate(
    request: MsgSetConsumerCommissionRate,
  ): Promise<MsgSetConsumerCommissionRateResponse>;
  consumerModification(request: MsgConsumerModification): Promise<MsgConsumerModificationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.assignConsumerKey = this.assignConsumerKey.bind(this);
    this.submitConsumerMisbehaviour = this.submitConsumerMisbehaviour.bind(this);
    this.submitConsumerDoubleVoting = this.submitConsumerDoubleVoting.bind(this);
    this.consumerAddition = this.consumerAddition.bind(this);
    this.consumerRemoval = this.consumerRemoval.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.optIn = this.optIn.bind(this);
    this.optOut = this.optOut.bind(this);
    this.setConsumerCommissionRate = this.setConsumerCommissionRate.bind(this);
    this.consumerModification = this.consumerModification.bind(this);
  }
  assignConsumerKey(request: MsgAssignConsumerKey): Promise<MsgAssignConsumerKeyResponse> {
    const data = MsgAssignConsumerKey.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "AssignConsumerKey", data);
    return promise.then((data) => MsgAssignConsumerKeyResponse.decode(new BinaryReader(data)));
  }
  submitConsumerMisbehaviour(
    request: MsgSubmitConsumerMisbehaviour,
  ): Promise<MsgSubmitConsumerMisbehaviourResponse> {
    const data = MsgSubmitConsumerMisbehaviour.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Msg",
      "SubmitConsumerMisbehaviour",
      data,
    );
    return promise.then((data) => MsgSubmitConsumerMisbehaviourResponse.decode(new BinaryReader(data)));
  }
  submitConsumerDoubleVoting(
    request: MsgSubmitConsumerDoubleVoting,
  ): Promise<MsgSubmitConsumerDoubleVotingResponse> {
    const data = MsgSubmitConsumerDoubleVoting.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Msg",
      "SubmitConsumerDoubleVoting",
      data,
    );
    return promise.then((data) => MsgSubmitConsumerDoubleVotingResponse.decode(new BinaryReader(data)));
  }
  consumerAddition(request: MsgConsumerAddition): Promise<MsgConsumerAdditionResponse> {
    const data = MsgConsumerAddition.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "ConsumerAddition", data);
    return promise.then((data) => MsgConsumerAdditionResponse.decode(new BinaryReader(data)));
  }
  consumerRemoval(request: MsgConsumerRemoval): Promise<MsgConsumerRemovalResponse> {
    const data = MsgConsumerRemoval.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "ConsumerRemoval", data);
    return promise.then((data) => MsgConsumerRemovalResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  optIn(request: MsgOptIn): Promise<MsgOptInResponse> {
    const data = MsgOptIn.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "OptIn", data);
    return promise.then((data) => MsgOptInResponse.decode(new BinaryReader(data)));
  }
  optOut(request: MsgOptOut): Promise<MsgOptOutResponse> {
    const data = MsgOptOut.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "OptOut", data);
    return promise.then((data) => MsgOptOutResponse.decode(new BinaryReader(data)));
  }
  setConsumerCommissionRate(
    request: MsgSetConsumerCommissionRate,
  ): Promise<MsgSetConsumerCommissionRateResponse> {
    const data = MsgSetConsumerCommissionRate.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Msg",
      "SetConsumerCommissionRate",
      data,
    );
    return promise.then((data) => MsgSetConsumerCommissionRateResponse.decode(new BinaryReader(data)));
  }
  consumerModification(request: MsgConsumerModification): Promise<MsgConsumerModificationResponse> {
    const data = MsgConsumerModification.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "ConsumerModification", data);
    return promise.then((data) => MsgConsumerModificationResponse.decode(new BinaryReader(data)));
  }
}
