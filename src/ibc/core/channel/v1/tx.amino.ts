//@ts-nocheck
/* eslint-disable */
import { stateFromJSON, orderFromJSON } from "./channel";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../helpers";
import {
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelCloseInit,
  MsgChannelCloseConfirm,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgAcknowledgement,
  MsgChannelUpgradeInit,
  MsgChannelUpgradeTry,
  MsgChannelUpgradeAck,
  MsgChannelUpgradeConfirm,
  MsgChannelUpgradeOpen,
  MsgChannelUpgradeTimeout,
  MsgChannelUpgradeCancel,
  MsgUpdateParams,
  MsgPruneAcknowledgements,
} from "./tx";
export interface MsgChannelOpenInitAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInit";
  value: {
    port_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
      upgrade_sequence: string;
    };
    signer: string;
  };
}
export interface MsgChannelOpenTryAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: {
    port_id: string;
    previous_channel_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
      upgrade_sequence: string;
    };
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelOpenAckAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelOpenConfirmAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelCloseInitAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInit";
  value: {
    port_id: string;
    channel_id: string;
    signer: string;
  };
}
export interface MsgChannelCloseConfirmAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
    counterparty_upgrade_sequence: string;
  };
}
export interface MsgRecvPacketAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
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
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
  };
}
export interface MsgTimeoutOnCloseAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
    counterparty_upgrade_sequence: string;
  };
}
export interface MsgAcknowledgementAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeInitAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeInit";
  value: {
    port_id: string;
    channel_id: string;
    fields: {
      ordering: number;
      connection_hops: string[];
      version: string;
    };
    signer: string;
  };
}
export interface MsgChannelUpgradeTryAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTry";
  value: {
    port_id: string;
    channel_id: string;
    proposed_upgrade_connection_hops: string[];
    counterparty_upgrade_fields: {
      ordering: number;
      connection_hops: string[];
      version: string;
    };
    counterparty_upgrade_sequence: string;
    proof_channel: Uint8Array;
    proof_upgrade: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeAckAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeAck";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_upgrade: {
      fields: {
        ordering: number;
        connection_hops: string[];
        version: string;
      };
      timeout: {
        height: AminoHeight;
        timestamp: string;
      };
      next_sequence_send: string;
    };
    proof_channel: Uint8Array;
    proof_upgrade: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeConfirmAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeConfirm";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: number;
    counterparty_upgrade: {
      fields: {
        ordering: number;
        connection_hops: string[];
        version: string;
      };
      timeout: {
        height: AminoHeight;
        timestamp: string;
      };
      next_sequence_send: string;
    };
    proof_channel: Uint8Array;
    proof_upgrade: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeOpenAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeOpen";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: number;
    counterparty_upgrade_sequence: string;
    proof_channel: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeTimeoutAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeTimeout";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
      upgrade_sequence: string;
    };
    proof_channel: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelUpgradeCancelAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelUpgradeCancel";
  value: {
    port_id: string;
    channel_id: string;
    error_receipt: {
      sequence: string;
      message: string;
    };
    proof_error_receipt: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      allowed_clients: string[];
    };
  };
}
export interface MsgPruneAcknowledgementsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgPruneAcknowledgements";
  value: {
    port_id: string;
    channel_id: string;
    limit: string;
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: ({ portId, channel, signer }: MsgChannelOpenInit): MsgChannelOpenInitAminoType["value"] => {
      return {
        port_id: portId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId,
          },
          connection_hops: channel.connectionHops,
          version: channel.version,
          upgrade_sequence: channel.upgradeSequence.toString(),
        },
        signer,
      };
    },
    fromAmino: ({ port_id, channel, signer }: MsgChannelOpenInitAminoType["value"]): MsgChannelOpenInit => {
      return {
        portId: port_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id,
          },
          connectionHops: channel.connection_hops,
          version: channel.version,
          upgradeSequence: BigInt(channel.upgrade_sequence),
        },
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: ({
      portId,
      previousChannelId,
      channel,
      counterpartyVersion,
      proofInit,
      proofHeight,
      signer,
    }: MsgChannelOpenTry): MsgChannelOpenTryAminoType["value"] => {
      return {
        port_id: portId,
        previous_channel_id: previousChannelId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId,
          },
          connection_hops: channel.connectionHops,
          version: channel.version,
          upgrade_sequence: channel.upgradeSequence.toString(),
        },
        counterparty_version: counterpartyVersion,
        proof_init: proofInit,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      previous_channel_id,
      channel,
      counterparty_version,
      proof_init,
      proof_height,
      signer,
    }: MsgChannelOpenTryAminoType["value"]): MsgChannelOpenTry => {
      return {
        portId: port_id,
        previousChannelId: previous_channel_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id,
          },
          connectionHops: channel.connection_hops,
          version: channel.version,
          upgradeSequence: BigInt(channel.upgrade_sequence),
        },
        counterpartyVersion: counterparty_version,
        proofInit: proof_init,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannelId,
      counterpartyVersion,
      proofTry,
      proofHeight,
      signer,
    }: MsgChannelOpenAck): MsgChannelOpenAckAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_id: counterpartyChannelId,
        counterparty_version: counterpartyVersion,
        proof_try: proofTry,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_id,
      counterparty_version,
      proof_try,
      proof_height,
      signer,
    }: MsgChannelOpenAckAminoType["value"]): MsgChannelOpenAck => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelId: counterparty_channel_id,
        counterpartyVersion: counterparty_version,
        proofTry: proof_try,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: ({
      portId,
      channelId,
      proofAck,
      proofHeight,
      signer,
    }: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_ack: proofAck,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_ack,
      proof_height,
      signer,
    }: MsgChannelOpenConfirmAminoType["value"]): MsgChannelOpenConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofAck: proof_ack,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: ({ portId, channelId, signer }: MsgChannelCloseInit): MsgChannelCloseInitAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      signer,
    }: MsgChannelCloseInitAminoType["value"]): MsgChannelCloseInit => {
      return {
        portId: port_id,
        channelId: channel_id,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: ({
      portId,
      channelId,
      proofInit,
      proofHeight,
      signer,
      counterpartyUpgradeSequence,
    }: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_init: proofInit,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
        counterparty_upgrade_sequence: counterpartyUpgradeSequence.toString(),
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_init,
      proof_height,
      signer,
      counterparty_upgrade_sequence,
    }: MsgChannelCloseConfirmAminoType["value"]): MsgChannelCloseConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofInit: proof_init,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
        counterpartyUpgradeSequence: BigInt(counterparty_upgrade_sequence),
      };
    },
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: ({
      packet,
      proofCommitment,
      proofHeight,
      signer,
    }: MsgRecvPacket): MsgRecvPacketAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight
            ? {
                revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
                revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString(),
              }
            : {},
          timeout_timestamp: packet.timeoutTimestamp.toString(),
        },
        proof_commitment: proofCommitment,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer,
    }: MsgRecvPacketAminoType["value"]): MsgRecvPacket => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height
            ? {
                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
              }
            : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
        },
        proofCommitment: proof_commitment,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: ({
      packet,
      proofUnreceived,
      proofHeight,
      nextSequenceRecv,
      signer,
    }: MsgTimeout): MsgTimeoutAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight
            ? {
                revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
                revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString(),
              }
            : {},
          timeout_timestamp: packet.timeoutTimestamp.toString(),
        },
        proof_unreceived: proofUnreceived,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer,
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      next_sequence_recv,
      signer,
    }: MsgTimeoutAminoType["value"]): MsgTimeout => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height
            ? {
                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
              }
            : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
        },
        proofUnreceived: proof_unreceived,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        nextSequenceRecv: BigInt(next_sequence_recv),
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: ({
      packet,
      proofUnreceived,
      proofClose,
      proofHeight,
      nextSequenceRecv,
      signer,
      counterpartyUpgradeSequence,
    }: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight
            ? {
                revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
                revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString(),
              }
            : {},
          timeout_timestamp: packet.timeoutTimestamp.toString(),
        },
        proof_unreceived: proofUnreceived,
        proof_close: proofClose,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer,
        counterparty_upgrade_sequence: counterpartyUpgradeSequence.toString(),
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_close,
      proof_height,
      next_sequence_recv,
      signer,
      counterparty_upgrade_sequence,
    }: MsgTimeoutOnCloseAminoType["value"]): MsgTimeoutOnClose => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height
            ? {
                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
              }
            : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
        },
        proofUnreceived: proof_unreceived,
        proofClose: proof_close,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        nextSequenceRecv: BigInt(next_sequence_recv),
        signer,
        counterpartyUpgradeSequence: BigInt(counterparty_upgrade_sequence),
      };
    },
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: ({
      packet,
      acknowledgement,
      proofAcked,
      proofHeight,
      signer,
    }: MsgAcknowledgement): MsgAcknowledgementAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight
            ? {
                revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
                revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString(),
              }
            : {},
          timeout_timestamp: packet.timeoutTimestamp.toString(),
        },
        acknowledgement,
        proof_acked: proofAcked,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer,
    }: MsgAcknowledgementAminoType["value"]): MsgAcknowledgement => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height
            ? {
                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
              }
            : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
        },
        acknowledgement,
        proofAcked: proof_acked,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
    toAmino: ({
      portId,
      channelId,
      fields,
      signer,
    }: MsgChannelUpgradeInit): MsgChannelUpgradeInitAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        fields: {
          ordering: fields.ordering,
          connection_hops: fields.connectionHops,
          version: fields.version,
        },
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      fields,
      signer,
    }: MsgChannelUpgradeInitAminoType["value"]): MsgChannelUpgradeInit => {
      return {
        portId: port_id,
        channelId: channel_id,
        fields: {
          ordering: orderFromJSON(fields.ordering),
          connectionHops: fields.connection_hops,
          version: fields.version,
        },
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
    toAmino: ({
      portId,
      channelId,
      proposedUpgradeConnectionHops,
      counterpartyUpgradeFields,
      counterpartyUpgradeSequence,
      proofChannel,
      proofUpgrade,
      proofHeight,
      signer,
    }: MsgChannelUpgradeTry): MsgChannelUpgradeTryAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proposed_upgrade_connection_hops: proposedUpgradeConnectionHops,
        counterparty_upgrade_fields: {
          ordering: counterpartyUpgradeFields.ordering,
          connection_hops: counterpartyUpgradeFields.connectionHops,
          version: counterpartyUpgradeFields.version,
        },
        counterparty_upgrade_sequence: counterpartyUpgradeSequence.toString(),
        proof_channel: proofChannel,
        proof_upgrade: proofUpgrade,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proposed_upgrade_connection_hops,
      counterparty_upgrade_fields,
      counterparty_upgrade_sequence,
      proof_channel,
      proof_upgrade,
      proof_height,
      signer,
    }: MsgChannelUpgradeTryAminoType["value"]): MsgChannelUpgradeTry => {
      return {
        portId: port_id,
        channelId: channel_id,
        proposedUpgradeConnectionHops: proposed_upgrade_connection_hops,
        counterpartyUpgradeFields: {
          ordering: orderFromJSON(counterparty_upgrade_fields.ordering),
          connectionHops: counterparty_upgrade_fields.connection_hops,
          version: counterparty_upgrade_fields.version,
        },
        counterpartyUpgradeSequence: BigInt(counterparty_upgrade_sequence),
        proofChannel: proof_channel,
        proofUpgrade: proof_upgrade,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
    toAmino: ({
      portId,
      channelId,
      counterpartyUpgrade,
      proofChannel,
      proofUpgrade,
      proofHeight,
      signer,
    }: MsgChannelUpgradeAck): MsgChannelUpgradeAckAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_upgrade: {
          fields: {
            ordering: counterpartyUpgrade.fields.ordering,
            connection_hops: counterpartyUpgrade.fields.connectionHops,
            version: counterpartyUpgrade.fields.version,
          },
          timeout: {
            height: counterpartyUpgrade.timeout.height
              ? {
                  revision_height: omitDefault(counterpartyUpgrade.timeout.height.revisionHeight)?.toString(),
                  revision_number: omitDefault(counterpartyUpgrade.timeout.height.revisionNumber)?.toString(),
                }
              : {},
            timestamp: counterpartyUpgrade.timeout.timestamp.toString(),
          },
          next_sequence_send: counterpartyUpgrade.nextSequenceSend.toString(),
        },
        proof_channel: proofChannel,
        proof_upgrade: proofUpgrade,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_upgrade,
      proof_channel,
      proof_upgrade,
      proof_height,
      signer,
    }: MsgChannelUpgradeAckAminoType["value"]): MsgChannelUpgradeAck => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyUpgrade: {
          fields: {
            ordering: orderFromJSON(counterparty_upgrade.fields.ordering),
            connectionHops: counterparty_upgrade.fields.connection_hops,
            version: counterparty_upgrade.fields.version,
          },
          timeout: {
            height: counterparty_upgrade.timeout.height
              ? {
                  revisionHeight: BigInt(counterparty_upgrade.timeout.height.revision_height || "0"),
                  revisionNumber: BigInt(counterparty_upgrade.timeout.height.revision_number || "0"),
                }
              : undefined,
            timestamp: BigInt(counterparty_upgrade.timeout.timestamp),
          },
          nextSequenceSend: BigInt(counterparty_upgrade.next_sequence_send),
        },
        proofChannel: proof_channel,
        proofUpgrade: proof_upgrade,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannelState,
      counterpartyUpgrade,
      proofChannel,
      proofUpgrade,
      proofHeight,
      signer,
    }: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_state: counterpartyChannelState,
        counterparty_upgrade: {
          fields: {
            ordering: counterpartyUpgrade.fields.ordering,
            connection_hops: counterpartyUpgrade.fields.connectionHops,
            version: counterpartyUpgrade.fields.version,
          },
          timeout: {
            height: counterpartyUpgrade.timeout.height
              ? {
                  revision_height: omitDefault(counterpartyUpgrade.timeout.height.revisionHeight)?.toString(),
                  revision_number: omitDefault(counterpartyUpgrade.timeout.height.revisionNumber)?.toString(),
                }
              : {},
            timestamp: counterpartyUpgrade.timeout.timestamp.toString(),
          },
          next_sequence_send: counterpartyUpgrade.nextSequenceSend.toString(),
        },
        proof_channel: proofChannel,
        proof_upgrade: proofUpgrade,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_state,
      counterparty_upgrade,
      proof_channel,
      proof_upgrade,
      proof_height,
      signer,
    }: MsgChannelUpgradeConfirmAminoType["value"]): MsgChannelUpgradeConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelState: stateFromJSON(counterparty_channel_state),
        counterpartyUpgrade: {
          fields: {
            ordering: orderFromJSON(counterparty_upgrade.fields.ordering),
            connectionHops: counterparty_upgrade.fields.connection_hops,
            version: counterparty_upgrade.fields.version,
          },
          timeout: {
            height: counterparty_upgrade.timeout.height
              ? {
                  revisionHeight: BigInt(counterparty_upgrade.timeout.height.revision_height || "0"),
                  revisionNumber: BigInt(counterparty_upgrade.timeout.height.revision_number || "0"),
                }
              : undefined,
            timestamp: BigInt(counterparty_upgrade.timeout.timestamp),
          },
          nextSequenceSend: BigInt(counterparty_upgrade.next_sequence_send),
        },
        proofChannel: proof_channel,
        proofUpgrade: proof_upgrade,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannelState,
      counterpartyUpgradeSequence,
      proofChannel,
      proofHeight,
      signer,
    }: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_state: counterpartyChannelState,
        counterparty_upgrade_sequence: counterpartyUpgradeSequence.toString(),
        proof_channel: proofChannel,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_state,
      counterparty_upgrade_sequence,
      proof_channel,
      proof_height,
      signer,
    }: MsgChannelUpgradeOpenAminoType["value"]): MsgChannelUpgradeOpen => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelState: stateFromJSON(counterparty_channel_state),
        counterpartyUpgradeSequence: BigInt(counterparty_upgrade_sequence),
        proofChannel: proof_channel,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannel,
      proofChannel,
      proofHeight,
      signer,
    }: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel: {
          state: counterpartyChannel.state,
          ordering: counterpartyChannel.ordering,
          counterparty: {
            port_id: counterpartyChannel.counterparty.portId,
            channel_id: counterpartyChannel.counterparty.channelId,
          },
          connection_hops: counterpartyChannel.connectionHops,
          version: counterpartyChannel.version,
          upgrade_sequence: counterpartyChannel.upgradeSequence.toString(),
        },
        proof_channel: proofChannel,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel,
      proof_channel,
      proof_height,
      signer,
    }: MsgChannelUpgradeTimeoutAminoType["value"]): MsgChannelUpgradeTimeout => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannel: {
          state: stateFromJSON(counterparty_channel.state),
          ordering: orderFromJSON(counterparty_channel.ordering),
          counterparty: {
            portId: counterparty_channel.counterparty.port_id,
            channelId: counterparty_channel.counterparty.channel_id,
          },
          connectionHops: counterparty_channel.connection_hops,
          version: counterparty_channel.version,
          upgradeSequence: BigInt(counterparty_channel.upgrade_sequence),
        },
        proofChannel: proof_channel,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
    aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
    toAmino: ({
      portId,
      channelId,
      errorReceipt,
      proofErrorReceipt,
      proofHeight,
      signer,
    }: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        error_receipt: {
          sequence: errorReceipt.sequence.toString(),
          message: errorReceipt.message,
        },
        proof_error_receipt: proofErrorReceipt,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      error_receipt,
      proof_error_receipt,
      proof_height,
      signer,
    }: MsgChannelUpgradeCancelAminoType["value"]): MsgChannelUpgradeCancel => {
      return {
        portId: port_id,
        channelId: channel_id,
        errorReceipt: {
          sequence: BigInt(error_receipt.sequence),
          message: error_receipt.message,
        },
        proofErrorReceipt: proof_error_receipt,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          allowed_clients: params.allowedClients,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          allowedClients: params.allowed_clients,
        },
      };
    },
  },
  "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
    aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
    toAmino: ({
      portId,
      channelId,
      limit,
      signer,
    }: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        limit: limit.toString(),
        signer,
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      limit,
      signer,
    }: MsgPruneAcknowledgementsAminoType["value"]): MsgPruneAcknowledgements => {
      return {
        portId: port_id,
        channelId: channel_id,
        limit: BigInt(limit),
        signer,
      };
    },
  },
};
