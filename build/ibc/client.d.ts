import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ibcApplicationsInterchainAccountsControllerV1TxAmino from "./applications/interchain_accounts/controller/v1/tx.amino.js";
import * as ibcApplicationsInterchainAccountsHostV1TxAmino from "./applications/interchain_accounts/host/v1/tx.amino.js";
import * as ibcApplicationsTransferV1TxAmino from "./applications/transfer/v1/tx.amino.js";
import * as ibcCoreChannelV1TxAmino from "./core/channel/v1/tx.amino.js";
import * as ibcCoreChannelV2TxAmino from "./core/channel/v2/tx.amino.js";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino.js";
import * as ibcCoreClientV2TxAmino from "./core/client/v2/tx.amino.js";
import * as ibcCoreConnectionV1TxAmino from "./core/connection/v1/tx.amino.js";
import * as ibcLightclientsWasmV1TxAmino from "./lightclients/wasm/v1/tx.amino.js";
export declare const ibcAminoConverters: {
    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ signer, wasmByteCode }: import("./lightclients/wasm/v1/tx.js").MsgStoreCode) => ibcLightclientsWasmV1TxAmino.MsgStoreCodeAminoType["value"];
        fromAmino: ({ signer, wasm_byte_code }: ibcLightclientsWasmV1TxAmino.MsgStoreCodeAminoType["value"]) => import("./lightclients/wasm/v1/tx.js").MsgStoreCode;
    };
    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
        aminoType: string;
        toAmino: ({ signer, checksum }: import("./lightclients/wasm/v1/tx.js").MsgRemoveChecksum) => ibcLightclientsWasmV1TxAmino.MsgRemoveChecksumAminoType["value"];
        fromAmino: ({ signer, checksum }: ibcLightclientsWasmV1TxAmino.MsgRemoveChecksumAminoType["value"]) => import("./lightclients/wasm/v1/tx.js").MsgRemoveChecksum;
    };
    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ signer, clientId, checksum, msg, }: import("./lightclients/wasm/v1/tx.js").MsgMigrateContract) => ibcLightclientsWasmV1TxAmino.MsgMigrateContractAminoType["value"];
        fromAmino: ({ signer, client_id, checksum, msg, }: ibcLightclientsWasmV1TxAmino.MsgMigrateContractAminoType["value"]) => import("./lightclients/wasm/v1/tx.js").MsgMigrateContract;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: string;
        toAmino: ({ clientId, counterparty, version, delayPeriod, signer, }: import("./core/connection/v1/tx.js").MsgConnectionOpenInit) => ibcCoreConnectionV1TxAmino.MsgConnectionOpenInitAminoType["value"];
        fromAmino: ({ client_id, counterparty, version, delay_period, signer, }: ibcCoreConnectionV1TxAmino.MsgConnectionOpenInitAminoType["value"]) => import("./core/connection/v1/tx.js").MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: string;
        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer, hostConsensusStateProof, }: import("./core/connection/v1/tx.js").MsgConnectionOpenTry) => ibcCoreConnectionV1TxAmino.MsgConnectionOpenTryAminoType["value"];
        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer, host_consensus_state_proof, }: ibcCoreConnectionV1TxAmino.MsgConnectionOpenTryAminoType["value"]) => import("./core/connection/v1/tx.js").MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: string;
        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer, hostConsensusStateProof, }: import("./core/connection/v1/tx.js").MsgConnectionOpenAck) => ibcCoreConnectionV1TxAmino.MsgConnectionOpenAckAminoType["value"];
        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer, host_consensus_state_proof, }: ibcCoreConnectionV1TxAmino.MsgConnectionOpenAckAminoType["value"]) => import("./core/connection/v1/tx.js").MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: string;
        toAmino: ({ connectionId, proofAck, proofHeight, signer, }: import("./core/connection/v1/tx.js").MsgConnectionOpenConfirm) => ibcCoreConnectionV1TxAmino.MsgConnectionOpenConfirmAminoType["value"];
        fromAmino: ({ connection_id, proof_ack, proof_height, signer, }: ibcCoreConnectionV1TxAmino.MsgConnectionOpenConfirmAminoType["value"]) => import("./core/connection/v1/tx.js").MsgConnectionOpenConfirm;
    };
    "/ibc.core.connection.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./core/connection/v1/tx.js").MsgUpdateParams) => ibcCoreConnectionV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: ibcCoreConnectionV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./core/connection/v1/tx.js").MsgUpdateParams;
    };
    "/ibc.core.client.v2.MsgRegisterCounterparty": {
        aminoType: string;
        toAmino: ({ clientId, counterpartyMerklePrefix, counterpartyClientId, signer, }: import("./core/client/v2/tx.js").MsgRegisterCounterparty) => ibcCoreClientV2TxAmino.MsgRegisterCounterpartyAminoType["value"];
        fromAmino: ({ client_id, counterparty_merkle_prefix, counterparty_client_id, signer, }: ibcCoreClientV2TxAmino.MsgRegisterCounterpartyAminoType["value"]) => import("./core/client/v2/tx.js").MsgRegisterCounterparty;
    };
    "/ibc.core.client.v2.MsgUpdateClientConfig": {
        aminoType: string;
        toAmino: ({ clientId, config, signer, }: import("./core/client/v2/tx.js").MsgUpdateClientConfig) => ibcCoreClientV2TxAmino.MsgUpdateClientConfigAminoType["value"];
        fromAmino: ({ client_id, config, signer, }: ibcCoreClientV2TxAmino.MsgUpdateClientConfigAminoType["value"]) => import("./core/client/v2/tx.js").MsgUpdateClientConfig;
    };
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: ({ clientState, consensusState, signer, }: import("./core/client/v1/tx.js").MsgCreateClient) => ibcCoreClientV1TxAmino.MsgCreateClientAminoType["value"];
        fromAmino: ({ client_state, consensus_state, signer, }: ibcCoreClientV1TxAmino.MsgCreateClientAminoType["value"]) => import("./core/client/v1/tx.js").MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: ({ clientId, clientMessage, signer }: import("./core/client/v1/tx.js").MsgUpdateClient) => ibcCoreClientV1TxAmino.MsgUpdateClientAminoType["value"];
        fromAmino: ({ client_id, client_message, signer, }: ibcCoreClientV1TxAmino.MsgUpdateClientAminoType["value"]) => import("./core/client/v1/tx.js").MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer, }: import("./core/client/v1/tx.js").MsgUpgradeClient) => ibcCoreClientV1TxAmino.MsgUpgradeClientAminoType["value"];
        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer, }: ibcCoreClientV1TxAmino.MsgUpgradeClientAminoType["value"]) => import("./core/client/v1/tx.js").MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: ({ clientId, misbehaviour, signer, }: import("./core/client/v1/tx.js").MsgSubmitMisbehaviour) => ibcCoreClientV1TxAmino.MsgSubmitMisbehaviourAminoType["value"];
        fromAmino: ({ client_id, misbehaviour, signer, }: ibcCoreClientV1TxAmino.MsgSubmitMisbehaviourAminoType["value"]) => import("./core/client/v1/tx.js").MsgSubmitMisbehaviour;
    };
    "/ibc.core.client.v1.MsgRecoverClient": {
        aminoType: string;
        toAmino: ({ subjectClientId, substituteClientId, signer, }: import("./core/client/v1/tx.js").MsgRecoverClient) => ibcCoreClientV1TxAmino.MsgRecoverClientAminoType["value"];
        fromAmino: ({ subject_client_id, substitute_client_id, signer, }: ibcCoreClientV1TxAmino.MsgRecoverClientAminoType["value"]) => import("./core/client/v1/tx.js").MsgRecoverClient;
    };
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ plan, upgradedClientState, signer, }: import("./core/client/v1/tx.js").MsgIBCSoftwareUpgrade) => ibcCoreClientV1TxAmino.MsgIBCSoftwareUpgradeAminoType["value"];
        fromAmino: ({ plan, upgraded_client_state, signer, }: ibcCoreClientV1TxAmino.MsgIBCSoftwareUpgradeAminoType["value"]) => import("./core/client/v1/tx.js").MsgIBCSoftwareUpgrade;
    };
    "/ibc.core.client.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./core/client/v1/tx.js").MsgUpdateParams) => ibcCoreClientV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: ibcCoreClientV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./core/client/v1/tx.js").MsgUpdateParams;
    };
    "/ibc.core.client.v1.MsgDeleteClientCreator": {
        aminoType: string;
        toAmino: ({ clientId, signer }: import("./core/client/v1/tx.js").MsgDeleteClientCreator) => ibcCoreClientV1TxAmino.MsgDeleteClientCreatorAminoType["value"];
        fromAmino: ({ client_id, signer }: ibcCoreClientV1TxAmino.MsgDeleteClientCreatorAminoType["value"]) => import("./core/client/v1/tx.js").MsgDeleteClientCreator;
    };
    "/ibc.core.channel.v2.MsgSendPacket": {
        aminoType: string;
        toAmino: ({ sourceClient, timeoutTimestamp, payloads, signer, }: import("./core/channel/v2/tx.js").MsgSendPacket) => ibcCoreChannelV2TxAmino.MsgSendPacketAminoType["value"];
        fromAmino: ({ source_client, timeout_timestamp, payloads, signer, }: ibcCoreChannelV2TxAmino.MsgSendPacketAminoType["value"]) => import("./core/channel/v2/tx.js").MsgSendPacket;
    };
    "/ibc.core.channel.v2.MsgRecvPacket": {
        aminoType: string;
        toAmino: ({ packet, proofCommitment, proofHeight, signer, }: import("./core/channel/v2/tx.js").MsgRecvPacket) => ibcCoreChannelV2TxAmino.MsgRecvPacketAminoType["value"];
        fromAmino: ({ packet, proof_commitment, proof_height, signer, }: ibcCoreChannelV2TxAmino.MsgRecvPacketAminoType["value"]) => import("./core/channel/v2/tx.js").MsgRecvPacket;
    };
    "/ibc.core.channel.v2.MsgTimeout": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofHeight, signer }: import("./core/channel/v2/tx.js").MsgTimeout) => ibcCoreChannelV2TxAmino.MsgTimeoutAminoType["value"];
        fromAmino: ({ packet, proof_unreceived, proof_height, signer, }: ibcCoreChannelV2TxAmino.MsgTimeoutAminoType["value"]) => import("./core/channel/v2/tx.js").MsgTimeout;
    };
    "/ibc.core.channel.v2.MsgAcknowledgement": {
        aminoType: string;
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer, }: import("./core/channel/v2/tx.js").MsgAcknowledgement) => ibcCoreChannelV2TxAmino.MsgAcknowledgementAminoType["value"];
        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer, }: ibcCoreChannelV2TxAmino.MsgAcknowledgementAminoType["value"]) => import("./core/channel/v2/tx.js").MsgAcknowledgement;
    };
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: ({ portId, channel, signer }: import("./core/channel/v1/tx.js").MsgChannelOpenInit) => ibcCoreChannelV1TxAmino.MsgChannelOpenInitAminoType["value"];
        fromAmino: ({ port_id, channel, signer }: ibcCoreChannelV1TxAmino.MsgChannelOpenInitAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgChannelOpenTry) => ibcCoreChannelV1TxAmino.MsgChannelOpenTryAminoType["value"];
        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgChannelOpenTryAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgChannelOpenAck) => ibcCoreChannelV1TxAmino.MsgChannelOpenAckAminoType["value"];
        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgChannelOpenAckAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofAck, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgChannelOpenConfirm) => ibcCoreChannelV1TxAmino.MsgChannelOpenConfirmAminoType["value"];
        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgChannelOpenConfirmAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: ({ portId, channelId, signer }: import("./core/channel/v1/tx.js").MsgChannelCloseInit) => ibcCoreChannelV1TxAmino.MsgChannelCloseInitAminoType["value"];
        fromAmino: ({ port_id, channel_id, signer, }: ibcCoreChannelV1TxAmino.MsgChannelCloseInitAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofInit, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgChannelCloseConfirm) => ibcCoreChannelV1TxAmino.MsgChannelCloseConfirmAminoType["value"];
        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgChannelCloseConfirmAminoType["value"]) => import("./core/channel/v1/tx.js").MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: ({ packet, proofCommitment, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgRecvPacket) => ibcCoreChannelV1TxAmino.MsgRecvPacketAminoType["value"];
        fromAmino: ({ packet, proof_commitment, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgRecvPacketAminoType["value"]) => import("./core/channel/v1/tx.js").MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer, }: import("./core/channel/v1/tx.js").MsgTimeout) => ibcCoreChannelV1TxAmino.MsgTimeoutAminoType["value"];
        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer, }: ibcCoreChannelV1TxAmino.MsgTimeoutAminoType["value"]) => import("./core/channel/v1/tx.js").MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer, }: import("./core/channel/v1/tx.js").MsgTimeoutOnClose) => ibcCoreChannelV1TxAmino.MsgTimeoutOnCloseAminoType["value"];
        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer, }: ibcCoreChannelV1TxAmino.MsgTimeoutOnCloseAminoType["value"]) => import("./core/channel/v1/tx.js").MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer, }: import("./core/channel/v1/tx.js").MsgAcknowledgement) => ibcCoreChannelV1TxAmino.MsgAcknowledgementAminoType["value"];
        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer, }: ibcCoreChannelV1TxAmino.MsgAcknowledgementAminoType["value"]) => import("./core/channel/v1/tx.js").MsgAcknowledgement;
    };
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, encoding, }: import("./applications/transfer/v1/tx.js").MsgTransfer) => ibcApplicationsTransferV1TxAmino.MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, encoding, }: ibcApplicationsTransferV1TxAmino.MsgTransferAminoType["value"]) => import("./applications/transfer/v1/tx.js").MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./applications/transfer/v1/tx.js").MsgUpdateParams) => ibcApplicationsTransferV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: ibcApplicationsTransferV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./applications/transfer/v1/tx.js").MsgUpdateParams;
    };
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./applications/interchain_accounts/host/v1/tx.js").MsgUpdateParams) => ibcApplicationsInterchainAccountsHostV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: ibcApplicationsInterchainAccountsHostV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./applications/interchain_accounts/host/v1/tx.js").MsgUpdateParams;
    };
    "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
        aminoType: string;
        toAmino: ({ signer, requests }: import("./applications/interchain_accounts/host/v1/tx.js").MsgModuleQuerySafe) => ibcApplicationsInterchainAccountsHostV1TxAmino.MsgModuleQuerySafeAminoType["value"];
        fromAmino: ({ signer, requests }: ibcApplicationsInterchainAccountsHostV1TxAmino.MsgModuleQuerySafeAminoType["value"]) => import("./applications/interchain_accounts/host/v1/tx.js").MsgModuleQuerySafe;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version, ordering, }: import("./applications/interchain_accounts/controller/v1/tx.js").MsgRegisterInterchainAccount) => ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgRegisterInterchainAccountAminoType["value"];
        fromAmino: ({ owner, connection_id, version, ordering, }: ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgRegisterInterchainAccountAminoType["value"]) => import("./applications/interchain_accounts/controller/v1/tx.js").MsgRegisterInterchainAccount;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, packetData, relativeTimeout, }: import("./applications/interchain_accounts/controller/v1/tx.js").MsgSendTx) => ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgSendTxAminoType["value"];
        fromAmino: ({ owner, connection_id, packet_data, relative_timeout, }: ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgSendTxAminoType["value"]) => import("./applications/interchain_accounts/controller/v1/tx.js").MsgSendTx;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: import("./applications/interchain_accounts/controller/v1/tx.js").MsgUpdateParams) => ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: ibcApplicationsInterchainAccountsControllerV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./applications/interchain_accounts/controller/v1/tx.js").MsgUpdateParams;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
