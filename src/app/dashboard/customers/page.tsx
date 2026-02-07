import { GlassCard } from "@/components/ui/glass-card";
import { FluidButton } from "@/components/ui/fluid-button";
import { Plus, Users } from "lucide-react";

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Clientes
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Base de datos de clientes y contactos.
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-md transition-all">
                    <Plus className="h-4 w-4 mr-2" /> Nuevo Cliente
                </FluidButton>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Módulo de Clientes</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Gestiona tu base de datos de clientes, historial de compras y contactos. Próximamente disponible.
                </p>
            </div>
        </div>
    );
}
