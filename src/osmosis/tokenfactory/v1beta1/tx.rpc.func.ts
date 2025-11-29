//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import {
  MsgCreateDenom,
  MsgMint,
  MsgBurn,
  MsgChangeAdmin,
  MsgSetDenomMetadata,
  MsgSetBeforeSendHook,
  MsgForceTransfer,
  MsgUpdateParams,
} from "./tx.js";
/**
 * @name createDenom
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.CreateDenom
 */
export const createDenom = buildTx<MsgCreateDenom>({
  msg: MsgCreateDenom,
});
/**
 * @name mint
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Mint
 */
export const mint = buildTx<MsgMint>({
  msg: MsgMint,
});
/**
 * @name burn
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Burn
 */
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn,
});
/**
 * @name changeAdmin
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.ChangeAdmin
 */
export const changeAdmin = buildTx<MsgChangeAdmin>({
  msg: MsgChangeAdmin,
});
/**
 * @name setDenomMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.SetDenomMetadata
 */
export const setDenomMetadata = buildTx<MsgSetDenomMetadata>({
  msg: MsgSetDenomMetadata,
});
/**
 * @name setBeforeSendHook
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.SetBeforeSendHook
 */
export const setBeforeSendHook = buildTx<MsgSetBeforeSendHook>({
  msg: MsgSetBeforeSendHook,
});
/**
 * @name forceTransfer
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.ForceTransfer
 */
export const forceTransfer = buildTx<MsgForceTransfer>({
  msg: MsgForceTransfer,
});
/**
 * @name updateParams
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
