import { GenesisState as GenesisState1 } from "../../client/v1/genesis.js";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis.js";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis.js";
import { GenesisState as GenesisState4 } from "../../client/v2/genesis.js";
import { GenesisState as GenesisState5 } from "../../channel/v2/genesis.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis: GenesisState3;
    /** ICS002 - Clients/v2 genesis state */
    clientV2Genesis: GenesisState4;
    /** ICS004 - Channel/v2 genesis state */
    channelV2Genesis: GenesisState5;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
