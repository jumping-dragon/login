// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/project/v2beta/query.proto (package zitadel.project.v2beta, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb.js";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb.js";
import { file_validate_validate } from "../../../validate/validate_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_zitadel_filter_v2beta_filter } from "../../filter/v2beta/filter_pb.js";

/**
 * Describes the file zitadel/project/v2beta/query.proto.
 */
export const file_zitadel_project_v2beta_query = /*@__PURE__*/
  fileDesc("CiJ6aXRhZGVsL3Byb2plY3QvdjJiZXRhL3F1ZXJ5LnByb3RvEhZ6aXRhZGVsLnByb2plY3QudjJiZXRhIsQECgxQcm9qZWN0R3JhbnQSMQoPb3JnYW5pemF0aW9uX2lkGAIgASgJQhiSQRVKEyI2OTYyOTAxMjkwNjQ4ODMzNCISUgoNY3JlYXRpb25fZGF0ZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCH5JBHEoaIjIwMjQtMTItMThUMDc6NTA6NDcuNDkyWiISUAoLY2hhbmdlX2RhdGUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQh+SQRxKGiIyMDI1LTAxLTIzVDEwOjM0OjE4LjA1MVoiEjkKF2dyYW50ZWRfb3JnYW5pemF0aW9uX2lkGAUgASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCISOwoZZ3JhbnRlZF9vcmdhbml6YXRpb25fbmFtZRgGIAEoCUIYkkEVShMiU29tZSBPcmdhbml6YXRpb24iEjIKEWdyYW50ZWRfcm9sZV9rZXlzGAcgAygJQheSQRRKElsicm9sZS5zdXBlci5tYW4iXRIsCgpwcm9qZWN0X2lkGAggASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCISJAoMcHJvamVjdF9uYW1lGAkgASgJQg6SQQtKCSJaSVRBREVMIhJbCgVzdGF0ZRgKIAEoDjIpLnppdGFkZWwucHJvamVjdC52MmJldGEuUHJvamVjdEdyYW50U3RhdGVCIZJBHjIcY3VycmVudCBzdGF0ZSBvZiB0aGUgcHJvamVjdCLiBgoHUHJvamVjdBIkCgJpZBgBIAEoCUIYkkEVShMiNjk2MjkwMTI5MDY0ODgzMzQiEjEKD29yZ2FuaXphdGlvbl9pZBgCIAEoCUIYkkEVShMiNjk2MjkwMTI5MDY0ODgzMzQiElIKDWNyZWF0aW9uX2RhdGUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQh+SQRxKGiIyMDI0LTEyLTE4VDA3OjUwOjQ3LjQ5MloiElAKC2NoYW5nZV9kYXRlGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIfkkEcShoiMjAyNS0wMS0yM1QxMDozNDoxOC4wNTFaIhIiCgRuYW1lGAUgASgJQhSSQRFKDyJpcF9hbGxvd19saXN0IhJWCgVzdGF0ZRgGIAEoDjIkLnppdGFkZWwucHJvamVjdC52MmJldGEuUHJvamVjdFN0YXRlQiGSQR4yHGN1cnJlbnQgc3RhdGUgb2YgdGhlIHByb2plY3QSHgoWcHJvamVjdF9yb2xlX2Fzc2VydGlvbhgHIAEoCBIeChZhdXRob3JpemF0aW9uX3JlcXVpcmVkGAggASgIEh8KF3Byb2plY3RfYWNjZXNzX3JlcXVpcmVkGAkgASgIElAKGHByaXZhdGVfbGFiZWxpbmdfc2V0dGluZxgKIAEoDjIuLnppdGFkZWwucHJvamVjdC52MmJldGEuUHJpdmF0ZUxhYmVsaW5nU2V0dGluZxI+ChdncmFudGVkX29yZ2FuaXphdGlvbl9pZBgMIAEoCUIYkkEVShMiNjk2MjkwMjM5MDY0ODgzMzQiSACIAQESQAoZZ3JhbnRlZF9vcmdhbml6YXRpb25fbmFtZRgNIAEoCUIYkkEVShMiU29tZSBPcmdhbml6YXRpb24iSAGIAQESbQoNZ3JhbnRlZF9zdGF0ZRgOIAEoDjIrLnppdGFkZWwucHJvamVjdC52MmJldGEuR3JhbnRlZFByb2plY3RTdGF0ZUIpkkEmMiRjdXJyZW50IHN0YXRlIG9mIHRoZSBncmFudGVkIHByb2plY3RCGgoYX2dyYW50ZWRfb3JnYW5pemF0aW9uX2lkQhwKGl9ncmFudGVkX29yZ2FuaXphdGlvbl9uYW1lIpgDChNQcm9qZWN0U2VhcmNoRmlsdGVyEkgKE3Byb2plY3RfbmFtZV9maWx0ZXIYASABKAsyKS56aXRhZGVsLnByb2plY3QudjJiZXRhLlByb2plY3ROYW1lRmlsdGVySAASQwoVaW5fcHJvamVjdF9pZHNfZmlsdGVyGAIgASgLMiIueml0YWRlbC5maWx0ZXIudjJiZXRhLkluSURzRmlsdGVySAASSAodcHJvamVjdF9yZXNvdXJjZV9vd25lcl9maWx0ZXIYAyABKAsyHy56aXRhZGVsLmZpbHRlci52MmJldGEuSURGaWx0ZXJIABJOCiNwcm9qZWN0X2dyYW50X3Jlc291cmNlX293bmVyX2ZpbHRlchgEIAEoCzIfLnppdGFkZWwuZmlsdGVyLnYyYmV0YS5JREZpbHRlckgAEkkKHnByb2plY3Rfb3JnYW5pemF0aW9uX2lkX2ZpbHRlchgFIAEoCzIfLnppdGFkZWwuZmlsdGVyLnYyYmV0YS5JREZpbHRlckgAQg0KBmZpbHRlchID+EIBIrwBChFQcm9qZWN0TmFtZUZpbHRlchI1Cgxwcm9qZWN0X25hbWUYASABKAlCH5JBFEoPImlwX2FsbG93X2xpc3QieMgB+kIFcgMYyAEScAoGbWV0aG9kGAIgASgOMicueml0YWRlbC5maWx0ZXIudjJiZXRhLlRleHRGaWx0ZXJNZXRob2RCN5JBLDIqZGVmaW5lcyB3aGljaCB0ZXh0IGVxdWFsaXR5IG1ldGhvZCBpcyB1c2Vk+kIFggECEAEimwMKGFByb2plY3RHcmFudFNlYXJjaEZpbHRlchJIChNwcm9qZWN0X25hbWVfZmlsdGVyGAEgASgLMikueml0YWRlbC5wcm9qZWN0LnYyYmV0YS5Qcm9qZWN0TmFtZUZpbHRlckgAEkcKD3JvbGVfa2V5X2ZpbHRlchgCIAEoCzIsLnppdGFkZWwucHJvamVjdC52MmJldGEuUHJvamVjdFJvbGVLZXlGaWx0ZXJIABJDChVpbl9wcm9qZWN0X2lkc19maWx0ZXIYAyABKAsyIi56aXRhZGVsLmZpbHRlci52MmJldGEuSW5JRHNGaWx0ZXJIABJICh1wcm9qZWN0X3Jlc291cmNlX293bmVyX2ZpbHRlchgEIAEoCzIfLnppdGFkZWwuZmlsdGVyLnYyYmV0YS5JREZpbHRlckgAEk4KI3Byb2plY3RfZ3JhbnRfcmVzb3VyY2Vfb3duZXJfZmlsdGVyGAUgASgLMh8ueml0YWRlbC5maWx0ZXIudjJiZXRhLklERmlsdGVySABCDQoGZmlsdGVyEgP4QgEiywIKC1Byb2plY3RSb2xlEiwKCnByb2plY3RfaWQYASABKAlCGJJBFUoTIjY5NjI5MDI2ODA2NDg5NDU1IhIiCgNrZXkYAiABKAlCFZJBEkoQInJvbGUuc3VwZXIubWFuIhJSCg1jcmVhdGlvbl9kYXRlGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIfkkEcShoiMjAyNC0xMi0xOFQwNzo1MDo0Ny40OTJaIhJQCgtjaGFuZ2VfZGF0ZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCH5JBHEoaIjIwMjUtMDEtMjNUMTA6MzQ6MTguMDUxWiISJgoMZGlzcGxheV9uYW1lGAUgASgJQhCSQQ1KCyJTdXBlciBtYW4iEhwKBWdyb3VwGAYgASgJQg2SQQpKCCJwZW9wbGUiIsYBChdQcm9qZWN0Um9sZVNlYXJjaEZpbHRlchJHCg9yb2xlX2tleV9maWx0ZXIYASABKAsyLC56aXRhZGVsLnByb2plY3QudjJiZXRhLlByb2plY3RSb2xlS2V5RmlsdGVySAASUwoTZGlzcGxheV9uYW1lX2ZpbHRlchgCIAEoCzI0LnppdGFkZWwucHJvamVjdC52MmJldGEuUHJvamVjdFJvbGVEaXNwbGF5TmFtZUZpbHRlckgAQg0KBmZpbHRlchID+EIBIoUBChRQcm9qZWN0Um9sZUtleUZpbHRlchIqCgNrZXkYASABKAlCHZJBEkoQInJvbGUuc3VwZXIubWFuIvpCBXIDGMgBEkEKBm1ldGhvZBgCIAEoDjInLnppdGFkZWwuZmlsdGVyLnYyYmV0YS5UZXh0RmlsdGVyTWV0aG9kQgj6QgWCAQIQASKNAQocUHJvamVjdFJvbGVEaXNwbGF5TmFtZUZpbHRlchIqCgxkaXNwbGF5X25hbWUYASABKAlCFJJBCUoHIlNVUEVSIvpCBXIDGMgBEkEKBm1ldGhvZBgCIAEoDjInLnppdGFkZWwuZmlsdGVyLnYyYmV0YS5UZXh0RmlsdGVyTWV0aG9kQgj6QgWCAQIQASp6ChFQcm9qZWN0R3JhbnRTdGF0ZRIjCh9QUk9KRUNUX0dSQU5UX1NUQVRFX1VOU1BFQ0lGSUVEEAASHgoaUFJPSkVDVF9HUkFOVF9TVEFURV9BQ1RJVkUQARIgChxQUk9KRUNUX0dSQU5UX1NUQVRFX0lOQUNUSVZFEAIqYwoMUHJvamVjdFN0YXRlEh0KGVBST0pFQ1RfU1RBVEVfVU5TUEVDSUZJRUQQABIYChRQUk9KRUNUX1NUQVRFX0FDVElWRRABEhoKFlBST0pFQ1RfU1RBVEVfSU5BQ1RJVkUQAiqCAQoTR3JhbnRlZFByb2plY3RTdGF0ZRIlCiFHUkFOVEVEX1BST0pFQ1RfU1RBVEVfVU5TUEVDSUZJRUQQABIgChxHUkFOVEVEX1BST0pFQ1RfU1RBVEVfQUNUSVZFEAESIgoeR1JBTlRFRF9QUk9KRUNUX1NUQVRFX0lOQUNUSVZFEAIqywEKFlByaXZhdGVMYWJlbGluZ1NldHRpbmcSKAokUFJJVkFURV9MQUJFTElOR19TRVRUSU5HX1VOU1BFQ0lGSUVEEAASQgo+UFJJVkFURV9MQUJFTElOR19TRVRUSU5HX0VORk9SQ0VfUFJPSkVDVF9SRVNPVVJDRV9PV05FUl9QT0xJQ1kQARJDCj9QUklWQVRFX0xBQkVMSU5HX1NFVFRJTkdfQUxMT1dfTE9HSU5fVVNFUl9SRVNPVVJDRV9PV05FUl9QT0xJQ1kQAiq4AQoQUHJvamVjdEZpZWxkTmFtZRIiCh5QUk9KRUNUX0ZJRUxEX05BTUVfVU5TUEVDSUZJRUQQABIZChVQUk9KRUNUX0ZJRUxEX05BTUVfSUQQARIkCiBQUk9KRUNUX0ZJRUxEX05BTUVfQ1JFQVRJT05fREFURRACEiIKHlBST0pFQ1RfRklFTERfTkFNRV9DSEFOR0VfREFURRADEhsKF1BST0pFQ1RfRklFTERfTkFNRV9OQU1FEAQqwAEKFVByb2plY3RHcmFudEZpZWxkTmFtZRIoCiRQUk9KRUNUX0dSQU5UX0ZJRUxEX05BTUVfVU5TUEVDSUZJRUQQABInCiNQUk9KRUNUX0dSQU5UX0ZJRUxEX05BTUVfUFJPSkVDVF9JRBABEioKJlBST0pFQ1RfR1JBTlRfRklFTERfTkFNRV9DUkVBVElPTl9EQVRFEAISKAokUFJPSkVDVF9HUkFOVF9GSUVMRF9OQU1FX0NIQU5HRV9EQVRFEAMqtAEKFFByb2plY3RSb2xlRmllbGROYW1lEicKI1BST0pFQ1RfUk9MRV9GSUVMRF9OQU1FX1VOU1BFQ0lGSUVEEAASHwobUFJPSkVDVF9ST0xFX0ZJRUxEX05BTUVfS0VZEAESKQolUFJPSkVDVF9ST0xFX0ZJRUxEX05BTUVfQ1JFQVRJT05fREFURRACEicKI1BST0pFQ1RfUk9MRV9GSUVMRF9OQU1FX0NIQU5HRV9EQVRFEANC3gEKGmNvbS56aXRhZGVsLnByb2plY3QudjJiZXRhQgpRdWVyeVByb3RvUAFaOmdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3Byb2plY3QvdjJiZXRhO3Byb2plY3SiAgNaUFiqAhZaaXRhZGVsLlByb2plY3QuVjJiZXRhygIWWml0YWRlbFxQcm9qZWN0XFYyYmV0YeICIlppdGFkZWxcUHJvamVjdFxWMmJldGFcR1BCTWV0YWRhdGHqAhhaaXRhZGVsOjpQcm9qZWN0OjpWMmJldGFiBnByb3RvMw", [file_google_api_field_behavior, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_google_protobuf_timestamp, file_zitadel_filter_v2beta_filter]);

/**
 * Describes the message zitadel.project.v2beta.ProjectGrant.
 * Use `create(ProjectGrantSchema)` to create a new message.
 */
export const ProjectGrantSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 0);

/**
 * Describes the message zitadel.project.v2beta.Project.
 * Use `create(ProjectSchema)` to create a new message.
 */
export const ProjectSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 1);

/**
 * Describes the message zitadel.project.v2beta.ProjectSearchFilter.
 * Use `create(ProjectSearchFilterSchema)` to create a new message.
 */
export const ProjectSearchFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 2);

/**
 * Describes the message zitadel.project.v2beta.ProjectNameFilter.
 * Use `create(ProjectNameFilterSchema)` to create a new message.
 */
export const ProjectNameFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 3);

/**
 * Describes the message zitadel.project.v2beta.ProjectGrantSearchFilter.
 * Use `create(ProjectGrantSearchFilterSchema)` to create a new message.
 */
export const ProjectGrantSearchFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 4);

/**
 * Describes the message zitadel.project.v2beta.ProjectRole.
 * Use `create(ProjectRoleSchema)` to create a new message.
 */
export const ProjectRoleSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 5);

/**
 * Describes the message zitadel.project.v2beta.ProjectRoleSearchFilter.
 * Use `create(ProjectRoleSearchFilterSchema)` to create a new message.
 */
export const ProjectRoleSearchFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 6);

/**
 * Describes the message zitadel.project.v2beta.ProjectRoleKeyFilter.
 * Use `create(ProjectRoleKeyFilterSchema)` to create a new message.
 */
export const ProjectRoleKeyFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 7);

/**
 * Describes the message zitadel.project.v2beta.ProjectRoleDisplayNameFilter.
 * Use `create(ProjectRoleDisplayNameFilterSchema)` to create a new message.
 */
export const ProjectRoleDisplayNameFilterSchema = /*@__PURE__*/
  messageDesc(file_zitadel_project_v2beta_query, 8);

/**
 * Describes the enum zitadel.project.v2beta.ProjectGrantState.
 */
export const ProjectGrantStateSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 0);

/**
 * @generated from enum zitadel.project.v2beta.ProjectGrantState
 */
export const ProjectGrantState = /*@__PURE__*/
  tsEnum(ProjectGrantStateSchema);

/**
 * Describes the enum zitadel.project.v2beta.ProjectState.
 */
export const ProjectStateSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 1);

/**
 * @generated from enum zitadel.project.v2beta.ProjectState
 */
export const ProjectState = /*@__PURE__*/
  tsEnum(ProjectStateSchema);

/**
 * Describes the enum zitadel.project.v2beta.GrantedProjectState.
 */
export const GrantedProjectStateSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 2);

/**
 * @generated from enum zitadel.project.v2beta.GrantedProjectState
 */
export const GrantedProjectState = /*@__PURE__*/
  tsEnum(GrantedProjectStateSchema);

/**
 * Describes the enum zitadel.project.v2beta.PrivateLabelingSetting.
 */
export const PrivateLabelingSettingSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 3);

/**
 * @generated from enum zitadel.project.v2beta.PrivateLabelingSetting
 */
export const PrivateLabelingSetting = /*@__PURE__*/
  tsEnum(PrivateLabelingSettingSchema);

/**
 * Describes the enum zitadel.project.v2beta.ProjectFieldName.
 */
export const ProjectFieldNameSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 4);

/**
 * @generated from enum zitadel.project.v2beta.ProjectFieldName
 */
export const ProjectFieldName = /*@__PURE__*/
  tsEnum(ProjectFieldNameSchema);

/**
 * Describes the enum zitadel.project.v2beta.ProjectGrantFieldName.
 */
export const ProjectGrantFieldNameSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 5);

/**
 * @generated from enum zitadel.project.v2beta.ProjectGrantFieldName
 */
export const ProjectGrantFieldName = /*@__PURE__*/
  tsEnum(ProjectGrantFieldNameSchema);

/**
 * Describes the enum zitadel.project.v2beta.ProjectRoleFieldName.
 */
export const ProjectRoleFieldNameSchema = /*@__PURE__*/
  enumDesc(file_zitadel_project_v2beta_query, 6);

/**
 * @generated from enum zitadel.project.v2beta.ProjectRoleFieldName
 */
export const ProjectRoleFieldName = /*@__PURE__*/
  tsEnum(ProjectRoleFieldNameSchema);

