// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/auth_n_key.proto (package zitadel.authn.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_zitadel_object } from "./object_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../protoc-gen-openapiv2/options/annotations_pb.js";

/**
 * Describes the file zitadel/auth_n_key.proto.
 */
export const file_zitadel_auth_n_key = /*@__PURE__*/
  fileDesc("Chh6aXRhZGVsL2F1dGhfbl9rZXkucHJvdG8SEHppdGFkZWwuYXV0aG4udjEipQIKA0tleRIkCgJpZBgBIAEoCUIYkkEVShMiNjk2MjkwMjM5MDY0ODgzMzQiEioKB2RldGFpbHMYAiABKAsyGS56aXRhZGVsLnYxLk9iamVjdERldGFpbHMSVwoEdHlwZRgDIAEoDjIZLnppdGFkZWwuYXV0aG4udjEuS2V5VHlwZUIukkErMhh0aGUgZmlsZSB0eXBlIG9mIHRoZSBrZXlKDyJLRVlfVFlQRV9KU09OIhJzCg9leHBpcmF0aW9uX2RhdGUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQj6SQTsyGnRoZSBkYXRlIGEga2V5IHdpbGwgZXhwaXJlSh0iMzAxOS0wNC0wMVQwODo0NTowMC4wMDAwMDBaIio2CgdLZXlUeXBlEhgKFEtFWV9UWVBFX1VOU1BFQ0lGSUVEEAASEQoNS0VZX1RZUEVfSlNPThABQrIBChRjb20ueml0YWRlbC5hdXRobi52MUINQXV0aE5LZXlQcm90b1ABWilnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9hdXRobqICA1pBWKoCEFppdGFkZWwuQXV0aG4uVjHKAhBaaXRhZGVsXEF1dGhuXFYx4gIcWml0YWRlbFxBdXRoblxWMVxHUEJNZXRhZGF0YeoCElppdGFkZWw6OkF1dGhuOjpWMWIGcHJvdG8z", [file_zitadel_object, file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations]);

/**
 * Describes the message zitadel.authn.v1.Key.
 * Use `create(KeySchema)` to create a new message.
 */
export const KeySchema = /*@__PURE__*/
  messageDesc(file_zitadel_auth_n_key, 0);

/**
 * Describes the enum zitadel.authn.v1.KeyType.
 */
export const KeyTypeSchema = /*@__PURE__*/
  enumDesc(file_zitadel_auth_n_key, 0);

/**
 * @generated from enum zitadel.authn.v1.KeyType
 */
export const KeyType = /*@__PURE__*/
  tsEnum(KeyTypeSchema);

