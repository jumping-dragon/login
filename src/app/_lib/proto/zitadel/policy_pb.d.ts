// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/policy.proto (package zitadel.policy.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { ObjectDetails, ObjectDetailsJson } from "./object_pb.js";
import type { Duration, DurationJson } from "@bufbuild/protobuf/wkt";
import type { IDPLoginPolicyLink, IDPLoginPolicyLinkJson } from "./idp_pb.js";

/**
 * Describes the file zitadel/policy.proto.
 */
export declare const file_zitadel_policy: GenFile;

/**
 * deprecated: please use DomainPolicy instead
 *
 * @generated from message zitadel.policy.v1.OrgIAMPolicy
 */
export declare type OrgIAMPolicy = Message<"zitadel.policy.v1.OrgIAMPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault: boolean;
};

/**
 * deprecated: please use DomainPolicy instead
 *
 * @generated from message zitadel.policy.v1.OrgIAMPolicy
 */
export declare type OrgIAMPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain?: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.OrgIAMPolicy.
 * Use `create(OrgIAMPolicySchema)` to create a new message.
 */
export declare const OrgIAMPolicySchema: GenMessage<OrgIAMPolicy, {jsonType: OrgIAMPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.DomainPolicy
 */
export declare type DomainPolicy = Message<"zitadel.policy.v1.DomainPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool validate_org_domains = 4;
   */
  validateOrgDomains: boolean;

  /**
   * @generated from field: bool smtp_sender_address_matches_instance_domain = 5;
   */
  smtpSenderAddressMatchesInstanceDomain: boolean;
};

/**
 * @generated from message zitadel.policy.v1.DomainPolicy
 */
export declare type DomainPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain?: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault?: boolean;

  /**
   * @generated from field: bool validate_org_domains = 4;
   */
  validateOrgDomains?: boolean;

  /**
   * @generated from field: bool smtp_sender_address_matches_instance_domain = 5;
   */
  smtpSenderAddressMatchesInstanceDomain?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.DomainPolicy.
 * Use `create(DomainPolicySchema)` to create a new message.
 */
export declare const DomainPolicySchema: GenMessage<DomainPolicy, {jsonType: DomainPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.LabelPolicy
 */
export declare type LabelPolicy = Message<"zitadel.policy.v1.LabelPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * hex value for primary color
   *
   * @generated from field: string primary_color = 2;
   */
  primaryColor: string;

  /**
   * defines if the organization's admin changed the policy
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;

  /**
   * hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set
   *
   * @generated from field: bool hide_login_name_suffix = 5;
   */
  hideLoginNameSuffix: boolean;

  /**
   * hex value for secondary color
   *
   * @generated from field: string warn_color = 6;
   */
  warnColor: string;

  /**
   * hex value for background color
   *
   * @generated from field: string background_color = 7;
   */
  backgroundColor: string;

  /**
   * hex value for font color
   *
   * @generated from field: string font_color = 8;
   */
  fontColor: string;

  /**
   * hex value for primary color dark theme
   *
   * @generated from field: string primary_color_dark = 9;
   */
  primaryColorDark: string;

  /**
   * hex value for background color dark theme
   *
   * @generated from field: string background_color_dark = 10;
   */
  backgroundColorDark: string;

  /**
   * hex value for warning color dark theme
   *
   * @generated from field: string warn_color_dark = 11;
   */
  warnColorDark: string;

  /**
   * hex value for font color dark theme
   *
   * @generated from field: string font_color_dark = 12;
   */
  fontColorDark: string;

  /**
   * @generated from field: bool disable_watermark = 13;
   */
  disableWatermark: boolean;

  /**
   * @generated from field: string logo_url = 14;
   */
  logoUrl: string;

  /**
   * @generated from field: string icon_url = 15;
   */
  iconUrl: string;

  /**
   * @generated from field: string logo_url_dark = 16;
   */
  logoUrlDark: string;

  /**
   * @generated from field: string icon_url_dark = 17;
   */
  iconUrlDark: string;

  /**
   * @generated from field: string font_url = 18;
   */
  fontUrl: string;

  /**
   * @generated from field: zitadel.policy.v1.ThemeMode theme_mode = 19;
   */
  themeMode: ThemeMode;
};

/**
 * @generated from message zitadel.policy.v1.LabelPolicy
 */
export declare type LabelPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * hex value for primary color
   *
   * @generated from field: string primary_color = 2;
   */
  primaryColor?: string;

  /**
   * defines if the organization's admin changed the policy
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault?: boolean;

  /**
   * hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set
   *
   * @generated from field: bool hide_login_name_suffix = 5;
   */
  hideLoginNameSuffix?: boolean;

  /**
   * hex value for secondary color
   *
   * @generated from field: string warn_color = 6;
   */
  warnColor?: string;

  /**
   * hex value for background color
   *
   * @generated from field: string background_color = 7;
   */
  backgroundColor?: string;

  /**
   * hex value for font color
   *
   * @generated from field: string font_color = 8;
   */
  fontColor?: string;

  /**
   * hex value for primary color dark theme
   *
   * @generated from field: string primary_color_dark = 9;
   */
  primaryColorDark?: string;

  /**
   * hex value for background color dark theme
   *
   * @generated from field: string background_color_dark = 10;
   */
  backgroundColorDark?: string;

  /**
   * hex value for warning color dark theme
   *
   * @generated from field: string warn_color_dark = 11;
   */
  warnColorDark?: string;

  /**
   * hex value for font color dark theme
   *
   * @generated from field: string font_color_dark = 12;
   */
  fontColorDark?: string;

  /**
   * @generated from field: bool disable_watermark = 13;
   */
  disableWatermark?: boolean;

  /**
   * @generated from field: string logo_url = 14;
   */
  logoUrl?: string;

  /**
   * @generated from field: string icon_url = 15;
   */
  iconUrl?: string;

  /**
   * @generated from field: string logo_url_dark = 16;
   */
  logoUrlDark?: string;

  /**
   * @generated from field: string icon_url_dark = 17;
   */
  iconUrlDark?: string;

  /**
   * @generated from field: string font_url = 18;
   */
  fontUrl?: string;

  /**
   * @generated from field: zitadel.policy.v1.ThemeMode theme_mode = 19;
   */
  themeMode?: ThemeModeJson;
};

/**
 * Describes the message zitadel.policy.v1.LabelPolicy.
 * Use `create(LabelPolicySchema)` to create a new message.
 */
export declare const LabelPolicySchema: GenMessage<LabelPolicy, {jsonType: LabelPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.LoginPolicy
 */
export declare type LoginPolicy = Message<"zitadel.policy.v1.LoginPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool allow_username_password = 2;
   */
  allowUsernamePassword: boolean;

  /**
   * @generated from field: bool allow_register = 3;
   */
  allowRegister: boolean;

  /**
   * @generated from field: bool allow_external_idp = 4;
   */
  allowExternalIdp: boolean;

  /**
   * @generated from field: bool force_mfa = 5;
   */
  forceMfa: boolean;

  /**
   * @generated from field: zitadel.policy.v1.PasswordlessType passwordless_type = 6;
   */
  passwordlessType: PasswordlessType;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool hide_password_reset = 8;
   */
  hidePasswordReset: boolean;

  /**
   * @generated from field: bool ignore_unknown_usernames = 9;
   */
  ignoreUnknownUsernames: boolean;

  /**
   * @generated from field: string default_redirect_uri = 10;
   */
  defaultRedirectUri: string;

  /**
   * @generated from field: google.protobuf.Duration password_check_lifetime = 11;
   */
  passwordCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration external_login_check_lifetime = 12;
   */
  externalLoginCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration mfa_init_skip_lifetime = 13;
   */
  mfaInitSkipLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration second_factor_check_lifetime = 14;
   */
  secondFactorCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration multi_factor_check_lifetime = 15;
   */
  multiFactorCheckLifetime?: Duration;

  /**
   * @generated from field: repeated zitadel.policy.v1.SecondFactorType second_factors = 16;
   */
  secondFactors: SecondFactorType[];

  /**
   * @generated from field: repeated zitadel.policy.v1.MultiFactorType multi_factors = 17;
   */
  multiFactors: MultiFactorType[];

  /**
   * @generated from field: repeated zitadel.idp.v1.IDPLoginPolicyLink idps = 18;
   */
  idps: IDPLoginPolicyLink[];

  /**
   * If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success.
   *
   * @generated from field: bool allow_domain_discovery = 19;
   */
  allowDomainDiscovery: boolean;

  /**
   * @generated from field: bool disable_login_with_email = 20;
   */
  disableLoginWithEmail: boolean;

  /**
   * @generated from field: bool disable_login_with_phone = 21;
   */
  disableLoginWithPhone: boolean;

  /**
   * @generated from field: bool force_mfa_local_only = 22;
   */
  forceMfaLocalOnly: boolean;
};

/**
 * @generated from message zitadel.policy.v1.LoginPolicy
 */
export declare type LoginPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: bool allow_username_password = 2;
   */
  allowUsernamePassword?: boolean;

  /**
   * @generated from field: bool allow_register = 3;
   */
  allowRegister?: boolean;

  /**
   * @generated from field: bool allow_external_idp = 4;
   */
  allowExternalIdp?: boolean;

  /**
   * @generated from field: bool force_mfa = 5;
   */
  forceMfa?: boolean;

  /**
   * @generated from field: zitadel.policy.v1.PasswordlessType passwordless_type = 6;
   */
  passwordlessType?: PasswordlessTypeJson;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault?: boolean;

  /**
   * @generated from field: bool hide_password_reset = 8;
   */
  hidePasswordReset?: boolean;

  /**
   * @generated from field: bool ignore_unknown_usernames = 9;
   */
  ignoreUnknownUsernames?: boolean;

  /**
   * @generated from field: string default_redirect_uri = 10;
   */
  defaultRedirectUri?: string;

  /**
   * @generated from field: google.protobuf.Duration password_check_lifetime = 11;
   */
  passwordCheckLifetime?: DurationJson;

  /**
   * @generated from field: google.protobuf.Duration external_login_check_lifetime = 12;
   */
  externalLoginCheckLifetime?: DurationJson;

  /**
   * @generated from field: google.protobuf.Duration mfa_init_skip_lifetime = 13;
   */
  mfaInitSkipLifetime?: DurationJson;

  /**
   * @generated from field: google.protobuf.Duration second_factor_check_lifetime = 14;
   */
  secondFactorCheckLifetime?: DurationJson;

  /**
   * @generated from field: google.protobuf.Duration multi_factor_check_lifetime = 15;
   */
  multiFactorCheckLifetime?: DurationJson;

  /**
   * @generated from field: repeated zitadel.policy.v1.SecondFactorType second_factors = 16;
   */
  secondFactors?: SecondFactorTypeJson[];

  /**
   * @generated from field: repeated zitadel.policy.v1.MultiFactorType multi_factors = 17;
   */
  multiFactors?: MultiFactorTypeJson[];

  /**
   * @generated from field: repeated zitadel.idp.v1.IDPLoginPolicyLink idps = 18;
   */
  idps?: IDPLoginPolicyLinkJson[];

  /**
   * If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success.
   *
   * @generated from field: bool allow_domain_discovery = 19;
   */
  allowDomainDiscovery?: boolean;

  /**
   * @generated from field: bool disable_login_with_email = 20;
   */
  disableLoginWithEmail?: boolean;

  /**
   * @generated from field: bool disable_login_with_phone = 21;
   */
  disableLoginWithPhone?: boolean;

  /**
   * @generated from field: bool force_mfa_local_only = 22;
   */
  forceMfaLocalOnly?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.LoginPolicy.
 * Use `create(LoginPolicySchema)` to create a new message.
 */
export declare const LoginPolicySchema: GenMessage<LoginPolicy, {jsonType: LoginPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.PasswordComplexityPolicy
 */
export declare type PasswordComplexityPolicy = Message<"zitadel.policy.v1.PasswordComplexityPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 min_length = 2;
   */
  minLength: bigint;

  /**
   * @generated from field: bool has_uppercase = 3;
   */
  hasUppercase: boolean;

  /**
   * @generated from field: bool has_lowercase = 4;
   */
  hasLowercase: boolean;

  /**
   * @generated from field: bool has_number = 5;
   */
  hasNumber: boolean;

  /**
   * @generated from field: bool has_symbol = 6;
   */
  hasSymbol: boolean;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault: boolean;
};

/**
 * @generated from message zitadel.policy.v1.PasswordComplexityPolicy
 */
export declare type PasswordComplexityPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: uint64 min_length = 2;
   */
  minLength?: string;

  /**
   * @generated from field: bool has_uppercase = 3;
   */
  hasUppercase?: boolean;

  /**
   * @generated from field: bool has_lowercase = 4;
   */
  hasLowercase?: boolean;

  /**
   * @generated from field: bool has_number = 5;
   */
  hasNumber?: boolean;

  /**
   * @generated from field: bool has_symbol = 6;
   */
  hasSymbol?: boolean;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.PasswordComplexityPolicy.
 * Use `create(PasswordComplexityPolicySchema)` to create a new message.
 */
export declare const PasswordComplexityPolicySchema: GenMessage<PasswordComplexityPolicy, {jsonType: PasswordComplexityPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.PasswordAgePolicy
 */
export declare type PasswordAgePolicy = Message<"zitadel.policy.v1.PasswordAgePolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * Amount of days after which a password will expire. The user will be forced to change the password on the following authentication.
   *
   * @generated from field: uint64 max_age_days = 2;
   */
  maxAgeDays: bigint;

  /**
   * Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user.
   *
   * @generated from field: uint64 expire_warn_days = 3;
   */
  expireWarnDays: bigint;

  /**
   * If true, the returned values represent the instance settings, e.g. by an organization without custom settings.
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;
};

/**
 * @generated from message zitadel.policy.v1.PasswordAgePolicy
 */
export declare type PasswordAgePolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * Amount of days after which a password will expire. The user will be forced to change the password on the following authentication.
   *
   * @generated from field: uint64 max_age_days = 2;
   */
  maxAgeDays?: string;

  /**
   * Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user.
   *
   * @generated from field: uint64 expire_warn_days = 3;
   */
  expireWarnDays?: string;

  /**
   * If true, the returned values represent the instance settings, e.g. by an organization without custom settings.
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.PasswordAgePolicy.
 * Use `create(PasswordAgePolicySchema)` to create a new message.
 */
export declare const PasswordAgePolicySchema: GenMessage<PasswordAgePolicy, {jsonType: PasswordAgePolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.LockoutPolicy
 */
export declare type LockoutPolicy = Message<"zitadel.policy.v1.LockoutPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 max_password_attempts = 2;
   */
  maxPasswordAttempts: bigint;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts: bigint;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;
};

/**
 * @generated from message zitadel.policy.v1.LockoutPolicy
 */
export declare type LockoutPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: uint64 max_password_attempts = 2;
   */
  maxPasswordAttempts?: string;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts?: string;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.LockoutPolicy.
 * Use `create(LockoutPolicySchema)` to create a new message.
 */
export declare const LockoutPolicySchema: GenMessage<LockoutPolicy, {jsonType: LockoutPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.PrivacyPolicy
 */
export declare type PrivacyPolicy = Message<"zitadel.policy.v1.PrivacyPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string tos_link = 2;
   */
  tosLink: string;

  /**
   * @generated from field: string privacy_link = 3;
   */
  privacyLink: string;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;

  /**
   * @generated from field: string help_link = 5;
   */
  helpLink: string;

  /**
   * @generated from field: string support_email = 6;
   */
  supportEmail: string;

  /**
   * @generated from field: string docs_link = 7;
   */
  docsLink: string;

  /**
   * @generated from field: string custom_link = 8;
   */
  customLink: string;

  /**
   * @generated from field: string custom_link_text = 9;
   */
  customLinkText: string;
};

/**
 * @generated from message zitadel.policy.v1.PrivacyPolicy
 */
export declare type PrivacyPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: string tos_link = 2;
   */
  tosLink?: string;

  /**
   * @generated from field: string privacy_link = 3;
   */
  privacyLink?: string;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault?: boolean;

  /**
   * @generated from field: string help_link = 5;
   */
  helpLink?: string;

  /**
   * @generated from field: string support_email = 6;
   */
  supportEmail?: string;

  /**
   * @generated from field: string docs_link = 7;
   */
  docsLink?: string;

  /**
   * @generated from field: string custom_link = 8;
   */
  customLink?: string;

  /**
   * @generated from field: string custom_link_text = 9;
   */
  customLinkText?: string;
};

/**
 * Describes the message zitadel.policy.v1.PrivacyPolicy.
 * Use `create(PrivacyPolicySchema)` to create a new message.
 */
export declare const PrivacyPolicySchema: GenMessage<PrivacyPolicy, {jsonType: PrivacyPolicyJson}>;

/**
 * @generated from message zitadel.policy.v1.NotificationPolicy
 */
export declare type NotificationPolicy = Message<"zitadel.policy.v1.NotificationPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool is_default = 2;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool password_change = 3;
   */
  passwordChange: boolean;
};

/**
 * @generated from message zitadel.policy.v1.NotificationPolicy
 */
export declare type NotificationPolicyJson = {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: bool is_default = 2;
   */
  isDefault?: boolean;

  /**
   * @generated from field: bool password_change = 3;
   */
  passwordChange?: boolean;
};

/**
 * Describes the message zitadel.policy.v1.NotificationPolicy.
 * Use `create(NotificationPolicySchema)` to create a new message.
 */
export declare const NotificationPolicySchema: GenMessage<NotificationPolicy, {jsonType: NotificationPolicyJson}>;

/**
 * @generated from enum zitadel.policy.v1.ThemeMode
 */
export enum ThemeMode {
  /**
   * @generated from enum value: THEME_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: THEME_MODE_AUTO = 1;
   */
  AUTO = 1,

  /**
   * @generated from enum value: THEME_MODE_DARK = 2;
   */
  DARK = 2,

  /**
   * @generated from enum value: THEME_MODE_LIGHT = 3;
   */
  LIGHT = 3,
}

/**
 * @generated from enum zitadel.policy.v1.ThemeMode
 */
export declare type ThemeModeJson = "THEME_MODE_UNSPECIFIED" | "THEME_MODE_AUTO" | "THEME_MODE_DARK" | "THEME_MODE_LIGHT";

/**
 * Describes the enum zitadel.policy.v1.ThemeMode.
 */
export declare const ThemeModeSchema: GenEnum<ThemeMode, ThemeModeJson>;

/**
 * @generated from enum zitadel.policy.v1.SecondFactorType
 */
export enum SecondFactorType {
  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * SECOND_FACTOR_TYPE_OTP is the type for TOTP
   *
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP = 1;
   */
  OTP = 1,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_U2F = 2;
   */
  U2F = 2,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_EMAIL = 3;
   */
  OTP_EMAIL = 3,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_SMS = 4;
   */
  OTP_SMS = 4,
}

/**
 * @generated from enum zitadel.policy.v1.SecondFactorType
 */
export declare type SecondFactorTypeJson = "SECOND_FACTOR_TYPE_UNSPECIFIED" | "SECOND_FACTOR_TYPE_OTP" | "SECOND_FACTOR_TYPE_U2F" | "SECOND_FACTOR_TYPE_OTP_EMAIL" | "SECOND_FACTOR_TYPE_OTP_SMS";

/**
 * Describes the enum zitadel.policy.v1.SecondFactorType.
 */
export declare const SecondFactorTypeSchema: GenEnum<SecondFactorType, SecondFactorTypeJson>;

/**
 * @generated from enum zitadel.policy.v1.MultiFactorType
 */
export enum MultiFactorType {
  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION = 1;
   */
  U2F_WITH_VERIFICATION = 1,
}

/**
 * @generated from enum zitadel.policy.v1.MultiFactorType
 */
export declare type MultiFactorTypeJson = "MULTI_FACTOR_TYPE_UNSPECIFIED" | "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";

/**
 * Describes the enum zitadel.policy.v1.MultiFactorType.
 */
export declare const MultiFactorTypeSchema: GenEnum<MultiFactorType, MultiFactorTypeJson>;

/**
 * @generated from enum zitadel.policy.v1.PasswordlessType
 */
export enum PasswordlessType {
  /**
   * @generated from enum value: PASSWORDLESS_TYPE_NOT_ALLOWED = 0;
   */
  NOT_ALLOWED = 0,

  /**
   * PLANNED: PASSWORDLESS_TYPE_WITH_CERT
   *
   * @generated from enum value: PASSWORDLESS_TYPE_ALLOWED = 1;
   */
  ALLOWED = 1,
}

/**
 * @generated from enum zitadel.policy.v1.PasswordlessType
 */
export declare type PasswordlessTypeJson = "PASSWORDLESS_TYPE_NOT_ALLOWED" | "PASSWORDLESS_TYPE_ALLOWED";

/**
 * Describes the enum zitadel.policy.v1.PasswordlessType.
 */
export declare const PasswordlessTypeSchema: GenEnum<PasswordlessType, PasswordlessTypeJson>;

