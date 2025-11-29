//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryGetScheduleRequest,
  QueryGetScheduleResponse,
  QuerySchedulesRequest,
  QuerySchedulesResponse,
} from "./query.js";
/**
 * Queries the parameters of the module.
 * @name getParams
 * @package neutron.cron
 * @see proto service: neutron.cron.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.cron.Query",
  method: "Params",
});
/**
 * Queries a Schedule by name.
 * @name getSchedule
 * @package neutron.cron
 * @see proto service: neutron.cron.Schedule
 */
export const getSchedule = buildQuery<QueryGetScheduleRequest, QueryGetScheduleResponse>({
  encode: QueryGetScheduleRequest.encode,
  decode: QueryGetScheduleResponse.decode,
  service: "neutron.cron.Query",
  method: "Schedule",
});
/**
 * Queries a list of Schedule items.
 * @name getSchedules
 * @package neutron.cron
 * @see proto service: neutron.cron.Schedules
 */
export const getSchedules = buildQuery<QuerySchedulesRequest, QuerySchedulesResponse>({
  encode: QuerySchedulesRequest.encode,
  decode: QuerySchedulesResponse.decode,
  service: "neutron.cron.Query",
  method: "Schedules",
});
