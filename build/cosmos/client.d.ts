import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmosAdminmoduleAdminmoduleTxAmino from "./adminmodule/adminmodule/tx.amino.js";
import * as cosmosAuthV1beta1TxAmino from "./auth/v1beta1/tx.amino.js";
import * as cosmosAuthzV1beta1TxAmino from "./authz/v1beta1/tx.amino.js";
import * as cosmosBankV1beta1TxAmino from "./bank/v1beta1/tx.amino.js";
import * as cosmosBenchmarkV1TxAmino from "./benchmark/v1/tx.amino.js";
import * as cosmosCircuitV1TxAmino from "./circuit/v1/tx.amino.js";
import * as cosmosConsensusV1TxAmino from "./consensus/v1/tx.amino.js";
import * as cosmosCounterV1TxAmino from "./counter/v1/tx.amino.js";
import * as cosmosCrisisV1beta1TxAmino from "./crisis/v1beta1/tx.amino.js";
import * as cosmosDistributionV1beta1TxAmino from "./distribution/v1beta1/tx.amino.js";
import * as cosmosEvidenceV1beta1TxAmino from "./evidence/v1beta1/tx.amino.js";
import * as cosmosFeegrantV1beta1TxAmino from "./feegrant/v1beta1/tx.amino.js";
import * as cosmosGovV1TxAmino from "./gov/v1/tx.amino.js";
import * as cosmosGovV1beta1TxAmino from "./gov/v1beta1/tx.amino.js";
import * as cosmosGroupV1TxAmino from "./group/v1/tx.amino.js";
import * as cosmosMintV1beta1TxAmino from "./mint/v1beta1/tx.amino.js";
import * as cosmosNftV1beta1TxAmino from "./nft/v1beta1/tx.amino.js";
import * as cosmosProtocolpoolV1TxAmino from "./protocolpool/v1/tx.amino.js";
import * as cosmosSlashingV1beta1TxAmino from "./slashing/v1beta1/tx.amino.js";
import * as cosmosStakingV1beta1TxAmino from "./staking/v1beta1/tx.amino.js";
import * as cosmosUpgradeV1beta1TxAmino from "./upgrade/v1beta1/tx.amino.js";
import * as cosmosVestingV1beta1TxAmino from "./vesting/v1beta1/tx.amino.js";
export declare const cosmosAminoConverters: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed, }: import("./vesting/v1beta1/tx.js").MsgCreateVestingAccount) => cosmosVestingV1beta1TxAmino.MsgCreateVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, end_time, delayed, }: cosmosVestingV1beta1TxAmino.MsgCreateVestingAccountAminoType["value"]) => import("./vesting/v1beta1/tx.js").MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, }: import("./vesting/v1beta1/tx.js").MsgCreatePermanentLockedAccount) => cosmosVestingV1beta1TxAmino.MsgCreatePermanentLockedAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, }: cosmosVestingV1beta1TxAmino.MsgCreatePermanentLockedAccountAminoType["value"]) => import("./vesting/v1beta1/tx.js").MsgCreatePermanentLockedAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods, }: import("./vesting/v1beta1/tx.js").MsgCreatePeriodicVestingAccount) => cosmosVestingV1beta1TxAmino.MsgCreatePeriodicVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, start_time, vesting_periods, }: cosmosVestingV1beta1TxAmino.MsgCreatePeriodicVestingAccountAminoType["value"]) => import("./vesting/v1beta1/tx.js").MsgCreatePeriodicVestingAccount;
    };
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: import("./upgrade/v1beta1/tx.js").MsgSoftwareUpgrade) => cosmosUpgradeV1beta1TxAmino.MsgSoftwareUpgradeAminoType["value"];
        fromAmino: ({ authority, plan }: cosmosUpgradeV1beta1TxAmino.MsgSoftwareUpgradeAminoType["value"]) => import("./upgrade/v1beta1/tx.js").MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: string;
        toAmino: ({ authority }: import("./upgrade/v1beta1/tx.js").MsgCancelUpgrade) => cosmosUpgradeV1beta1TxAmino.MsgCancelUpgradeAminoType["value"];
        fromAmino: ({ authority }: cosmosUpgradeV1beta1TxAmino.MsgCancelUpgradeAminoType["value"]) => import("./upgrade/v1beta1/tx.js").MsgCancelUpgrade;
    };
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value, }: import("./staking/v1beta1/tx.js").MsgCreateValidator) => cosmosStakingV1beta1TxAmino.MsgCreateValidatorAminoType["value"];
        fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value, }: cosmosStakingV1beta1TxAmino.MsgCreateValidatorAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation, }: import("./staking/v1beta1/tx.js").MsgEditValidator) => cosmosStakingV1beta1TxAmino.MsgEditValidatorAminoType["value"];
        fromAmino: ({ description, validator_address, commission_rate, min_self_delegation, }: cosmosStakingV1beta1TxAmino.MsgEditValidatorAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: import("./staking/v1beta1/tx.js").MsgDelegate) => cosmosStakingV1beta1TxAmino.MsgDelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount, }: cosmosStakingV1beta1TxAmino.MsgDelegateAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount, }: import("./staking/v1beta1/tx.js").MsgBeginRedelegate) => cosmosStakingV1beta1TxAmino.MsgBeginRedelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount, }: cosmosStakingV1beta1TxAmino.MsgBeginRedelegateAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount, }: import("./staking/v1beta1/tx.js").MsgUndelegate) => cosmosStakingV1beta1TxAmino.MsgUndelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount, }: cosmosStakingV1beta1TxAmino.MsgUndelegateAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgUndelegate;
    };
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight, }: import("./staking/v1beta1/tx.js").MsgCancelUnbondingDelegation) => cosmosStakingV1beta1TxAmino.MsgCancelUnbondingDelegationAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount, creation_height, }: cosmosStakingV1beta1TxAmino.MsgCancelUnbondingDelegationAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgCancelUnbondingDelegation;
    };
    "/cosmos.staking.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./staking/v1beta1/tx.js").MsgUpdateParams) => cosmosStakingV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosStakingV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./staking/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: ({ validatorAddr }: import("./slashing/v1beta1/tx.js").MsgUnjail) => cosmosSlashingV1beta1TxAmino.MsgUnjailAminoType["value"];
        fromAmino: ({ validator_addr }: cosmosSlashingV1beta1TxAmino.MsgUnjailAminoType["value"]) => import("./slashing/v1beta1/tx.js").MsgUnjail;
    };
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./slashing/v1beta1/tx.js").MsgUpdateParams) => cosmosSlashingV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosSlashingV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./slashing/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.protocolpool.v1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ depositor, amount }: import("./protocolpool/v1/tx.js").MsgFundCommunityPool) => cosmosProtocolpoolV1TxAmino.MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ depositor, amount }: cosmosProtocolpoolV1TxAmino.MsgFundCommunityPoolAminoType["value"]) => import("./protocolpool/v1/tx.js").MsgFundCommunityPool;
    };
    "/cosmos.protocolpool.v1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount, }: import("./protocolpool/v1/tx.js").MsgCommunityPoolSpend) => cosmosProtocolpoolV1TxAmino.MsgCommunityPoolSpendAminoType["value"];
        fromAmino: ({ authority, recipient, amount, }: cosmosProtocolpoolV1TxAmino.MsgCommunityPoolSpendAminoType["value"]) => import("./protocolpool/v1/tx.js").MsgCommunityPoolSpend;
    };
    "/cosmos.protocolpool.v1.MsgCreateContinuousFund": {
        aminoType: string;
        toAmino: ({ authority, recipient, percentage, expiry, }: import("./protocolpool/v1/tx.js").MsgCreateContinuousFund) => cosmosProtocolpoolV1TxAmino.MsgCreateContinuousFundAminoType["value"];
        fromAmino: ({ authority, recipient, percentage, expiry, }: cosmosProtocolpoolV1TxAmino.MsgCreateContinuousFundAminoType["value"]) => import("./protocolpool/v1/tx.js").MsgCreateContinuousFund;
    };
    "/cosmos.protocolpool.v1.MsgCancelContinuousFund": {
        aminoType: string;
        toAmino: ({ authority, recipient, }: import("./protocolpool/v1/tx.js").MsgCancelContinuousFund) => cosmosProtocolpoolV1TxAmino.MsgCancelContinuousFundAminoType["value"];
        fromAmino: ({ authority, recipient, }: cosmosProtocolpoolV1TxAmino.MsgCancelContinuousFundAminoType["value"]) => import("./protocolpool/v1/tx.js").MsgCancelContinuousFund;
    };
    "/cosmos.protocolpool.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./protocolpool/v1/tx.js").MsgUpdateParams) => cosmosProtocolpoolV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosProtocolpoolV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./protocolpool/v1/tx.js").MsgUpdateParams;
    };
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ classId, id, sender, receiver }: import("./nft/v1beta1/tx.js").MsgSend) => cosmosNftV1beta1TxAmino.MsgSendAminoType["value"];
        fromAmino: ({ class_id, id, sender, receiver }: cosmosNftV1beta1TxAmino.MsgSendAminoType["value"]) => import("./nft/v1beta1/tx.js").MsgSend;
    };
    "/cosmos.mint.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./mint/v1beta1/tx.js").MsgUpdateParams) => cosmosMintV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosMintV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./mint/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: string;
        toAmino: ({ admin, members, metadata }: import("./group/v1/tx.js").MsgCreateGroup) => cosmosGroupV1TxAmino.MsgCreateGroupAminoType["value"];
        fromAmino: ({ admin, members, metadata }: cosmosGroupV1TxAmino.MsgCreateGroupAminoType["value"]) => import("./group/v1/tx.js").MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: ({ admin, groupId, memberUpdates, }: import("./group/v1/tx.js").MsgUpdateGroupMembers) => cosmosGroupV1TxAmino.MsgUpdateGroupMembersAminoType["value"];
        fromAmino: ({ admin, group_id, member_updates, }: cosmosGroupV1TxAmino.MsgUpdateGroupMembersAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupId, newAdmin }: import("./group/v1/tx.js").MsgUpdateGroupAdmin) => cosmosGroupV1TxAmino.MsgUpdateGroupAdminAminoType["value"];
        fromAmino: ({ admin, group_id, new_admin, }: cosmosGroupV1TxAmino.MsgUpdateGroupAdminAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, }: import("./group/v1/tx.js").MsgUpdateGroupMetadata) => cosmosGroupV1TxAmino.MsgUpdateGroupMetadataAminoType["value"];
        fromAmino: ({ admin, group_id, metadata, }: cosmosGroupV1TxAmino.MsgUpdateGroupMetadataAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, decisionPolicy, }: import("./group/v1/tx.js").MsgCreateGroupPolicy) => cosmosGroupV1TxAmino.MsgCreateGroupPolicyAminoType["value"];
        fromAmino: ({ admin, group_id, metadata, decision_policy, }: cosmosGroupV1TxAmino.MsgCreateGroupPolicyAminoType["value"]) => import("./group/v1/tx.js").MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: string;
        toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy, }: import("./group/v1/tx.js").MsgCreateGroupWithPolicy) => cosmosGroupV1TxAmino.MsgCreateGroupWithPolicyAminoType["value"];
        fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy, }: cosmosGroupV1TxAmino.MsgCreateGroupWithPolicyAminoType["value"]) => import("./group/v1/tx.js").MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, newAdmin, }: import("./group/v1/tx.js").MsgUpdateGroupPolicyAdmin) => cosmosGroupV1TxAmino.MsgUpdateGroupPolicyAdminAminoType["value"];
        fromAmino: ({ admin, group_policy_address, new_admin, }: cosmosGroupV1TxAmino.MsgUpdateGroupPolicyAdminAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, decisionPolicy, }: import("./group/v1/tx.js").MsgUpdateGroupPolicyDecisionPolicy) => cosmosGroupV1TxAmino.MsgUpdateGroupPolicyDecisionPolicyAminoType["value"];
        fromAmino: ({ admin, group_policy_address, decision_policy, }: cosmosGroupV1TxAmino.MsgUpdateGroupPolicyDecisionPolicyAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, metadata, }: import("./group/v1/tx.js").MsgUpdateGroupPolicyMetadata) => cosmosGroupV1TxAmino.MsgUpdateGroupPolicyMetadataAminoType["value"];
        fromAmino: ({ admin, group_policy_address, metadata, }: cosmosGroupV1TxAmino.MsgUpdateGroupPolicyMetadataAminoType["value"]) => import("./group/v1/tx.js").MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary, }: import("./group/v1/tx.js").MsgSubmitProposal) => cosmosGroupV1TxAmino.MsgSubmitProposalAminoType["value"];
        fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary, }: cosmosGroupV1TxAmino.MsgSubmitProposalAminoType["value"]) => import("./group/v1/tx.js").MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: string;
        toAmino: ({ proposalId, address }: import("./group/v1/tx.js").MsgWithdrawProposal) => cosmosGroupV1TxAmino.MsgWithdrawProposalAminoType["value"];
        fromAmino: ({ proposal_id, address }: cosmosGroupV1TxAmino.MsgWithdrawProposalAminoType["value"]) => import("./group/v1/tx.js").MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata, exec }: import("./group/v1/tx.js").MsgVote) => cosmosGroupV1TxAmino.MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option, metadata, exec }: cosmosGroupV1TxAmino.MsgVoteAminoType["value"]) => import("./group/v1/tx.js").MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        aminoType: string;
        toAmino: ({ proposalId, executor }: import("./group/v1/tx.js").MsgExec) => cosmosGroupV1TxAmino.MsgExecAminoType["value"];
        fromAmino: ({ proposal_id, executor }: cosmosGroupV1TxAmino.MsgExecAminoType["value"]) => import("./group/v1/tx.js").MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: string;
        toAmino: ({ address, groupId }: import("./group/v1/tx.js").MsgLeaveGroup) => cosmosGroupV1TxAmino.MsgLeaveGroupAminoType["value"];
        fromAmino: ({ address, group_id }: cosmosGroupV1TxAmino.MsgLeaveGroupAminoType["value"]) => import("./group/v1/tx.js").MsgLeaveGroup;
    };
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ content, initialDeposit, proposer, }: import("./gov/v1beta1/tx.js").MsgSubmitProposal) => cosmosGovV1beta1TxAmino.MsgSubmitProposalAminoType["value"];
        fromAmino: ({ content, initial_deposit, proposer, }: cosmosGovV1beta1TxAmino.MsgSubmitProposalAminoType["value"]) => import("./gov/v1beta1/tx.js").MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option }: import("./gov/v1beta1/tx.js").MsgVote) => cosmosGovV1beta1TxAmino.MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option }: cosmosGovV1beta1TxAmino.MsgVoteAminoType["value"]) => import("./gov/v1beta1/tx.js").MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options }: import("./gov/v1beta1/tx.js").MsgVoteWeighted) => cosmosGovV1beta1TxAmino.MsgVoteWeightedAminoType["value"];
        fromAmino: ({ proposal_id, voter, options }: cosmosGovV1beta1TxAmino.MsgVoteWeightedAminoType["value"]) => import("./gov/v1beta1/tx.js").MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1beta1/tx.js").MsgDeposit) => cosmosGovV1beta1TxAmino.MsgDepositAminoType["value"];
        fromAmino: ({ proposal_id, depositor, amount }: cosmosGovV1beta1TxAmino.MsgDepositAminoType["value"]) => import("./gov/v1beta1/tx.js").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary, expedited, }: import("./gov/v1/tx.js").MsgSubmitProposal) => cosmosGovV1TxAmino.MsgSubmitProposalAminoType["value"];
        fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary, expedited, }: cosmosGovV1TxAmino.MsgSubmitProposalAminoType["value"]) => import("./gov/v1/tx.js").MsgSubmitProposal;
    };
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: string;
        toAmino: ({ content, authority }: import("./gov/v1/tx.js").MsgExecLegacyContent) => cosmosGovV1TxAmino.MsgExecLegacyContentAminoType["value"];
        fromAmino: ({ content, authority }: cosmosGovV1TxAmino.MsgExecLegacyContentAminoType["value"]) => import("./gov/v1/tx.js").MsgExecLegacyContent;
    };
    "/cosmos.gov.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata }: import("./gov/v1/tx.js").MsgVote) => cosmosGovV1TxAmino.MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option, metadata }: cosmosGovV1TxAmino.MsgVoteAminoType["value"]) => import("./gov/v1/tx.js").MsgVote;
    };
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options, metadata, }: import("./gov/v1/tx.js").MsgVoteWeighted) => cosmosGovV1TxAmino.MsgVoteWeightedAminoType["value"];
        fromAmino: ({ proposal_id, voter, options, metadata, }: cosmosGovV1TxAmino.MsgVoteWeightedAminoType["value"]) => import("./gov/v1/tx.js").MsgVoteWeighted;
    };
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1/tx.js").MsgDeposit) => cosmosGovV1TxAmino.MsgDepositAminoType["value"];
        fromAmino: ({ proposal_id, depositor, amount }: cosmosGovV1TxAmino.MsgDepositAminoType["value"]) => import("./gov/v1/tx.js").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./gov/v1/tx.js").MsgUpdateParams) => cosmosGovV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosGovV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./gov/v1/tx.js").MsgUpdateParams;
    };
    "/cosmos.gov.v1.MsgCancelProposal": {
        aminoType: string;
        toAmino: ({ proposalId, proposer }: import("./gov/v1/tx.js").MsgCancelProposal) => cosmosGovV1TxAmino.MsgCancelProposalAminoType["value"];
        fromAmino: ({ proposal_id, proposer }: cosmosGovV1TxAmino.MsgCancelProposalAminoType["value"]) => import("./gov/v1/tx.js").MsgCancelProposal;
    };
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee, allowance }: import("./feegrant/v1beta1/tx.js").MsgGrantAllowance) => cosmosFeegrantV1beta1TxAmino.MsgGrantAllowanceAminoType["value"];
        fromAmino: ({ granter, grantee, allowance }: cosmosFeegrantV1beta1TxAmino.MsgGrantAllowanceAminoType["value"]) => import("./feegrant/v1beta1/tx.js").MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee }: import("./feegrant/v1beta1/tx.js").MsgRevokeAllowance) => cosmosFeegrantV1beta1TxAmino.MsgRevokeAllowanceAminoType["value"];
        fromAmino: ({ granter, grantee }: cosmosFeegrantV1beta1TxAmino.MsgRevokeAllowanceAminoType["value"]) => import("./feegrant/v1beta1/tx.js").MsgRevokeAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
        aminoType: string;
        toAmino: ({ pruner }: import("./feegrant/v1beta1/tx.js").MsgPruneAllowances) => cosmosFeegrantV1beta1TxAmino.MsgPruneAllowancesAminoType["value"];
        fromAmino: ({ pruner }: cosmosFeegrantV1beta1TxAmino.MsgPruneAllowancesAminoType["value"]) => import("./feegrant/v1beta1/tx.js").MsgPruneAllowances;
    };
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: string;
        toAmino: ({ submitter, evidence }: import("./evidence/v1beta1/tx.js").MsgSubmitEvidence) => cosmosEvidenceV1beta1TxAmino.MsgSubmitEvidenceAminoType["value"];
        fromAmino: ({ submitter, evidence }: cosmosEvidenceV1beta1TxAmino.MsgSubmitEvidenceAminoType["value"]) => import("./evidence/v1beta1/tx.js").MsgSubmitEvidence;
    };
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress, }: import("./distribution/v1beta1/tx.js").MsgSetWithdrawAddress) => cosmosDistributionV1beta1TxAmino.MsgSetWithdrawAddressAminoType["value"];
        fromAmino: ({ delegator_address, withdraw_address, }: cosmosDistributionV1beta1TxAmino.MsgSetWithdrawAddressAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, }: import("./distribution/v1beta1/tx.js").MsgWithdrawDelegatorReward) => cosmosDistributionV1beta1TxAmino.MsgWithdrawDelegatorRewardAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, }: cosmosDistributionV1beta1TxAmino.MsgWithdrawDelegatorRewardAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress, }: import("./distribution/v1beta1/tx.js").MsgWithdrawValidatorCommission) => cosmosDistributionV1beta1TxAmino.MsgWithdrawValidatorCommissionAminoType["value"];
        fromAmino: ({ validator_address, }: cosmosDistributionV1beta1TxAmino.MsgWithdrawValidatorCommissionAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: import("./distribution/v1beta1/tx.js").MsgFundCommunityPool) => cosmosDistributionV1beta1TxAmino.MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ amount, depositor }: cosmosDistributionV1beta1TxAmino.MsgFundCommunityPoolAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgFundCommunityPool;
    };
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./distribution/v1beta1/tx.js").MsgUpdateParams) => cosmosDistributionV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosDistributionV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount, }: import("./distribution/v1beta1/tx.js").MsgCommunityPoolSpend) => cosmosDistributionV1beta1TxAmino.MsgCommunityPoolSpendAminoType["value"];
        fromAmino: ({ authority, recipient, amount, }: cosmosDistributionV1beta1TxAmino.MsgCommunityPoolSpendAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgCommunityPoolSpend;
    };
    "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
        aminoType: string;
        toAmino: ({ depositor, validatorAddress, amount, }: import("./distribution/v1beta1/tx.js").MsgDepositValidatorRewardsPool) => cosmosDistributionV1beta1TxAmino.MsgDepositValidatorRewardsPoolAminoType["value"];
        fromAmino: ({ depositor, validator_address, amount, }: cosmosDistributionV1beta1TxAmino.MsgDepositValidatorRewardsPoolAminoType["value"]) => import("./distribution/v1beta1/tx.js").MsgDepositValidatorRewardsPool;
    };
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: ({ sender, invariantModuleName, invariantRoute, }: import("./crisis/v1beta1/tx.js").MsgVerifyInvariant) => cosmosCrisisV1beta1TxAmino.MsgVerifyInvariantAminoType["value"];
        fromAmino: ({ sender, invariant_module_name, invariant_route, }: cosmosCrisisV1beta1TxAmino.MsgVerifyInvariantAminoType["value"]) => import("./crisis/v1beta1/tx.js").MsgVerifyInvariant;
    };
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, constantFee }: import("./crisis/v1beta1/tx.js").MsgUpdateParams) => cosmosCrisisV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, constant_fee }: cosmosCrisisV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./crisis/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.counter.v1.MsgIncreaseCounter": {
        aminoType: string;
        toAmino: ({ signer, count }: import("./counter/v1/tx.js").MsgIncreaseCounter) => cosmosCounterV1TxAmino.MsgIncreaseCounterAminoType["value"];
        fromAmino: ({ signer, count }: cosmosCounterV1TxAmino.MsgIncreaseCounterAminoType["value"]) => import("./counter/v1/tx.js").MsgIncreaseCounter;
    };
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, block, evidence, validator, abci, }: import("./consensus/v1/tx.js").MsgUpdateParams) => cosmosConsensusV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, block, evidence, validator, abci, }: cosmosConsensusV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./consensus/v1/tx.js").MsgUpdateParams;
    };
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
        aminoType: string;
        toAmino: ({ granter, grantee, permissions, }: import("./circuit/v1/tx.js").MsgAuthorizeCircuitBreaker) => cosmosCircuitV1TxAmino.MsgAuthorizeCircuitBreakerAminoType["value"];
        fromAmino: ({ granter, grantee, permissions, }: cosmosCircuitV1TxAmino.MsgAuthorizeCircuitBreakerAminoType["value"]) => import("./circuit/v1/tx.js").MsgAuthorizeCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls }: import("./circuit/v1/tx.js").MsgTripCircuitBreaker) => cosmosCircuitV1TxAmino.MsgTripCircuitBreakerAminoType["value"];
        fromAmino: ({ authority, msg_type_urls, }: cosmosCircuitV1TxAmino.MsgTripCircuitBreakerAminoType["value"]) => import("./circuit/v1/tx.js").MsgTripCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls, }: import("./circuit/v1/tx.js").MsgResetCircuitBreaker) => cosmosCircuitV1TxAmino.MsgResetCircuitBreakerAminoType["value"];
        fromAmino: ({ authority, msg_type_urls, }: cosmosCircuitV1TxAmino.MsgResetCircuitBreakerAminoType["value"]) => import("./circuit/v1/tx.js").MsgResetCircuitBreaker;
    };
    "/cosmos.benchmark.v1.MsgLoadTest": {
        aminoType: string;
        toAmino: ({ caller, ops }: import("./benchmark/v1/tx.js").MsgLoadTest) => cosmosBenchmarkV1TxAmino.MsgLoadTestAminoType["value"];
        fromAmino: ({ caller, ops }: cosmosBenchmarkV1TxAmino.MsgLoadTestAminoType["value"]) => import("./benchmark/v1/tx.js").MsgLoadTest;
    };
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: import("./bank/v1beta1/tx.js").MsgSend) => cosmosBankV1beta1TxAmino.MsgSendAminoType["value"];
        fromAmino: ({ from_address, to_address, amount }: cosmosBankV1beta1TxAmino.MsgSendAminoType["value"]) => import("./bank/v1beta1/tx.js").MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: ({ inputs, outputs }: import("./bank/v1beta1/tx.js").MsgMultiSend) => cosmosBankV1beta1TxAmino.MsgMultiSendAminoType["value"];
        fromAmino: ({ inputs, outputs }: cosmosBankV1beta1TxAmino.MsgMultiSendAminoType["value"]) => import("./bank/v1beta1/tx.js").MsgMultiSend;
    };
    "/cosmos.bank.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./bank/v1beta1/tx.js").MsgUpdateParams) => cosmosBankV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosBankV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./bank/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
        aminoType: string;
        toAmino: ({ authority, sendEnabled, useDefaultFor, }: import("./bank/v1beta1/tx.js").MsgSetSendEnabled) => cosmosBankV1beta1TxAmino.MsgSetSendEnabledAminoType["value"];
        fromAmino: ({ authority, send_enabled, use_default_for, }: cosmosBankV1beta1TxAmino.MsgSetSendEnabledAminoType["value"]) => import("./bank/v1beta1/tx.js").MsgSetSendEnabled;
    };
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: string;
        toAmino: ({ granter, grantee, grant }: import("./authz/v1beta1/tx.js").MsgGrant) => cosmosAuthzV1beta1TxAmino.MsgGrantAminoType["value"];
        fromAmino: ({ granter, grantee, grant }: cosmosAuthzV1beta1TxAmino.MsgGrantAminoType["value"]) => import("./authz/v1beta1/tx.js").MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: ({ grantee, msgs }: import("./authz/v1beta1/tx.js").MsgExec) => cosmosAuthzV1beta1TxAmino.MsgExecAminoType["value"];
        fromAmino: ({ grantee, msgs }: cosmosAuthzV1beta1TxAmino.MsgExecAminoType["value"]) => import("./authz/v1beta1/tx.js").MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: string;
        toAmino: ({ granter, grantee, msgTypeUrl }: import("./authz/v1beta1/tx.js").MsgRevoke) => cosmosAuthzV1beta1TxAmino.MsgRevokeAminoType["value"];
        fromAmino: ({ granter, grantee, msg_type_url }: cosmosAuthzV1beta1TxAmino.MsgRevokeAminoType["value"]) => import("./authz/v1beta1/tx.js").MsgRevoke;
    };
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./auth/v1beta1/tx.js").MsgUpdateParams) => cosmosAuthV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmosAuthV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./auth/v1beta1/tx.js").MsgUpdateParams;
    };
    "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin": {
        aminoType: string;
        toAmino: ({ creator, admin }: import("./adminmodule/adminmodule/tx.js").MsgDeleteAdmin) => cosmosAdminmoduleAdminmoduleTxAmino.MsgDeleteAdminAminoType["value"];
        fromAmino: ({ creator, admin }: cosmosAdminmoduleAdminmoduleTxAmino.MsgDeleteAdminAminoType["value"]) => import("./adminmodule/adminmodule/tx.js").MsgDeleteAdmin;
    };
    "/cosmos.adminmodule.adminmodule.MsgAddAdmin": {
        aminoType: string;
        toAmino: ({ creator, admin }: import("./adminmodule/adminmodule/tx.js").MsgAddAdmin) => cosmosAdminmoduleAdminmoduleTxAmino.MsgAddAdminAminoType["value"];
        fromAmino: ({ creator, admin }: cosmosAdminmoduleAdminmoduleTxAmino.MsgAddAdminAminoType["value"]) => import("./adminmodule/adminmodule/tx.js").MsgAddAdmin;
    };
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, proposer }: import("./adminmodule/adminmodule/tx.js").MsgSubmitProposal) => cosmosAdminmoduleAdminmoduleTxAmino.MsgSubmitProposalAminoType["value"];
        fromAmino: ({ messages, proposer }: cosmosAdminmoduleAdminmoduleTxAmino.MsgSubmitProposalAminoType["value"]) => import("./adminmodule/adminmodule/tx.js").MsgSubmitProposal;
    };
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy": {
        aminoType: string;
        toAmino: ({ content, proposer }: import("./adminmodule/adminmodule/tx.js").MsgSubmitProposalLegacy) => cosmosAdminmoduleAdminmoduleTxAmino.MsgSubmitProposalLegacyAminoType["value"];
        fromAmino: ({ content, proposer, }: cosmosAdminmoduleAdminmoduleTxAmino.MsgSubmitProposalLegacyAminoType["value"]) => import("./adminmodule/adminmodule/tx.js").MsgSubmitProposalLegacy;
    };
};
export declare const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmosClientOptions: () => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmosClient: ({ rpcEndpoint, signer, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
}) => Promise<SigningStargateClient>;
