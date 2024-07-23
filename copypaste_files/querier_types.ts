import { createRPCQueryClient as createNeutronClient } from "./neutron/rpc.query";
import { createRPCQueryClient as createIbcClient } from "./ibc/rpc.query";
import { createRPCQueryClient as createOsmosisClient } from "./osmosis/rpc.query";

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromisedNeutronType = ReturnType<typeof createNeutronClient>;
type PromisedIbcType = ReturnType<typeof createIbcClient>;
type PromisedOsmosisType = ReturnType<typeof createOsmosisClient>;

export type NeutronQuerier = UnwrapPromise<PromisedNeutronType>;
export type IbcQuerier = UnwrapPromise<PromisedIbcType>;
export type OsmosisQuerier = UnwrapPromise<PromisedOsmosisType>;
