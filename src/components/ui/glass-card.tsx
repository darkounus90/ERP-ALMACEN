"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border bg-card text-card-foreground shadow-sm",
                hoverEffect && "hover:shadow-md transition-shadow duration-200",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
