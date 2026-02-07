import { GlassCard } from "@/components/ui/glass-card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Reportes
                </h2>
                <p className="text-slate-500 text-sm">
                    Análisis y reportes del negocio.
                </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Módulo de Reportes</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Genera reportes detallados de ventas, inventario y finanzas. Próximamente disponible.
                </p>
            </div>
        </div>
    );
}
