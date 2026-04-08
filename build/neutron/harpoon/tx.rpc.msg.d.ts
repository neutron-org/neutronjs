import { Rpc } from "../../helpers.js";
import { MsgManageHookSubscription, MsgManageHookSubscriptionResponse } from "./tx.js";
/** Defines the Msg interface of the module. */
export interface Msg {
    /**
     * Updates hook subscriptions for a specific contract address.
     * To remove a subscription, pass an empty array to `hook_subscription.hooks`.
     * Can only be executed by the module's authority.
     */
    manageHookSubscription(request: MsgManageHookSubscription): Promise<MsgManageHookSubscriptionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    manageHookSubscription(request: MsgManageHookSubscription): Promise<MsgManageHookSubscriptionResponse>;
}
