//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  QueryVerifyStateValuesRequest,
  QueryVerifyStateValuesResponse,
  QueryConsensusStateRequest,
  QueryConsensusStateResponse,
} from "./query.js";
/**
 * Verifies the values and returns an error if values cannot be verified. The query returns `QueryVerifyStateValuesResponse` response.
 * @name getVerifyStateValues
 * @package neutron.state_verifier.v1
 * @see proto service: neutron.state_verifier.v1.VerifyStateValues
 */
export const getVerifyStateValues = buildQuery<QueryVerifyStateValuesRequest, QueryVerifyStateValuesResponse>(
  {
    encode: QueryVerifyStateValuesRequest.encode,
    decode: QueryVerifyStateValuesResponse.decode,
    service: "neutron.state_verifier.v1.Query",
    method: "VerifyStateValues",
  },
);
/**
 * Queries saved consensus state by the height. The query returns `QueryConsensusStateResponse` response.
 * @name getQueryConsensusState
 * @package neutron.state_verifier.v1
 * @see proto service: neutron.state_verifier.v1.QueryConsensusState
 */
export const getQueryConsensusState = buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "neutron.state_verifier.v1.Query",
  method: "QueryConsensusState",
});
