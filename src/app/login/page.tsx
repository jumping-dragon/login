"use client";
import { cn } from "lib/utils";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { api } from "~/trpc/react";
import { AuroraBackground } from "../_components/ui/aurora";
import { ThreatRevealLogo } from "../_components/ui/threatreveal-logo";
import { EmailStep } from "./_components/email-step";
import { OTPStep } from "./_components/otp-step";

type LoginStep = "email" | "otp";

const isValidEmail = (email: string) =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const LoginForm = ({ className }: { className?: string }) => {
	const [step, setStep] = React.useState<LoginStep>("email");
	const [loginName, setLoginName] = React.useState("");
	const [otpCode, setOtpCode] = React.useState("");
	const [sessionId, setSessionId] = React.useState("");
	const [sessionToken, setSessionToken] = React.useState("");
	const searchParams = useSearchParams();
	const authRequestId = searchParams.get("authRequest") || "";

	const requestOTP = api.auth.requestOTP.useMutation({
		onSuccess: (data) => {
			setSessionId(data.sessionId);
			setSessionToken(data.sessionToken);
			setStep("otp");
		},
	});

	const verifyOTP = api.auth.verifyOTP.useMutation({
		onSuccess: (data) => {
			if (data.callbackUrl) {
				window.location.href = data.callbackUrl;
			}
		},
	});

	const resendOTP = api.auth.resendOTP.useMutation({
		onSuccess: (data) => {
			setSessionToken(data.sessionToken);
		},
	});

	const handleRequestOTP = () => {
		if (!isValidEmail(loginName)) return;
		requestOTP.mutate({ loginName, authRequestId });
	};

	const handleVerifyOTP = () => {
		if (!otpCode.trim()) return;
		verifyOTP.mutate({ sessionId, sessionToken, otpCode, authRequestId });
	};

	const handleBack = () => {
		setStep("email");
		setOtpCode("");
		setSessionId("");
		setSessionToken("");
		requestOTP.reset();
		verifyOTP.reset();
		resendOTP.reset();
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			if (step === "email") handleRequestOTP();
			else handleVerifyOTP();
		}
	};

	return (
		<div
			className={cn(
				"dark z-10 flex w-full max-w-sm animate-fade-in flex-col gap-4 overflow-hidden rounded-xl text-card-foreground motion-reduce:animate-none",
				className,
			)}
			onKeyDown={handleKeyDown}
		>
			{step === "email" && (
				<EmailStep
					loginName={loginName}
					onLoginNameChange={setLoginName}
					onSubmit={handleRequestOTP}
					isPending={requestOTP.isPending}
					error={requestOTP.error?.message}
				/>
			)}

			{step === "otp" && (
				<OTPStep
					otpCode={otpCode}
					onOtpCodeChange={setOtpCode}
					onSubmit={handleVerifyOTP}
					onBack={handleBack}
					onResend={() => resendOTP.mutate({ sessionId, sessionToken })}
					isPending={verifyOTP.isPending}
					isResending={resendOTP.isPending}
					isResendSuccess={resendOTP.isSuccess}
					error={verifyOTP.error?.message}
				/>
			)}
		</div>
	);
};

const LoginPage: NextPage = () => {
	return (
		<div className="dark h-screen w-screen bg-background sm:flex">
			<AuroraBackground preset="0317" mainClassName="w-full sm:w-1/2 dark">
				<div className="flex w-full flex-grow flex-col p-5 md:p-10 lg:px-20 lg:py-12">
					<h2 className="mt-8 mb-5 flex items-center gap-x-2 text-2xl text-foreground sm:mt-auto">
						<ThreatRevealLogo />
						ThreatReveal
					</h2>
					<h1 className="text-5xl text-foreground sm:mb-40">
						Discover.
						<br className="md:hidden" />
						Monitor.
						<br />
						Defend.
					</h1>
					<Suspense>
						<LoginForm className="my-10 sm:hidden" />
					</Suspense>
					<div className="mt-auto text-muted-foreground text-xs">
						ThreatReveal © 2025 TeamT5 . CONFIDENTIAL unless indicated
						otherwise.
					</div>
				</div>
			</AuroraBackground>
			<div className="relative hidden w-1/2 flex-grow flex-col items-center justify-center antialiased sm:flex">
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</div>
	);
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
