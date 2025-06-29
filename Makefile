create_session_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' \
	http://localhost:8080/v2/sessions --data '{"checks":{"user":{"loginName":"Austyn_Marquardt45@hotmail.com"}},"lifetime":"18000s"}' | jq
get_session_with_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' \
	http://localhost:8080/v2/sessions/326646970674315268 | jq
update_session_password_with_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' --request PATCH \
	http://localhost:8080/v2/sessions/326646970674315268 \
	--data '{"checks":{"password":{"password":"BBbb1234++=="}}}' | jq
delete_session_with_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' \
	--request DELETE http://localhost:8080/v2/sessions/326646970674315268 | jq
get_auth_request_by_requestid_with_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' \
	http://localhost:8080/v2/oidc/auth_requests/V2_326664105547005956 | jq
finalize_auth_request_with_admintoken:
	curl -H 'Authorization: Bearer P5Bpp-VahRYp6KYff2Xq6KIsW5IEWJh-UaT1oRTp-obd0AL9x7zRmLgcif3ONtp5V0pjuTQ' \
	http://localhost:8080/v2/oidc/auth_requests/V2_326664105547005956 \
	--request POST --data '{"session":{"sessionId":"326646970674315268","sessionToken":"w-chZP-XDCtwP4lHqEIYRnRJZgsNO-YvznOx81COAf4BHWmSMd5gpJu9EGtv06GavihkzJFhIHNzKg"}}' --verbose

get_session_with_usertoken:
	curl -H 'Authorization: Bearer w-chZP-XDCtwP4lHqEIYRnRJZgsNO-YvznOx81COAf4BHWmSMd5gpJu9EGtv06GavihkzJFhIHNzKg' \
	http://localhost:8080/v2/sessions/326646970674315268 | jq
update_session_password_with_usertoken:
	curl -H 'Authorization: Bearer w-chZP-XDCtwP4lHqEIYRnRJZgsNO-YvznOx81COAf4BHWmSMd5gpJu9EGtv06GavihkzJFhIHNzKg' --request PATCH \
	http://localhost:8080/v2/sessions/326646970674315268 \
	--data '{"checks":{"password":{"password":"BBbb1234++=="}}}' | jqm
get_user_by_id_with_usertoken:
	curl -H 'Authorization: Bearer w-chZP-XDCtwP4lHqEIYRnRJZgsNO-YvznOx81COAf4BHWmSMd5gpJu9EGtv06GavihkzJFhIHNzKg' \
	http://localhost:8080/v2/users/324471080246837251 | jq
get_auth_method_by_userid_with_usertoken:
	curl -H 'Authorization: Bearer w-chZP-XDCtwP4lHqEIYRnRJZgsNO-YvznOx81COAf4BHWmSMd5gpJu9EGtv06GavihkzJFhIHNzKg' \
	http://localhost:8080/v2/users/324471080246837251/authentication_methods | jq
