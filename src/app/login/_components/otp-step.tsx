import { cn } from "lib/utils";
import { Button } from "ui/button";

const INPUT_CLASS =
	"h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30";

export function OTPStep({
	otpCode,
	onOtpCodeChange,
	onSubmit,
	onBack,
	onResend,
	isPending,
	isResending,
	isResendSuccess,
	error,
}: {
	otpCode: string;
	onOtpCodeChange: (value: string) => void;
	onSubmit: () => void;
	onBack: () => void;
	onResend: () => void;
	isPending: boolean;
	isResending: boolean;
	isResendSuccess: boolean;
	error: string | undefined;
}) {
	return (
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
					onChange={(e) => onOtpCodeChange(e.target.value)}
					autoComplete="one-time-code"
					className={cn(INPUT_CLASS, "text-center tracking-widest")}
				/>
				{error && <p className="text-destructive text-sm">{error}</p>}
				<Button
					type="button"
					onClick={onSubmit}
					disabled={isPending || !otpCode.trim()}
					className="w-full"
					size="lg"
				>
					{isPending ? "Verifying..." : "Verify"}
				</Button>
				<div className="flex items-center justify-between text-sm">
					<Button type="button" variant="ghost" size="sm" onClick={onBack}>
						Use different email
					</Button>
					<Button
						type="button"
						variant="link"
						size="sm"
						onClick={onResend}
						disabled={isResending}
					>
						{isResending ? "Sending..." : "Resend code"}
					</Button>
				</div>
				{isResendSuccess && (
					<p className="text-center text-muted-foreground text-sm">
						New code sent
					</p>
				)}
			</div>
		</>
	);
}
