import { GlassCard } from "@/components/ui/glass-card";
import { FluidButton } from "@/components/ui/fluid-button";
import { Plus, Search, Filter, FileText } from "lucide-react";

export default function SalesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Ventas / Facturación
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Gestión de facturas electrónicas y ventas.
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-md transition-all">
                    <Plus className="h-4 w-4 mr-2" /> Nueva Factura
                </FluidButton>
            </div>

            <GlassCard className="flex items-center gap-4 p-4 border shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Buscar por número de factura o cliente..."
                        className="w-full bg-white border border-slate-200 rounded-md pl-10 pr-4 py-2 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium">
                    <Filter className="h-4 w-4" /> Filtros
                </button>
            </GlassCard>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Módulo de Facturación</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Este módulo está en desarrollo. Aquí podrás crear facturas electrónicas, gestionar ventas y generar reportes de facturación.
                </p>
            </div>
        </div>
    );
}
