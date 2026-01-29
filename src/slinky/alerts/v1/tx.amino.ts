//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgAlert, MsgConclusion, MsgUpdateParams } from "./tx";
export interface MsgAlertAminoType extends AminoMsg {
  type: "slinky/x/alerts/MsgAlert";
  value: {
    alert: {
      height: string;
      signer: string;
      currency_pair: {
        Base: string;
        Quote: string;
      };
    };
  };
}
export interface MsgConclusionAminoType extends AminoMsg {
  type: "slinky/x/alerts/MsgConclusion";
  value: {
    signer: string;
    conclusion: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "slinky/x/alerts/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      alert_params: {
        enabled: boolean;
        bond_amount: {
          denom: string;
          amount: string;
        };
        max_block_age: string;
      };
      conclusion_verification_params: {
        type_url: string;
        value: Uint8Array;
      };
      pruning_params: {
        enabled: boolean;
        blocks_to_prune: string;
      };
    };
  };
}
export const AminoConverter = {
  "/slinky.alerts.v1.MsgAlert": {
    aminoType: "slinky/x/alerts/MsgAlert",
    toAmino: ({ alert }: MsgAlert): MsgAlertAminoType["value"] => {
      return {
        alert: {
          height: omitDefault(alert.height)?.toString?.(),
          signer: alert.signer,
          currency_pair: {
            Base: alert.currencyPair.base,
            Quote: alert.currencyPair.quote,
          },
        },
      };
    },
    fromAmino: ({ alert }: MsgAlertAminoType["value"]): MsgAlert => {
      return {
        alert:
          alert == null
            ? alert
            : {
                height: alert.height == null ? alert.height : BigInt(alert.height),
                signer: alert.signer,
                currencyPair:
                  alert.currency_pair == null
                    ? alert.currency_pair
                    : {
                        base: alert.currency_pair.Base,
                        quote: alert.currency_pair.Quote,
                      },
              },
      };
    },
  },
  "/slinky.alerts.v1.MsgConclusion": {
    aminoType: "slinky/x/alerts/MsgConclusion",
    toAmino: ({ signer, conclusion }: MsgConclusion): MsgConclusionAminoType["value"] => {
      return {
        signer,
        conclusion: {
          type_url: conclusion.typeUrl,
          value: conclusion.value,
        },
      };
    },
    fromAmino: ({ signer, conclusion }: MsgConclusionAminoType["value"]): MsgConclusion => {
      return {
        signer,
        conclusion:
          conclusion == null
            ? conclusion
            : {
                typeUrl: conclusion.type_url,
                value: conclusion.value,
              },
      };
    },
  },
  "/slinky.alerts.v1.MsgUpdateParams": {
    aminoType: "slinky/x/alerts/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          alert_params: {
            enabled: omitDefault(params.alertParams.enabled),
            bond_amount: {
              denom: params.alertParams.bondAmount.denom,
              amount: params.alertParams.bondAmount.amount,
            },
            max_block_age: omitDefault(params.alertParams.maxBlockAge)?.toString?.(),
          },
          conclusion_verification_params: {
            type_url: params.conclusionVerificationParams.typeUrl,
            value: params.conclusionVerificationParams.value,
          },
          pruning_params: {
            enabled: omitDefault(params.pruningParams.enabled),
            blocks_to_prune: omitDefault(params.pruningParams.blocksToPrune)?.toString?.(),
          },
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
                alertParams:
                  params.alert_params == null
                    ? params.alert_params
                    : {
                        enabled: params.alert_params.enabled,
                        bondAmount:
                          params.alert_params.bond_amount == null
                            ? params.alert_params.bond_amount
                            : {
                                denom: params.alert_params.bond_amount.denom,
                                amount: params.alert_params.bond_amount.amount,
                              },
                        maxBlockAge:
                          params.alert_params.max_block_age == null
                            ? params.alert_params.max_block_age
                            : BigInt(params.alert_params.max_block_age),
                      },
                conclusionVerificationParams:
                  params.conclusion_verification_params == null
                    ? params.conclusion_verification_params
                    : {
                        typeUrl: params.conclusion_verification_params.type_url,
                        value: params.conclusion_verification_params.value,
                      },
                pruningParams:
                  params.pruning_params == null
                    ? params.pruning_params
                    : {
                        enabled: params.pruning_params.enabled,
                        blocksToPrune:
                          params.pruning_params.blocks_to_prune == null
                            ? params.pruning_params.blocks_to_prune
                            : BigInt(params.pruning_params.blocks_to_prune),
                      },
              },
      };
    },
  },
};
