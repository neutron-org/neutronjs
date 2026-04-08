"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: "cosmos-sdk/MsgSubmitEvidence",
        toAmino: ({ submitter, evidence }) => {
            return {
                submitter,
                evidence: {
                    type_url: evidence.typeUrl,
                    value: evidence.value,
                },
            };
        },
        fromAmino: ({ submitter, evidence }) => {
            return {
                submitter,
                evidence: evidence == null
                    ? evidence
                    : {
                        typeUrl: evidence.type_url,
                        value: evidence.value,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map