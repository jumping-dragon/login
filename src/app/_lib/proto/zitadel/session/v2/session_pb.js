// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/session/v2/session.proto (package zitadel.session.v2, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_zitadel_object } from "../../object_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import { file_validate_validate } from "../../../validate/validate_pb.js";

/**
 * Describes the file zitadel/session/v2/session.proto.
 */
export const file_zitadel_session_v2_session = /*@__PURE__*/
  fileDesc("CiB6aXRhZGVsL3Nlc3Npb24vdjIvc2Vzc2lvbi5wcm90bxISeml0YWRlbC5zZXNzaW9uLnYyIt0FCgdTZXNzaW9uEiQKAmlkGAEgASgJQhiSQRUyEyJpZCBvZiB0aGUgc2Vzc2lvbiISWwoNY3JlYXRpb25fZGF0ZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCKJJBJTIjInRpbWUgd2hlbiB0aGUgc2Vzc2lvbiB3YXMgY3JlYXRlZCISXgoLY2hhbmdlX2RhdGUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQi2SQSoyKCJ0aW1lIHdoZW4gdGhlIHNlc3Npb24gd2FzIGxhc3QgdXBkYXRlZCISMAoIc2VxdWVuY2UYBCABKARCHpJBGzIZInNlcXVlbmNlIG9mIHRoZSBzZXNzaW9uIhJ1CgdmYWN0b3JzGAUgASgLMhsueml0YWRlbC5zZXNzaW9uLnYyLkZhY3RvcnNCR5JBRDJCImNoZWNrZWQgZmFjdG9ycyBvZiB0aGUgc2Vzc2lvbiwgZS5nLiB0aGUgdXNlciwgcGFzc3dvcmQgYW5kIG1vcmUiElkKCG1ldGFkYXRhGAYgAygLMikueml0YWRlbC5zZXNzaW9uLnYyLlNlc3Npb24uTWV0YWRhdGFFbnRyeUIckkEZMhciY3VzdG9tIGtleSB2YWx1ZSBsaXN0IhIxCgp1c2VyX2FnZW50GAcgASgLMh0ueml0YWRlbC5zZXNzaW9uLnYyLlVzZXJBZ2VudBJzCg9leHBpcmF0aW9uX2RhdGUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQjmSQTYyNCJ0aW1lIHRoZSBzZXNzaW9uIHdpbGwgYmUgYXV0b21hdGljYWxseSBpbnZhbGlkYXRlZCJIAIgBARovCg1NZXRhZGF0YUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAFCEgoQX2V4cGlyYXRpb25fZGF0ZSLnAgoHRmFjdG9ycxIsCgR1c2VyGAEgASgLMh4ueml0YWRlbC5zZXNzaW9uLnYyLlVzZXJGYWN0b3ISNAoIcGFzc3dvcmQYAiABKAsyIi56aXRhZGVsLnNlc3Npb24udjIuUGFzc3dvcmRGYWN0b3ISNgoKd2ViX2F1dGhfbhgDIAEoCzIiLnppdGFkZWwuc2Vzc2lvbi52Mi5XZWJBdXRoTkZhY3RvchIwCgZpbnRlbnQYBCABKAsyIC56aXRhZGVsLnNlc3Npb24udjIuSW50ZW50RmFjdG9yEiwKBHRvdHAYBSABKAsyHi56aXRhZGVsLnNlc3Npb24udjIuVE9UUEZhY3RvchIuCgdvdHBfc21zGAYgASgLMh0ueml0YWRlbC5zZXNzaW9uLnYyLk9UUEZhY3RvchIwCglvdHBfZW1haWwYByABKAsyHS56aXRhZGVsLnNlc3Npb24udjIuT1RQRmFjdG9yIuoCCgpVc2VyRmFjdG9yElsKC3ZlcmlmaWVkX2F0GAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIqkkEnMiUidGltZSB3aGVuIHRoZSB1c2VyIHdhcyBsYXN0IGNoZWNrZWQiEikKAmlkGAIgASgJQh2SQRoyGCJpZCBvZiB0aGUgY2hlY2tlZCB1c2VyIhI5Cgpsb2dpbl9uYW1lGAMgASgJQiWSQSIyICJsb2dpbiBuYW1lIG9mIHRoZSBjaGVja2VkIHVzZXIiEj0KDGRpc3BsYXlfbmFtZRgEIAEoCUInkkEkMiIiZGlzcGxheSBuYW1lIG9mIHRoZSBjaGVja2VkIHVzZXIiEkMKD29yZ2FuaXphdGlvbl9pZBgGIAEoCUIqkkEnMiUib3JnYW5pemF0aW9uIGlkIG9mIHRoZSBjaGVja2VkIHVzZXIiSgQIBRAGUg9vcmdhbmlzYXRpb25faWQicQoOUGFzc3dvcmRGYWN0b3ISXwoLdmVyaWZpZWRfYXQYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQi6SQSsyKSJ0aW1lIHdoZW4gdGhlIHBhc3N3b3JkIHdhcyBsYXN0IGNoZWNrZWQiImwKDEludGVudEZhY3RvchJcCgt2ZXJpZmllZF9hdBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCK5JBKDImInRpbWUgd2hlbiBhbiBpbnRlbnQgd2FzIGxhc3QgY2hlY2tlZCIikQEKDldlYkF1dGhORmFjdG9yEmgKC3ZlcmlmaWVkX2F0GAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEI3kkE0MjIidGltZSB3aGVuIHRoZSBwYXNza2V5IGNoYWxsZW5nZSB3YXMgbGFzdCBjaGVja2VkIhIVCg11c2VyX3ZlcmlmaWVkGAIgASgIIoEBCgpUT1RQRmFjdG9yEnMKC3ZlcmlmaWVkX2F0GAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEJCkkE/Mj0idGltZSB3aGVuIHRoZSBUaW1lLWJhc2VkIE9uZS1UaW1lIFBhc3N3b3JkIHdhcyBsYXN0IGNoZWNrZWQiInUKCU9UUEZhY3RvchJoCgt2ZXJpZmllZF9hdBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCN5JBNDIyInRpbWUgd2hlbiB0aGUgT25lLVRpbWUgUGFzc3dvcmQgd2FzIGxhc3QgY2hlY2tlZCIiyQIKC1NlYXJjaFF1ZXJ5EjEKCWlkc19xdWVyeRgBIAEoCzIcLnppdGFkZWwuc2Vzc2lvbi52Mi5JRHNRdWVyeUgAEjgKDXVzZXJfaWRfcXVlcnkYAiABKAsyHy56aXRhZGVsLnNlc3Npb24udjIuVXNlcklEUXVlcnlIABJEChNjcmVhdGlvbl9kYXRlX3F1ZXJ5GAMgASgLMiUueml0YWRlbC5zZXNzaW9uLnYyLkNyZWF0aW9uRGF0ZVF1ZXJ5SAASOQoNY3JlYXRvcl9xdWVyeRgEIAEoCzIgLnppdGFkZWwuc2Vzc2lvbi52Mi5DcmVhdG9yUXVlcnlIABI+ChB1c2VyX2FnZW50X3F1ZXJ5GAUgASgLMiIueml0YWRlbC5zZXNzaW9uLnYyLlVzZXJBZ2VudFF1ZXJ5SABCDAoFcXVlcnkSA/hCASIXCghJRHNRdWVyeRILCgNpZHMYASADKAkiGQoLVXNlcklEUXVlcnkSCgoCaWQYASABKAkiuAEKEUNyZWF0aW9uRGF0ZVF1ZXJ5EjEKDWNyZWF0aW9uX2RhdGUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEnAKBm1ldGhvZBgCIAEoDjIgLnppdGFkZWwudjEuVGltZXN0YW1wUXVlcnlNZXRob2RCPpJBMzIxZGVmaW5lcyB3aGljaCB0aW1lc3RhbXAgY29tcGFyaXNvbiBtZXRob2QgaXMgdXNlZPpCBYIBAhABIksKDENyZWF0b3JRdWVyeRI0CgJpZBgBIAEoCUIjkkEYShMiNjk2MjkwMjM5MDY0ODgzMzQieMgB+kIFcgMYyAFIAIgBAUIFCgNfaWQiZQoOVXNlckFnZW50UXVlcnkSQAoOZmluZ2VycHJpbnRfaWQYASABKAlCI5JBGEoTIjY5NjI5MDIzOTA2NDg4MzM0InjIAfpCBXIDGMgBSACIAQFCEQoPX2ZpbmdlcnByaW50X2lkIrMCCglVc2VyQWdlbnQSGwoOZmluZ2VycHJpbnRfaWQYASABKAlIAIgBARIPCgJpcBgCIAEoCUgBiAEBEhgKC2Rlc2NyaXB0aW9uGAMgASgJSAKIAQESOQoGaGVhZGVyGAQgAygLMikueml0YWRlbC5zZXNzaW9uLnYyLlVzZXJBZ2VudC5IZWFkZXJFbnRyeRoeCgxIZWFkZXJWYWx1ZXMSDgoGdmFsdWVzGAEgAygJGlkKC0hlYWRlckVudHJ5EgsKA2tleRgBIAEoCRI5CgV2YWx1ZRgCIAEoCzIqLnppdGFkZWwuc2Vzc2lvbi52Mi5Vc2VyQWdlbnQuSGVhZGVyVmFsdWVzOgI4AUIRCg9fZmluZ2VycHJpbnRfaWRCBQoDX2lwQg4KDF9kZXNjcmlwdGlvbipcChBTZXNzaW9uRmllbGROYW1lEiIKHlNFU1NJT05fRklFTERfTkFNRV9VTlNQRUNJRklFRBAAEiQKIFNFU1NJT05fRklFTERfTkFNRV9DUkVBVElPTl9EQVRFEAFCyAEKFmNvbS56aXRhZGVsLnNlc3Npb24udjJCDFNlc3Npb25Qcm90b1ABWjZnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9zZXNzaW9uL3YyO3Nlc3Npb26iAgNaU1iqAhJaaXRhZGVsLlNlc3Npb24uVjLKAhJaaXRhZGVsXFNlc3Npb25cVjLiAh5aaXRhZGVsXFNlc3Npb25cVjJcR1BCTWV0YWRhdGHqAhRaaXRhZGVsOjpTZXNzaW9uOjpWMmIGcHJvdG8z", [file_zitadel_object, file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations, file_validate_validate]);

/**
 * Describes the message zitadel.session.v2.Session.
 * Use `create(SessionSchema)` to create a new message.
 */
export const SessionSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 0);

/**
 * Describes the message zitadel.session.v2.Factors.
 * Use `create(FactorsSchema)` to create a new message.
 */
export const FactorsSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 1);

/**
 * Describes the message zitadel.session.v2.UserFactor.
 * Use `create(UserFactorSchema)` to create a new message.
 */
export const UserFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 2);

/**
 * Describes the message zitadel.session.v2.PasswordFactor.
 * Use `create(PasswordFactorSchema)` to create a new message.
 */
export const PasswordFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 3);

/**
 * Describes the message zitadel.session.v2.IntentFactor.
 * Use `create(IntentFactorSchema)` to create a new message.
 */
export const IntentFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 4);

/**
 * Describes the message zitadel.session.v2.WebAuthNFactor.
 * Use `create(WebAuthNFactorSchema)` to create a new message.
 */
export const WebAuthNFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 5);

/**
 * Describes the message zitadel.session.v2.TOTPFactor.
 * Use `create(TOTPFactorSchema)` to create a new message.
 */
export const TOTPFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 6);

/**
 * Describes the message zitadel.session.v2.OTPFactor.
 * Use `create(OTPFactorSchema)` to create a new message.
 */
export const OTPFactorSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 7);

/**
 * Describes the message zitadel.session.v2.SearchQuery.
 * Use `create(SearchQuerySchema)` to create a new message.
 */
export const SearchQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 8);

/**
 * Describes the message zitadel.session.v2.IDsQuery.
 * Use `create(IDsQuerySchema)` to create a new message.
 */
export const IDsQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 9);

/**
 * Describes the message zitadel.session.v2.UserIDQuery.
 * Use `create(UserIDQuerySchema)` to create a new message.
 */
export const UserIDQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 10);

/**
 * Describes the message zitadel.session.v2.CreationDateQuery.
 * Use `create(CreationDateQuerySchema)` to create a new message.
 */
export const CreationDateQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 11);

/**
 * Describes the message zitadel.session.v2.CreatorQuery.
 * Use `create(CreatorQuerySchema)` to create a new message.
 */
export const CreatorQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 12);

/**
 * Describes the message zitadel.session.v2.UserAgentQuery.
 * Use `create(UserAgentQuerySchema)` to create a new message.
 */
export const UserAgentQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 13);

/**
 * Describes the message zitadel.session.v2.UserAgent.
 * Use `create(UserAgentSchema)` to create a new message.
 */
export const UserAgentSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 14);

/**
 * Describes the message zitadel.session.v2.UserAgent.HeaderValues.
 * Use `create(UserAgent_HeaderValuesSchema)` to create a new message.
 */
export const UserAgent_HeaderValuesSchema = /*@__PURE__*/
  messageDesc(file_zitadel_session_v2_session, 14, 0);

/**
 * Describes the enum zitadel.session.v2.SessionFieldName.
 */
export const SessionFieldNameSchema = /*@__PURE__*/
  enumDesc(file_zitadel_session_v2_session, 0);

/**
 * @generated from enum zitadel.session.v2.SessionFieldName
 */
export const SessionFieldName = /*@__PURE__*/
  tsEnum(SessionFieldNameSchema);

