/* eslint-disable */
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryConsumerGenesisRequest,
  QueryConsumerGenesisResponse,
  QueryConsumerChainsRequest,
  QueryConsumerChainsResponse,
  QueryConsumerChainStartProposalsRequest,
  QueryConsumerChainStartProposalsResponse,
  QueryConsumerChainStopProposalsRequest,
  QueryConsumerChainStopProposalsResponse,
  QueryValidatorConsumerAddrRequest,
  QueryValidatorConsumerAddrResponse,
  QueryValidatorProviderAddrRequest,
  QueryValidatorProviderAddrResponse,
  QueryThrottleStateRequest,
  QueryThrottleStateResponse,
  QueryRegisteredConsumerRewardDenomsRequest,
  QueryRegisteredConsumerRewardDenomsResponse,
  QueryProposedChainIDsRequest,
  QueryProposedChainIDsResponse,
  QueryAllPairsValConAddrByConsumerChainIDRequest,
  QueryAllPairsValConAddrByConsumerChainIDResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryConsumerChainOptedInValidatorsRequest,
  QueryConsumerChainOptedInValidatorsResponse,
  QueryConsumerChainsValidatorHasToValidateRequest,
  QueryConsumerChainsValidatorHasToValidateResponse,
  QueryValidatorConsumerCommissionRateRequest,
  QueryValidatorConsumerCommissionRateResponse,
  QueryOldestUnconfirmedVscRequest,
  QueryOldestUnconfirmedVscResponse,
  QueryConsumerValidatorsRequest,
  QueryConsumerValidatorsResponse,
} from "./query";
export interface Query {
  /**
   * ConsumerGenesis queries the genesis state needed to start a consumer chain
   * whose proposal has been accepted
   */
  queryConsumerGenesis(request: QueryConsumerGenesisRequest): Promise<QueryConsumerGenesisResponse>;
  /**
   * ConsumerChains queries active consumer chains supported by the provider
   * chain
   */
  queryConsumerChains(request?: QueryConsumerChainsRequest): Promise<QueryConsumerChainsResponse>;
  /** QueryConsumerChainStarts queries consumer chain start proposals. */
  queryConsumerChainStarts(
    request?: QueryConsumerChainStartProposalsRequest,
  ): Promise<QueryConsumerChainStartProposalsResponse>;
  /** QueryConsumerChainStops queries consumer chain stop proposals. */
  queryConsumerChainStops(
    request?: QueryConsumerChainStopProposalsRequest,
  ): Promise<QueryConsumerChainStopProposalsResponse>;
  /**
   * QueryValidatorConsumerAddr queries the address
   * assigned by a validator for a consumer chain.
   */
  queryValidatorConsumerAddr(
    request: QueryValidatorConsumerAddrRequest,
  ): Promise<QueryValidatorConsumerAddrResponse>;
  /**
   * QueryProviderAddr returns the provider chain validator
   * given a consumer chain validator address
   */
  queryValidatorProviderAddr(
    request: QueryValidatorProviderAddrRequest,
  ): Promise<QueryValidatorProviderAddrResponse>;
  /**
   * QueryThrottleState returns the main on-chain state relevant to currently
   * throttled slash packets
   */
  queryThrottleState(request?: QueryThrottleStateRequest): Promise<QueryThrottleStateResponse>;
  /**
   * QueryRegisteredConsumerRewardDenoms returns a list of consumer reward
   * denoms that are registered
   */
  queryRegisteredConsumerRewardDenoms(
    request?: QueryRegisteredConsumerRewardDenomsRequest,
  ): Promise<QueryRegisteredConsumerRewardDenomsResponse>;
  /**
   * QueryProposedConsumerChainIDs returns the chain IDs of the proposed consumer chain addition proposals
   * that are still in the voting period
   */
  queryProposedConsumerChainIDs(
    request?: QueryProposedChainIDsRequest,
  ): Promise<QueryProposedChainIDsResponse>;
  /**
   * QueryAllPairsValConAddrByConsumerChainID returns a list of pair valconsensus address
   * between provider and consumer chain
   */
  queryAllPairsValConAddrByConsumerChainID(
    request: QueryAllPairsValConAddrByConsumerChainIDRequest,
  ): Promise<QueryAllPairsValConAddrByConsumerChainIDResponse>;
  /** QueryParams returns all current values of provider parameters */
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * QueryConsumerChainOptedInValidators returns a list of validators consensus addresses
   * that opted-in to the given consumer chain
   */
  queryConsumerChainOptedInValidators(
    request: QueryConsumerChainOptedInValidatorsRequest,
  ): Promise<QueryConsumerChainOptedInValidatorsResponse>;
  /**
   * QueryConsumerChainsValidatorHasToValidate returns a list of consumer chains
   * that a given validator must validate
   */
  queryConsumerChainsValidatorHasToValidate(
    request: QueryConsumerChainsValidatorHasToValidateRequest,
  ): Promise<QueryConsumerChainsValidatorHasToValidateResponse>;
  /**
   * QueryValidatorConsumerCommissionRate returns the commission rate a given
   * validator charges on a given consumer chain
   */
  queryValidatorConsumerCommissionRate(
    request: QueryValidatorConsumerCommissionRateRequest,
  ): Promise<QueryValidatorConsumerCommissionRateResponse>;
  /** QueryOldestUnconfirmedVsc returns the send timestamp of the oldest unconfirmed VSCPacket for a given chainID */
  queryOldestUnconfirmedVsc(
    request: QueryOldestUnconfirmedVscRequest,
  ): Promise<QueryOldestUnconfirmedVscResponse>;
  /**
   * QueryConsumerValidators returns the latest set consumer-validator set for a given chainID
   * Note that this does not necessarily mean that the consumer chain is using this validator set at this exact moment
   * because a VSCPacket could be delayed to be delivered on the consumer chain.
   */
  queryConsumerValidators(request: QueryConsumerValidatorsRequest): Promise<QueryConsumerValidatorsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryConsumerGenesis = this.queryConsumerGenesis.bind(this);
    this.queryConsumerChains = this.queryConsumerChains.bind(this);
    this.queryConsumerChainStarts = this.queryConsumerChainStarts.bind(this);
    this.queryConsumerChainStops = this.queryConsumerChainStops.bind(this);
    this.queryValidatorConsumerAddr = this.queryValidatorConsumerAddr.bind(this);
    this.queryValidatorProviderAddr = this.queryValidatorProviderAddr.bind(this);
    this.queryThrottleState = this.queryThrottleState.bind(this);
    this.queryRegisteredConsumerRewardDenoms = this.queryRegisteredConsumerRewardDenoms.bind(this);
    this.queryProposedConsumerChainIDs = this.queryProposedConsumerChainIDs.bind(this);
    this.queryAllPairsValConAddrByConsumerChainID = this.queryAllPairsValConAddrByConsumerChainID.bind(this);
    this.queryParams = this.queryParams.bind(this);
    this.queryConsumerChainOptedInValidators = this.queryConsumerChainOptedInValidators.bind(this);
    this.queryConsumerChainsValidatorHasToValidate =
      this.queryConsumerChainsValidatorHasToValidate.bind(this);
    this.queryValidatorConsumerCommissionRate = this.queryValidatorConsumerCommissionRate.bind(this);
    this.queryOldestUnconfirmedVsc = this.queryOldestUnconfirmedVsc.bind(this);
    this.queryConsumerValidators = this.queryConsumerValidators.bind(this);
  }
  queryConsumerGenesis(request: QueryConsumerGenesisRequest): Promise<QueryConsumerGenesisResponse> {
    const data = QueryConsumerGenesisRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerGenesis",
      data,
    );
    return promise.then((data) => QueryConsumerGenesisResponse.decode(new BinaryReader(data)));
  }
  queryConsumerChains(request: QueryConsumerChainsRequest = {}): Promise<QueryConsumerChainsResponse> {
    const data = QueryConsumerChainsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerChains",
      data,
    );
    return promise.then((data) => QueryConsumerChainsResponse.decode(new BinaryReader(data)));
  }
  queryConsumerChainStarts(
    request: QueryConsumerChainStartProposalsRequest = {},
  ): Promise<QueryConsumerChainStartProposalsResponse> {
    const data = QueryConsumerChainStartProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerChainStarts",
      data,
    );
    return promise.then((data) => QueryConsumerChainStartProposalsResponse.decode(new BinaryReader(data)));
  }
  queryConsumerChainStops(
    request: QueryConsumerChainStopProposalsRequest = {},
  ): Promise<QueryConsumerChainStopProposalsResponse> {
    const data = QueryConsumerChainStopProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerChainStops",
      data,
    );
    return promise.then((data) => QueryConsumerChainStopProposalsResponse.decode(new BinaryReader(data)));
  }
  queryValidatorConsumerAddr(
    request: QueryValidatorConsumerAddrRequest,
  ): Promise<QueryValidatorConsumerAddrResponse> {
    const data = QueryValidatorConsumerAddrRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryValidatorConsumerAddr",
      data,
    );
    return promise.then((data) => QueryValidatorConsumerAddrResponse.decode(new BinaryReader(data)));
  }
  queryValidatorProviderAddr(
    request: QueryValidatorProviderAddrRequest,
  ): Promise<QueryValidatorProviderAddrResponse> {
    const data = QueryValidatorProviderAddrRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryValidatorProviderAddr",
      data,
    );
    return promise.then((data) => QueryValidatorProviderAddrResponse.decode(new BinaryReader(data)));
  }
  queryThrottleState(request: QueryThrottleStateRequest = {}): Promise<QueryThrottleStateResponse> {
    const data = QueryThrottleStateRequest.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Query", "QueryThrottleState", data);
    return promise.then((data) => QueryThrottleStateResponse.decode(new BinaryReader(data)));
  }
  queryRegisteredConsumerRewardDenoms(
    request: QueryRegisteredConsumerRewardDenomsRequest = {},
  ): Promise<QueryRegisteredConsumerRewardDenomsResponse> {
    const data = QueryRegisteredConsumerRewardDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryRegisteredConsumerRewardDenoms",
      data,
    );
    return promise.then((data) => QueryRegisteredConsumerRewardDenomsResponse.decode(new BinaryReader(data)));
  }
  queryProposedConsumerChainIDs(
    request: QueryProposedChainIDsRequest = {},
  ): Promise<QueryProposedChainIDsResponse> {
    const data = QueryProposedChainIDsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryProposedConsumerChainIDs",
      data,
    );
    return promise.then((data) => QueryProposedChainIDsResponse.decode(new BinaryReader(data)));
  }
  queryAllPairsValConAddrByConsumerChainID(
    request: QueryAllPairsValConAddrByConsumerChainIDRequest,
  ): Promise<QueryAllPairsValConAddrByConsumerChainIDResponse> {
    const data = QueryAllPairsValConAddrByConsumerChainIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryAllPairsValConAddrByConsumerChainID",
      data,
    );
    return promise.then((data) =>
      QueryAllPairsValConAddrByConsumerChainIDResponse.decode(new BinaryReader(data)),
    );
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Query", "QueryParams", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryConsumerChainOptedInValidators(
    request: QueryConsumerChainOptedInValidatorsRequest,
  ): Promise<QueryConsumerChainOptedInValidatorsResponse> {
    const data = QueryConsumerChainOptedInValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerChainOptedInValidators",
      data,
    );
    return promise.then((data) => QueryConsumerChainOptedInValidatorsResponse.decode(new BinaryReader(data)));
  }
  queryConsumerChainsValidatorHasToValidate(
    request: QueryConsumerChainsValidatorHasToValidateRequest,
  ): Promise<QueryConsumerChainsValidatorHasToValidateResponse> {
    const data = QueryConsumerChainsValidatorHasToValidateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerChainsValidatorHasToValidate",
      data,
    );
    return promise.then((data) =>
      QueryConsumerChainsValidatorHasToValidateResponse.decode(new BinaryReader(data)),
    );
  }
  queryValidatorConsumerCommissionRate(
    request: QueryValidatorConsumerCommissionRateRequest,
  ): Promise<QueryValidatorConsumerCommissionRateResponse> {
    const data = QueryValidatorConsumerCommissionRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryValidatorConsumerCommissionRate",
      data,
    );
    return promise.then((data) =>
      QueryValidatorConsumerCommissionRateResponse.decode(new BinaryReader(data)),
    );
  }
  queryOldestUnconfirmedVsc(
    request: QueryOldestUnconfirmedVscRequest,
  ): Promise<QueryOldestUnconfirmedVscResponse> {
    const data = QueryOldestUnconfirmedVscRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryOldestUnconfirmedVsc",
      data,
    );
    return promise.then((data) => QueryOldestUnconfirmedVscResponse.decode(new BinaryReader(data)));
  }
  queryConsumerValidators(request: QueryConsumerValidatorsRequest): Promise<QueryConsumerValidatorsResponse> {
    const data = QueryConsumerValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.provider.v1.Query",
      "QueryConsumerValidators",
      data,
    );
    return promise.then((data) => QueryConsumerValidatorsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryConsumerGenesis(request: QueryConsumerGenesisRequest): Promise<QueryConsumerGenesisResponse> {
      return queryService.queryConsumerGenesis(request);
    },
    queryConsumerChains(request?: QueryConsumerChainsRequest): Promise<QueryConsumerChainsResponse> {
      return queryService.queryConsumerChains(request);
    },
    queryConsumerChainStarts(
      request?: QueryConsumerChainStartProposalsRequest,
    ): Promise<QueryConsumerChainStartProposalsResponse> {
      return queryService.queryConsumerChainStarts(request);
    },
    queryConsumerChainStops(
      request?: QueryConsumerChainStopProposalsRequest,
    ): Promise<QueryConsumerChainStopProposalsResponse> {
      return queryService.queryConsumerChainStops(request);
    },
    queryValidatorConsumerAddr(
      request: QueryValidatorConsumerAddrRequest,
    ): Promise<QueryValidatorConsumerAddrResponse> {
      return queryService.queryValidatorConsumerAddr(request);
    },
    queryValidatorProviderAddr(
      request: QueryValidatorProviderAddrRequest,
    ): Promise<QueryValidatorProviderAddrResponse> {
      return queryService.queryValidatorProviderAddr(request);
    },
    queryThrottleState(request?: QueryThrottleStateRequest): Promise<QueryThrottleStateResponse> {
      return queryService.queryThrottleState(request);
    },
    queryRegisteredConsumerRewardDenoms(
      request?: QueryRegisteredConsumerRewardDenomsRequest,
    ): Promise<QueryRegisteredConsumerRewardDenomsResponse> {
      return queryService.queryRegisteredConsumerRewardDenoms(request);
    },
    queryProposedConsumerChainIDs(
      request?: QueryProposedChainIDsRequest,
    ): Promise<QueryProposedChainIDsResponse> {
      return queryService.queryProposedConsumerChainIDs(request);
    },
    queryAllPairsValConAddrByConsumerChainID(
      request: QueryAllPairsValConAddrByConsumerChainIDRequest,
    ): Promise<QueryAllPairsValConAddrByConsumerChainIDResponse> {
      return queryService.queryAllPairsValConAddrByConsumerChainID(request);
    },
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryConsumerChainOptedInValidators(
      request: QueryConsumerChainOptedInValidatorsRequest,
    ): Promise<QueryConsumerChainOptedInValidatorsResponse> {
      return queryService.queryConsumerChainOptedInValidators(request);
    },
    queryConsumerChainsValidatorHasToValidate(
      request: QueryConsumerChainsValidatorHasToValidateRequest,
    ): Promise<QueryConsumerChainsValidatorHasToValidateResponse> {
      return queryService.queryConsumerChainsValidatorHasToValidate(request);
    },
    queryValidatorConsumerCommissionRate(
      request: QueryValidatorConsumerCommissionRateRequest,
    ): Promise<QueryValidatorConsumerCommissionRateResponse> {
      return queryService.queryValidatorConsumerCommissionRate(request);
    },
    queryOldestUnconfirmedVsc(
      request: QueryOldestUnconfirmedVscRequest,
    ): Promise<QueryOldestUnconfirmedVscResponse> {
      return queryService.queryOldestUnconfirmedVsc(request);
    },
    queryConsumerValidators(
      request: QueryConsumerValidatorsRequest,
    ): Promise<QueryConsumerValidatorsResponse> {
      return queryService.queryConsumerValidators(request);
    },
  };
};
