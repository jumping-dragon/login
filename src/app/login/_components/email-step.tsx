import { Button } from "ui/button";

const INPUT_CLASS =
	"h-11 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30";

export function EmailStep({
	loginName,
	onLoginNameChange,
	onSubmit,
	isPending,
	error,
}: {
	loginName: string;
	onLoginNameChange: (value: string) => void;
	onSubmit: () => void;
	isPending: boolean;
	error: string | undefined;
}) {
	const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginName);

	return (
		<>
			<h2 className="font-medium text-lg leading-normal text-center">
				Log in to ThreatReveal
			</h2>
			<div className="space-y-5">
				<input
					type="email"
					id="loginName"
					placeholder="Enter your email"
					value={loginName}
					onChange={(e) => onLoginNameChange(e.target.value)}
					autoComplete="email"
					className={INPUT_CLASS}
				/>
				{error && <p className="text-destructive text-sm">{error}</p>}
				<Button
					type="button"
					onClick={onSubmit}
					disabled={isPending || !isValid}
					className="w-full"
					size="lg"
				>
					{isPending ? "Sending code..." : "Continue with email"}
				</Button>
			</div>
		</>
	);
}
