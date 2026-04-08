import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        adminmodule: {
            adminmodule: {
                admins(request?: import("../cosmos/adminmodule/adminmodule/query.js").QueryAdminsRequest): Promise<import("../cosmos/adminmodule/adminmodule/query.js").QueryAdminsResponse>;
                archivedProposals(request?: import("../cosmos/adminmodule/adminmodule/query.js").QueryArchivedProposalsRequest): Promise<import("../cosmos/adminmodule/adminmodule/query.js").QueryArchivedProposalsResponse>;
                archivedProposalsLegacy(request?: import("../cosmos/adminmodule/adminmodule/query.js").QueryArchivedProposalsLegacyRequest): Promise<import("../cosmos/adminmodule/adminmodule/query.js").QueryArchivedProposalsLegacyResponse>;
            };
        };
        app: {
            v1alpha1: {
                config(request?: import("../cosmos/app/v1alpha1/query.js").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query.js").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query.js").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountResponse>;
                accountAddressByID(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountAddressByIDResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountsResponse>;
                moduleAccountByName(request: import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: import("../cosmos/auth/v1beta1/query.js").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query.js").Bech32PrefixResponse>;
                addressBytesToString(request: import("../cosmos/auth/v1beta1/query.js").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query.js").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../cosmos/auth/v1beta1/query.js").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query.js").AddressStringToBytesResponse>;
                accountInfo(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query.js").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query.js").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query.js").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGranteeGrantsResponse>;
            };
        };
        autocli: {
            v1: {
                appOptions(request?: import("../cosmos/autocli/v1/query.js").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query.js").AppOptionsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query.js").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query.js").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query.js").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query.js").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryParamsResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query.js").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomsMetadataResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataByQueryStringResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: import("../cosmos/bank/v1beta1/query.js").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySendEnabledResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("../cosmos/base/node/v1beta1/query.js").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query.js").ConfigResponse>;
                    status(request?: import("../cosmos/base/node/v1beta1/query.js").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query.js").StatusResponse>;
                };
            };
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query.js").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query.js").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query.js").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").ABCIQueryResponse>;
                };
            };
        };
        circuit: {
            v1: {
                account(request: import("../cosmos/circuit/v1/query.js").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query.js").AccountResponse>;
                accounts(request?: import("../cosmos/circuit/v1/query.js").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query.js").AccountsResponse>;
                disabledList(request?: import("../cosmos/circuit/v1/query.js").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query.js").DisabledListResponse>;
            };
        };
        consensus: {
            v1: {
                params(request?: import("../cosmos/consensus/v1/query.js").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query.js").QueryParamsResponse>;
            };
        };
        counter: {
            v1: {
                getCount(request?: import("../cosmos/counter/v1/query.js").QueryGetCountRequest): Promise<import("../cosmos/counter/v1/query.js").QueryGetCountResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryParamsResponse>;
                validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query.js").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryCommunityPoolResponse>;
            };
        };
        epochs: {
            v1beta1: {
                epochInfos(request?: import("../cosmos/epochs/v1beta1/query.js").QueryEpochInfosRequest): Promise<import("../cosmos/epochs/v1beta1/query.js").QueryEpochInfosResponse>;
                currentEpoch(request: import("../cosmos/epochs/v1beta1/query.js").QueryCurrentEpochRequest): Promise<import("../cosmos/epochs/v1beta1/query.js").QueryCurrentEpochResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("../cosmos/evidence/v1beta1/query.js").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query.js").QueryEvidenceResponse>;
                allEvidence(request?: import("../cosmos/evidence/v1beta1/query.js").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query.js").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowanceResponse>;
                allowances(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesResponse>;
                allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                constitution(request?: import("../cosmos/gov/v1/query.js").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query.js").QueryConstitutionResponse>;
                proposal(request: import("../cosmos/gov/v1/query.js").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query.js").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1/query.js").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1/query.js").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query.js").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1/query.js").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query.js").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1/query.js").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1/query.js").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query.js").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1/query.js").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query.js").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query.js").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query.js").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query.js").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query.js").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query.js").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query.js").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("../cosmos/group/v1/query.js").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("../cosmos/group/v1/query.js").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("../cosmos/group/v1/query.js").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("../cosmos/group/v1/query.js").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("../cosmos/group/v1/query.js").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("../cosmos/group/v1/query.js").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("../cosmos/group/v1/query.js").QueryProposalRequest): Promise<import("../cosmos/group/v1/query.js").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("../cosmos/group/v1/query.js").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query.js").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("../cosmos/group/v1/query.js").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query.js").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("../cosmos/group/v1/query.js").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query.js").QueryVotesByProposalResponse>;
                votesByVoter(request: import("../cosmos/group/v1/query.js").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query.js").QueryVotesByVoterResponse>;
                groupsByMember(request: import("../cosmos/group/v1/query.js").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsByMemberResponse>;
                tallyResult(request: import("../cosmos/group/v1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query.js").QueryTallyResultResponse>;
                groups(request?: import("../cosmos/group/v1/query.js").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("../cosmos/mint/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryParamsResponse>;
                inflation(request?: import("../cosmos/mint/v1beta1/query.js").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryInflationResponse>;
                annualProvisions(request?: import("../cosmos/mint/v1beta1/query.js").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("../cosmos/nft/v1beta1/query.js").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryBalanceResponse>;
                owner(request: import("../cosmos/nft/v1beta1/query.js").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryOwnerResponse>;
                supply(request: import("../cosmos/nft/v1beta1/query.js").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QuerySupplyResponse>;
                nFTs(request: import("../cosmos/nft/v1beta1/query.js").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryNFTsResponse>;
                nFT(request: import("../cosmos/nft/v1beta1/query.js").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryNFTResponse>;
                class(request: import("../cosmos/nft/v1beta1/query.js").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryClassResponse>;
                classes(request?: import("../cosmos/nft/v1beta1/query.js").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryClassesResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("../cosmos/params/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query.js").QueryParamsResponse>;
                subspaces(request?: import("../cosmos/params/v1beta1/query.js").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query.js").QuerySubspacesResponse>;
            };
        };
        protocolpool: {
            v1: {
                communityPool(request?: import("../cosmos/protocolpool/v1/query.js").QueryCommunityPoolRequest): Promise<import("../cosmos/protocolpool/v1/query.js").QueryCommunityPoolResponse>;
                continuousFund(request: import("../cosmos/protocolpool/v1/query.js").QueryContinuousFundRequest): Promise<import("../cosmos/protocolpool/v1/query.js").QueryContinuousFundResponse>;
                continuousFunds(request?: import("../cosmos/protocolpool/v1/query.js").QueryContinuousFundsRequest): Promise<import("../cosmos/protocolpool/v1/query.js").QueryContinuousFundsResponse>;
                params(request?: import("../cosmos/protocolpool/v1/query.js").QueryParamsRequest): Promise<import("../cosmos/protocolpool/v1/query.js").QueryParamsResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("../cosmos/slashing/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QueryParamsResponse>;
                signingInfo(request: import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfoResponse>;
                signingInfos(request?: import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query.js").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query.js").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query.js").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service.js").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service.js").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service.js").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service.js").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service.js").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service.js").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service.js").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetBlockWithTxsResponse>;
                txDecode(request: import("../cosmos/tx/v1beta1/service.js").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxDecodeResponse>;
                txEncode(request: import("../cosmos/tx/v1beta1/service.js").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxEncodeResponse>;
                txEncodeAmino(request: import("../cosmos/tx/v1beta1/service.js").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxEncodeAminoResponse>;
                txDecodeAmino(request: import("../cosmos/tx/v1beta1/service.js").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxDecodeAminoResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query.js").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query.js").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query.js").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query.js").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query.js").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryAuthorityResponse>;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                contractInfo(request: import("./wasm/v1/query.js").QueryContractInfoRequest): Promise<import("./wasm/v1/query.js").QueryContractInfoResponse>;
                contractHistory(request: import("./wasm/v1/query.js").QueryContractHistoryRequest): Promise<import("./wasm/v1/query.js").QueryContractHistoryResponse>;
                contractsByCode(request: import("./wasm/v1/query.js").QueryContractsByCodeRequest): Promise<import("./wasm/v1/query.js").QueryContractsByCodeResponse>;
                allContractState(request: import("./wasm/v1/query.js").QueryAllContractStateRequest): Promise<import("./wasm/v1/query.js").QueryAllContractStateResponse>;
                rawContractState(request: import("./wasm/v1/query.js").QueryRawContractStateRequest): Promise<import("./wasm/v1/query.js").QueryRawContractStateResponse>;
                smartContractState(request: import("./wasm/v1/query.js").QuerySmartContractStateRequest): Promise<import("./wasm/v1/query.js").QuerySmartContractStateResponse>;
                code(request: import("./wasm/v1/query.js").QueryCodeRequest): Promise<import("./wasm/v1/query.js").QueryCodeResponse>;
                codes(request?: import("./wasm/v1/query.js").QueryCodesRequest): Promise<import("./wasm/v1/query.js").QueryCodesResponse>;
                codeInfo(request: import("./wasm/v1/query.js").QueryCodeInfoRequest): Promise<import("./wasm/v1/query.js").QueryCodeInfoResponse>;
                pinnedCodes(request?: import("./wasm/v1/query.js").QueryPinnedCodesRequest): Promise<import("./wasm/v1/query.js").QueryPinnedCodesResponse>;
                params(request?: import("./wasm/v1/query.js").QueryParamsRequest): Promise<import("./wasm/v1/query.js").QueryParamsResponse>;
                contractsByCreator(request: import("./wasm/v1/query.js").QueryContractsByCreatorRequest): Promise<import("./wasm/v1/query.js").QueryContractsByCreatorResponse>;
                wasmLimitsConfig(request?: import("./wasm/v1/query.js").QueryWasmLimitsConfigRequest): Promise<import("./wasm/v1/query.js").QueryWasmLimitsConfigResponse>;
                buildAddress(request: import("./wasm/v1/query.js").QueryBuildAddressRequest): Promise<import("./wasm/v1/query.js").QueryBuildAddressResponse>;
            };
        };
    };
}>;
