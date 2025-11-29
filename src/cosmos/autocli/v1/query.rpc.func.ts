//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { AppOptionsRequest, AppOptionsResponse } from "./query.js";
/**
 * AppOptions returns the autocli options for all of the modules in an app.
 * @name getAppOptions
 * @package cosmos.autocli.v1
 * @see proto service: cosmos.autocli.v1.AppOptions
 */
export const getAppOptions = buildQuery<AppOptionsRequest, AppOptionsResponse>({
  encode: AppOptionsRequest.encode,
  decode: AppOptionsResponse.decode,
  service: "cosmos.autocli.v1.Query",
  method: "AppOptions",
});
