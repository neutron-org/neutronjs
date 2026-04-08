import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAdminsRequest, QueryAdminsResponse, QueryArchivedProposalsRequest, QueryArchivedProposalsResponse, QueryArchivedProposalsLegacyRequest, QueryArchivedProposalsLegacyResponse } from "./query.js";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of admins items. */
    admins(request?: QueryAdminsRequest): Promise<QueryAdminsResponse>;
    /** Queries a list of archived proposals. */
    archivedProposals(request?: QueryArchivedProposalsRequest): Promise<QueryArchivedProposalsResponse>;
    /** Queries a list of archived proposals. */
    archivedProposalsLegacy(request?: QueryArchivedProposalsLegacyRequest): Promise<QueryArchivedProposalsLegacyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    admins(request?: QueryAdminsRequest): Promise<QueryAdminsResponse>;
    archivedProposals(request?: QueryArchivedProposalsRequest): Promise<QueryArchivedProposalsResponse>;
    archivedProposalsLegacy(request?: QueryArchivedProposalsLegacyRequest): Promise<QueryArchivedProposalsLegacyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    admins(request?: QueryAdminsRequest): Promise<QueryAdminsResponse>;
    archivedProposals(request?: QueryArchivedProposalsRequest): Promise<QueryArchivedProposalsResponse>;
    archivedProposalsLegacy(request?: QueryArchivedProposalsLegacyRequest): Promise<QueryArchivedProposalsLegacyResponse>;
};
