//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  QueryAdminsRequest,
  QueryAdminsResponse,
  QueryArchivedProposalsRequest,
  QueryArchivedProposalsResponse,
  QueryArchivedProposalsLegacyRequest,
  QueryArchivedProposalsLegacyResponse,
} from "./query.js";
/**
 * Queries a list of admins items.
 * @name getAdmins
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.Admins
 */
export const getAdmins = buildQuery<QueryAdminsRequest, QueryAdminsResponse>({
  encode: QueryAdminsRequest.encode,
  decode: QueryAdminsResponse.decode,
  service: "cosmos.adminmodule.adminmodule.Query",
  method: "Admins",
});
/**
 * Queries a list of archived proposals.
 * @name getArchivedProposals
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.ArchivedProposals
 */
export const getArchivedProposals = buildQuery<QueryArchivedProposalsRequest, QueryArchivedProposalsResponse>(
  {
    encode: QueryArchivedProposalsRequest.encode,
    decode: QueryArchivedProposalsResponse.decode,
    service: "cosmos.adminmodule.adminmodule.Query",
    method: "ArchivedProposals",
  },
);
/**
 * Queries a list of archived proposals.
 * @name getArchivedProposalsLegacy
 * @package cosmos.adminmodule.adminmodule
 * @see proto service: cosmos.adminmodule.adminmodule.ArchivedProposalsLegacy
 */
export const getArchivedProposalsLegacy = buildQuery<
  QueryArchivedProposalsLegacyRequest,
  QueryArchivedProposalsLegacyResponse
>({
  encode: QueryArchivedProposalsLegacyRequest.encode,
  decode: QueryArchivedProposalsLegacyResponse.decode,
  service: "cosmos.adminmodule.adminmodule.Query",
  method: "ArchivedProposalsLegacy",
});
