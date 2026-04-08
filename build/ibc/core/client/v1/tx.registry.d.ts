import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        deleteClientCreator(value: MsgDeleteClientCreator): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: MsgRecoverClient;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: MsgIBCSoftwareUpgrade;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        deleteClientCreator(value: MsgDeleteClientCreator): {
            typeUrl: string;
            value: MsgDeleteClientCreator;
        };
    };
    toJSON: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: {
                clientState?: {
                    typeUrl: string;
                    value: string;
                };
                consensusState?: {
                    typeUrl: string;
                    value: string;
                };
                signer: string;
            };
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: {
                clientId: string;
                clientMessage?: {
                    typeUrl: string;
                    value: string;
                };
                signer: string;
            };
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: {
                clientId: string;
                clientState?: {
                    typeUrl: string;
                    value: string;
                };
                consensusState?: {
                    typeUrl: string;
                    value: string;
                };
                proofUpgradeClient: string;
                proofUpgradeConsensusState: string;
                signer: string;
            };
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: {
                clientId: string;
                misbehaviour?: {
                    typeUrl: string;
                    value: string;
                };
                signer: string;
            };
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: {
                subjectClientId: string;
                substituteClientId: string;
                signer: string;
            };
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: {
                plan: {
                    name: string;
                    time: {
                        seconds: string;
                        nanos: number;
                    };
                    height: string;
                    info: string;
                    upgradedClientState?: {
                        typeUrl: string;
                        value: string;
                    };
                };
                upgradedClientState?: {
                    typeUrl: string;
                    value: string;
                };
                signer: string;
            };
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                signer: string;
                params: {
                    allowedClients: string[];
                };
            };
        };
        deleteClientCreator(value: MsgDeleteClientCreator): {
            typeUrl: string;
            value: {
                clientId: string;
                signer: string;
            };
        };
    };
    fromJSON: {
        createClient(value: any): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: any): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: any): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: any): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
        recoverClient(value: any): {
            typeUrl: string;
            value: MsgRecoverClient;
        };
        iBCSoftwareUpgrade(value: any): {
            typeUrl: string;
            value: MsgIBCSoftwareUpgrade;
        };
        updateClientParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        deleteClientCreator(value: any): {
            typeUrl: string;
            value: MsgDeleteClientCreator;
        };
    };
    fromPartial: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: MsgRecoverClient;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: MsgIBCSoftwareUpgrade;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        deleteClientCreator(value: MsgDeleteClientCreator): {
            typeUrl: string;
            value: MsgDeleteClientCreator;
        };
    };
};
