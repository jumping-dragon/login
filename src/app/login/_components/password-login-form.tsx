/** @deprecated Kept for rollback — original password-based login form */
"use client";
import { cn } from "lib/utils";
import { useSearchParams } from "next/navigation";
import React from "react";
import { HideableInput, Input } from "ui/input";
import { api } from "~/trpc/react";

export function PasswordLoginForm({ className }: { className?: string }) {
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
}
