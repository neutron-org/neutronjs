//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as neutronCoinfactoryV1beta1TxRegistry from "./coinfactory/v1beta1/tx.registry.js";
import * as neutronContractmanagerTxRegistry from "./contractmanager/tx.registry.js";
import * as neutronCronTxRegistry from "./cron/tx.registry.js";
import * as neutronDexTxRegistry from "./dex/tx.registry.js";
import * as neutronDynamicfeesV1TxRegistry from "./dynamicfees/v1/tx.registry.js";
import * as neutronFeerefunderTxRegistry from "./feerefunder/tx.registry.js";
import * as neutronIbcratelimitV1beta1TxRegistry from "./ibcratelimit/v1beta1/tx.registry.js";
import * as neutronInterchainqueriesTxRegistry from "./interchainqueries/tx.registry.js";
import * as neutronInterchaintxsV1TxRegistry from "./interchaintxs/v1/tx.registry.js";
import * as neutronTransferV1TxRegistry from "./transfer/v1/tx.registry.js";
import * as neutronCoinfactoryV1beta1TxAmino from "./coinfactory/v1beta1/tx.amino.js";
import * as neutronContractmanagerTxAmino from "./contractmanager/tx.amino.js";
import * as neutronCronTxAmino from "./cron/tx.amino.js";
import * as neutronDexTxAmino from "./dex/tx.amino.js";
import * as neutronDynamicfeesV1TxAmino from "./dynamicfees/v1/tx.amino.js";
import * as neutronFeerefunderTxAmino from "./feerefunder/tx.amino.js";
import * as neutronIbcratelimitV1beta1TxAmino from "./ibcratelimit/v1beta1/tx.amino.js";
import * as neutronInterchainqueriesTxAmino from "./interchainqueries/tx.amino.js";
import * as neutronInterchaintxsV1TxAmino from "./interchaintxs/v1/tx.amino.js";
import * as neutronTransferV1TxAmino from "./transfer/v1/tx.amino.js";
export const neutronAminoConverters = {
  ...neutronCoinfactoryV1beta1TxAmino.AminoConverter,
  ...neutronContractmanagerTxAmino.AminoConverter,
  ...neutronCronTxAmino.AminoConverter,
  ...neutronDexTxAmino.AminoConverter,
  ...neutronDynamicfeesV1TxAmino.AminoConverter,
  ...neutronFeerefunderTxAmino.AminoConverter,
  ...neutronIbcratelimitV1beta1TxAmino.AminoConverter,
  ...neutronInterchainqueriesTxAmino.AminoConverter,
  ...neutronInterchaintxsV1TxAmino.AminoConverter,
  ...neutronTransferV1TxAmino.AminoConverter,
};
export const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...neutronCoinfactoryV1beta1TxRegistry.registry,
  ...neutronContractmanagerTxRegistry.registry,
  ...neutronCronTxRegistry.registry,
  ...neutronDexTxRegistry.registry,
  ...neutronDynamicfeesV1TxRegistry.registry,
  ...neutronFeerefunderTxRegistry.registry,
  ...neutronIbcratelimitV1beta1TxRegistry.registry,
  ...neutronInterchainqueriesTxRegistry.registry,
  ...neutronInterchaintxsV1TxRegistry.registry,
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
