// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/object.proto (package zitadel.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../protoc-gen-openapiv2/options/annotations_pb.js";

/**
 * Describes the file zitadel/object.proto.
 */
export const file_zitadel_object = /*@__PURE__*/
  fileDesc("ChR6aXRhZGVsL29iamVjdC5wcm90bxIKeml0YWRlbC52MSLBAQoNT2JqZWN0RGV0YWlscxIaCghzZXF1ZW5jZRgBIAEoBEIIkkEFSgMiMiISMQoNY3JlYXRpb25fZGF0ZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLY2hhbmdlX2RhdGUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjAKDnJlc291cmNlX293bmVyGAQgASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCIi0AMKCUxpc3RRdWVyeRIYCgZvZmZzZXQYASABKARCCJJBBUoDIjAiEqMCCgVsaW1pdBgCIAEoDUKTApJBjwIyhwJNYXhpbXVtIGFtb3VudCBvZiBldmVudHMgcmV0dXJuZWQuIFRoZSBkZWZhdWx0IGlzIHNldCB0byAxMDAwIGluIGh0dHBzOi8vZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvYmxvYi9uZXctZXZlbnRzdG9yZS9jbWQveml0YWRlbC9zdGFydHVwLnlhbWwuIElmIHRoZSBsaW1pdCBleGNlZWRzIHRoZSBtYXhpbXVtIGNvbmZpZ3VyZWQgWklUQURFTCB3aWxsIHRocm93IGFuIGVycm9yLiBJZiBubyBsaW1pdCBpcyBwcmVzZW50IHRoZSBkZWZhdWx0IGlzIHRha2VuLkoDMTAwEicKA2FzYxgDIAEoCEIakkEXMhVkZWZhdWx0IGlzIGRlc2NlbmRpbmc6WpJBVwpVKhJHZW5lcmFsIExpc3QgUXVlcnkyP09iamVjdCB1bnNwZWNpZmljIGxpc3QgZmlsdGVycyBsaWtlIG9mZnNldCwgbGltaXQgYW5kIGFzYy9kZXNjLiK1AQoLTGlzdERldGFpbHMSHgoMdG90YWxfcmVzdWx0GAEgASgEQgiSQQVKAyIyIhIpChJwcm9jZXNzZWRfc2VxdWVuY2UYAiABKARCDZJBCkoIIjI2NzgzMSISWwoOdmlld190aW1lc3RhbXAYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQieSQSQyInRoZSBsYXN0IHRpbWUgdGhlIHZpZXcgZ290IHVwZGF0ZWQqxQIKD1RleHRRdWVyeU1ldGhvZBIcChhURVhUX1FVRVJZX01FVEhPRF9FUVVBTFMQABIoCiRURVhUX1FVRVJZX01FVEhPRF9FUVVBTFNfSUdOT1JFX0NBU0UQARIhCh1URVhUX1FVRVJZX01FVEhPRF9TVEFSVFNfV0lUSBACEi0KKVRFWFRfUVVFUllfTUVUSE9EX1NUQVJUU19XSVRIX0lHTk9SRV9DQVNFEAMSHgoaVEVYVF9RVUVSWV9NRVRIT0RfQ09OVEFJTlMQBBIqCiZURVhUX1FVRVJZX01FVEhPRF9DT05UQUlOU19JR05PUkVfQ0FTRRAFEh8KG1RFWFRfUVVFUllfTUVUSE9EX0VORFNfV0lUSBAGEisKJ1RFWFRfUVVFUllfTUVUSE9EX0VORFNfV0lUSF9JR05PUkVfQ0FTRRAHKisKD0xpc3RRdWVyeU1ldGhvZBIYChRMSVNUX1FVRVJZX01FVEhPRF9JThAAKtcBChRUaW1lc3RhbXBRdWVyeU1ldGhvZBIhCh1USU1FU1RBTVBfUVVFUllfTUVUSE9EX0VRVUFMUxAAEiIKHlRJTUVTVEFNUF9RVUVSWV9NRVRIT0RfR1JFQVRFUhABEiwKKFRJTUVTVEFNUF9RVUVSWV9NRVRIT0RfR1JFQVRFUl9PUl9FUVVBTFMQAhIfChtUSU1FU1RBTVBfUVVFUllfTUVUSE9EX0xFU1MQAxIpCiVUSU1FU1RBTVBfUVVFUllfTUVUSE9EX0xFU1NfT1JfRVFVQUxTEARCkgEKDmNvbS56aXRhZGVsLnYxQgtPYmplY3RQcm90b1ABWipnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9vYmplY3SiAgNaWFiqAgpaaXRhZGVsLlYxygIKWml0YWRlbFxWMeICFlppdGFkZWxcVjFcR1BCTWV0YWRhdGHqAgtaaXRhZGVsOjpWMWIGcHJvdG8z", [file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations]);

/**
 * Describes the message zitadel.v1.ObjectDetails.
 * Use `create(ObjectDetailsSchema)` to create a new message.
 */
export const ObjectDetailsSchema = /*@__PURE__*/
  messageDesc(file_zitadel_object, 0);

/**
 * Describes the message zitadel.v1.ListQuery.
 * Use `create(ListQuerySchema)` to create a new message.
 */
export const ListQuerySchema = /*@__PURE__*/
  messageDesc(file_zitadel_object, 1);

/**
 * Describes the message zitadel.v1.ListDetails.
 * Use `create(ListDetailsSchema)` to create a new message.
 */
export const ListDetailsSchema = /*@__PURE__*/
  messageDesc(file_zitadel_object, 2);

/**
 * Describes the enum zitadel.v1.TextQueryMethod.
 */
export const TextQueryMethodSchema = /*@__PURE__*/
  enumDesc(file_zitadel_object, 0);

/**
 * @generated from enum zitadel.v1.TextQueryMethod
 */
export const TextQueryMethod = /*@__PURE__*/
  tsEnum(TextQueryMethodSchema);

/**
 * Describes the enum zitadel.v1.ListQueryMethod.
 */
export const ListQueryMethodSchema = /*@__PURE__*/
  enumDesc(file_zitadel_object, 1);

/**
 * @generated from enum zitadel.v1.ListQueryMethod
 */
export const ListQueryMethod = /*@__PURE__*/
  tsEnum(ListQueryMethodSchema);

/**
 * Describes the enum zitadel.v1.TimestampQueryMethod.
 */
export const TimestampQueryMethodSchema = /*@__PURE__*/
  enumDesc(file_zitadel_object, 2);

/**
 * @generated from enum zitadel.v1.TimestampQueryMethod
 */
export const TimestampQueryMethod = /*@__PURE__*/
  tsEnum(TimestampQueryMethodSchema);

