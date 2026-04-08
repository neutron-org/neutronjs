import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../../../helpers.js";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx.js";
export interface MsgSendPacketAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSendPacket";
    value: {
        source_client: string;
        timeout_timestamp: string;
        payloads: {
            source_port: string;
            destination_port: string;
            version: string;
            encoding: string;
            value: Uint8Array;
        }[];
        signer: string;
    };
}
export interface MsgRecvPacketAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRecvPacket";
    value: {
        packet: {
            sequence: string;
            source_client: string;
            destination_client: string;
            timeout_timestamp: string;
            payloads: {
                source_port: string;
                destination_port: string;
                version: string;
                encoding: string;
                value: Uint8Array;
            }[];
        };
        proof_commitment: Uint8Array;
        proof_height: AminoHeight;
        signer: string;
    };
}
export interface MsgTimeoutAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgTimeout";
    value: {
        packet: {
            sequence: string;
            source_client: string;
            destination_client: string;
            timeout_timestamp: string;
            payloads: {
                source_port: string;
                destination_port: string;
                version: string;
                encoding: string;
                value: Uint8Array;
            }[];
        };
        proof_unreceived: Uint8Array;
        proof_height: AminoHeight;
        signer: string;
    };
}
export interface MsgAcknowledgementAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgAcknowledgement";
    value: {
        packet: {
            sequence: string;
            source_client: string;
            destination_client: string;
            timeout_timestamp: string;
            payloads: {
                source_port: string;
                destination_port: string;
                version: string;
                encoding: string;
                value: Uint8Array;
            }[];
        };
        acknowledgement: {
            app_acknowledgements: Uint8Array[];
        };
        proof_acked: Uint8Array;
        proof_height: AminoHeight;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/ibc.core.channel.v2.MsgSendPacket": {
        aminoType: string;
        toAmino: ({ sourceClient, timeoutTimestamp, payloads, signer, }: MsgSendPacket) => MsgSendPacketAminoType["value"];
        fromAmino: ({ source_client, timeout_timestamp, payloads, signer, }: MsgSendPacketAminoType["value"]) => MsgSendPacket;
    };
    "/ibc.core.channel.v2.MsgRecvPacket": {
        aminoType: string;
        toAmino: ({ packet, proofCommitment, proofHeight, signer, }: MsgRecvPacket) => MsgRecvPacketAminoType["value"];
        fromAmino: ({ packet, proof_commitment, proof_height, signer, }: MsgRecvPacketAminoType["value"]) => MsgRecvPacket;
    };
    "/ibc.core.channel.v2.MsgTimeout": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofHeight, signer }: MsgTimeout) => MsgTimeoutAminoType["value"];
        fromAmino: ({ packet, proof_unreceived, proof_height, signer, }: MsgTimeoutAminoType["value"]) => MsgTimeout;
    };
    "/ibc.core.channel.v2.MsgAcknowledgement": {
        aminoType: string;
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer, }: MsgAcknowledgement) => MsgAcknowledgementAminoType["value"];
        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer, }: MsgAcknowledgementAminoType["value"]) => MsgAcknowledgement;
    };
};
