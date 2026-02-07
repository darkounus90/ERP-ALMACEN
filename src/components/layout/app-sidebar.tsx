"use client";

import { cn } from "@/lib/utils";
import {
    CreditCard,
    History,
    Home,
    LineChart,
    LogOut,
    Package,
    Settings,
    Store,
    Users,
    ShoppingCart
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
    { icon: Home, label: "Inicio", href: "/dashboard" },
    { icon: Store, label: "Tiendas / Almacenes", href: "/dashboard/stores" },
    { icon: Package, label: "Inventario", href: "/dashboard/inventory" },
    { icon: ShoppingCart, label: "Ventas / Facturación", href: "/dashboard/sales" },
    { icon: CreditCard, label: "Gastos", href: "/dashboard/expenses" },
    { icon: Users, label: "Clientes", href: "/dashboard/customers" },
    { icon: LineChart, label: "Reportes", href: "/dashboard/reports" },
    { icon: Settings, label: "Configuración", href: "/dashboard/settings" },
];

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white text-slate-800 shadow-sm flex flex-col">
            {/* Profile / Brand Section */}
            <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-30 mix-blend-overlay"></div>
                <div className="z-10 flex flex-col items-center gap-2">
                    <div className="h-14 w-14 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xl font-bold backdrop-blur-sm">
                        EP
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-sm">El Pedalazo</h2>
                        <p className="text-xs text-white/70">Administrador</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-between py-4">
                <nav className="space-y-1 px-3">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                                    isActive
                                        ? "bg-primary text-white shadow-md shadow-primary/30"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-primary"
                                )}
                            >
                                <item.icon className={cn("h-4 w-4", isActive ? "text-white" : "text-slate-400")} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-3 border-t border-slate-100 pt-4">
                    <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600 group">
                        <LogOut className="h-4 w-4 group-hover:text-red-500" />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </aside>
    );
}
