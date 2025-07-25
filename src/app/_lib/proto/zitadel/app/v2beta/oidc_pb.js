// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/app/v2beta/oidc.proto (package zitadel.app.v2beta, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_zitadel_app_v2beta_login } from "./login_pb.js";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file zitadel/app/v2beta/oidc.proto.
 */
export const file_zitadel_app_v2beta_oidc = /*@__PURE__*/
  fileDesc("Ch16aXRhZGVsL2FwcC92MmJldGEvb2lkYy5wcm90bxISeml0YWRlbC5hcHAudjJiZXRhIj4KFE9JRENMb2NhbGl6ZWRNZXNzYWdlEgsKA2tleRgBIAEoCRIZChFsb2NhbGl6ZWRfbWVzc2FnZRgCIAEoCSKQFwoKT0lEQ0NvbmZpZxKeAQoNcmVkaXJlY3RfdXJpcxgBIAMoCUKGAZJBggEyUkNhbGxiYWNrIFVSSSBvZiB0aGUgYXV0aG9yaXphdGlvbiByZXF1ZXN0IHdoZXJlIHRoZSBjb2RlIG9yIHRva2VucyB3aWxsIGJlIHNlbnQgdG9KLFsiaHR0cHM6Ly9jb25zb2xlLnppdGFkZWwuY2gvYXV0aC9jYWxsYmFjayJdEo4BCg5yZXNwb25zZV90eXBlcxgCIAMoDjIkLnppdGFkZWwuYXBwLnYyYmV0YS5PSURDUmVzcG9uc2VUeXBlQlCSQU0yS0RldGVybWluZXMgd2hldGhlciBhIGNvZGUsIGlkX3Rva2VuIHRva2VuIG9yIGp1c3QgaWRfdG9rZW4gd2lsbCBiZSByZXR1cm5lZBJuCgtncmFudF90eXBlcxgDIAMoDjIhLnppdGFkZWwuYXBwLnYyYmV0YS5PSURDR3JhbnRUeXBlQjaSQTMyMVRoZSBmbG93IHR5cGUgdGhlIGFwcGxpY2F0aW9uIHVzZXMgdG8gZ2FpbiBhY2Nlc3MSYgoIYXBwX3R5cGUYBCABKA4yHy56aXRhZGVsLmFwcC52MmJldGEuT0lEQ0FwcFR5cGVCL5JBLDIqZGV0ZXJtaW5lcyB0aGUgcGFyYWRpZ20gb2YgdGhlIGFwcGxpY2F0aW9uElQKCWNsaWVudF9pZBgFIAEoCUJBkkE+Mh9nZW5lcmF0ZWQgb2F1dGgyL29pZGMgY2xpZW50IGlkShsiNjk2MjkwMjM5MDY0ODgzMzRAWklUQURFTCISewoQYXV0aF9tZXRob2RfdHlwZRgGIAEoDjImLnppdGFkZWwuYXBwLnYyYmV0YS5PSURDQXV0aE1ldGhvZFR5cGVCOZJBNjI0ZGVmaW5lcyBob3cgdGhlIGFwcGxpY2F0aW9uIHBhc3NlcyBsb2dpbiBjcmVkZW50aWFscxKLAQoZcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpcxgHIAMoCUJokkFlMjxaSVRBREVMIHdpbGwgcmVkaXJlY3QgdG8gdGhpcyBsaW5rIGFmdGVyIGEgc3VjY2Vzc2Z1bCBsb2dvdXRKJVsiaHR0cHM6Ly9jb25zb2xlLnppdGFkZWwuY2gvbG9nb3V0Il0SXwoHdmVyc2lvbhgIIAEoDjIfLnppdGFkZWwuYXBwLnYyYmV0YS5PSURDVmVyc2lvbkItkkEqMih0aGUgT0lEQyB2ZXJzaW9uIHVzZWQgYnkgdGhlIGFwcGxpY2F0aW9uEnsKDm5vbmVfY29tcGxpYW50GAkgASgIQmOSQWAyXnNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb25maWcgaXMgT0lEQyBjb21wbGlhbnQuIEEgcHJvZHVjdGlvbiBjb25maWd1cmF0aW9uIFNIT1VMRCBiZSBjb21wbGlhbnQScQoTY29tcGxpYW5jZV9wcm9ibGVtcxgKIAMoCzIoLnppdGFkZWwuYXBwLnYyYmV0YS5PSURDTG9jYWxpemVkTWVzc2FnZUIqkkEnMiVsaXN0cyB0aGUgcHJvYmxlbXMgZm9yIG5vbi1jb21wbGlhbmN5EisKCGRldl9tb2RlGAsgASgIQhmSQRYyFHVzZWQgZm9yIGRldmVsb3BtZW50EnEKEWFjY2Vzc190b2tlbl90eXBlGAwgASgOMiEueml0YWRlbC5hcHAudjJiZXRhLk9JRENUb2tlblR5cGVCM5JBMDIudHlwZSBvZiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gWklUQURFTBKVAQobYWNjZXNzX3Rva2VuX3JvbGVfYXNzZXJ0aW9uGA0gASgIQnCSQW0ya2FkZHMgcm9sZXMgdG8gdGhlIGNsYWltcyBvZiB0aGUgYWNjZXNzIHRva2VuIChvbmx5IGlmIHR5cGUgPT0gSldUKSBldmVuIGlmIHRoZXkgYXJlIG5vdCByZXF1ZXN0ZWQgYnkgc2NvcGVzEncKF2lkX3Rva2VuX3JvbGVfYXNzZXJ0aW9uGA4gASgIQlaSQVMyUWFkZHMgcm9sZXMgdG8gdGhlIGNsYWltcyBvZiB0aGUgaWQgdG9rZW4gZXZlbiBpZiB0aGV5IGFyZSBub3QgcmVxdWVzdGVkIGJ5IHNjb3BlcxLLAQobaWRfdG9rZW5fdXNlcmluZm9fYXNzZXJ0aW9uGA8gASgIQqUBkkGhATKeAWNsYWltcyBvZiBwcm9maWxlLCBlbWFpbCwgYWRkcmVzcyBhbmQgcGhvbmUgc2NvcGVzIGFyZSBhZGRlZCB0byB0aGUgaWQgdG9rZW4gZXZlbiBpZiBhbiBhY2Nlc3MgdG9rZW4gaXMgaXNzdWVkLiBBdHRlbnRpb24gdGhpcyB2aW9sYXRlcyB0aGUgT0lEQyBzcGVjaWZpY2F0aW9uEr8BCgpjbG9ja19za2V3GBAgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQo8BkkGLATKIAVVzZWQgdG8gY29tcGVuc2F0ZSB0aW1lIGRpZmZlcmVuY2Ugb2Ygc2VydmVycy4gRHVyYXRpb24gYWRkZWQgdG8gdGhlICJleHAiIGNsYWltIGFuZCBzdWJ0cmFjdGVkIGZyb20gImlhdCIsICJhdXRoX3RpbWUiIGFuZCAibmJmIiBjbGFpbXMSoQEKEmFkZGl0aW9uYWxfb3JpZ2lucxgRIAMoCUKEAZJBgAEyUGFkZGl0aW9uYWwgb3JpZ2lucyAob3RoZXIgdGhhbiB0aGUgcmVkaXJlY3RfdXJpcykgZnJvbSB3aGVyZSB0aGUgQVBJIGNhbiBiZSB1c2VkSixbImh0dHBzOi8vY29uc29sZS56aXRhZGVsLmNoL2F1dGgvY2FsbGJhY2siXRJ+Cg9hbGxvd2VkX29yaWdpbnMYEiADKAlCZZJBYjIyYWxsIGFsbG93ZWQgb3JpZ2lucyBmcm9tIHdoZXJlIHRoZSBBUEkgY2FuIGJlIHVzZWRKLFsiaHR0cHM6Ly9jb25zb2xlLnppdGFkZWwuY2gvYXV0aC9jYWxsYmFjayJdEogBChxza2lwX25hdGl2ZV9hcHBfc3VjY2Vzc19wYWdlGBMgASgIQmKSQV8yXVNraXAgdGhlIHN1Y2Nlc3NmdWwgbG9naW4gcGFnZSBvbiBuYXRpdmUgYXBwcyBhbmQgZGlyZWN0bHkgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhbGxiYWNrLhKIAgoXYmFja19jaGFubmVsX2xvZ291dF91cmkYFCABKAlC5gGSQeIBMrUBWklUQURFTCB3aWxsIHVzZSB0aGlzIFVSSSB0byBub3RpZnkgdGhlIGFwcGxpY2F0aW9uIGFib3V0IHRlcm1pbmF0ZWQgc2Vzc2lvbiBhY2NvcmRpbmcgdG8gdGhlIE9JREMgQmFjay1DaGFubmVsIExvZ291dCAoaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWJhY2tjaGFubmVsLTFfMC5odG1sKUooWyJodHRwczovL2V4YW1wbGUuY29tL2F1dGgvYmFja2NoYW5uZWwiXRLOAQoNbG9naW5fdmVyc2lvbhgVIAEoCzIgLnppdGFkZWwuYXBwLnYyYmV0YS5Mb2dpblZlcnNpb25ClAGSQZABMo0BU3BlY2lmeSB0aGUgcHJlZmVycmVkIGxvZ2luIFVJLCB3aGVyZSB0aGUgdXNlciBpcyByZWRpcmVjdGVkIHRvIGZvciBhdXRoZW50aWNhdGlvbi4gSWYgdW5zZXQsIHRoZSBsb2dpbiBVSSBpcyBjaG9zZW4gYnkgdGhlIGluc3RhbmNlIGRlZmF1bHQuKpsBChBPSURDUmVzcG9uc2VUeXBlEiIKHk9JRENfUkVTUE9OU0VfVFlQRV9VTlNQRUNJRklFRBAAEhsKF09JRENfUkVTUE9OU0VfVFlQRV9DT0RFEAESHwobT0lEQ19SRVNQT05TRV9UWVBFX0lEX1RPS0VOEAISJQohT0lEQ19SRVNQT05TRV9UWVBFX0lEX1RPS0VOX1RPS0VOEAMqvQEKDU9JRENHcmFudFR5cGUSJgoiT0lEQ19HUkFOVF9UWVBFX0FVVEhPUklaQVRJT05fQ09ERRAAEhwKGE9JRENfR1JBTlRfVFlQRV9JTVBMSUNJVBABEiEKHU9JRENfR1JBTlRfVFlQRV9SRUZSRVNIX1RPS0VOEAISHwobT0lEQ19HUkFOVF9UWVBFX0RFVklDRV9DT0RFEAMSIgoeT0lEQ19HUkFOVF9UWVBFX1RPS0VOX0VYQ0hBTkdFEAQqXAoLT0lEQ0FwcFR5cGUSFQoRT0lEQ19BUFBfVFlQRV9XRUIQABIcChhPSURDX0FQUF9UWVBFX1VTRVJfQUdFTlQQARIYChRPSURDX0FQUF9UWVBFX05BVElWRRACKqABChJPSURDQXV0aE1ldGhvZFR5cGUSHwobT0lEQ19BVVRIX01FVEhPRF9UWVBFX0JBU0lDEAASHgoaT0lEQ19BVVRIX01FVEhPRF9UWVBFX1BPU1QQARIeChpPSURDX0FVVEhfTUVUSE9EX1RZUEVfTk9ORRACEikKJU9JRENfQVVUSF9NRVRIT0RfVFlQRV9QUklWQVRFX0tFWV9KV1QQAyojCgtPSURDVmVyc2lvbhIUChBPSURDX1ZFUlNJT05fMV8wEAAqRAoNT0lEQ1Rva2VuVHlwZRIaChZPSURDX1RPS0VOX1RZUEVfQkVBUkVSEAASFwoTT0lEQ19UT0tFTl9UWVBFX0pXVBABQsEBChZjb20ueml0YWRlbC5hcHAudjJiZXRhQglPaWRjUHJvdG9QAVoyZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvcGtnL2dycGMvYXBwL3YyYmV0YTthcHCiAgNaQViqAhJaaXRhZGVsLkFwcC5WMmJldGHKAhJaaXRhZGVsXEFwcFxWMmJldGHiAh5aaXRhZGVsXEFwcFxWMmJldGFcR1BCTWV0YWRhdGHqAhRaaXRhZGVsOjpBcHA6OlYyYmV0YWIGcHJvdG8z", [file_zitadel_app_v2beta_login, file_protoc_gen_openapiv2_options_annotations, file_google_protobuf_duration]);

/**
 * Describes the message zitadel.app.v2beta.OIDCLocalizedMessage.
 * Use `create(OIDCLocalizedMessageSchema)` to create a new message.
 */
export const OIDCLocalizedMessageSchema = /*@__PURE__*/
  messageDesc(file_zitadel_app_v2beta_oidc, 0);

/**
 * Describes the message zitadel.app.v2beta.OIDCConfig.
 * Use `create(OIDCConfigSchema)` to create a new message.
 */
export const OIDCConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_app_v2beta_oidc, 1);

/**
 * Describes the enum zitadel.app.v2beta.OIDCResponseType.
 */
export const OIDCResponseTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 0);

/**
 * @generated from enum zitadel.app.v2beta.OIDCResponseType
 */
export const OIDCResponseType = /*@__PURE__*/
  tsEnum(OIDCResponseTypeSchema);

/**
 * Describes the enum zitadel.app.v2beta.OIDCGrantType.
 */
export const OIDCGrantTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 1);

/**
 * @generated from enum zitadel.app.v2beta.OIDCGrantType
 */
export const OIDCGrantType = /*@__PURE__*/
  tsEnum(OIDCGrantTypeSchema);

/**
 * Describes the enum zitadel.app.v2beta.OIDCAppType.
 */
export const OIDCAppTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 2);

/**
 * @generated from enum zitadel.app.v2beta.OIDCAppType
 */
export const OIDCAppType = /*@__PURE__*/
  tsEnum(OIDCAppTypeSchema);

/**
 * Describes the enum zitadel.app.v2beta.OIDCAuthMethodType.
 */
export const OIDCAuthMethodTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 3);

/**
 * @generated from enum zitadel.app.v2beta.OIDCAuthMethodType
 */
export const OIDCAuthMethodType = /*@__PURE__*/
  tsEnum(OIDCAuthMethodTypeSchema);

/**
 * Describes the enum zitadel.app.v2beta.OIDCVersion.
 */
export const OIDCVersionSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 4);

/**
 * @generated from enum zitadel.app.v2beta.OIDCVersion
 */
export const OIDCVersion = /*@__PURE__*/
  tsEnum(OIDCVersionSchema);

/**
 * Describes the enum zitadel.app.v2beta.OIDCTokenType.
 */
export const OIDCTokenTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_app_v2beta_oidc, 5);

/**
 * @generated from enum zitadel.app.v2beta.OIDCTokenType
 */
export const OIDCTokenType = /*@__PURE__*/
  tsEnum(OIDCTokenTypeSchema);

