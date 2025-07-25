// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/idp/v2/idp.proto (package zitadel.idp.v2, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_zitadel_protoc_gen_zitadel_v2_options } from "../../protoc_gen_zitadel/v2/options_pb.js";
import { file_zitadel_object_v2_object } from "../../object/v2/object_pb.js";
import { file_google_api_annotations } from "../../../google/api/annotations_pb.js";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb.js";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import { file_validate_validate } from "../../../validate/validate_pb.js";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file zitadel/idp/v2/idp.proto.
 */
export const file_zitadel_idp_v2_idp = /*@__PURE__*/
  fileDesc("Chh6aXRhZGVsL2lkcC92Mi9pZHAucHJvdG8SDnppdGFkZWwuaWRwLnYyIvABCgNJRFASJAoCaWQYASABKAlCGJJBFUoTIjY5NjI5MDIzOTA2NDg4MzM0IhIrCgdkZXRhaWxzGAIgASgLMhoueml0YWRlbC5vYmplY3QudjIuRGV0YWlscxInCgVzdGF0ZRgDIAEoDjIYLnppdGFkZWwuaWRwLnYyLklEUFN0YXRlEhsKBG5hbWUYBCABKAlCDZJBCkoIIkdvb2dsZSISJQoEdHlwZRgFIAEoDjIXLnppdGFkZWwuaWRwLnYyLklEUFR5cGUSKQoGY29uZmlnGAYgASgLMhkueml0YWRlbC5pZHAudjIuSURQQ29uZmlnIpwFCglJRFBDb25maWcSKAoHb3B0aW9ucxgBIAEoCzIXLnppdGFkZWwuaWRwLnYyLk9wdGlvbnMSKgoEbGRhcBgCIAEoCzIaLnppdGFkZWwuaWRwLnYyLkxEQVBDb25maWdIABIuCgZnb29nbGUYAyABKAsyHC56aXRhZGVsLmlkcC52Mi5Hb29nbGVDb25maWdIABIsCgVvYXV0aBgEIAEoCzIbLnppdGFkZWwuaWRwLnYyLk9BdXRoQ29uZmlnSAASMQoEb2lkYxgFIAEoCzIhLnppdGFkZWwuaWRwLnYyLkdlbmVyaWNPSURDQ29uZmlnSAASKAoDand0GAYgASgLMhkueml0YWRlbC5pZHAudjIuSldUQ29uZmlnSAASLgoGZ2l0aHViGAcgASgLMhwueml0YWRlbC5pZHAudjIuR2l0SHViQ29uZmlnSAASQQoJZ2l0aHViX2VzGAggASgLMiwueml0YWRlbC5pZHAudjIuR2l0SHViRW50ZXJwcmlzZVNlcnZlckNvbmZpZ0gAEi4KBmdpdGxhYhgJIAEoCzIcLnppdGFkZWwuaWRwLnYyLkdpdExhYkNvbmZpZ0gAEkQKEmdpdGxhYl9zZWxmX2hvc3RlZBgKIAEoCzImLnppdGFkZWwuaWRwLnYyLkdpdExhYlNlbGZIb3N0ZWRDb25maWdIABIxCghhenVyZV9hZBgLIAEoCzIdLnppdGFkZWwuaWRwLnYyLkF6dXJlQURDb25maWdIABIsCgVhcHBsZRgMIAEoCzIbLnppdGFkZWwuaWRwLnYyLkFwcGxlQ29uZmlnSAASKgoEc2FtbBgNIAEoCzIaLnppdGFkZWwuaWRwLnYyLlNBTUxDb25maWdIAEIICgZjb25maWciiwIKCUpXVENvbmZpZxJCCgxqd3RfZW5kcG9pbnQYASABKAlCLJJBH0odImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSL6QgdyBRABGMgBEjwKBmlzc3VlchgCIAEoCUIskkEfSh0iaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIvpCB3IFEAEYyAESSAoNa2V5c19lbmRwb2ludBgDIAEoCUIxkkEkSiIiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2tleXMi+kIHcgUQARjIARIyCgtoZWFkZXJfbmFtZRgEIAEoCUIdkkEQSg4ieC1hdXRoLXRva2VuIvpCB3IFEAEYyAEi9gIKC09BdXRoQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhJTChZhdXRob3JpemF0aW9uX2VuZHBvaW50GAIgASgJQjOSQTBKLiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aCISQgoOdG9rZW5fZW5kcG9pbnQYAyABKAlCKpJBJ0olImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIhJOCg11c2VyX2VuZHBvaW50GAQgASgJQjeSQTRKMiJodHRwczovL29wZW5pZGNvbm5lY3QuZ29vZ2xlYXBpcy5jb20vdjEvdXNlcmluZm8iEjMKBnNjb3BlcxgFIAMoCUIjkkEgSh5bIm9wZW5pZCIsICJwcm9maWxlIiwgImVtYWlsIl0SJAoMaWRfYXR0cmlidXRlGAYgASgJQg6SQQtKCSJ1c2VyX2lkIiLKAQoRR2VuZXJpY09JRENDb25maWcSMwoGaXNzdWVyGAEgASgJQiOSQSBKHiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vIhIjCgljbGllbnRfaWQYAiABKAlCEJJBDUoLImNsaWVudC1pZCISMwoGc2NvcGVzGAMgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXRImChNpc19pZF90b2tlbl9tYXBwaW5nGAQgASgIQgmSQQZKBHRydWUiaAoMR2l0SHViQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIzCgZzY29wZXMYAiADKAlCI5JBIEoeWyJvcGVuaWQiLCAicHJvZmlsZSIsICJlbWFpbCJdIscBChxHaXRIdWJFbnRlcnByaXNlU2VydmVyQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIeChZhdXRob3JpemF0aW9uX2VuZHBvaW50GAIgASgJEhYKDnRva2VuX2VuZHBvaW50GAMgASgJEhUKDXVzZXJfZW5kcG9pbnQYBCABKAkSMwoGc2NvcGVzGAUgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXSJoCgxHb29nbGVDb25maWcSIwoJY2xpZW50X2lkGAEgASgJQhCSQQ1KCyJjbGllbnQtaWQiEjMKBnNjb3BlcxgCIAMoCUIjkkEgSh5bIm9wZW5pZCIsICJwcm9maWxlIiwgImVtYWlsIl0iaAoMR2l0TGFiQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIzCgZzY29wZXMYAiADKAlCI5JBIEoeWyJvcGVuaWQiLCAicHJvZmlsZSIsICJlbWFpbCJdIoIBChZHaXRMYWJTZWxmSG9zdGVkQ29uZmlnEg4KBmlzc3VlchgBIAEoCRIjCgljbGllbnRfaWQYAiABKAlCEJJBDUoLImNsaWVudC1pZCISMwoGc2NvcGVzGAMgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXSKJAgoKTERBUENvbmZpZxIPCgdzZXJ2ZXJzGAEgAygJEhEKCXN0YXJ0X3RscxgCIAEoCBIPCgdiYXNlX2RuGAMgASgJEg8KB2JpbmRfZG4YBCABKAkSEQoJdXNlcl9iYXNlGAUgASgJEhsKE3VzZXJfb2JqZWN0X2NsYXNzZXMYBiADKAkSFAoMdXNlcl9maWx0ZXJzGAcgAygJEioKB3RpbWVvdXQYCCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SMgoKYXR0cmlidXRlcxgJIAEoCzIeLnppdGFkZWwuaWRwLnYyLkxEQVBBdHRyaWJ1dGVzEg8KB3Jvb3RfY2EYCiABKAwivwIKClNBTUxDb25maWcSFAoMbWV0YWRhdGFfeG1sGAEgASgMEiwKB2JpbmRpbmcYAiABKA4yGy56aXRhZGVsLmlkcC52Mi5TQU1MQmluZGluZxIbChN3aXRoX3NpZ25lZF9yZXF1ZXN0GAMgASgIEjgKDm5hbWVfaWRfZm9ybWF0GAQgASgOMiAueml0YWRlbC5pZHAudjIuU0FNTE5hbWVJREZvcm1hdBItCiB0cmFuc2llbnRfbWFwcGluZ19hdHRyaWJ1dGVfbmFtZRgFIAEoCUgAiAEBEiUKGGZlZGVyYXRlZF9sb2dvdXRfZW5hYmxlZBgGIAEoCEgBiAEBQiMKIV90cmFuc2llbnRfbWFwcGluZ19hdHRyaWJ1dGVfbmFtZUIbChlfZmVkZXJhdGVkX2xvZ291dF9lbmFibGVkIr0BCg1BenVyZUFEQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhItCgZ0ZW5hbnQYAiABKAsyHS56aXRhZGVsLmlkcC52Mi5BenVyZUFEVGVuYW50EhYKDmVtYWlsX3ZlcmlmaWVkGAMgASgIEkAKBnNjb3BlcxgEIAMoCUIwkkEtSitbIm9wZW5pZCIsICJwcm9maWxlIiwgImVtYWlsIiwgIlVzZXIuUmVhZCJdIq0BCgdPcHRpb25zEhoKEmlzX2xpbmtpbmdfYWxsb3dlZBgBIAEoCBIbChNpc19jcmVhdGlvbl9hbGxvd2VkGAIgASgIEhgKEGlzX2F1dG9fY3JlYXRpb24YAyABKAgSFgoOaXNfYXV0b191cGRhdGUYBCABKAgSNwoMYXV0b19saW5raW5nGAUgASgOMiEueml0YWRlbC5pZHAudjIuQXV0b0xpbmtpbmdPcHRpb24irAQKDkxEQVBBdHRyaWJ1dGVzEh4KDGlkX2F0dHJpYnV0ZRgBIAEoCUII+kIFcgMYyAESJgoUZmlyc3RfbmFtZV9hdHRyaWJ1dGUYAiABKAlCCPpCBXIDGMgBEiUKE2xhc3RfbmFtZV9hdHRyaWJ1dGUYAyABKAlCCPpCBXIDGMgBEigKFmRpc3BsYXlfbmFtZV9hdHRyaWJ1dGUYBCABKAlCCPpCBXIDGMgBEiUKE25pY2tfbmFtZV9hdHRyaWJ1dGUYBSABKAlCCPpCBXIDGMgBEi4KHHByZWZlcnJlZF91c2VybmFtZV9hdHRyaWJ1dGUYBiABKAlCCPpCBXIDGMgBEiEKD2VtYWlsX2F0dHJpYnV0ZRgHIAEoCUII+kIFcgMYyAESKgoYZW1haWxfdmVyaWZpZWRfYXR0cmlidXRlGAggASgJQgj6QgVyAxjIARIhCg9waG9uZV9hdHRyaWJ1dGUYCSABKAlCCPpCBXIDGMgBEioKGHBob25lX3ZlcmlmaWVkX2F0dHJpYnV0ZRgKIAEoCUII+kIFcgMYyAESLgoccHJlZmVycmVkX2xhbmd1YWdlX2F0dHJpYnV0ZRgLIAEoCUII+kIFcgMYyAESJgoUYXZhdGFyX3VybF9hdHRyaWJ1dGUYDCABKAlCCPpCBXIDGMgBEiMKEXByb2ZpbGVfYXR0cmlidXRlGA0gASgJQgj6QgVyAxjIARIPCgdyb290X2NhGA4gASgJImYKDUF6dXJlQURUZW5hbnQSOAoLdGVuYW50X3R5cGUYASABKA4yIS56aXRhZGVsLmlkcC52Mi5BenVyZUFEVGVuYW50VHlwZUgAEhMKCXRlbmFudF9pZBgCIAEoCUgAQgYKBHR5cGUipAEKC0FwcGxlQ29uZmlnEicKCWNsaWVudF9pZBgBIAEoCUIUkkERSg8iY29tLmNsaWVudC5pZCISIgoHdGVhbV9pZBgCIAEoCUIRkkEOSgwiQUxUMDNKVjNPUyISIAoGa2V5X2lkGAMgASgJQhCSQQ1KCyJPR0tESzI1S0QiEiYKBnNjb3BlcxgEIAMoCUIWkkETShFbIm5hbWUiLCAiZW1haWwiXSqCAQoISURQU3RhdGUSGQoVSURQX1NUQVRFX1VOU1BFQ0lGSUVEEAASFAoQSURQX1NUQVRFX0FDVElWRRABEhYKEklEUF9TVEFURV9JTkFDVElWRRACEhUKEUlEUF9TVEFURV9SRU1PVkVEEAMSFgoSSURQX1NUQVRFX01JR1JBVEVEEAQqpQIKB0lEUFR5cGUSGAoUSURQX1RZUEVfVU5TUEVDSUZJRUQQABIRCg1JRFBfVFlQRV9PSURDEAESEAoMSURQX1RZUEVfSldUEAISEQoNSURQX1RZUEVfTERBUBADEhIKDklEUF9UWVBFX09BVVRIEAQSFQoRSURQX1RZUEVfQVpVUkVfQUQQBRITCg9JRFBfVFlQRV9HSVRIVUIQBhIWChJJRFBfVFlQRV9HSVRIVUJfRVMQBxITCg9JRFBfVFlQRV9HSVRMQUIQCBIfChtJRFBfVFlQRV9HSVRMQUJfU0VMRl9IT1NURUQQCRITCg9JRFBfVFlQRV9HT09HTEUQChISCg5JRFBfVFlQRV9BUFBMRRALEhEKDUlEUF9UWVBFX1NBTUwQDCp4CgtTQU1MQmluZGluZxIcChhTQU1MX0JJTkRJTkdfVU5TUEVDSUZJRUQQABIVChFTQU1MX0JJTkRJTkdfUE9TVBABEhkKFVNBTUxfQklORElOR19SRURJUkVDVBACEhkKFVNBTUxfQklORElOR19BUlRJRkFDVBADKqUBChBTQU1MTmFtZUlERm9ybWF0EiMKH1NBTUxfTkFNRV9JRF9GT1JNQVRfVU5TUEVDSUZJRUQQABIlCiFTQU1MX05BTUVfSURfRk9STUFUX0VNQUlMX0FERFJFU1MQARIiCh5TQU1MX05BTUVfSURfRk9STUFUX1BFUlNJU1RFTlQQAhIhCh1TQU1MX05BTUVfSURfRk9STUFUX1RSQU5TSUVOVBADKnkKEUF1dG9MaW5raW5nT3B0aW9uEiMKH0FVVE9fTElOS0lOR19PUFRJT05fVU5TUEVDSUZJRUQQABIgChxBVVRPX0xJTktJTkdfT1BUSU9OX1VTRVJOQU1FEAESHQoZQVVUT19MSU5LSU5HX09QVElPTl9FTUFJTBACKoABChFBenVyZUFEVGVuYW50VHlwZRIfChtBWlVSRV9BRF9URU5BTlRfVFlQRV9DT01NT04QABImCiJBWlVSRV9BRF9URU5BTlRfVFlQRV9PUkdBTklTQVRJT05TEAESIgoeQVpVUkVfQURfVEVOQU5UX1RZUEVfQ09OU1VNRVJTEAJCqAEKEmNvbS56aXRhZGVsLmlkcC52MkIISWRwUHJvdG9QAVouZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvcGtnL2dycGMvaWRwL3YyO2lkcKICA1pJWKoCDlppdGFkZWwuSWRwLlYyygIOWml0YWRlbFxJZHBcVjLiAhpaaXRhZGVsXElkcFxWMlxHUEJNZXRhZGF0YeoCEFppdGFkZWw6OklkcDo6VjJiBnByb3RvMw", [file_zitadel_protoc_gen_zitadel_v2_options, file_zitadel_object_v2_object, file_google_api_annotations, file_google_api_field_behavior, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_google_protobuf_duration]);

/**
 * Describes the message zitadel.idp.v2.IDP.
 * Use `create(IDPSchema)` to create a new message.
 */
export const IDPSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 0);

/**
 * Describes the message zitadel.idp.v2.IDPConfig.
 * Use `create(IDPConfigSchema)` to create a new message.
 */
export const IDPConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 1);

/**
 * Describes the message zitadel.idp.v2.JWTConfig.
 * Use `create(JWTConfigSchema)` to create a new message.
 */
export const JWTConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 2);

/**
 * Describes the message zitadel.idp.v2.OAuthConfig.
 * Use `create(OAuthConfigSchema)` to create a new message.
 */
export const OAuthConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 3);

/**
 * Describes the message zitadel.idp.v2.GenericOIDCConfig.
 * Use `create(GenericOIDCConfigSchema)` to create a new message.
 */
export const GenericOIDCConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 4);

/**
 * Describes the message zitadel.idp.v2.GitHubConfig.
 * Use `create(GitHubConfigSchema)` to create a new message.
 */
export const GitHubConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 5);

/**
 * Describes the message zitadel.idp.v2.GitHubEnterpriseServerConfig.
 * Use `create(GitHubEnterpriseServerConfigSchema)` to create a new message.
 */
export const GitHubEnterpriseServerConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 6);

/**
 * Describes the message zitadel.idp.v2.GoogleConfig.
 * Use `create(GoogleConfigSchema)` to create a new message.
 */
export const GoogleConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 7);

/**
 * Describes the message zitadel.idp.v2.GitLabConfig.
 * Use `create(GitLabConfigSchema)` to create a new message.
 */
export const GitLabConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 8);

/**
 * Describes the message zitadel.idp.v2.GitLabSelfHostedConfig.
 * Use `create(GitLabSelfHostedConfigSchema)` to create a new message.
 */
export const GitLabSelfHostedConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 9);

/**
 * Describes the message zitadel.idp.v2.LDAPConfig.
 * Use `create(LDAPConfigSchema)` to create a new message.
 */
export const LDAPConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 10);

/**
 * Describes the message zitadel.idp.v2.SAMLConfig.
 * Use `create(SAMLConfigSchema)` to create a new message.
 */
export const SAMLConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 11);

/**
 * Describes the message zitadel.idp.v2.AzureADConfig.
 * Use `create(AzureADConfigSchema)` to create a new message.
 */
export const AzureADConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 12);

/**
 * Describes the message zitadel.idp.v2.Options.
 * Use `create(OptionsSchema)` to create a new message.
 */
export const OptionsSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 13);

/**
 * Describes the message zitadel.idp.v2.LDAPAttributes.
 * Use `create(LDAPAttributesSchema)` to create a new message.
 */
export const LDAPAttributesSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 14);

/**
 * Describes the message zitadel.idp.v2.AzureADTenant.
 * Use `create(AzureADTenantSchema)` to create a new message.
 */
export const AzureADTenantSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 15);

/**
 * Describes the message zitadel.idp.v2.AppleConfig.
 * Use `create(AppleConfigSchema)` to create a new message.
 */
export const AppleConfigSchema = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 16);

/**
 * Describes the enum zitadel.idp.v2.IDPState.
 */
export const IDPStateSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 0);

/**
 * @generated from enum zitadel.idp.v2.IDPState
 */
export const IDPState = /*@__PURE__*/
  tsEnum(IDPStateSchema);

/**
 * Describes the enum zitadel.idp.v2.IDPType.
 */
export const IDPTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 1);

/**
 * @generated from enum zitadel.idp.v2.IDPType
 */
export const IDPType = /*@__PURE__*/
  tsEnum(IDPTypeSchema);

/**
 * Describes the enum zitadel.idp.v2.SAMLBinding.
 */
export const SAMLBindingSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 2);

/**
 * @generated from enum zitadel.idp.v2.SAMLBinding
 */
export const SAMLBinding = /*@__PURE__*/
  tsEnum(SAMLBindingSchema);

/**
 * Describes the enum zitadel.idp.v2.SAMLNameIDFormat.
 */
export const SAMLNameIDFormatSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 3);

/**
 * @generated from enum zitadel.idp.v2.SAMLNameIDFormat
 */
export const SAMLNameIDFormat = /*@__PURE__*/
  tsEnum(SAMLNameIDFormatSchema);

/**
 * Describes the enum zitadel.idp.v2.AutoLinkingOption.
 */
export const AutoLinkingOptionSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 4);

/**
 * @generated from enum zitadel.idp.v2.AutoLinkingOption
 */
export const AutoLinkingOption = /*@__PURE__*/
  tsEnum(AutoLinkingOptionSchema);

/**
 * Describes the enum zitadel.idp.v2.AzureADTenantType.
 */
export const AzureADTenantTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 5);

/**
 * @generated from enum zitadel.idp.v2.AzureADTenantType
 */
export const AzureADTenantType = /*@__PURE__*/
  tsEnum(AzureADTenantTypeSchema);

