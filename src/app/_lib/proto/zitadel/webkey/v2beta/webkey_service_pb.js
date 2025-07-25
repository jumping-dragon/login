// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/webkey/v2beta/webkey_service.proto (package zitadel.webkey.v2beta, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv2";
import { file_google_api_annotations } from "../../../google/api/annotations_pb.js";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import { file_validate_validate } from "../../../validate/validate_pb.js";
import { file_zitadel_protoc_gen_zitadel_v2_options } from "../../protoc_gen_zitadel/v2/options_pb.js";
import { file_zitadel_webkey_v2beta_key } from "./key_pb.js";

/**
 * Describes the file zitadel/webkey/v2beta/webkey_service.proto.
 */
export const file_zitadel_webkey_v2beta_webkey_service = /*@__PURE__*/
  fileDesc("Cip6aXRhZGVsL3dlYmtleS92MmJldGEvd2Via2V5X3NlcnZpY2UucHJvdG8SFXppdGFkZWwud2Via2V5LnYyYmV0YSLtAQoTQ3JlYXRlV2ViS2V5UmVxdWVzdBIpCgNyc2EYASABKAsyGi56aXRhZGVsLndlYmtleS52MmJldGEuUlNBSAASLQoFZWNkc2EYAiABKAsyHC56aXRhZGVsLndlYmtleS52MmJldGEuRUNEU0FIABIxCgdlZDI1NTE5GAMgASgLMh4ueml0YWRlbC53ZWJrZXkudjJiZXRhLkVEMjU1MTlIADpCkkE/Mj17InJzYSI6eyJiaXRzIjoiUlNBX0JJVFNfMjA0OCIsImhhc2hlciI6IlJTQV9IQVNIRVJfU0hBMjU2In19QgUKA2tleSKQAQoUQ3JlYXRlV2ViS2V5UmVzcG9uc2USJAoCaWQYASABKAlCGJJBFUoTIjY5NjI5MDEyOTA2NDg4MzM0IhJSCg1jcmVhdGlvbl9kYXRlGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIfkkEcShoiMjAyNC0xMi0xOFQwNzo1MDo0Ny40OTJaIiJRChVBY3RpdmF0ZVdlYktleVJlcXVlc3QSOAoCaWQYASABKAlCLJJBG0oTIjY5NjI5MDI2ODA2NDg5NDU1InjIAYABAeJBAQL6QgdyBRABGMgBImoKFkFjdGl2YXRlV2ViS2V5UmVzcG9uc2USUAoLY2hhbmdlX2RhdGUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQh+SQRxKGiIyMDI1LTAxLTIzVDEwOjM0OjE4LjA1MVoiIk8KE0RlbGV0ZVdlYktleVJlcXVlc3QSOAoCaWQYASABKAlCLJJBG0oTIjY5NjI5MDI2ODA2NDg5NDU1InjIAYABAeJBAQL6QgdyBRABGMgBImoKFERlbGV0ZVdlYktleVJlc3BvbnNlElIKDWRlbGV0aW9uX2RhdGUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQh+SQRxKGiIyMDI1LTAxLTIzVDEwOjM0OjE4LjA1MVoiIhQKEkxpc3RXZWJLZXlzUmVxdWVzdCKUAwoTTGlzdFdlYktleXNSZXNwb25zZRL8AgoId2ViX2tleXMYASADKAsyHS56aXRhZGVsLndlYmtleS52MmJldGEuV2ViS2V5QsoCkkHGAkrDAlt7ImlkIjoiNjk2MjkwMTI5MDY0ODgzMzQiLCJjcmVhdGlvbkRhdGUiOiIyMDI0LTEyLTE4VDA3OjUwOjQ3LjQ5MloiLCJjaGFuZ2VEYXRlIjoiMjAyNC0xMi0xOFQwODowNDo0Ny40OTJaIiwic3RhdGUiOiJTVEFURV9BQ1RJVkUiLCJyc2EiOnsiYml0cyI6IlJTQV9CSVRTXzIwNDgiLCJoYXNoZXIiOiJSU0FfSEFTSEVSX1NIQTI1NiJ9fSx7ImlkIjoiNjk2MjkwMTI5MDkzNDYyMDAiLCJjcmVhdGlvbkRhdGUiOiIyMDI1LTAxLTE4VDEyOjA1OjQ3LjQ5MloiLCJzdGF0ZSI6IlNUQVRFX0lOSVRJQUwiLCJlY2RzYSI6eyJjdXJ2ZSI6IkVDRFNBX0NVUlZFX1AyNTYifX1dMu8ICg1XZWJLZXlTZXJ2aWNlEv4BCgxDcmVhdGVXZWJLZXkSKi56aXRhZGVsLndlYmtleS52MmJldGEuQ3JlYXRlV2ViS2V5UmVxdWVzdBorLnppdGFkZWwud2Via2V5LnYyYmV0YS5DcmVhdGVXZWJLZXlSZXNwb25zZSKUAZJBXUomCgMyMDASHwodV2ViIGtleSBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5KMwoDNDAwEiwKKlRoZSBmZWF0dXJlIGZsYWcgYHdlYl9rZXlgIGlzIG5vdCBlbmFibGVkLoq1GBUKEwoRaWFtLndlYl9rZXkud3JpdGWC0+STAhU6ASoiEC92MmJldGEvd2ViX2tleXMSwgIKDkFjdGl2YXRlV2ViS2V5Eiwueml0YWRlbC53ZWJrZXkudjJiZXRhLkFjdGl2YXRlV2ViS2V5UmVxdWVzdBotLnppdGFkZWwud2Via2V5LnYyYmV0YS5BY3RpdmF0ZVdlYktleVJlc3BvbnNlItIBkkGPAUooCgMyMDASIQofV2ViIGtleSBhY3RpdmF0ZWQgc3VjY2Vzc2Z1bGx5LkozCgM0MDASLAoqVGhlIGZlYXR1cmUgZmxhZyBgd2ViX2tleWAgaXMgbm90IGVuYWJsZWQuSi4KAzQwNBInCiVUaGUgd2ViIGtleSB0byBhY3RpdmUgZG9lcyBub3QgZXhpc3QuirUYFQoTChFpYW0ud2ViX2tleS53cml0ZYLT5JMCICIeL3YyYmV0YS93ZWJfa2V5cy97aWR9L2FjdGl2YXRlEqUCCgxEZWxldGVXZWJLZXkSKi56aXRhZGVsLndlYmtleS52MmJldGEuRGVsZXRlV2ViS2V5UmVxdWVzdBorLnppdGFkZWwud2Via2V5LnYyYmV0YS5EZWxldGVXZWJLZXlSZXNwb25zZSK7AZJBgAFKJgoDMjAwEh8KHVdlYiBrZXkgZGVsZXRlZCBzdWNjZXNzZnVsbHkuSlYKAzQwMBJPCk1UaGUgZmVhdHVyZSBmbGFnIGB3ZWJfa2V5YCBpcyBub3QgZW5hYmxlZCBvciB0aGUgd2ViIGtleSBpcyBjdXJyZW50bHkgYWN0aXZlLoq1GBYKFAoSaWFtLndlYl9rZXkuZGVsZXRlgtPkkwIXKhUvdjJiZXRhL3dlYl9rZXlzL3tpZH0S7wEKC0xpc3RXZWJLZXlzEikueml0YWRlbC53ZWJrZXkudjJiZXRhLkxpc3RXZWJLZXlzUmVxdWVzdBoqLnppdGFkZWwud2Via2V5LnYyYmV0YS5MaXN0V2ViS2V5c1Jlc3BvbnNlIogBkkFVSh4KAzIwMBIXChVMaXN0IG9mIGFsbCB3ZWIga2V5cy5KMwoDNDAwEiwKKlRoZSBmZWF0dXJlIGZsYWcgYHdlYl9rZXlgIGlzIG5vdCBlbmFibGVkLoq1GBQKEgoQaWFtLndlYl9rZXkucmVhZILT5JMCEhIQL3YyYmV0YS93ZWJfa2V5c0K8CwoZY29tLnppdGFkZWwud2Via2V5LnYyYmV0YUISV2Via2V5U2VydmljZVByb3RvUAFaOGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3dlYmtleS92MmJldGE7d2Via2V5ogIDWldYqgIVWml0YWRlbC5XZWJrZXkuVjJiZXRhygIVWml0YWRlbFxXZWJrZXlcVjJiZXRh4gIhWml0YWRlbFxXZWJrZXlcVjJiZXRhXEdQQk1ldGFkYXRh6gIXWml0YWRlbDo6V2Via2V5OjpWMmJldGGSQdkJErcECg9XZWIga2V5IFNlcnZpY2USoANUaGlzIEFQSSBpcyBpbnRlbmRlZCB0byBtYW5hZ2Ugd2ViIGtleXMgZm9yIGEgWklUQURFTCBpbnN0YW5jZSwgdXNlZCB0byBzaWduIGFuZCB2YWxpZGF0ZSBPSURDIHRva2Vucy4gVGhpcyBzZXJ2aWNlIGlzIGluIGJldGEgc3RhdGUuIEl0IGNhbiBBTkQgd2lsbCBjb250aW51ZSBicmVha2luZyB1bnRpbCBhIHN0YWJsZSB2ZXJzaW9uIGlzIHJlbGVhc2VkLgoKVGhlIHB1YmxpYyBrZXkgZW5kcG9pbnQgKG91dHNpZGUgb2YgdGhpcyBzZXJ2aWNlKSBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBwdWJsaWMga2V5cyBvZiB0aGUgYWN0aXZlIGFuZCBpbmFjdGl2ZSBrZXlzLgoKUGxlYXNlIG1ha2Ugc3VyZSB0byBlbmFibGUgdGhlIGB3ZWJfa2V5YCBmZWF0dXJlIGZsYWcgb24geW91ciBpbnN0YW5jZSB0byB1c2UgdGhpcyBzZXJ2aWNlLiIuCgdaSVRBREVMEhNodHRwczovL3ppdGFkZWwuY29tGg5oaUB6aXRhZGVsLmNvbSpHCgpBcGFjaGUgMi4wEjlodHRwczovL2dpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL2Jsb2IvbWFpbi9MSUNFTlNJTkcubWQyCDIuMC1iZXRhGg4kQ1VTVE9NLURPTUFJTiIBLyoCAgEyEGFwcGxpY2F0aW9uL2pzb24yEGFwcGxpY2F0aW9uL2dycGMyGmFwcGxpY2F0aW9uL2dycGMtd2ViK3Byb3RvOhBhcHBsaWNhdGlvbi9qc29uOhBhcHBsaWNhdGlvbi9ncnBjOhphcHBsaWNhdGlvbi9ncnBjLXdlYitwcm90b1JtCgM0MDMSZgpHUmV0dXJuZWQgd2hlbiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIHRoZSByZXNvdXJjZS4SGwoZGhcjL2RlZmluaXRpb25zL3JwY1N0YXR1c1JQCgM0MDQSSQoqUmV0dXJuZWQgd2hlbiB0aGUgcmVzb3VyY2UgZG9lcyBub3QgZXhpc3QuEhsKGRoXIy9kZWZpbml0aW9ucy9ycGNTdGF0dXNawgEKvwEKBk9BdXRoMhK0AQgDKAQyISRDVVNUT00tRE9NQUlOL29hdXRoL3YyL2F1dGhvcml6ZTodJENVU1RPTS1ET01BSU4vb2F1dGgvdjIvdG9rZW5CbAoQCgZvcGVuaWQSBm9wZW5pZApYCip1cm46eml0YWRlbDppYW06b3JnOnByb2plY3Q6aWQ6eml0YWRlbDphdWQSKnVybjp6aXRhZGVsOmlhbTpvcmc6cHJvamVjdDppZDp6aXRhZGVsOmF1ZGJACj4KBk9BdXRoMhI0CgZvcGVuaWQKKnVybjp6aXRhZGVsOmlhbTpvcmc6cHJvamVjdDppZDp6aXRhZGVsOmF1ZHI+CiJEZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCBaSVRBREVMEhhodHRwczovL3ppdGFkZWwuY29tL2RvY3NiBnByb3RvMw", [file_google_api_annotations, file_google_api_field_behavior, file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_zitadel_protoc_gen_zitadel_v2_options, file_zitadel_webkey_v2beta_key]);

/**
 * Describes the message zitadel.webkey.v2beta.CreateWebKeyRequest.
 * Use `create(CreateWebKeyRequestSchema)` to create a new message.
 */
export const CreateWebKeyRequestSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 0);

/**
 * Describes the message zitadel.webkey.v2beta.CreateWebKeyResponse.
 * Use `create(CreateWebKeyResponseSchema)` to create a new message.
 */
export const CreateWebKeyResponseSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 1);

/**
 * Describes the message zitadel.webkey.v2beta.ActivateWebKeyRequest.
 * Use `create(ActivateWebKeyRequestSchema)` to create a new message.
 */
export const ActivateWebKeyRequestSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 2);

/**
 * Describes the message zitadel.webkey.v2beta.ActivateWebKeyResponse.
 * Use `create(ActivateWebKeyResponseSchema)` to create a new message.
 */
export const ActivateWebKeyResponseSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 3);

/**
 * Describes the message zitadel.webkey.v2beta.DeleteWebKeyRequest.
 * Use `create(DeleteWebKeyRequestSchema)` to create a new message.
 */
export const DeleteWebKeyRequestSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 4);

/**
 * Describes the message zitadel.webkey.v2beta.DeleteWebKeyResponse.
 * Use `create(DeleteWebKeyResponseSchema)` to create a new message.
 */
export const DeleteWebKeyResponseSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 5);

/**
 * Describes the message zitadel.webkey.v2beta.ListWebKeysRequest.
 * Use `create(ListWebKeysRequestSchema)` to create a new message.
 */
export const ListWebKeysRequestSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 6);

/**
 * Describes the message zitadel.webkey.v2beta.ListWebKeysResponse.
 * Use `create(ListWebKeysResponseSchema)` to create a new message.
 */
export const ListWebKeysResponseSchema = /*@__PURE__*/
  messageDesc(file_zitadel_webkey_v2beta_webkey_service, 7);

/**
 * Service to manage web keys for OIDC token signing and validation.
 * The service provides methods to create, activate, delete and list web keys.
 * The public key endpoint (outside of this service) is used to retrieve the public keys of the active and inactive keys.
 *
 * Please make sure to enable the `web_key` feature flag on your instance to use this service.
 *
 * @generated from service zitadel.webkey.v2beta.WebKeyService
 */
export const WebKeyService = /*@__PURE__*/
  serviceDesc(file_zitadel_webkey_v2beta_webkey_service, 0);

