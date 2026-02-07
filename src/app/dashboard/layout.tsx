import { AppSidebar } from "@/components/layout/app-sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background text-foreground">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto pl-64 transition-all duration-300">
                <div className="container mx-auto p-8 pt-10 pb-20">
                    {children}
                </div>
            </main>
        </div>
    );
}
