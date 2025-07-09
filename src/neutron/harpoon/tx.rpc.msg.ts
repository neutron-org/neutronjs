//@ts-nocheck
/* eslint-disable */
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgManageHookSubscription, MsgManageHookSubscriptionResponse } from "./tx";
/** Defines the Msg interface of the module. */
export interface Msg {
  /**
   * Updates hook subscriptions for a specific contract address.
   * To remove a subscription, pass an empty array to `hook_subscription.hooks`.
   * Can only be executed by the module's authority.
   */
  manageHookSubscription(request: MsgManageHookSubscription): Promise<MsgManageHookSubscriptionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.manageHookSubscription = this.manageHookSubscription.bind(this);
  }
  manageHookSubscription(request: MsgManageHookSubscription): Promise<MsgManageHookSubscriptionResponse> {
    const data = MsgManageHookSubscription.encode(request).finish();
    const promise = this.rpc.request("neutron.harpoon.Msg", "ManageHookSubscription", data);
    return promise.then((data) => MsgManageHookSubscriptionResponse.decode(new BinaryReader(data)));
  }
}
