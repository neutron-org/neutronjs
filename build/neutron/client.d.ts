import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as neutronCoinfactoryV1beta1TxAmino from "./coinfactory/v1beta1/tx.amino.js";
import * as neutronContractmanagerTxAmino from "./contractmanager/tx.amino.js";
import * as neutronCronTxAmino from "./cron/tx.amino.js";
import * as neutronDexTxAmino from "./dex/tx.amino.js";
import * as neutronDynamicfeesV1TxAmino from "./dynamicfees/v1/tx.amino.js";
import * as neutronFeeburnerTxAmino from "./feeburner/tx.amino.js";
import * as neutronFeerefunderTxAmino from "./feerefunder/tx.amino.js";
import * as neutronHarpoonTxAmino from "./harpoon/tx.amino.js";
import * as neutronIbcratelimitV1beta1TxAmino from "./ibcratelimit/v1beta1/tx.amino.js";
import * as neutronInterchainqueriesTxAmino from "./interchainqueries/tx.amino.js";
import * as neutronInterchaintxsV1TxAmino from "./interchaintxs/v1/tx.amino.js";
import * as neutronRevenueTxAmino from "./revenue/tx.amino.js";
import * as neutronTransferV1TxAmino from "./transfer/v1/tx.amino.js";
export declare const neutronAminoConverters: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, fee, }: import("./transfer/v1/tx.js").MsgTransfer) => neutronTransferV1TxAmino.MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, fee, }: neutronTransferV1TxAmino.MsgTransferAminoType["value"]) => import("./transfer/v1/tx.js").MsgTransfer;
    };
    "/neutron.transfer.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./transfer/v1/tx.js").MsgUpdateParams) => neutronTransferV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: neutronTransferV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./transfer/v1/tx.js").MsgUpdateParams;
    };
    "/neutron.revenue.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./revenue/tx.js").MsgUpdateParams) => neutronRevenueTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronRevenueTxAmino.MsgUpdateParamsAminoType["value"]) => import("./revenue/tx.js").MsgUpdateParams;
    };
    "/neutron.revenue.MsgFundTreasury": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./revenue/tx.js").MsgFundTreasury) => neutronRevenueTxAmino.MsgFundTreasuryAminoType["value"];
        fromAmino: ({ sender, amount }: neutronRevenueTxAmino.MsgFundTreasuryAminoType["value"]) => import("./revenue/tx.js").MsgFundTreasury;
    };
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, connectionId, interchainAccountId, registerFee, ordering, }: import("./interchaintxs/v1/tx.js").MsgRegisterInterchainAccount) => neutronInterchaintxsV1TxAmino.MsgRegisterInterchainAccountAminoType["value"];
        fromAmino: ({ from_address, connection_id, interchain_account_id, register_fee, ordering, }: neutronInterchaintxsV1TxAmino.MsgRegisterInterchainAccountAminoType["value"]) => import("./interchaintxs/v1/tx.js").MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ fromAddress, interchainAccountId, connectionId, msgs, memo, timeout, fee, }: import("./interchaintxs/v1/tx.js").MsgSubmitTx) => neutronInterchaintxsV1TxAmino.MsgSubmitTxAminoType["value"];
        fromAmino: ({ from_address, interchain_account_id, connection_id, msgs, memo, timeout, fee, }: neutronInterchaintxsV1TxAmino.MsgSubmitTxAminoType["value"]) => import("./interchaintxs/v1/tx.js").MsgSubmitTx;
    };
    "/neutron.interchaintxs.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./interchaintxs/v1/tx.js").MsgUpdateParams) => neutronInterchaintxsV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronInterchaintxsV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./interchaintxs/v1/tx.js").MsgUpdateParams;
    };
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: ({ queryType, keys, transactionsFilter, connectionId, updatePeriod, sender, }: import("./interchainqueries/tx.js").MsgRegisterInterchainQuery) => neutronInterchainqueriesTxAmino.MsgRegisterInterchainQueryAminoType["value"];
        fromAmino: ({ query_type, keys, transactions_filter, connection_id, update_period, sender, }: neutronInterchainqueriesTxAmino.MsgRegisterInterchainQueryAminoType["value"]) => import("./interchainqueries/tx.js").MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: ({ queryId, sender, clientId, result, }: import("./interchainqueries/tx.js").MsgSubmitQueryResult) => neutronInterchainqueriesTxAmino.MsgSubmitQueryResultAminoType["value"];
        fromAmino: ({ query_id, sender, client_id, result, }: neutronInterchainqueriesTxAmino.MsgSubmitQueryResultAminoType["value"]) => import("./interchainqueries/tx.js").MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, sender, }: import("./interchainqueries/tx.js").MsgRemoveInterchainQueryRequest) => neutronInterchainqueriesTxAmino.MsgRemoveInterchainQueryRequestAminoType["value"];
        fromAmino: ({ query_id, sender, }: neutronInterchainqueriesTxAmino.MsgRemoveInterchainQueryRequestAminoType["value"]) => import("./interchainqueries/tx.js").MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: ({ queryId, newKeys, newUpdatePeriod, newTransactionsFilter, sender, }: import("./interchainqueries/tx.js").MsgUpdateInterchainQueryRequest) => neutronInterchainqueriesTxAmino.MsgUpdateInterchainQueryRequestAminoType["value"];
        fromAmino: ({ query_id, new_keys, new_update_period, new_transactions_filter, sender, }: neutronInterchainqueriesTxAmino.MsgUpdateInterchainQueryRequestAminoType["value"]) => import("./interchainqueries/tx.js").MsgUpdateInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./interchainqueries/tx.js").MsgUpdateParams) => neutronInterchainqueriesTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronInterchainqueriesTxAmino.MsgUpdateParamsAminoType["value"]) => import("./interchainqueries/tx.js").MsgUpdateParams;
    };
    "/neutron.ibcratelimit.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./ibcratelimit/v1beta1/tx.js").MsgUpdateParams) => neutronIbcratelimitV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronIbcratelimitV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./ibcratelimit/v1beta1/tx.js").MsgUpdateParams;
    };
    "/neutron.harpoon.MsgManageHookSubscription": {
        aminoType: string;
        toAmino: ({ authority, hookSubscription, }: import("./harpoon/tx.js").MsgManageHookSubscription) => neutronHarpoonTxAmino.MsgManageHookSubscriptionAminoType["value"];
        fromAmino: ({ authority, hook_subscription, }: neutronHarpoonTxAmino.MsgManageHookSubscriptionAminoType["value"]) => import("./harpoon/tx.js").MsgManageHookSubscription;
    };
    "/neutron.feerefunder.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./feerefunder/tx.js").MsgUpdateParams) => neutronFeerefunderTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronFeerefunderTxAmino.MsgUpdateParamsAminoType["value"]) => import("./feerefunder/tx.js").MsgUpdateParams;
    };
    "/neutron.feeburner.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./feeburner/tx.js").MsgUpdateParams) => neutronFeeburnerTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronFeeburnerTxAmino.MsgUpdateParamsAminoType["value"]) => import("./feeburner/tx.js").MsgUpdateParams;
    };
    "/neutron.dynamicfees.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./dynamicfees/v1/tx.js").MsgUpdateParams) => neutronDynamicfeesV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronDynamicfeesV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./dynamicfees/v1/tx.js").MsgUpdateParams;
    };
    "/neutron.dex.MsgDeposit": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, options, }: import("./dex/tx.js").MsgDeposit) => neutronDexTxAmino.MsgDepositAminoType["value"];
        fromAmino: ({ creator, receiver, token_a, token_b, amounts_a, amounts_b, tick_indexes_a_to_b, fees, options, }: neutronDexTxAmino.MsgDepositAminoType["value"]) => import("./dex/tx.js").MsgDeposit;
    };
    "/neutron.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees, }: import("./dex/tx.js").MsgWithdrawal) => neutronDexTxAmino.MsgWithdrawalAminoType["value"];
        fromAmino: ({ creator, receiver, token_a, token_b, shares_to_remove, tick_indexes_a_to_b, fees, }: neutronDexTxAmino.MsgWithdrawalAminoType["value"]) => import("./dex/tx.js").MsgWithdrawal;
    };
    "/neutron.dex.MsgWithdrawalWithShares": {
        aminoType: string;
        toAmino: ({ creator, receiver, sharesToRemove, }: import("./dex/tx.js").MsgWithdrawalWithShares) => neutronDexTxAmino.MsgWithdrawalWithSharesAminoType["value"];
        fromAmino: ({ creator, receiver, shares_to_remove, }: neutronDexTxAmino.MsgWithdrawalWithSharesAminoType["value"]) => import("./dex/tx.js").MsgWithdrawalWithShares;
    };
    "/neutron.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut, limitSellPrice, minAverageSellPrice, }: import("./dex/tx.js").MsgPlaceLimitOrder) => neutronDexTxAmino.MsgPlaceLimitOrderAminoType["value"];
        fromAmino: ({ creator, receiver, token_in, token_out, tick_index_in_to_out, amount_in, order_type, expiration_time, max_amount_out, limit_sell_price, min_average_sell_price, }: neutronDexTxAmino.MsgPlaceLimitOrderAminoType["value"]) => import("./dex/tx.js").MsgPlaceLimitOrder;
    };
    "/neutron.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey, }: import("./dex/tx.js").MsgWithdrawFilledLimitOrder) => neutronDexTxAmino.MsgWithdrawFilledLimitOrderAminoType["value"];
        fromAmino: ({ creator, tranche_key, }: neutronDexTxAmino.MsgWithdrawFilledLimitOrderAminoType["value"]) => import("./dex/tx.js").MsgWithdrawFilledLimitOrder;
    };
    "/neutron.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: import("./dex/tx.js").MsgCancelLimitOrder) => neutronDexTxAmino.MsgCancelLimitOrderAminoType["value"];
        fromAmino: ({ creator, tranche_key }: neutronDexTxAmino.MsgCancelLimitOrderAminoType["value"]) => import("./dex/tx.js").MsgCancelLimitOrder;
    };
    "/neutron.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute, }: import("./dex/tx.js").MsgMultiHopSwap) => neutronDexTxAmino.MsgMultiHopSwapAminoType["value"];
        fromAmino: ({ creator, receiver, routes, amount_in, exit_limit_price, pick_best_route, }: neutronDexTxAmino.MsgMultiHopSwapAminoType["value"]) => import("./dex/tx.js").MsgMultiHopSwap;
    };
    "/neutron.dex.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./dex/tx.js").MsgUpdateParams) => neutronDexTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronDexTxAmino.MsgUpdateParamsAminoType["value"]) => import("./dex/tx.js").MsgUpdateParams;
    };
    "/neutron.cron.MsgAddSchedule": {
        aminoType: string;
        toAmino: ({ authority, name, period, msgs, executionStage, }: import("./cron/tx.js").MsgAddSchedule) => neutronCronTxAmino.MsgAddScheduleAminoType["value"];
        fromAmino: ({ authority, name, period, msgs, execution_stage, }: neutronCronTxAmino.MsgAddScheduleAminoType["value"]) => import("./cron/tx.js").MsgAddSchedule;
    };
    "/neutron.cron.MsgRemoveSchedule": {
        aminoType: string;
        toAmino: ({ authority, name }: import("./cron/tx.js").MsgRemoveSchedule) => neutronCronTxAmino.MsgRemoveScheduleAminoType["value"];
        fromAmino: ({ authority, name }: neutronCronTxAmino.MsgRemoveScheduleAminoType["value"]) => import("./cron/tx.js").MsgRemoveSchedule;
    };
    "/neutron.cron.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./cron/tx.js").MsgUpdateParams) => neutronCronTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronCronTxAmino.MsgUpdateParamsAminoType["value"]) => import("./cron/tx.js").MsgUpdateParams;
    };
    "/neutron.contractmanager.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./contractmanager/tx.js").MsgUpdateParams) => neutronContractmanagerTxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronContractmanagerTxAmino.MsgUpdateParamsAminoType["value"]) => import("./contractmanager/tx.js").MsgUpdateParams;
    };
    "/neutron.contractmanager.MsgResubmitFailure": {
        aminoType: string;
        toAmino: ({ sender, failureId }: import("./contractmanager/tx.js").MsgResubmitFailure) => neutronContractmanagerTxAmino.MsgResubmitFailureAminoType["value"];
        fromAmino: ({ sender, failure_id }: neutronContractmanagerTxAmino.MsgResubmitFailureAminoType["value"]) => import("./contractmanager/tx.js").MsgResubmitFailure;
    };
    "/neutron.coinfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./coinfactory/v1beta1/tx.js").MsgCreateDenom) => neutronCoinfactoryV1beta1TxAmino.MsgCreateDenomAminoType["value"];
        fromAmino: ({ sender, subdenom }: neutronCoinfactoryV1beta1TxAmino.MsgCreateDenomAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgCreateDenom;
    };
    "/neutron.coinfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount, mintToAddress }: import("./coinfactory/v1beta1/tx.js").MsgMint) => neutronCoinfactoryV1beta1TxAmino.MsgMintAminoType["value"];
        fromAmino: ({ sender, amount, mintToAddress }: neutronCoinfactoryV1beta1TxAmino.MsgMintAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgMint;
    };
    "/neutron.coinfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount, burnFromAddress }: import("./coinfactory/v1beta1/tx.js").MsgBurn) => neutronCoinfactoryV1beta1TxAmino.MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount, burnFromAddress }: neutronCoinfactoryV1beta1TxAmino.MsgBurnAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgBurn;
    };
    "/neutron.coinfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./coinfactory/v1beta1/tx.js").MsgChangeAdmin) => neutronCoinfactoryV1beta1TxAmino.MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, new_admin }: neutronCoinfactoryV1beta1TxAmino.MsgChangeAdminAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgChangeAdmin;
    };
    "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: import("./coinfactory/v1beta1/tx.js").MsgSetDenomMetadata) => neutronCoinfactoryV1beta1TxAmino.MsgSetDenomMetadataAminoType["value"];
        fromAmino: ({ sender, metadata }: neutronCoinfactoryV1beta1TxAmino.MsgSetDenomMetadataAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgSetDenomMetadata;
    };
    "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: string;
        toAmino: ({ sender, denom, contractAddr, }: import("./coinfactory/v1beta1/tx.js").MsgSetBeforeSendHook) => neutronCoinfactoryV1beta1TxAmino.MsgSetBeforeSendHookAminoType["value"];
        fromAmino: ({ sender, denom, contract_addr, }: neutronCoinfactoryV1beta1TxAmino.MsgSetBeforeSendHookAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgSetBeforeSendHook;
    };
    "/neutron.coinfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress, }: import("./coinfactory/v1beta1/tx.js").MsgForceTransfer) => neutronCoinfactoryV1beta1TxAmino.MsgForceTransferAminoType["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress, }: neutronCoinfactoryV1beta1TxAmino.MsgForceTransferAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgForceTransfer;
    };
    "/neutron.coinfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./coinfactory/v1beta1/tx.js").MsgUpdateParams) => neutronCoinfactoryV1beta1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: neutronCoinfactoryV1beta1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./coinfactory/v1beta1/tx.js").MsgUpdateParams;
    };
};
export declare const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningNeutronClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningNeutronClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
