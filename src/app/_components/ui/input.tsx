import { cn } from "lib/utils";
import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-slate-800 bg-foreground px-3 py-2 text-background",
					"text-sm ring-0 ring-offset-background",
					"file:border-0 file:bg-transparent file:font-medium file:text-sm",
					"placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					"transition-all ease-in-out",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

const HideableInput = React.forwardRef<
	HTMLInputElement,
	InputProps & { isOpen: boolean }
>(({ isOpen, ...props }, ref) => {
	return (
		<div
			className={cn(
				"grid overflow-hidden transition-grid-rows duration-200 ease-out motion-reduce:transition-none",
				"rounded-md outline-none ring-0 ring-blue-500 transition-ring focus-within:ring-2 focus-within:ring-offset-0",
				isOpen ? "visible grid-rows-[1fr]" : "!my-0 invisible grid-rows-[0fr]",
			)}
		>
			<div className="h-auto min-h-0">
				<Input ref={ref} {...props} />
			</div>
		</div>
	);
});
HideableInput.displayName = "HideableInput";

export { Input, HideableInput };
