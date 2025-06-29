import * as React from "react";
import { cn } from "lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-800 bg-foreground text-background px-3 py-2",
          "text-sm ring-offset-background ring-0",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
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
        "grid transition-grid-rows duration-300 ease-in-out overflow-hidden",
        "transition-ring outline-none ring-0 focus-within:ring-2 ring-blue-500 focus-within:ring-offset-0 rounded-md",
        isOpen ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible !my-0",
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
