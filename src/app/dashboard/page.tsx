import { GlassCard } from "@/components/ui/glass-card";
import {
    BarChart,
    Calendar,
    CreditCard,
    DollarSign,
    Package,
    ShoppingCart,
    TrendingUp
} from "lucide-react";
import { FluidButton } from "@/components/ui/fluid-button";

const stats = [
    {
        title: "VENTAS DIARIAS",
        value: "$1.245.000",
        change: "Hoy",
        icon: ShoppingCart,
        color: "bg-blue-500",
    },
    {
        title: "GASTOS",
        value: "$320.000",
        change: "Mes Actual",
        icon: CreditCard,
        color: "bg-red-500",
    },
    {
        title: "COMPRAS",
        value: "$4.500.000",
        change: "Mes Actual",
        icon: Package,
        color: "bg-orange-500",
    },
    {
        title: "UTILIDAD",
        value: "$925.000",
        change: "Estimada Hoy",
        icon: DollarSign,
        color: "bg-green-500",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Panel de Control
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Resumen de actividad para <span className="font-semibold text-primary">El Pedalazo</span>
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full h-12 w-12 flex items-center justify-center p-0">
                    <span className="text-2xl font-light">+</span>
                </FluidButton>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <GlassCard key={stat.title} className="p-0 overflow-hidden border-0 shadow-md">
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
                                <div className="text-2xl font-bold text-slate-700 mt-1">{stat.value}</div>
                                <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
                            </div>
                            <div className={`h-10 w-10 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center shadow-sm`}>
                                <stat.icon className={`h-5 w-5 text-white`} strokeWidth={2.5} />
                                {/* Note: Icon bg color handling needs utility class adjustment or inline style for specific brand matches. 
                     Using pure white icon on colored bg for now. */}
                                <div className={`absolute inset-0 ${stat.color} opacity-90 -z-10 rounded-lg`}></div>
                            </div>
                        </div>
                        <div className={`h-1 w-full ${stat.color}`}></div>
                    </GlassCard>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-12">
                {/* Calendar / Schedule Section */}
                <div className="md:col-span-8">
                    <GlassCard className="h-full p-6 border-0 shadow-md">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-slate-700 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                Calendario Operativo
                            </h3>
                            <div className="text-sm text-slate-400">Febrero 2026</div>
                        </div>

                        <div className="border rounded-lg p-4 bg-slate-50 min-h-[300px] flex items-center justify-center text-slate-400 border-dashed border-slate-200">
                            <p>Componente de Calendario (React-Big-Calendar o FullCalendar)</p>
                        </div>

                        <div className="mt-4 flex gap-4 text-xs">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span className="text-slate-500">Vencimientos</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                <span className="text-slate-500">Pago Proveedores</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-slate-500">Ingresos</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Alerts / Notifications */}
                <div className="md:col-span-4">
                    <GlassCard className="h-full p-6 border-0 shadow-md bg-slate-800 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Alertas
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-red-300">Inventario Bajo</span>
                                        <span className="text-[10px] text-slate-400">Hace 2h</span>
                                    </div>
                                    <p className="text-sm text-slate-200">Producto SKU-00{i} requiere reabastecimiento urgente.</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
