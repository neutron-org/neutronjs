"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgNFTSend",
        toAmino: ({ classId, id, sender, receiver }) => {
            return {
                class_id: classId,
                id,
                sender,
                receiver,
            };
        },
        fromAmino: ({ class_id, id, sender, receiver }) => {
            return {
                classId: class_id,
                id,
                sender,
                receiver,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map