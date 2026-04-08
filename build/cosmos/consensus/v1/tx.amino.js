"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/consensus/MsgUpdateParams",
        toAmino: ({ authority, block, evidence, validator, abci, }) => {
            return {
                authority,
                block: {
                    max_bytes: (0, helpers_js_1.omitDefault)(block.maxBytes)?.toString?.(),
                    max_gas: (0, helpers_js_1.omitDefault)(block.maxGas)?.toString?.(),
                },
                evidence: {
                    max_age_num_blocks: (0, helpers_js_1.omitDefault)(evidence.maxAgeNumBlocks)?.toString?.(),
                    max_age_duration: (evidence.maxAgeDuration * 1_000_000_000).toString(),
                    max_bytes: (0, helpers_js_1.omitDefault)(evidence.maxBytes)?.toString?.(),
                },
                validator: {
                    pub_key_types: validator.pubKeyTypes,
                },
                abci: {
                    vote_extensions_enable_height: (0, helpers_js_1.omitDefault)(abci.voteExtensionsEnableHeight)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, block, evidence, validator, abci, }) => {
            return {
                authority,
                block: block == null
                    ? block
                    : {
                        maxBytes: block.max_bytes == null ? block.max_bytes : BigInt(block.max_bytes),
                        maxGas: block.max_gas == null ? block.max_gas : BigInt(block.max_gas),
                    },
                evidence: evidence == null
                    ? evidence
                    : {
                        maxAgeNumBlocks: evidence.max_age_num_blocks == null
                            ? evidence.max_age_num_blocks
                            : BigInt(evidence.max_age_num_blocks),
                        maxAgeDuration: evidence.max_age_duration == null
                            ? evidence.max_age_duration
                            : {
                                seconds: BigInt(Math.floor(parseInt(evidence.max_age_duration) / 1_000_000_000)),
                                nanos: parseInt(evidence.max_age_duration) % 1_000_000_000,
                            },
                        maxBytes: evidence.max_bytes == null ? evidence.max_bytes : BigInt(evidence.max_bytes),
                    },
                validator: validator == null
                    ? validator
                    : {
                        pubKeyTypes: validator.pub_key_types,
                    },
                abci: abci == null
                    ? abci
                    : {
                        voteExtensionsEnableHeight: abci.vote_extensions_enable_height == null
                            ? abci.vote_extensions_enable_height
                            : BigInt(abci.vote_extensions_enable_height),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map