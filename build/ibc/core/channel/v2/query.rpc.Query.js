"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.nextSequenceSend = this.nextSequenceSend.bind(this);
        this.packetCommitment = this.packetCommitment.bind(this);
        this.packetCommitments = this.packetCommitments.bind(this);
        this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
        this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
        this.packetReceipt = this.packetReceipt.bind(this);
        this.unreceivedPackets = this.unreceivedPackets.bind(this);
        this.unreceivedAcks = this.unreceivedAcks.bind(this);
    }
    nextSequenceSend(request) {
        const data = query_js_1.QueryNextSequenceSendRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "NextSequenceSend", data);
        return promise.then((data) => query_js_1.QueryNextSequenceSendResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    packetCommitment(request) {
        const data = query_js_1.QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketCommitment", data);
        return promise.then((data) => query_js_1.QueryPacketCommitmentResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    packetCommitments(request) {
        const data = query_js_1.QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketCommitments", data);
        return promise.then((data) => query_js_1.QueryPacketCommitmentsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    packetAcknowledgement(request) {
        const data = query_js_1.QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketAcknowledgement", data);
        return promise.then((data) => query_js_1.QueryPacketAcknowledgementResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    packetAcknowledgements(request) {
        const data = query_js_1.QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketAcknowledgements", data);
        return promise.then((data) => query_js_1.QueryPacketAcknowledgementsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    packetReceipt(request) {
        const data = query_js_1.QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketReceipt", data);
        return promise.then((data) => query_js_1.QueryPacketReceiptResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    unreceivedPackets(request) {
        const data = query_js_1.QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "UnreceivedPackets", data);
        return promise.then((data) => query_js_1.QueryUnreceivedPacketsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    unreceivedAcks(request) {
        const data = query_js_1.QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Query", "UnreceivedAcks", data);
        return promise.then((data) => query_js_1.QueryUnreceivedAcksResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        nextSequenceSend(request) {
            return queryService.nextSequenceSend(request);
        },
        packetCommitment(request) {
            return queryService.packetCommitment(request);
        },
        packetCommitments(request) {
            return queryService.packetCommitments(request);
        },
        packetAcknowledgement(request) {
            return queryService.packetAcknowledgement(request);
        },
        packetAcknowledgements(request) {
            return queryService.packetAcknowledgements(request);
        },
        packetReceipt(request) {
            return queryService.packetReceipt(request);
        },
        unreceivedPackets(request) {
            return queryService.unreceivedPackets(request);
        },
        unreceivedAcks(request) {
            return queryService.unreceivedAcks(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map