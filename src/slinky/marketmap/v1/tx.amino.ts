//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers.js";
import {
  MsgCreateMarkets,
  MsgUpdateMarkets,
  MsgParams,
  MsgRemoveMarketAuthorities,
  MsgUpsertMarkets,
  MsgRemoveMarkets,
} from "./tx.js";
export interface MsgCreateMarketsAminoType extends AminoMsg {
  type: "slinky/x/marketmap/MsgCreateMarkets";
  value: {
    authority: string;
    create_markets: {
      ticker: {
        currency_pair: {
          Base: string;
          Quote: string;
        };
        decimals: string;
        min_provider_count: string;
        enabled: boolean;
        metadata_JSON: string;
      };
      provider_configs: {
        name: string;
        off_chain_ticker: string;
        normalize_by_pair: {
          Base: string;
          Quote: string;
        };
        invert: boolean;
        metadata_JSON: string;
      }[];
    }[];
  };
}
export interface MsgUpdateMarketsAminoType extends AminoMsg {
  type: "slinky/x/marketmap/MsgUpdateMarkets";
  value: {
    authority: string;
    update_markets: {
      ticker: {
        currency_pair: {
          Base: string;
          Quote: string;
        };
        decimals: string;
        min_provider_count: string;
        enabled: boolean;
        metadata_JSON: string;
      };
      provider_configs: {
        name: string;
        off_chain_ticker: string;
        normalize_by_pair: {
          Base: string;
          Quote: string;
        };
        invert: boolean;
        metadata_JSON: string;
      }[];
    }[];
  };
}
export interface MsgParamsAminoType extends AminoMsg {
  type: "/slinky.marketmap.v1.MsgParams";
  value: {
    params: {
      market_authorities: string[];
      admin: string;
    };
    authority: string;
  };
}
export interface MsgRemoveMarketAuthoritiesAminoType extends AminoMsg {
  type: "/slinky.marketmap.v1.MsgRemoveMarketAuthorities";
  value: {
    remove_addresses: string[];
    admin: string;
  };
}
export interface MsgUpsertMarketsAminoType extends AminoMsg {
  type: "slinky/x/marketmap/MsgUpsertMarkets";
  value: {
    authority: string;
    markets: {
      ticker: {
        currency_pair: {
          Base: string;
          Quote: string;
        };
        decimals: string;
        min_provider_count: string;
        enabled: boolean;
        metadata_JSON: string;
      };
      provider_configs: {
        name: string;
        off_chain_ticker: string;
        normalize_by_pair: {
          Base: string;
          Quote: string;
        };
        invert: boolean;
        metadata_JSON: string;
      }[];
    }[];
  };
}
export interface MsgRemoveMarketsAminoType extends AminoMsg {
  type: "/slinky.marketmap.v1.MsgRemoveMarkets";
  value: {
    authority: string;
    markets: string[];
  };
}
export const AminoConverter = {
  "/slinky.marketmap.v1.MsgCreateMarkets": {
    aminoType: "slinky/x/marketmap/MsgCreateMarkets",
    toAmino: ({ authority, createMarkets }: MsgCreateMarkets): MsgCreateMarketsAminoType["value"] => {
      return {
        authority,
        create_markets: createMarkets.map((el0) => ({
          ticker: {
            currency_pair: {
              Base: el0.ticker.currencyPair.base,
              Quote: el0.ticker.currencyPair.quote,
            },
            decimals: omitDefault(el0.ticker.decimals)?.toString?.(),
            min_provider_count: omitDefault(el0.ticker.minProviderCount)?.toString?.(),
            enabled: omitDefault(el0.ticker.enabled),
            metadata_JSON: el0.ticker.metadataJSON,
          },
          provider_configs: el0.providerConfigs.map((el1) => ({
            name: el1.name,
            off_chain_ticker: el1.offChainTicker,
            normalize_by_pair: {
              Base: el1.normalizeByPair.base,
              Quote: el1.normalizeByPair.quote,
            },
            invert: omitDefault(el1.invert),
            metadata_JSON: el1.metadataJSON,
          })),
        })),
      };
    },
    fromAmino: ({ authority, create_markets }: MsgCreateMarketsAminoType["value"]): MsgCreateMarkets => {
      return {
        authority,
        createMarkets: create_markets.map?.((el0) => ({
          ticker:
            el0.ticker == null
              ? el0.ticker
              : {
                  currencyPair:
                    el0.ticker.currency_pair == null
                      ? el0.ticker.currency_pair
                      : {
                          base: el0.ticker.currency_pair.Base,
                          quote: el0.ticker.currency_pair.Quote,
                        },
                  decimals: el0.ticker.decimals == null ? el0.ticker.decimals : BigInt(el0.ticker.decimals),
                  minProviderCount:
                    el0.ticker.min_provider_count == null
                      ? el0.ticker.min_provider_count
                      : BigInt(el0.ticker.min_provider_count),
                  enabled: el0.ticker.enabled,
                  metadataJSON: el0.ticker.metadata_JSON,
                },
          providerConfigs: el0.provider_configs.map?.((el1) => ({
            name: el1.name,
            offChainTicker: el1.off_chain_ticker,
            normalizeByPair:
              el1.normalize_by_pair == null
                ? el1.normalize_by_pair
                : {
                    base: el1.normalize_by_pair.Base,
                    quote: el1.normalize_by_pair.Quote,
                  },
            invert: el1.invert,
            metadataJSON: el1.metadata_JSON,
          })),
        })),
      };
    },
  },
  "/slinky.marketmap.v1.MsgUpdateMarkets": {
    aminoType: "slinky/x/marketmap/MsgUpdateMarkets",
    toAmino: ({ authority, updateMarkets }: MsgUpdateMarkets): MsgUpdateMarketsAminoType["value"] => {
      return {
        authority,
        update_markets: updateMarkets.map((el0) => ({
          ticker: {
            currency_pair: {
              Base: el0.ticker.currencyPair.base,
              Quote: el0.ticker.currencyPair.quote,
            },
            decimals: omitDefault(el0.ticker.decimals)?.toString?.(),
            min_provider_count: omitDefault(el0.ticker.minProviderCount)?.toString?.(),
            enabled: omitDefault(el0.ticker.enabled),
            metadata_JSON: el0.ticker.metadataJSON,
          },
          provider_configs: el0.providerConfigs.map((el1) => ({
            name: el1.name,
            off_chain_ticker: el1.offChainTicker,
            normalize_by_pair: {
              Base: el1.normalizeByPair.base,
              Quote: el1.normalizeByPair.quote,
            },
            invert: omitDefault(el1.invert),
            metadata_JSON: el1.metadataJSON,
          })),
        })),
      };
    },
    fromAmino: ({ authority, update_markets }: MsgUpdateMarketsAminoType["value"]): MsgUpdateMarkets => {
      return {
        authority,
        updateMarkets: update_markets.map?.((el0) => ({
          ticker:
            el0.ticker == null
              ? el0.ticker
              : {
                  currencyPair:
                    el0.ticker.currency_pair == null
                      ? el0.ticker.currency_pair
                      : {
                          base: el0.ticker.currency_pair.Base,
                          quote: el0.ticker.currency_pair.Quote,
                        },
                  decimals: el0.ticker.decimals == null ? el0.ticker.decimals : BigInt(el0.ticker.decimals),
                  minProviderCount:
                    el0.ticker.min_provider_count == null
                      ? el0.ticker.min_provider_count
                      : BigInt(el0.ticker.min_provider_count),
                  enabled: el0.ticker.enabled,
                  metadataJSON: el0.ticker.metadata_JSON,
                },
          providerConfigs: el0.provider_configs.map?.((el1) => ({
            name: el1.name,
            offChainTicker: el1.off_chain_ticker,
            normalizeByPair:
              el1.normalize_by_pair == null
                ? el1.normalize_by_pair
                : {
                    base: el1.normalize_by_pair.Base,
                    quote: el1.normalize_by_pair.Quote,
                  },
            invert: el1.invert,
            metadataJSON: el1.metadata_JSON,
          })),
        })),
      };
    },
  },
  "/slinky.marketmap.v1.MsgParams": {
    aminoType: "/slinky.marketmap.v1.MsgParams",
    toAmino: ({ params, authority }: MsgParams): MsgParamsAminoType["value"] => {
      return {
        params: {
          market_authorities: params.marketAuthorities,
          admin: params.admin,
        },
        authority,
      };
    },
    fromAmino: ({ params, authority }: MsgParamsAminoType["value"]): MsgParams => {
      return {
        params:
          params == null
            ? params
            : {
                marketAuthorities: params.market_authorities,
                admin: params.admin,
              },
        authority,
      };
    },
  },
  "/slinky.marketmap.v1.MsgRemoveMarketAuthorities": {
    aminoType: "/slinky.marketmap.v1.MsgRemoveMarketAuthorities",
    toAmino: ({
      removeAddresses,
      admin,
    }: MsgRemoveMarketAuthorities): MsgRemoveMarketAuthoritiesAminoType["value"] => {
      return {
        remove_addresses: removeAddresses,
        admin,
      };
    },
    fromAmino: ({
      remove_addresses,
      admin,
    }: MsgRemoveMarketAuthoritiesAminoType["value"]): MsgRemoveMarketAuthorities => {
      return {
        removeAddresses: remove_addresses,
        admin,
      };
    },
  },
  "/slinky.marketmap.v1.MsgUpsertMarkets": {
    aminoType: "slinky/x/marketmap/MsgUpsertMarkets",
    toAmino: ({ authority, markets }: MsgUpsertMarkets): MsgUpsertMarketsAminoType["value"] => {
      return {
        authority,
        markets: markets.map((el0) => ({
          ticker: {
            currency_pair: {
              Base: el0.ticker.currencyPair.base,
              Quote: el0.ticker.currencyPair.quote,
            },
            decimals: omitDefault(el0.ticker.decimals)?.toString?.(),
            min_provider_count: omitDefault(el0.ticker.minProviderCount)?.toString?.(),
            enabled: omitDefault(el0.ticker.enabled),
            metadata_JSON: el0.ticker.metadataJSON,
          },
          provider_configs: el0.providerConfigs.map((el1) => ({
            name: el1.name,
            off_chain_ticker: el1.offChainTicker,
            normalize_by_pair: {
              Base: el1.normalizeByPair.base,
              Quote: el1.normalizeByPair.quote,
            },
            invert: omitDefault(el1.invert),
            metadata_JSON: el1.metadataJSON,
          })),
        })),
      };
    },
    fromAmino: ({ authority, markets }: MsgUpsertMarketsAminoType["value"]): MsgUpsertMarkets => {
      return {
        authority,
        markets: markets.map?.((el0) => ({
          ticker:
            el0.ticker == null
              ? el0.ticker
              : {
                  currencyPair:
                    el0.ticker.currency_pair == null
                      ? el0.ticker.currency_pair
                      : {
                          base: el0.ticker.currency_pair.Base,
                          quote: el0.ticker.currency_pair.Quote,
                        },
                  decimals: el0.ticker.decimals == null ? el0.ticker.decimals : BigInt(el0.ticker.decimals),
                  minProviderCount:
                    el0.ticker.min_provider_count == null
                      ? el0.ticker.min_provider_count
                      : BigInt(el0.ticker.min_provider_count),
                  enabled: el0.ticker.enabled,
                  metadataJSON: el0.ticker.metadata_JSON,
                },
          providerConfigs: el0.provider_configs.map?.((el1) => ({
            name: el1.name,
            offChainTicker: el1.off_chain_ticker,
            normalizeByPair:
              el1.normalize_by_pair == null
                ? el1.normalize_by_pair
                : {
                    base: el1.normalize_by_pair.Base,
                    quote: el1.normalize_by_pair.Quote,
                  },
            invert: el1.invert,
            metadataJSON: el1.metadata_JSON,
          })),
        })),
      };
    },
  },
  "/slinky.marketmap.v1.MsgRemoveMarkets": {
    aminoType: "/slinky.marketmap.v1.MsgRemoveMarkets",
    toAmino: ({ authority, markets }: MsgRemoveMarkets): MsgRemoveMarketsAminoType["value"] => {
      return {
        authority,
        markets,
      };
    },
    fromAmino: ({ authority, markets }: MsgRemoveMarketsAminoType["value"]): MsgRemoveMarkets => {
      return {
        authority,
        markets,
      };
    },
  },
};
