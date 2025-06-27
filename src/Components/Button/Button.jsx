import { cn } from "../../utils/cn";

export default function Button({ children, className, asChild,...props }) {
  return (
    <button
      className={cn(
        "inline-flex px-8 py-3 cursor-pointer text-white items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
