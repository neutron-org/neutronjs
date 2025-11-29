//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryRegisteredQueriesRequest,
  QueryRegisteredQueriesResponse,
  QueryRegisteredQueryRequest,
  QueryRegisteredQueryResponse,
  QueryRegisteredQueryResultRequest,
  QueryRegisteredQueryResultResponse,
  QueryLastRemoteHeight,
  QueryLastRemoteHeightResponse,
} from "./query.js";
/**
 * Fetches the current parameters of the interchainqueries module.
 * @name getParams
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.interchainqueries.Query",
  method: "Params",
});
/**
 * Retrieves all registered Interchain Queries in the module, with optional filtering by owner
 * and/or connection ID.
 * @name getRegisteredQueries
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.RegisteredQueries
 */
export const getRegisteredQueries = buildQuery<QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponse>(
  {
    encode: QueryRegisteredQueriesRequest.encode,
    decode: QueryRegisteredQueriesResponse.decode,
    service: "neutron.interchainqueries.Query",
    method: "RegisteredQueries",
  },
);
/**
 * Fetches details of a registered Interchain Query using its ID.
 * @name getRegisteredQuery
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.RegisteredQuery
 */
export const getRegisteredQuery = buildQuery<QueryRegisteredQueryRequest, QueryRegisteredQueryResponse>({
  encode: QueryRegisteredQueryRequest.encode,
  decode: QueryRegisteredQueryResponse.decode,
  service: "neutron.interchainqueries.Query",
  method: "RegisteredQuery",
});
/**
 * Retrieves the most recent successfully submitted result of an Interchain Query. This is only
 * applicable for KV Interchain Queries.
 * @name getQueryResult
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.QueryResult
 */
export const getQueryResult = buildQuery<
  QueryRegisteredQueryResultRequest,
  QueryRegisteredQueryResultResponse
>({
  encode: QueryRegisteredQueryResultRequest.encode,
  decode: QueryRegisteredQueryResultResponse.decode,
  service: "neutron.interchainqueries.Query",
  method: "QueryResult",
});
/**
 * Retrieves the most recent height of a remote chain as known by the IBC client associated with
 * a given connection ID.
 * @name getLastRemoteHeight
 * @package neutron.interchainqueries
 * @see proto service: neutron.interchainqueries.LastRemoteHeight
 */
export const getLastRemoteHeight = buildQuery<QueryLastRemoteHeight, QueryLastRemoteHeightResponse>({
  encode: QueryLastRemoteHeight.encode,
  decode: QueryLastRemoteHeightResponse.decode,
  service: "neutron.interchainqueries.Query",
  method: "LastRemoteHeight",
});
