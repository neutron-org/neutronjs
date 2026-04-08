import { Rpc } from "../../../../helpers.js";
import { MsgSendPacket, MsgSendPacketResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgAcknowledgement, MsgAcknowledgementResponse } from "./tx.js";
/** Msg defines the ibc/channel/v2 Msg service. */
export interface Msg {
    /** SendPacket defines a rpc handler method for MsgSendPacket. */
    sendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    sendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
