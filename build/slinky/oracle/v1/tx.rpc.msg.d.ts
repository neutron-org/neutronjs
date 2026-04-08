import { Rpc } from "../../../helpers.js";
import { MsgAddCurrencyPairs, MsgAddCurrencyPairsResponse, MsgRemoveCurrencyPairs, MsgRemoveCurrencyPairsResponse } from "./tx.js";
/** Msg is the message service for the x/oracle module. */
export interface Msg {
    /**
     * AddCurrencyPairs will be used only by governance to update the set of
     * available CurrencyPairs. Given a set of CurrencyPair objects, update
     * the available currency pairs in the module .
     */
    addCurrencyPairs(request: MsgAddCurrencyPairs): Promise<MsgAddCurrencyPairsResponse>;
    /**
     * RemoveCurrencyPairs will be used explicitly by governance to remove the
     * given set of currency-pairs from the module's state. Thus these
     * CurrencyPairs will no longer have price-data available from this module.
     */
    removeCurrencyPairs(request: MsgRemoveCurrencyPairs): Promise<MsgRemoveCurrencyPairsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addCurrencyPairs(request: MsgAddCurrencyPairs): Promise<MsgAddCurrencyPairsResponse>;
    removeCurrencyPairs(request: MsgRemoveCurrencyPairs): Promise<MsgRemoveCurrencyPairsResponse>;
}
