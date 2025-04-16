//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sdkAuctionV1TxRegistry from "./auction/v1/tx.registry";
import * as sdkAuctionV1TxAmino from "./auction/v1/tx.amino";
export const sdkAminoConverters = {
  ...sdkAuctionV1TxAmino.AminoConverter,
};
export const sdkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sdkAuctionV1TxRegistry.registry];
export const getSigningSdkClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...sdkProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...sdkAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningSdkClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningSdkClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
