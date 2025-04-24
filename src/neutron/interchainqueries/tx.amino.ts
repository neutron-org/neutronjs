//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import {
  MsgRegisterInterchainQuery,
  MsgSubmitQueryResult,
  MsgRemoveInterchainQueryRequest,
  MsgUpdateInterchainQueryRequest,
  MsgUpdateParams,
} from "./tx";
export interface MsgRegisterInterchainQueryAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
  value: {
    query_type: string;
    keys: {
      path: string;
      key: Uint8Array;
    }[];
    transactions_filter: string;
    connection_id: string;
    update_period: string;
    sender: string;
  };
}
export interface MsgSubmitQueryResultAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgSubmitQueryResult";
  value: {
    query_id: string;
    sender: string;
    client_id: string;
    result: {
      kv_results: {
        storage_prefix: string;
        key: Uint8Array;
        value: Uint8Array;
        Proof: {
          ops: {
            type: string;
            key: Uint8Array;
            data: Uint8Array;
          }[];
        };
      }[];
      block: {
        next_block_header: {
          type_url: string;
          value: Uint8Array;
        };
        header: {
          type_url: string;
          value: Uint8Array;
        };
        tx: {
          response: {
            code: number;
            data: Uint8Array;
            log: string;
            info: string;
            gas_wanted: string;
            gas_used: string;
            events: {
              type: string;
              attributes: {
                key: string;
                value: string;
                index: boolean;
              }[];
            }[];
            codespace: string;
          };
          delivery_proof: {
            total: string;
            index: string;
            leaf_hash: Uint8Array;
            aunts: Uint8Array[];
          };
          inclusion_proof: {
            total: string;
            index: string;
            leaf_hash: Uint8Array;
            aunts: Uint8Array[];
          };
          data: Uint8Array;
        };
      };
      height: string;
      revision: string;
      allow_kv_callbacks: boolean;
    };
  };
}
export interface MsgRemoveInterchainQueryRequestAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
  value: {
    query_id: string;
    sender: string;
  };
}
export interface MsgUpdateInterchainQueryRequestAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
  value: {
    query_id: string;
    new_keys: {
      path: string;
      key: Uint8Array;
    }[];
    new_update_period: string;
    new_transactions_filter: string;
    sender: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "interchainqueries/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      query_submit_timeout: string;
      query_deposit: {
        denom: string;
        amount: string;
      }[];
      tx_query_removal_limit: string;
      max_kv_query_keys_count: string;
      max_transactions_filters: string;
    };
  };
}
export const AminoConverter = {
  "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
    aminoType: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
    toAmino: ({
      queryType,
      keys,
      transactionsFilter,
      connectionId,
      updatePeriod,
      sender,
    }: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryAminoType["value"] => {
      return {
        query_type: queryType,
        keys: keys.map((el0) => ({
          path: el0.path,
          key: el0.key,
        })),
        transactions_filter: transactionsFilter,
        connection_id: connectionId,
        update_period: omitDefault(updatePeriod)?.toString?.(),
        sender,
      };
    },
    fromAmino: ({
      query_type,
      keys,
      transactions_filter,
      connection_id,
      update_period,
      sender,
    }: MsgRegisterInterchainQueryAminoType["value"]): MsgRegisterInterchainQuery => {
      return {
        queryType: query_type,
        keys: keys.map?.((el0) => ({
          path: el0.path,
          key: el0.key,
        })),
        transactionsFilter: transactions_filter,
        connectionId: connection_id,
        updatePeriod: update_period == null ? update_period : BigInt(update_period),
        sender,
      };
    },
  },
  "/neutron.interchainqueries.MsgSubmitQueryResult": {
    aminoType: "/neutron.interchainqueries.MsgSubmitQueryResult",
    toAmino: ({
      queryId,
      sender,
      clientId,
      result,
    }: MsgSubmitQueryResult): MsgSubmitQueryResultAminoType["value"] => {
      return {
        query_id: omitDefault(queryId)?.toString?.(),
        sender,
        client_id: clientId,
        result: {
          kv_results: result.kvResults.map((el0) => ({
            storage_prefix: el0.storagePrefix,
            key: el0.key,
            value: el0.value,
            Proof: {
              ops: el0.proof.ops.map((el1) => ({
                type: el1.type,
                key: el1.key,
                data: el1.data,
              })),
            },
          })),
          block: {
            next_block_header: {
              type_url: result.block.nextBlockHeader.typeUrl,
              value: result.block.nextBlockHeader.value,
            },
            header: {
              type_url: result.block.header.typeUrl,
              value: result.block.header.value,
            },
            tx: {
              response: {
                code: omitDefault(result.block.tx.response.code),
                data: result.block.tx.response.data,
                log: result.block.tx.response.log,
                info: result.block.tx.response.info,
                gas_wanted: omitDefault(result.block.tx.response.gasWanted)?.toString?.(),
                gas_used: omitDefault(result.block.tx.response.gasUsed)?.toString?.(),
                events: result.block.tx.response.events.map((el0) => ({
                  type: el0.type,
                  attributes: el0.attributes.map((el1) => ({
                    key: el1.key,
                    value: el1.value,
                    index: omitDefault(el1.index),
                  })),
                })),
                codespace: result.block.tx.response.codespace,
              },
              delivery_proof: {
                total: omitDefault(result.block.tx.deliveryProof.total)?.toString?.(),
                index: omitDefault(result.block.tx.deliveryProof.index)?.toString?.(),
                leaf_hash: result.block.tx.deliveryProof.leafHash,
                aunts: result.block.tx.deliveryProof.aunts,
              },
              inclusion_proof: {
                total: omitDefault(result.block.tx.inclusionProof.total)?.toString?.(),
                index: omitDefault(result.block.tx.inclusionProof.index)?.toString?.(),
                leaf_hash: result.block.tx.inclusionProof.leafHash,
                aunts: result.block.tx.inclusionProof.aunts,
              },
              data: result.block.tx.data,
            },
          },
          height: omitDefault(result.height)?.toString?.(),
          revision: omitDefault(result.revision)?.toString?.(),
          allow_kv_callbacks: omitDefault(result.allowKvCallbacks),
        },
      };
    },
    fromAmino: ({
      query_id,
      sender,
      client_id,
      result,
    }: MsgSubmitQueryResultAminoType["value"]): MsgSubmitQueryResult => {
      return {
        queryId: query_id == null ? query_id : BigInt(query_id),
        sender,
        clientId: client_id,
        result:
          result == null
            ? result
            : {
                kvResults: result.kv_results.map?.((el1) => ({
                  storagePrefix: el1.storage_prefix,
                  key: el1.key,
                  value: el1.value,
                  proof:
                    el1.Proof == null
                      ? el1.Proof
                      : {
                          ops: el1.Proof.ops.map?.((el3) => ({
                            type: el3.type,
                            key: el3.key,
                            data: el3.data,
                          })),
                        },
                })),
                block:
                  result.block == null
                    ? result.block
                    : {
                        nextBlockHeader:
                          result.block.next_block_header == null
                            ? result.block.next_block_header
                            : {
                                typeUrl: result.block.next_block_header.type_url,
                                value: result.block.next_block_header.value,
                              },
                        header:
                          result.block.header == null
                            ? result.block.header
                            : {
                                typeUrl: result.block.header.type_url,
                                value: result.block.header.value,
                              },
                        tx:
                          result.block.tx == null
                            ? result.block.tx
                            : {
                                response:
                                  result.block.tx.response == null
                                    ? result.block.tx.response
                                    : {
                                        code: result.block.tx.response.code,
                                        data: result.block.tx.response.data,
                                        log: result.block.tx.response.log,
                                        info: result.block.tx.response.info,
                                        gasWanted:
                                          result.block.tx.response.gas_wanted == null
                                            ? result.block.tx.response.gas_wanted
                                            : BigInt(result.block.tx.response.gas_wanted),
                                        gasUsed:
                                          result.block.tx.response.gas_used == null
                                            ? result.block.tx.response.gas_used
                                            : BigInt(result.block.tx.response.gas_used),
                                        events: result.block.tx.response.events.map?.((el4) => ({
                                          type: el4.type,
                                          attributes: el4.attributes.map?.((el5) => ({
                                            key: el5.key,
                                            value: el5.value,
                                            index: el5.index,
                                          })),
                                        })),
                                        codespace: result.block.tx.response.codespace,
                                      },
                                deliveryProof:
                                  result.block.tx.delivery_proof == null
                                    ? result.block.tx.delivery_proof
                                    : {
                                        total:
                                          result.block.tx.delivery_proof.total == null
                                            ? result.block.tx.delivery_proof.total
                                            : BigInt(result.block.tx.delivery_proof.total),
                                        index:
                                          result.block.tx.delivery_proof.index == null
                                            ? result.block.tx.delivery_proof.index
                                            : BigInt(result.block.tx.delivery_proof.index),
                                        leafHash: result.block.tx.delivery_proof.leaf_hash,
                                        aunts: result.block.tx.delivery_proof.aunts,
                                      },
                                inclusionProof:
                                  result.block.tx.inclusion_proof == null
                                    ? result.block.tx.inclusion_proof
                                    : {
                                        total:
                                          result.block.tx.inclusion_proof.total == null
                                            ? result.block.tx.inclusion_proof.total
                                            : BigInt(result.block.tx.inclusion_proof.total),
                                        index:
                                          result.block.tx.inclusion_proof.index == null
                                            ? result.block.tx.inclusion_proof.index
                                            : BigInt(result.block.tx.inclusion_proof.index),
                                        leafHash: result.block.tx.inclusion_proof.leaf_hash,
                                        aunts: result.block.tx.inclusion_proof.aunts,
                                      },
                                data: result.block.tx.data,
                              },
                      },
                height: result.height == null ? result.height : BigInt(result.height),
                revision: result.revision == null ? result.revision : BigInt(result.revision),
                allowKvCallbacks: result.allow_kv_callbacks,
              },
      };
    },
  },
  "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
    aminoType: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
    toAmino: ({
      queryId,
      sender,
    }: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestAminoType["value"] => {
      return {
        query_id: omitDefault(queryId)?.toString?.(),
        sender,
      };
    },
    fromAmino: ({
      query_id,
      sender,
    }: MsgRemoveInterchainQueryRequestAminoType["value"]): MsgRemoveInterchainQueryRequest => {
      return {
        queryId: query_id == null ? query_id : BigInt(query_id),
        sender,
      };
    },
  },
  "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
    aminoType: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
    toAmino: ({
      queryId,
      newKeys,
      newUpdatePeriod,
      newTransactionsFilter,
      sender,
    }: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestAminoType["value"] => {
      return {
        query_id: omitDefault(queryId)?.toString?.(),
        new_keys: newKeys.map((el0) => ({
          path: el0.path,
          key: el0.key,
        })),
        new_update_period: omitDefault(newUpdatePeriod)?.toString?.(),
        new_transactions_filter: newTransactionsFilter,
        sender,
      };
    },
    fromAmino: ({
      query_id,
      new_keys,
      new_update_period,
      new_transactions_filter,
      sender,
    }: MsgUpdateInterchainQueryRequestAminoType["value"]): MsgUpdateInterchainQueryRequest => {
      return {
        queryId: query_id == null ? query_id : BigInt(query_id),
        newKeys: new_keys.map?.((el0) => ({
          path: el0.path,
          key: el0.key,
        })),
        newUpdatePeriod: new_update_period == null ? new_update_period : BigInt(new_update_period),
        newTransactionsFilter: new_transactions_filter,
        sender,
      };
    },
  },
  "/neutron.interchainqueries.MsgUpdateParams": {
    aminoType: "interchainqueries/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          query_submit_timeout: omitDefault(params.querySubmitTimeout)?.toString?.(),
          query_deposit: params.queryDeposit.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
          tx_query_removal_limit: omitDefault(params.txQueryRemovalLimit)?.toString?.(),
          max_kv_query_keys_count: omitDefault(params.maxKvQueryKeysCount)?.toString?.(),
          max_transactions_filters: omitDefault(params.maxTransactionsFilters)?.toString?.(),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                querySubmitTimeout:
                  params.query_submit_timeout == null
                    ? params.query_submit_timeout
                    : BigInt(params.query_submit_timeout),
                queryDeposit: params.query_deposit.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
                txQueryRemovalLimit:
                  params.tx_query_removal_limit == null
                    ? params.tx_query_removal_limit
                    : BigInt(params.tx_query_removal_limit),
                maxKvQueryKeysCount:
                  params.max_kv_query_keys_count == null
                    ? params.max_kv_query_keys_count
                    : BigInt(params.max_kv_query_keys_count),
                maxTransactionsFilters:
                  params.max_transactions_filters == null
                    ? params.max_transactions_filters
                    : BigInt(params.max_transactions_filters),
              },
      };
    },
  },
};
