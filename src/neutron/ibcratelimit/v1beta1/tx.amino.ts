//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "neutron/ibc-rate-limit/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      send_enabled: {
        denom: string;
        enabled: boolean;
      }[];
      default_send_enabled: boolean;
    };
  };
}
export const AminoConverter = {
  "/neutron.ibcratelimit.v1beta1.MsgUpdateParams": {
    aminoType: "neutron/ibc-rate-limit/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          send_enabled: params.sendEnabled.map((el0) => ({
            denom: el0.denom,
            enabled: omitDefault(el0.enabled),
          })),
          default_send_enabled: omitDefault(params.defaultSendEnabled),
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
                sendEnabled: params.send_enabled.map?.((el1) => ({
                  denom: el1.denom,
                  enabled: el1.enabled,
                })),
                defaultSendEnabled: params.default_send_enabled,
              },
      };
    },
  },
};
