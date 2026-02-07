import { GlassCard } from "@/components/ui/glass-card";
import { Settings as SettingsIcon } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Configuración
                </h2>
                <p className="text-slate-500 text-sm">
                    Ajustes del sistema y preferencias.
                </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
                    <SettingsIcon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Configuración del Sistema</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Personaliza tu sistema ERP, gestiona usuarios y configura integraciones. Próximamente disponible.
                </p>
            </div>
        </div>
    );
}
