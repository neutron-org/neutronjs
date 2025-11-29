//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgAddCurrencyPairs, MsgRemoveCurrencyPairs } from "./tx.js";
/**
 * AddCurrencyPairs will be used only by governance to update the set of
 * available CurrencyPairs. Given a set of CurrencyPair objects, update
 * the available currency pairs in the module .
 * @name addCurrencyPairs
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.AddCurrencyPairs
 */
export const addCurrencyPairs = buildTx<MsgAddCurrencyPairs>({
  msg: MsgAddCurrencyPairs,
});
/**
 * RemoveCurrencyPairs will be used explicitly by governance to remove the
 * given set of currency-pairs from the module's state. Thus these
 * CurrencyPairs will no longer have price-data available from this module.
 * @name removeCurrencyPairs
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.RemoveCurrencyPairs
 */
export const removeCurrencyPairs = buildTx<MsgRemoveCurrencyPairs>({
  msg: MsgRemoveCurrencyPairs,
});
