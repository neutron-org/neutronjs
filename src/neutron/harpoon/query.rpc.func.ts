//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import { QuerySubscribedContractsRequest, QuerySubscribedContractsResponse } from "./query.js";
/**
 * Retrieves contracts subscribed to a specific hook type.
 * @name getSubscribedContracts
 * @package neutron.harpoon
 * @see proto service: neutron.harpoon.SubscribedContracts
 */
export const getSubscribedContracts = buildQuery<
  QuerySubscribedContractsRequest,
  QuerySubscribedContractsResponse
>({
  encode: QuerySubscribedContractsRequest.encode,
  decode: QuerySubscribedContractsResponse.decode,
  service: "neutron.harpoon.Query",
  method: "SubscribedContracts",
});
