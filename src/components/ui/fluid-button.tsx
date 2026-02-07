"use client";

import { cn } from "@/lib/utils";

interface FluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function FluidButton({
    children,
    className,
    variant = "primary",
    ...props
}: FluidButtonProps) {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2";

    const variants = {
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        glass: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", // Mapping glass to outline for compatibility
    };

    return (
        <button
            className={cn(baseClasses, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
