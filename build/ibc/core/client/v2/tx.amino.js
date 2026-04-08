"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/ibc.core.client.v2.MsgRegisterCounterparty": {
        aminoType: "cosmos-sdk/MsgRegisterCounterparty",
        toAmino: ({ clientId, counterpartyMerklePrefix, counterpartyClientId, signer, }) => {
            return {
                client_id: clientId,
                counterparty_merkle_prefix: counterpartyMerklePrefix,
                counterparty_client_id: counterpartyClientId,
                signer,
            };
        },
        fromAmino: ({ client_id, counterparty_merkle_prefix, counterparty_client_id, signer, }) => {
            return {
                clientId: client_id,
                counterpartyMerklePrefix: counterparty_merkle_prefix,
                counterpartyClientId: counterparty_client_id,
                signer,
            };
        },
    },
    "/ibc.core.client.v2.MsgUpdateClientConfig": {
        aminoType: "cosmos-sdk/MsgUpdateClientConfig",
        toAmino: ({ clientId, config, signer, }) => {
            return {
                client_id: clientId,
                config: {
                    allowed_relayers: config.allowedRelayers,
                },
                signer,
            };
        },
        fromAmino: ({ client_id, config, signer, }) => {
            return {
                clientId: client_id,
                config: config == null
                    ? config
                    : {
                        allowedRelayers: config.allowed_relayers,
                    },
                signer,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map