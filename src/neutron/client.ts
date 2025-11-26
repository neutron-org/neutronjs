//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as neutronCoinfactoryV1beta1TxRegistry from "./coinfactory/v1beta1/tx.registry";
import * as neutronContractmanagerTxRegistry from "./contractmanager/tx.registry";
import * as neutronCronTxRegistry from "./cron/tx.registry";
import * as neutronDexTxRegistry from "./dex/tx.registry";
import * as neutronDynamicfeesV1TxRegistry from "./dynamicfees/v1/tx.registry";
import * as neutronFeeburnerTxRegistry from "./feeburner/tx.registry";
import * as neutronFeerefunderTxRegistry from "./feerefunder/tx.registry";
import * as neutronHarpoonTxRegistry from "./harpoon/tx.registry";
import * as neutronIbcratelimitV1beta1TxRegistry from "./ibcratelimit/v1beta1/tx.registry";
import * as neutronInterchainqueriesTxRegistry from "./interchainqueries/tx.registry";
import * as neutronInterchaintxsV1TxRegistry from "./interchaintxs/v1/tx.registry";
import * as neutronRevenueTxRegistry from "./revenue/tx.registry";
import * as neutronTransferV1TxRegistry from "./transfer/v1/tx.registry";
import * as neutronCoinfactoryV1beta1TxAmino from "./coinfactory/v1beta1/tx.amino";
import * as neutronContractmanagerTxAmino from "./contractmanager/tx.amino";
import * as neutronCronTxAmino from "./cron/tx.amino";
import * as neutronDexTxAmino from "./dex/tx.amino";
import * as neutronDynamicfeesV1TxAmino from "./dynamicfees/v1/tx.amino";
import * as neutronFeeburnerTxAmino from "./feeburner/tx.amino";
import * as neutronFeerefunderTxAmino from "./feerefunder/tx.amino";
import * as neutronHarpoonTxAmino from "./harpoon/tx.amino";
import * as neutronIbcratelimitV1beta1TxAmino from "./ibcratelimit/v1beta1/tx.amino";
import * as neutronInterchainqueriesTxAmino from "./interchainqueries/tx.amino";
import * as neutronInterchaintxsV1TxAmino from "./interchaintxs/v1/tx.amino";
import * as neutronRevenueTxAmino from "./revenue/tx.amino";
import * as neutronTransferV1TxAmino from "./transfer/v1/tx.amino";
export const neutronAminoConverters = {
  ...neutronCoinfactoryV1beta1TxAmino.AminoConverter,
  ...neutronContractmanagerTxAmino.AminoConverter,
  ...neutronCronTxAmino.AminoConverter,
  ...neutronDexTxAmino.AminoConverter,
  ...neutronDynamicfeesV1TxAmino.AminoConverter,
  ...neutronFeeburnerTxAmino.AminoConverter,
  ...neutronFeerefunderTxAmino.AminoConverter,
  ...neutronHarpoonTxAmino.AminoConverter,
  ...neutronIbcratelimitV1beta1TxAmino.AminoConverter,
  ...neutronInterchainqueriesTxAmino.AminoConverter,
  ...neutronInterchaintxsV1TxAmino.AminoConverter,
  ...neutronRevenueTxAmino.AminoConverter,
  ...neutronTransferV1TxAmino.AminoConverter,
};
export const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...neutronCoinfactoryV1beta1TxRegistry.registry,
  ...neutronContractmanagerTxRegistry.registry,
  ...neutronCronTxRegistry.registry,
  ...neutronDexTxRegistry.registry,
  ...neutronDynamicfeesV1TxRegistry.registry,
  ...neutronFeeburnerTxRegistry.registry,
  ...neutronFeerefunderTxRegistry.registry,
  ...neutronHarpoonTxRegistry.registry,
  ...neutronIbcratelimitV1beta1TxRegistry.registry,
  ...neutronInterchainqueriesTxRegistry.registry,
  ...neutronInterchaintxsV1TxRegistry.registry,
  ...neutronRevenueTxRegistry.registry,
  ...neutronTransferV1TxRegistry.registry,
];
export const getSigningNeutronClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...neutronProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...neutronAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningNeutronClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningNeutronClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
