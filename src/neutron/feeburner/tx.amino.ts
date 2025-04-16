//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "feeburner/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      neutron_denom: string;
      reserve_address: string;
      treasury_address: string;
    };
  };
}
export const AminoConverter = {
  "/neutron.feeburner.MsgUpdateParams": {
    aminoType: "feeburner/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          neutron_denom: params.neutronDenom,
          reserve_address: params.reserveAddress,
          treasury_address: params.treasuryAddress,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          neutronDenom: params.neutron_denom,
          reserveAddress: params.reserve_address,
          treasuryAddress: params.treasury_address,
        },
      };
    },
  },
};
