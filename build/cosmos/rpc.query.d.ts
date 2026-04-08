import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        adminmodule: {
            adminmodule: {
                admins(request?: import("./adminmodule/adminmodule/query.js").QueryAdminsRequest): Promise<import("./adminmodule/adminmodule/query.js").QueryAdminsResponse>;
                archivedProposals(request?: import("./adminmodule/adminmodule/query.js").QueryArchivedProposalsRequest): Promise<import("./adminmodule/adminmodule/query.js").QueryArchivedProposalsResponse>;
                archivedProposalsLegacy(request?: import("./adminmodule/adminmodule/query.js").QueryArchivedProposalsLegacyRequest): Promise<import("./adminmodule/adminmodule/query.js").QueryArchivedProposalsLegacyResponse>;
            };
        };
        app: {
            v1alpha1: {
                config(request?: import("./app/v1alpha1/query.js").QueryConfigRequest): Promise<import("./app/v1alpha1/query.js").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("./auth/v1beta1/query.js").QueryAccountsRequest): Promise<import("./auth/v1beta1/query.js").QueryAccountsResponse>;
                account(request: import("./auth/v1beta1/query.js").QueryAccountRequest): Promise<import("./auth/v1beta1/query.js").QueryAccountResponse>;
                accountAddressByID(request: import("./auth/v1beta1/query.js").QueryAccountAddressByIDRequest): Promise<import("./auth/v1beta1/query.js").QueryAccountAddressByIDResponse>;
                params(request?: import("./auth/v1beta1/query.js").QueryParamsRequest): Promise<import("./auth/v1beta1/query.js").QueryParamsResponse>;
                moduleAccounts(request?: import("./auth/v1beta1/query.js").QueryModuleAccountsRequest): Promise<import("./auth/v1beta1/query.js").QueryModuleAccountsResponse>;
                moduleAccountByName(request: import("./auth/v1beta1/query.js").QueryModuleAccountByNameRequest): Promise<import("./auth/v1beta1/query.js").QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: import("./auth/v1beta1/query.js").Bech32PrefixRequest): Promise<import("./auth/v1beta1/query.js").Bech32PrefixResponse>;
                addressBytesToString(request: import("./auth/v1beta1/query.js").AddressBytesToStringRequest): Promise<import("./auth/v1beta1/query.js").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("./auth/v1beta1/query.js").AddressStringToBytesRequest): Promise<import("./auth/v1beta1/query.js").AddressStringToBytesResponse>;
                accountInfo(request: import("./auth/v1beta1/query.js").QueryAccountInfoRequest): Promise<import("./auth/v1beta1/query.js").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("./authz/v1beta1/query.js").QueryGrantsRequest): Promise<import("./authz/v1beta1/query.js").QueryGrantsResponse>;
                granterGrants(request: import("./authz/v1beta1/query.js").QueryGranterGrantsRequest): Promise<import("./authz/v1beta1/query.js").QueryGranterGrantsResponse>;
                granteeGrants(request: import("./authz/v1beta1/query.js").QueryGranteeGrantsRequest): Promise<import("./authz/v1beta1/query.js").QueryGranteeGrantsResponse>;
            };
        };
        autocli: {
            v1: {
                appOptions(request?: import("./autocli/v1/query.js").AppOptionsRequest): Promise<import("./autocli/v1/query.js").AppOptionsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("./bank/v1beta1/query.js").QueryBalanceRequest): Promise<import("./bank/v1beta1/query.js").QueryBalanceResponse>;
                allBalances(request: import("./bank/v1beta1/query.js").QueryAllBalancesRequest): Promise<import("./bank/v1beta1/query.js").QueryAllBalancesResponse>;
                spendableBalances(request: import("./bank/v1beta1/query.js").QuerySpendableBalancesRequest): Promise<import("./bank/v1beta1/query.js").QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: import("./bank/v1beta1/query.js").QuerySpendableBalanceByDenomRequest): Promise<import("./bank/v1beta1/query.js").QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: import("./bank/v1beta1/query.js").QueryTotalSupplyRequest): Promise<import("./bank/v1beta1/query.js").QueryTotalSupplyResponse>;
                supplyOf(request: import("./bank/v1beta1/query.js").QuerySupplyOfRequest): Promise<import("./bank/v1beta1/query.js").QuerySupplyOfResponse>;
                params(request?: import("./bank/v1beta1/query.js").QueryParamsRequest): Promise<import("./bank/v1beta1/query.js").QueryParamsResponse>;
                denomsMetadata(request?: import("./bank/v1beta1/query.js").QueryDenomsMetadataRequest): Promise<import("./bank/v1beta1/query.js").QueryDenomsMetadataResponse>;
                denomMetadata(request: import("./bank/v1beta1/query.js").QueryDenomMetadataRequest): Promise<import("./bank/v1beta1/query.js").QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: import("./bank/v1beta1/query.js").QueryDenomMetadataByQueryStringRequest): Promise<import("./bank/v1beta1/query.js").QueryDenomMetadataByQueryStringResponse>;
                denomOwners(request: import("./bank/v1beta1/query.js").QueryDenomOwnersRequest): Promise<import("./bank/v1beta1/query.js").QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: import("./bank/v1beta1/query.js").QueryDenomOwnersByQueryRequest): Promise<import("./bank/v1beta1/query.js").QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: import("./bank/v1beta1/query.js").QuerySendEnabledRequest): Promise<import("./bank/v1beta1/query.js").QuerySendEnabledResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("./base/node/v1beta1/query.js").ConfigRequest): Promise<import("./base/node/v1beta1/query.js").ConfigResponse>;
                    status(request?: import("./base/node/v1beta1/query.js").StatusRequest): Promise<import("./base/node/v1beta1/query.js").StatusResponse>;
                };
            };
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("./base/tendermint/v1beta1/query.js").GetNodeInfoRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetNodeInfoResponse>;
                    getSyncing(request?: import("./base/tendermint/v1beta1/query.js").GetSyncingRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetSyncingResponse>;
                    getLatestBlock(request?: import("./base/tendermint/v1beta1/query.js").GetLatestBlockRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("./base/tendermint/v1beta1/query.js").GetBlockByHeightRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("./base/tendermint/v1beta1/query.js").GetLatestValidatorSetRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("./base/tendermint/v1beta1/query.js").GetValidatorSetByHeightRequest): Promise<import("./base/tendermint/v1beta1/query.js").GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: import("./base/tendermint/v1beta1/query.js").ABCIQueryRequest): Promise<import("./base/tendermint/v1beta1/query.js").ABCIQueryResponse>;
                };
            };
        };
        circuit: {
            v1: {
                account(request: import("./circuit/v1/query.js").QueryAccountRequest): Promise<import("./circuit/v1/query.js").AccountResponse>;
                accounts(request?: import("./circuit/v1/query.js").QueryAccountsRequest): Promise<import("./circuit/v1/query.js").AccountsResponse>;
                disabledList(request?: import("./circuit/v1/query.js").QueryDisabledListRequest): Promise<import("./circuit/v1/query.js").DisabledListResponse>;
            };
        };
        consensus: {
            v1: {
                params(request?: import("./consensus/v1/query.js").QueryParamsRequest): Promise<import("./consensus/v1/query.js").QueryParamsResponse>;
            };
        };
        counter: {
            v1: {
                getCount(request?: import("./counter/v1/query.js").QueryGetCountRequest): Promise<import("./counter/v1/query.js").QueryGetCountResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("./distribution/v1beta1/query.js").QueryParamsRequest): Promise<import("./distribution/v1beta1/query.js").QueryParamsResponse>;
                validatorDistributionInfo(request: import("./distribution/v1beta1/query.js").QueryValidatorDistributionInfoRequest): Promise<import("./distribution/v1beta1/query.js").QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: import("./distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsRequest): Promise<import("./distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("./distribution/v1beta1/query.js").QueryValidatorCommissionRequest): Promise<import("./distribution/v1beta1/query.js").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("./distribution/v1beta1/query.js").QueryValidatorSlashesRequest): Promise<import("./distribution/v1beta1/query.js").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("./distribution/v1beta1/query.js").QueryDelegationRewardsRequest): Promise<import("./distribution/v1beta1/query.js").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("./distribution/v1beta1/query.js").QueryDelegationTotalRewardsRequest): Promise<import("./distribution/v1beta1/query.js").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("./distribution/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("./distribution/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("./distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressRequest): Promise<import("./distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("./distribution/v1beta1/query.js").QueryCommunityPoolRequest): Promise<import("./distribution/v1beta1/query.js").QueryCommunityPoolResponse>;
            };
        };
        epochs: {
            v1beta1: {
                epochInfos(request?: import("./epochs/v1beta1/query.js").QueryEpochInfosRequest): Promise<import("./epochs/v1beta1/query.js").QueryEpochInfosResponse>;
                currentEpoch(request: import("./epochs/v1beta1/query.js").QueryCurrentEpochRequest): Promise<import("./epochs/v1beta1/query.js").QueryCurrentEpochResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("./evidence/v1beta1/query.js").QueryEvidenceRequest): Promise<import("./evidence/v1beta1/query.js").QueryEvidenceResponse>;
                allEvidence(request?: import("./evidence/v1beta1/query.js").QueryAllEvidenceRequest): Promise<import("./evidence/v1beta1/query.js").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("./feegrant/v1beta1/query.js").QueryAllowanceRequest): Promise<import("./feegrant/v1beta1/query.js").QueryAllowanceResponse>;
                allowances(request: import("./feegrant/v1beta1/query.js").QueryAllowancesRequest): Promise<import("./feegrant/v1beta1/query.js").QueryAllowancesResponse>;
                allowancesByGranter(request: import("./feegrant/v1beta1/query.js").QueryAllowancesByGranterRequest): Promise<import("./feegrant/v1beta1/query.js").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                constitution(request?: import("./gov/v1/query.js").QueryConstitutionRequest): Promise<import("./gov/v1/query.js").QueryConstitutionResponse>;
                proposal(request: import("./gov/v1/query.js").QueryProposalRequest): Promise<import("./gov/v1/query.js").QueryProposalResponse>;
                proposals(request: import("./gov/v1/query.js").QueryProposalsRequest): Promise<import("./gov/v1/query.js").QueryProposalsResponse>;
                vote(request: import("./gov/v1/query.js").QueryVoteRequest): Promise<import("./gov/v1/query.js").QueryVoteResponse>;
                votes(request: import("./gov/v1/query.js").QueryVotesRequest): Promise<import("./gov/v1/query.js").QueryVotesResponse>;
                params(request: import("./gov/v1/query.js").QueryParamsRequest): Promise<import("./gov/v1/query.js").QueryParamsResponse>;
                deposit(request: import("./gov/v1/query.js").QueryDepositRequest): Promise<import("./gov/v1/query.js").QueryDepositResponse>;
                deposits(request: import("./gov/v1/query.js").QueryDepositsRequest): Promise<import("./gov/v1/query.js").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1/query.js").QueryTallyResultRequest): Promise<import("./gov/v1/query.js").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("./gov/v1beta1/query.js").QueryProposalRequest): Promise<import("./gov/v1beta1/query.js").QueryProposalResponse>;
                proposals(request: import("./gov/v1beta1/query.js").QueryProposalsRequest): Promise<import("./gov/v1beta1/query.js").QueryProposalsResponse>;
                vote(request: import("./gov/v1beta1/query.js").QueryVoteRequest): Promise<import("./gov/v1beta1/query.js").QueryVoteResponse>;
                votes(request: import("./gov/v1beta1/query.js").QueryVotesRequest): Promise<import("./gov/v1beta1/query.js").QueryVotesResponse>;
                params(request: import("./gov/v1beta1/query.js").QueryParamsRequest): Promise<import("./gov/v1beta1/query.js").QueryParamsResponse>;
                deposit(request: import("./gov/v1beta1/query.js").QueryDepositRequest): Promise<import("./gov/v1beta1/query.js").QueryDepositResponse>;
                deposits(request: import("./gov/v1beta1/query.js").QueryDepositsRequest): Promise<import("./gov/v1beta1/query.js").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1beta1/query.js").QueryTallyResultRequest): Promise<import("./gov/v1beta1/query.js").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("./group/v1/query.js").QueryGroupInfoRequest): Promise<import("./group/v1/query.js").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("./group/v1/query.js").QueryGroupPolicyInfoRequest): Promise<import("./group/v1/query.js").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("./group/v1/query.js").QueryGroupMembersRequest): Promise<import("./group/v1/query.js").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("./group/v1/query.js").QueryGroupsByAdminRequest): Promise<import("./group/v1/query.js").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("./group/v1/query.js").QueryGroupPoliciesByGroupRequest): Promise<import("./group/v1/query.js").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("./group/v1/query.js").QueryGroupPoliciesByAdminRequest): Promise<import("./group/v1/query.js").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("./group/v1/query.js").QueryProposalRequest): Promise<import("./group/v1/query.js").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("./group/v1/query.js").QueryProposalsByGroupPolicyRequest): Promise<import("./group/v1/query.js").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("./group/v1/query.js").QueryVoteByProposalVoterRequest): Promise<import("./group/v1/query.js").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("./group/v1/query.js").QueryVotesByProposalRequest): Promise<import("./group/v1/query.js").QueryVotesByProposalResponse>;
                votesByVoter(request: import("./group/v1/query.js").QueryVotesByVoterRequest): Promise<import("./group/v1/query.js").QueryVotesByVoterResponse>;
                groupsByMember(request: import("./group/v1/query.js").QueryGroupsByMemberRequest): Promise<import("./group/v1/query.js").QueryGroupsByMemberResponse>;
                tallyResult(request: import("./group/v1/query.js").QueryTallyResultRequest): Promise<import("./group/v1/query.js").QueryTallyResultResponse>;
                groups(request?: import("./group/v1/query.js").QueryGroupsRequest): Promise<import("./group/v1/query.js").QueryGroupsResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query.js").QueryParamsRequest): Promise<import("./mint/v1beta1/query.js").QueryParamsResponse>;
                inflation(request?: import("./mint/v1beta1/query.js").QueryInflationRequest): Promise<import("./mint/v1beta1/query.js").QueryInflationResponse>;
                annualProvisions(request?: import("./mint/v1beta1/query.js").QueryAnnualProvisionsRequest): Promise<import("./mint/v1beta1/query.js").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("./nft/v1beta1/query.js").QueryBalanceRequest): Promise<import("./nft/v1beta1/query.js").QueryBalanceResponse>;
                owner(request: import("./nft/v1beta1/query.js").QueryOwnerRequest): Promise<import("./nft/v1beta1/query.js").QueryOwnerResponse>;
                supply(request: import("./nft/v1beta1/query.js").QuerySupplyRequest): Promise<import("./nft/v1beta1/query.js").QuerySupplyResponse>;
                nFTs(request: import("./nft/v1beta1/query.js").QueryNFTsRequest): Promise<import("./nft/v1beta1/query.js").QueryNFTsResponse>;
                nFT(request: import("./nft/v1beta1/query.js").QueryNFTRequest): Promise<import("./nft/v1beta1/query.js").QueryNFTResponse>;
                class(request: import("./nft/v1beta1/query.js").QueryClassRequest): Promise<import("./nft/v1beta1/query.js").QueryClassResponse>;
                classes(request?: import("./nft/v1beta1/query.js").QueryClassesRequest): Promise<import("./nft/v1beta1/query.js").QueryClassesResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("./params/v1beta1/query.js").QueryParamsRequest): Promise<import("./params/v1beta1/query.js").QueryParamsResponse>;
                subspaces(request?: import("./params/v1beta1/query.js").QuerySubspacesRequest): Promise<import("./params/v1beta1/query.js").QuerySubspacesResponse>;
            };
        };
        protocolpool: {
            v1: {
                communityPool(request?: import("./protocolpool/v1/query.js").QueryCommunityPoolRequest): Promise<import("./protocolpool/v1/query.js").QueryCommunityPoolResponse>;
                continuousFund(request: import("./protocolpool/v1/query.js").QueryContinuousFundRequest): Promise<import("./protocolpool/v1/query.js").QueryContinuousFundResponse>;
                continuousFunds(request?: import("./protocolpool/v1/query.js").QueryContinuousFundsRequest): Promise<import("./protocolpool/v1/query.js").QueryContinuousFundsResponse>;
                params(request?: import("./protocolpool/v1/query.js").QueryParamsRequest): Promise<import("./protocolpool/v1/query.js").QueryParamsResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("./slashing/v1beta1/query.js").QueryParamsRequest): Promise<import("./slashing/v1beta1/query.js").QueryParamsResponse>;
                signingInfo(request: import("./slashing/v1beta1/query.js").QuerySigningInfoRequest): Promise<import("./slashing/v1beta1/query.js").QuerySigningInfoResponse>;
                signingInfos(request?: import("./slashing/v1beta1/query.js").QuerySigningInfosRequest): Promise<import("./slashing/v1beta1/query.js").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("./staking/v1beta1/query.js").QueryValidatorsRequest): Promise<import("./staking/v1beta1/query.js").QueryValidatorsResponse>;
                validator(request: import("./staking/v1beta1/query.js").QueryValidatorRequest): Promise<import("./staking/v1beta1/query.js").QueryValidatorResponse>;
                validatorDelegations(request: import("./staking/v1beta1/query.js").QueryValidatorDelegationsRequest): Promise<import("./staking/v1beta1/query.js").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("./staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("./staking/v1beta1/query.js").QueryDelegationRequest): Promise<import("./staking/v1beta1/query.js").QueryDelegationResponse>;
                unbondingDelegation(request: import("./staking/v1beta1/query.js").QueryUnbondingDelegationRequest): Promise<import("./staking/v1beta1/query.js").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("./staking/v1beta1/query.js").QueryDelegatorDelegationsRequest): Promise<import("./staking/v1beta1/query.js").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("./staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("./staking/v1beta1/query.js").QueryRedelegationsRequest): Promise<import("./staking/v1beta1/query.js").QueryRedelegationsResponse>;
                delegatorValidators(request: import("./staking/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("./staking/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("./staking/v1beta1/query.js").QueryDelegatorValidatorRequest): Promise<import("./staking/v1beta1/query.js").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("./staking/v1beta1/query.js").QueryHistoricalInfoRequest): Promise<import("./staking/v1beta1/query.js").QueryHistoricalInfoResponse>;
                pool(request?: import("./staking/v1beta1/query.js").QueryPoolRequest): Promise<import("./staking/v1beta1/query.js").QueryPoolResponse>;
                params(request?: import("./staking/v1beta1/query.js").QueryParamsRequest): Promise<import("./staking/v1beta1/query.js").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("./tx/v1beta1/service.js").SimulateRequest): Promise<import("./tx/v1beta1/service.js").SimulateResponse>;
                getTx(request: import("./tx/v1beta1/service.js").GetTxRequest): Promise<import("./tx/v1beta1/service.js").GetTxResponse>;
                broadcastTx(request: import("./tx/v1beta1/service.js").BroadcastTxRequest): Promise<import("./tx/v1beta1/service.js").BroadcastTxResponse>;
                getTxsEvent(request: import("./tx/v1beta1/service.js").GetTxsEventRequest): Promise<import("./tx/v1beta1/service.js").GetTxsEventResponse>;
                getBlockWithTxs(request: import("./tx/v1beta1/service.js").GetBlockWithTxsRequest): Promise<import("./tx/v1beta1/service.js").GetBlockWithTxsResponse>;
                txDecode(request: import("./tx/v1beta1/service.js").TxDecodeRequest): Promise<import("./tx/v1beta1/service.js").TxDecodeResponse>;
                txEncode(request: import("./tx/v1beta1/service.js").TxEncodeRequest): Promise<import("./tx/v1beta1/service.js").TxEncodeResponse>;
                txEncodeAmino(request: import("./tx/v1beta1/service.js").TxEncodeAminoRequest): Promise<import("./tx/v1beta1/service.js").TxEncodeAminoResponse>;
                txDecodeAmino(request: import("./tx/v1beta1/service.js").TxDecodeAminoRequest): Promise<import("./tx/v1beta1/service.js").TxDecodeAminoResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("./upgrade/v1beta1/query.js").QueryCurrentPlanRequest): Promise<import("./upgrade/v1beta1/query.js").QueryCurrentPlanResponse>;
                appliedPlan(request: import("./upgrade/v1beta1/query.js").QueryAppliedPlanRequest): Promise<import("./upgrade/v1beta1/query.js").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("./upgrade/v1beta1/query.js").QueryUpgradedConsensusStateRequest): Promise<import("./upgrade/v1beta1/query.js").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("./upgrade/v1beta1/query.js").QueryModuleVersionsRequest): Promise<import("./upgrade/v1beta1/query.js").QueryModuleVersionsResponse>;
                authority(request?: import("./upgrade/v1beta1/query.js").QueryAuthorityRequest): Promise<import("./upgrade/v1beta1/query.js").QueryAuthorityResponse>;
            };
        };
    };
}>;
