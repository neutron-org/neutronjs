import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.autocli.v1";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptions {
    /** tx describes the tx commands for the module. */
    tx?: ServiceCommandDescriptor;
    /** query describes the queries commands for the module. */
    query?: ServiceCommandDescriptor;
}
export interface ServiceCommandDescriptor_SubCommandsEntry {
    key: string;
    value?: ServiceCommandDescriptor;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptor {
    /**
     * service is the fully qualified name of the protobuf service to build
     * the command from. It can be left empty if sub_commands are used instead
     * which may be the case if a module provides multiple tx and/or query services.
     */
    service: string;
    /**
     * rpc_command_options are options for commands generated from rpc methods.
     * If no options are specified for a given rpc method on the service, a
     * command will be generated for that method with the default options.
     */
    rpcCommandOptions: RpcCommandOptions[];
    /**
     * sub_commands is a map of optional sub-commands for this command based on
     * different protobuf services. The map key is used as the name of the
     * sub-command.
     */
    subCommands: {
        [key: string]: ServiceCommandDescriptor;
    };
    /**
     * enhance_custom_commands specifies whether to skip the service when generating commands, if a custom command already
     * exists, or enhance the existing command. If set to true, the custom command will be enhanced with the services from
     * gRPC. otherwise when a custom command exists, no commands will be generated for the service.
     */
    enhanceCustomCommand: boolean;
    /** short is an optional parameter used to override the short description of the auto generated command. */
    short: string;
}
export interface RpcCommandOptions_FlagOptionsEntry {
    key: string;
    value?: FlagOptions;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptions {
    /**
     * rpc_method is short name of the protobuf rpc method that this command is
     * generated from.
     */
    rpcMethod: string;
    /**
     * use is the one-line usage method. It also allows specifying an alternate
     * name for the command as the first word of the usage text.
     *
     * By default the name of an rpc command is the kebab-case short name of the
     * rpc method.
     */
    use: string;
    /** long is the long message shown in the 'help <this-command>' output. */
    long: string;
    /** short is the short description shown in the 'help' output. */
    short: string;
    /** example is examples of how to use the command. */
    example: string;
    /** alias is an array of aliases that can be used instead of the first word in Use. */
    alias: string[];
    /**
     * suggest_for is an array of command names for which this command will be suggested -
     * similar to aliases but only suggests.
     */
    suggestFor: string[];
    /** deprecated defines, if this command is deprecated and should print this string when used. */
    deprecated: string;
    /**
     * version defines the version for this command. If this value is non-empty and the command does not
     * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
     * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
     * command does not define one.
     */
    version: string;
    /**
     * flag_options are options for flags generated from rpc request fields.
     * By default all request fields are configured as flags. They can
     * also be configured as positional args instead using positional_args.
     */
    flagOptions: {
        [key: string]: FlagOptions;
    };
    /** positional_args specifies positional arguments for the command. */
    positionalArgs: PositionalArgDescriptor[];
    /** skip specifies whether to skip this rpc method when generating commands. */
    skip: boolean;
    /**
     * gov_proposal specifies whether autocli should generate a gov proposal transaction for this rpc method.
     * Normally autocli generates a transaction containing the message and broadcast it.
     * However, when true, autocli generates a proposal transaction containing the message and broadcast it.
     * This option is ineffective for query commands.
     */
    govProposal: boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptions {
    /** name is an alternate name to use for the field flag. */
    name: string;
    /** shorthand is a one-letter abbreviated flag. */
    shorthand: string;
    /** usage is the help message. */
    usage: string;
    /** default_value is the default value as text. */
    defaultValue: string;
    /** deprecated is the usage text to show if this flag is deprecated. */
    deprecated: string;
    /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
    shorthandDeprecated: string;
    /** hidden hides the flag from help/usage text */
    hidden: boolean;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptor {
    /**
     * proto_field specifies the proto field to use as the positional arg. Any
     * fields used as positional args will not have a flag generated.
     */
    protoField: string;
    /**
     * varargs makes a positional parameter a varargs parameter. This can only be
     * applied to last positional parameter and the proto_field must a repeated
     * field. Note: It is mutually exclusive with optional.
     */
    varargs: boolean;
    /**
     * optional makes the last positional parameter optional.
     * Note: It is mutually exclusive with varargs.
     */
    optional: boolean;
}
export declare const ModuleOptions: {
    typeUrl: string;
    encode(message: ModuleOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleOptions;
    fromJSON(object: any): ModuleOptions;
    toJSON(message: ModuleOptions): JsonSafe<ModuleOptions>;
    fromPartial<I extends Exact<DeepPartial<ModuleOptions>, I>>(object: I): ModuleOptions;
};
export declare const ServiceCommandDescriptor_SubCommandsEntry: {
    encode(message: ServiceCommandDescriptor_SubCommandsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor_SubCommandsEntry;
    fromJSON(object: any): ServiceCommandDescriptor_SubCommandsEntry;
    toJSON(message: ServiceCommandDescriptor_SubCommandsEntry): JsonSafe<ServiceCommandDescriptor_SubCommandsEntry>;
    fromPartial<I extends Exact<DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>, I>>(object: I): ServiceCommandDescriptor_SubCommandsEntry;
};
export declare const ServiceCommandDescriptor: {
    typeUrl: string;
    encode(message: ServiceCommandDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor;
    fromJSON(object: any): ServiceCommandDescriptor;
    toJSON(message: ServiceCommandDescriptor): JsonSafe<ServiceCommandDescriptor>;
    fromPartial<I extends Exact<DeepPartial<ServiceCommandDescriptor>, I>>(object: I): ServiceCommandDescriptor;
};
export declare const RpcCommandOptions_FlagOptionsEntry: {
    encode(message: RpcCommandOptions_FlagOptionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions_FlagOptionsEntry;
    fromJSON(object: any): RpcCommandOptions_FlagOptionsEntry;
    toJSON(message: RpcCommandOptions_FlagOptionsEntry): JsonSafe<RpcCommandOptions_FlagOptionsEntry>;
    fromPartial<I extends Exact<DeepPartial<RpcCommandOptions_FlagOptionsEntry>, I>>(object: I): RpcCommandOptions_FlagOptionsEntry;
};
export declare const RpcCommandOptions: {
    typeUrl: string;
    encode(message: RpcCommandOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions;
    fromJSON(object: any): RpcCommandOptions;
    toJSON(message: RpcCommandOptions): JsonSafe<RpcCommandOptions>;
    fromPartial<I extends Exact<DeepPartial<RpcCommandOptions>, I>>(object: I): RpcCommandOptions;
};
export declare const FlagOptions: {
    typeUrl: string;
    encode(message: FlagOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FlagOptions;
    fromJSON(object: any): FlagOptions;
    toJSON(message: FlagOptions): JsonSafe<FlagOptions>;
    fromPartial<I extends Exact<DeepPartial<FlagOptions>, I>>(object: I): FlagOptions;
};
export declare const PositionalArgDescriptor: {
    typeUrl: string;
    encode(message: PositionalArgDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionalArgDescriptor;
    fromJSON(object: any): PositionalArgDescriptor;
    toJSON(message: PositionalArgDescriptor): JsonSafe<PositionalArgDescriptor>;
    fromPartial<I extends Exact<DeepPartial<PositionalArgDescriptor>, I>>(object: I): PositionalArgDescriptor;
};
