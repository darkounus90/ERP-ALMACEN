import { GlassCard } from "@/components/ui/glass-card";
import { FluidButton } from "@/components/ui/fluid-button";
import { Plus, Receipt } from "lucide-react";

export default function ExpensesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Gastos
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Control de gastos operativos y administrativos.
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-md transition-all">
                    <Plus className="h-4 w-4 mr-2" /> Registrar Gasto
                </FluidButton>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 mb-4">
                    <Receipt className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Módulo de Gastos</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Registra y controla todos los gastos de tu negocio. Próximamente disponible.
                </p>
            </div>
        </div>
    );
}
