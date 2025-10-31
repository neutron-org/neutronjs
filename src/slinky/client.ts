//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as slinkyOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as slinkyOracleV1TxAmino from "./oracle/v1/tx.amino";
export const slinkyAminoConverters = {
  ...slinkyOracleV1TxAmino.AminoConverter,
};
export const slinkyProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...slinkyOracleV1TxRegistry.registry,
];
export const getSigningSlinkyClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...slinkyProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...slinkyAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningSlinkyClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningSlinkyClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
