//@ts-nocheck
/* eslint-disable */
import { Params as Params1 } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
export const protobufPackage = "ibc.applications.interchain_accounts.genesis.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
  controllerGenesisState: ControllerGenesisState;
  hostGenesisState: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  ports: string[];
  params: Params1;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  port: string;
  params: Params2;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
  connectionId: string;
  portId: string;
  channelId: string;
  isMiddlewareEnabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
  connectionId: string;
  portId: string;
  accountAddress: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    controllerGenesisState: ControllerGenesisState.fromPartial({}),
    hostGenesisState: HostGenesisState.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controllerGenesisState !== undefined) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostGenesisState !== undefined) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.controllerGenesisState))
      obj.controllerGenesisState = ControllerGenesisState.fromJSON(object.controllerGenesisState);
    if (isSet(object.hostGenesisState))
      obj.hostGenesisState = HostGenesisState.fromJSON(object.hostGenesisState);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.controllerGenesisState !== undefined &&
      (obj.controllerGenesisState = message.controllerGenesisState
        ? ControllerGenesisState.toJSON(message.controllerGenesisState)
        : undefined);
    message.hostGenesisState !== undefined &&
      (obj.hostGenesisState = message.hostGenesisState
        ? HostGenesisState.toJSON(message.hostGenesisState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.controllerGenesisState !== undefined && object.controllerGenesisState !== null) {
      message.controllerGenesisState = ControllerGenesisState.fromPartial(object.controllerGenesisState);
    }
    if (object.hostGenesisState !== undefined && object.hostGenesisState !== null) {
      message.hostGenesisState = HostGenesisState.fromPartial(object.hostGenesisState);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.controller_genesis_state !== undefined && object.controller_genesis_state !== null) {
      message.controllerGenesisState = ControllerGenesisState.fromAmino(object.controller_genesis_state);
    }
    if (object.host_genesis_state !== undefined && object.host_genesis_state !== null) {
      message.hostGenesisState = HostGenesisState.fromAmino(object.host_genesis_state);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.controller_genesis_state = message.controllerGenesisState
      ? ControllerGenesisState.toAmino(message.controllerGenesisState)
      : undefined;
    obj.host_genesis_state = message.hostGenesisState
      ? HostGenesisState.toAmino(message.hostGenesisState)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
    };
  },
};
function createBaseControllerGenesisState(): ControllerGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: Params1.fromPartial({}),
  };
}
export const ControllerGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
  encode(message: ControllerGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v!);
    }
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ControllerGenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(reader.string());
          break;
        case 4:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ControllerGenesisState {
    const obj = createBaseControllerGenesisState();
    if (Array.isArray(object?.activeChannels))
      obj.activeChannels = object.activeChannels.map((e: any) => ActiveChannel.fromJSON(e));
    if (Array.isArray(object?.interchainAccounts))
      obj.interchainAccounts = object.interchainAccounts.map((e: any) =>
        RegisteredInterchainAccount.fromJSON(e),
      );
    if (Array.isArray(object?.ports)) obj.ports = object.ports.map((e: any) => String(e));
    if (isSet(object.params)) obj.params = Params1.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ControllerGenesisState): JsonSafe<ControllerGenesisState> {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map((e) => (e ? ActiveChannel.toJSON(e) : undefined));
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toJSON(e) : undefined,
      );
    } else {
      obj.interchainAccounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => e);
    } else {
      obj.ports = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ControllerGenesisState>, I>>(object: I): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.activeChannels?.map((e) => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts =
      object.interchainAccounts?.map((e) => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: ControllerGenesisStateAmino): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.activeChannels = object.active_channels?.map((e) => ActiveChannel.fromAmino(e)) || [];
    message.interchainAccounts =
      object.interchain_accounts?.map((e) => RegisteredInterchainAccount.fromAmino(e)) || [];
    message.ports = object.ports?.map((e) => e) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ControllerGenesisState): ControllerGenesisStateAmino {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map((e) => (e ? ActiveChannel.toAmino(e) : undefined));
    } else {
      obj.active_channels = message.activeChannels;
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toAmino(e) : undefined,
      );
    } else {
      obj.interchain_accounts = message.interchainAccounts;
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => e);
    } else {
      obj.ports = message.ports;
    }
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ControllerGenesisStateAminoMsg): ControllerGenesisState {
    return ControllerGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: ControllerGenesisState): ControllerGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/ControllerGenesisState",
      value: ControllerGenesisState.toAmino(message),
    };
  },
};
function createBaseHostGenesisState(): HostGenesisState {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: Params2.fromPartial({}),
  };
}
export const HostGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
  encode(message: HostGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.params !== undefined) {
      Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostGenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.params = Params2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostGenesisState {
    const obj = createBaseHostGenesisState();
    if (Array.isArray(object?.activeChannels))
      obj.activeChannels = object.activeChannels.map((e: any) => ActiveChannel.fromJSON(e));
    if (Array.isArray(object?.interchainAccounts))
      obj.interchainAccounts = object.interchainAccounts.map((e: any) =>
        RegisteredInterchainAccount.fromJSON(e),
      );
    if (isSet(object.port)) obj.port = String(object.port);
    if (isSet(object.params)) obj.params = Params2.fromJSON(object.params);
    return obj;
  },
  toJSON(message: HostGenesisState): JsonSafe<HostGenesisState> {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map((e) => (e ? ActiveChannel.toJSON(e) : undefined));
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toJSON(e) : undefined,
      );
    } else {
      obj.interchainAccounts = [];
    }
    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined &&
      (obj.params = message.params ? Params2.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HostGenesisState>, I>>(object: I): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.activeChannels?.map((e) => ActiveChannel.fromPartial(e)) || [];
    message.interchainAccounts =
      object.interchainAccounts?.map((e) => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.port = object.port ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params2.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: HostGenesisStateAmino): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.activeChannels = object.active_channels?.map((e) => ActiveChannel.fromAmino(e)) || [];
    message.interchainAccounts =
      object.interchain_accounts?.map((e) => RegisteredInterchainAccount.fromAmino(e)) || [];
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params2.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: HostGenesisState): HostGenesisStateAmino {
    const obj: any = {};
    if (message.activeChannels) {
      obj.active_channels = message.activeChannels.map((e) => (e ? ActiveChannel.toAmino(e) : undefined));
    } else {
      obj.active_channels = message.activeChannels;
    }
    if (message.interchainAccounts) {
      obj.interchain_accounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toAmino(e) : undefined,
      );
    } else {
      obj.interchain_accounts = message.interchainAccounts;
    }
    obj.port = message.port === "" ? undefined : message.port;
    obj.params = message.params ? Params2.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostGenesisStateAminoMsg): HostGenesisState {
    return HostGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: HostGenesisState): HostGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/HostGenesisState",
      value: HostGenesisState.toAmino(message),
    };
  },
};
function createBaseActiveChannel(): ActiveChannel {
  return {
    connectionId: "",
    portId: "",
    channelId: "",
    isMiddlewareEnabled: false,
  };
}
export const ActiveChannel = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
  encode(message: ActiveChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.isMiddlewareEnabled === true) {
      writer.uint32(32).bool(message.isMiddlewareEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.isMiddlewareEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveChannel {
    const obj = createBaseActiveChannel();
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.isMiddlewareEnabled)) obj.isMiddlewareEnabled = Boolean(object.isMiddlewareEnabled);
    return obj;
  },
  toJSON(message: ActiveChannel): JsonSafe<ActiveChannel> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.isMiddlewareEnabled !== undefined && (obj.isMiddlewareEnabled = message.isMiddlewareEnabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ActiveChannel>, I>>(object: I): ActiveChannel {
    const message = createBaseActiveChannel();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.isMiddlewareEnabled = object.isMiddlewareEnabled ?? false;
    return message;
  },
  fromAmino(object: ActiveChannelAmino): ActiveChannel {
    const message = createBaseActiveChannel();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.is_middleware_enabled !== undefined && object.is_middleware_enabled !== null) {
      message.isMiddlewareEnabled = object.is_middleware_enabled;
    }
    return message;
  },
  toAmino(message: ActiveChannel): ActiveChannelAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.is_middleware_enabled =
      message.isMiddlewareEnabled === false ? undefined : message.isMiddlewareEnabled;
    return obj;
  },
  fromAminoMsg(object: ActiveChannelAminoMsg): ActiveChannel {
    return ActiveChannel.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveChannel): ActiveChannelAminoMsg {
    return {
      type: "cosmos-sdk/ActiveChannel",
      value: ActiveChannel.toAmino(message),
    };
  },
};
function createBaseRegisteredInterchainAccount(): RegisteredInterchainAccount {
  return {
    connectionId: "",
    portId: "",
    accountAddress: "",
  };
}
export const RegisteredInterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
  encode(message: RegisteredInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredInterchainAccount {
    const obj = createBaseRegisteredInterchainAccount();
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.accountAddress)) obj.accountAddress = String(object.accountAddress);
    return obj;
  },
  toJSON(message: RegisteredInterchainAccount): JsonSafe<RegisteredInterchainAccount> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredInterchainAccount>, I>>(
    object: I,
  ): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: RegisteredInterchainAccountAmino): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: RegisteredInterchainAccount): RegisteredInterchainAccountAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: RegisteredInterchainAccountAminoMsg): RegisteredInterchainAccount {
    return RegisteredInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.toAmino(message),
    };
  },
};
