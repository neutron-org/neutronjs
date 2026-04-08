"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.authorizeCircuitBreaker = this.authorizeCircuitBreaker.bind(this);
        this.tripCircuitBreaker = this.tripCircuitBreaker.bind(this);
        this.resetCircuitBreaker = this.resetCircuitBreaker.bind(this);
    }
    authorizeCircuitBreaker(request) {
        const data = tx_js_1.MsgAuthorizeCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request("cosmos.circuit.v1.Msg", "AuthorizeCircuitBreaker", data);
        return promise.then((data) => tx_js_1.MsgAuthorizeCircuitBreakerResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    tripCircuitBreaker(request) {
        const data = tx_js_1.MsgTripCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request("cosmos.circuit.v1.Msg", "TripCircuitBreaker", data);
        return promise.then((data) => tx_js_1.MsgTripCircuitBreakerResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    resetCircuitBreaker(request) {
        const data = tx_js_1.MsgResetCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request("cosmos.circuit.v1.Msg", "ResetCircuitBreaker", data);
        return promise.then((data) => tx_js_1.MsgResetCircuitBreakerResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map