//@ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../../types.js";
import { BinaryReader } from "../../../binary.js";
import {
  MsgRegisterInterchainAccount,
  MsgRegisterInterchainAccountResponse,
  MsgSubmitTx,
  MsgSubmitTxResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "./tx.js";
/** Msg defines the Msg service. */
export interface Msg {
  registerInterchainAccount(
    request: MsgRegisterInterchainAccount,
  ): Promise<MsgRegisterInterchainAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerInterchainAccount(
    request: MsgRegisterInterchainAccount,
  ): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then((data) => MsgRegisterInterchainAccountResponse.decode(new BinaryReader(data)));
  }
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "SubmitTx", data);
    return promise.then((data) => MsgSubmitTxResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};
