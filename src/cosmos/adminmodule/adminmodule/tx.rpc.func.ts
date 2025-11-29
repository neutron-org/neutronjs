//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx.js";
/**
 * @name deleteAdmin
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.DeleteAdmin
 */
export const deleteAdmin = buildTx<MsgDeleteAdmin>({
  msg: MsgDeleteAdmin,
});
/**
 * @name addAdmin
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.AddAdmin
 */
export const addAdmin = buildTx<MsgAddAdmin>({
  msg: MsgAddAdmin,
});
/**
 * @name submitProposal
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.SubmitProposal
 */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal,
});
/**
 * @name submitProposalLegacy
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.SubmitProposalLegacy
 */
export const submitProposalLegacy = buildTx<MsgSubmitProposalLegacy>({
  msg: MsgSubmitProposalLegacy,
});
