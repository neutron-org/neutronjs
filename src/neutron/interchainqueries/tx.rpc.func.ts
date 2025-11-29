//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types.js";
import {
  MsgRegisterInterchainQuery,
  MsgSubmitQueryResult,
  MsgRemoveInterchainQueryRequest,
  MsgUpdateInterchainQueryRequest,
  MsgUpdateParams,
} from "./tx.js";
/**
 * Registers a new Interchain Query in the `interchainqueries` module. This message should only
 * be issued by a smart contract. The calling contract is automatically charged a query
 * registration deposit, based on the module's query deposit parameter. The deposit is refunded
 * when the query is removed. Ensure the contract's account has sufficient assets at the time of
 * message execution.
 *
 * The response includes the ID assigned to the registered query. Use a reply handler to process
 * this response and utilize the query ID.
 * @name registerInterchainQuery
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.RegisterInterchainQuery
 */
export const registerInterchainQuery = buildTx<MsgRegisterInterchainQuery>({
  msg: MsgRegisterInterchainQuery,
});
/**
 * Submits the result of an Interchain Query execution to the chain. Handling this message may
 * involve forwarding the result to the smart contract that owns the query for processing, which
 * could require significant gas usage.
 * @name submitQueryResult
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.SubmitQueryResult
 */
export const submitQueryResult = buildTx<MsgSubmitQueryResult>({
  msg: MsgSubmitQueryResult,
});
/**
 * Removes a specific Interchain Query and its results from the module. The query can only be
 * removed by its owner during the query's submit timeout. After the timeout, anyone can remove
 * it. Upon successful removal, the query deposit is refunded to the caller.
 * @name removeInterchainQuery
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.RemoveInterchainQuery
 */
export const removeInterchainQuery = buildTx<MsgRemoveInterchainQueryRequest>({
  msg: MsgRemoveInterchainQueryRequest,
});
/**
 * Updates the parameters of a registered Interchain Query. This action can only be performed by
 * the query's owner.
 * @name updateInterchainQuery
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.UpdateInterchainQuery
 */
export const updateInterchainQuery = buildTx<MsgUpdateInterchainQueryRequest>({
  msg: MsgUpdateInterchainQueryRequest,
});
/**
 * Updates the parameters of the `interchainqueries` module. This action can only be performed
 * by the module's authority.
 * @name updateParams
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
