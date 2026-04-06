"use client";
import { cn } from "lib/utils";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { Button } from "ui/button";
import { HideableInput, Input } from "ui/input";
import { api } from "~/trpc/react";
import { AuroraBackground } from "../_components/ui/aurora";

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

	const requestOTP = api.post.requestOTP.useMutation({
		onSuccess: (data) => {
			setSessionId(data.sessionId);
			setSessionToken(data.sessionToken);
			setStep("otp");
		},
	});

	const verifyOTP = api.post.verifyOTP.useMutation({
		onSuccess: (data) => {
			if (data.callbackUrl) {
				window.location.href = data.callbackUrl;
			}
		},
	});

	const resendOTP = api.post.resendOTP.useMutation({
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

	const inputClass =
		"h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30";

	return (
		<div
			className={cn(
				"dark z-10 flex min-w-[300px] animate-fade-in flex-col overflow-hidden rounded-xl bg-card p-6 text-card-foreground text-sm shadow-xs ring-1 ring-foreground/10 motion-reduce:animate-none",
				className,
			)}
			onKeyDown={handleKeyDown}
		>
			{step === "email" && (
				<>
					<h2 className="mb-2 font-medium text-base leading-normal">
						Log in to ThreatReveal
					</h2>
					<div className="space-y-4">
						<input
							type="email"
							id="loginName"
							placeholder="Enter your email"
							value={loginName}
							onChange={(e) => setLoginName(e.target.value)}
							autoComplete="email"
							className={inputClass}
						/>
						{requestOTP.error && (
							<p className="text-destructive text-sm">
								{requestOTP.error.message}
							</p>
						)}
						<Button
							type="button"
							onClick={handleRequestOTP}
							disabled={requestOTP.isPending || !isValidEmail(loginName)}
							className="w-full"
							size="lg"
						>
							{requestOTP.isPending ? "Sending code..." : "Continue with email"}
						</Button>
					</div>
				</>
			)}

			{step === "otp" && (
				<>
					<div className="grid auto-rows-min gap-1">
						<h2 className="font-medium text-base leading-normal">
							Check your email
						</h2>
						<p className="text-muted-foreground text-sm">
							We sent a verification code to your email
						</p>
					</div>
					<div className="space-y-4">
						<input
							type="text"
							id="otpCode"
							inputMode="numeric"
							maxLength={8}
							placeholder="Enter verification code"
							value={otpCode}
							onChange={(e) => setOtpCode(e.target.value)}
							autoComplete="one-time-code"
							className={cn(inputClass, "text-center tracking-widest")}
						/>
						{verifyOTP.error && (
							<p className="text-destructive text-sm">
								{verifyOTP.error.message}
							</p>
						)}
						<Button
							type="button"
							onClick={handleVerifyOTP}
							disabled={verifyOTP.isPending || !otpCode.trim()}
							className="w-full"
							size="lg"
						>
							{verifyOTP.isPending ? "Verifying..." : "Verify"}
						</Button>
						<div className="flex items-center justify-between text-sm">
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={handleBack}
							>
								Use different email
							</Button>
							<Button
								type="button"
								variant="link"
								size="sm"
								onClick={() => resendOTP.mutate({ sessionId, sessionToken })}
								disabled={resendOTP.isPending}
							>
								{resendOTP.isPending ? "Sending..." : "Resend code"}
							</Button>
						</div>
						{resendOTP.isSuccess && (
							<p className="text-center text-muted-foreground text-sm">
								New code sent
							</p>
						)}
					</div>
				</>
			)}
		</div>
	);
};

/** @deprecated Kept for rollback — original password-based login form */
const PasswordLoginForm = ({ className }: { className?: string }) => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const searchParams = useSearchParams();
	const authRequestId = searchParams.get("authRequest") || "";

	const { mutate: login, error } = api.post.login.useMutation({
		onSuccess: (data) => {
			if (!data.callbackUrl) return;
			window.location.href = data.callbackUrl;
		},
	});

	const isOpen = !!username;

	return (
		<div
			className={cn(
				"z-10 min-w-[300px] animate-fade-in rounded-lg p-8 shadow-lg ring-1 ring-slate-500/10 backdrop-blur-2xl motion-reduce:animate-none",
				className,
			)}
		>
			<h2 className="mb-4 text-white text-xl">Login</h2>
			<div className="space-y-4">
				<Input
					type="text"
					id="username"
					placeholder="Enter your username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					autoComplete="username"
					className="bg-slate-900 bg-opacity-40 caret-blue-400"
				/>
				<HideableInput
					isOpen={isOpen}
					type="password"
					id="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
					className="bg-slate-900 bg-opacity-40 caret-blue-500"
				/>
				<button
					type="button"
					onClick={() => login({ username, password, authRequestId })}
					className="w-full rounded-md bg-blue-600 bg-opacity-50 px-4 py-2 font-semibold text-white transition-all duration-150 ease-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.97]"
				>
					Continue with email
				</button>
				{error && <p className="text-red-400 text-sm">{error.message}</p>}
			</div>
		</div>
	);
};

const LoginPage: NextPage = () => {
	return (
		<div className="dark h-screen w-screen bg-background sm:flex">
			<AuroraBackground preset="0317" mainClassName="w-full sm:w-1/2 dark">
				<div className="flex w-full flex-grow flex-col p-5 md:p-10 lg:px-20 lg:py-12">
					<h2 className="mt-8 mb-5 flex items-center gap-x-2 text-2xl text-foreground sm:mt-auto">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								opacity=".05"
								d="M12.1619 3.85182C8.35817 4.88918 4.88936 8.358 3.85199 12.1617L3.3696 12.0301C4.45356 8.05564 8.05581 4.45339 12.0303 3.36943L12.1619 3.85182Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".1"
								d="M11.8807 3.42707C8.03441 4.50542 4.50561 8.03422 3.42726 11.8805L2.94582 11.7456C4.07129 7.73121 7.7314 4.0711 11.7458 2.94563L11.8807 3.42707Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".15"
								d="M11.5201 3.02556C7.69092 4.16199 4.16779 7.68323 3.02805 11.512L2.54883 11.3694C3.73676 7.37869 7.38659 3.73076 11.3778 2.54623L11.5201 3.02556Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".2"
								d="M11.0468 2.66169C7.31117 3.87664 3.87918 7.3079 2.66298 11.0434L2.18754 10.8886C3.45324 7.00109 7.00445 3.45062 10.8921 2.18621L11.0468 2.66169Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".25"
								d="M10.5201 2.32365C6.92091 3.61447 3.62391 6.90876 2.32845 10.5073L1.858 10.338C3.20398 6.59909 6.61155 3.19424 10.3513 1.85301L10.5201 2.32365Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".3"
								d="M9.90222 2.03122C6.50003 3.39465 3.39968 6.49367 2.03399 9.89551L1.56998 9.70924C2.98651 6.18076 6.18728 2.98133 9.71622 1.5671L9.90222 2.03122Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".35"
								d="M9.20727 1.78873C6.06136 3.20349 3.21103 6.05203 1.79331 9.19738L1.33747 8.99192C2.80536 5.73528 5.74485 2.7976 9.0022 1.33272L9.20727 1.78873Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".4"
								d="M8.40713 1.62085C5.59323 3.05117 3.05794 5.58509 1.62544 8.39847L1.17987 8.1716C2.66036 5.26397 5.27232 2.6534 8.18057 1.17513L8.40713 1.62085Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".45"
								d="M7.46207 1.56747C5.08689 2.94695 2.95362 5.07912 1.57249 7.45379L1.14028 7.20241C2.56503 4.75273 4.7607 2.55818 7.21096 1.1351L7.46207 1.56747Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								opacity=".5"
								d="M6.30407 1.70487C4.51964 2.91063 2.90983 4.52061 1.7043 6.30513L1.28998 6.02524C2.5313 4.18773 4.18673 2.53214 6.02413 1.29059L6.30407 1.70487Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
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
