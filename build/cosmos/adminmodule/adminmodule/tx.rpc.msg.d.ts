import { Rpc } from "../../../helpers.js";
import { MsgDeleteAdmin, MsgDeleteAdminResponse, MsgAddAdmin, MsgAddAdminResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgSubmitProposalLegacy, MsgSubmitProposalLegacyResponse } from "./tx.js";
/** Msg defines the Msg service. */
export interface Msg {
    deleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>;
    addAdmin(request: MsgAddAdmin): Promise<MsgAddAdminResponse>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    submitProposalLegacy(request: MsgSubmitProposalLegacy): Promise<MsgSubmitProposalLegacyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deleteAdmin(request: MsgDeleteAdmin): Promise<MsgDeleteAdminResponse>;
    addAdmin(request: MsgAddAdmin): Promise<MsgAddAdminResponse>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    submitProposalLegacy(request: MsgSubmitProposalLegacy): Promise<MsgSubmitProposalLegacyResponse>;
}
