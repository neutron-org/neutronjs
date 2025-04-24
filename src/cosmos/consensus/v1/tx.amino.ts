//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/consensus/MsgUpdateParams";
  value: {
    authority: string;
    block: {
      max_bytes: string;
      max_gas: string;
    };
    evidence: {
      max_age_num_blocks: string;
      max_age_duration: {
        seconds: string;
        nanos: number;
      };
      max_bytes: string;
    };
    validator: {
      pub_key_types: string[];
    };
    abci: {
      vote_extensions_enable_height: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/consensus/MsgUpdateParams",
    toAmino: ({
      authority,
      block,
      evidence,
      validator,
      abci,
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        block: {
          max_bytes: omitDefault(block.maxBytes)?.toString?.(),
          max_gas: omitDefault(block.maxGas)?.toString?.(),
        },
        evidence: {
          max_age_num_blocks: omitDefault(evidence.maxAgeNumBlocks)?.toString?.(),
          max_age_duration: (evidence.maxAgeDuration * 1_000_000_000).toString(),
          max_bytes: omitDefault(evidence.maxBytes)?.toString?.(),
        },
        validator: {
          pub_key_types: validator.pubKeyTypes,
        },
        abci: {
          vote_extensions_enable_height: omitDefault(abci.voteExtensionsEnableHeight)?.toString?.(),
        },
      };
    },
    fromAmino: ({
      authority,
      block,
      evidence,
      validator,
      abci,
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        block:
          block == null
            ? block
            : {
                maxBytes: block.max_bytes == null ? block.max_bytes : BigInt(block.max_bytes),
                maxGas: block.max_gas == null ? block.max_gas : BigInt(block.max_gas),
              },
        evidence:
          evidence == null
            ? evidence
            : {
                maxAgeNumBlocks:
                  evidence.max_age_num_blocks == null
                    ? evidence.max_age_num_blocks
                    : BigInt(evidence.max_age_num_blocks),
                maxAgeDuration:
                  evidence.max_age_duration == null
                    ? evidence.max_age_duration
                    : {
                        seconds: BigInt(Math.floor(parseInt(evidence.max_age_duration) / 1_000_000_000)),
                        nanos: parseInt(evidence.max_age_duration) % 1_000_000_000,
                      },
                maxBytes: evidence.max_bytes == null ? evidence.max_bytes : BigInt(evidence.max_bytes),
              },
        validator:
          validator == null
            ? validator
            : {
                pubKeyTypes: validator.pub_key_types,
              },
        abci:
          abci == null
            ? abci
            : {
                voteExtensionsEnableHeight:
                  abci.vote_extensions_enable_height == null
                    ? abci.vote_extensions_enable_height
                    : BigInt(abci.vote_extensions_enable_height),
              },
      };
    },
  },
};
