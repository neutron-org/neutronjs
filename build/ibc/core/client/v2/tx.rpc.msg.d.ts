import { Rpc } from "../../../../helpers.js";
import { MsgRegisterCounterparty, MsgRegisterCounterpartyResponse, MsgUpdateClientConfig, MsgUpdateClientConfigResponse } from "./tx.js";
/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
    /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
    registerCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
    /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
    updateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
    updateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
