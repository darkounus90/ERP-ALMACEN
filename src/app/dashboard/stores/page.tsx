import { GlassCard } from "@/components/ui/glass-card";
import { FluidButton } from "@/components/ui/fluid-button";
import { Plus, Store, MapPin } from "lucide-react";

const stores = [
    { id: "1", name: "Tienda Centro", location: "Calle 5 #3-45, Pitalito", status: "Activa" },
    { id: "2", name: "Tienda Norte", location: "Carrera 7 #12-30, Pitalito", status: "Activa" },
    { id: "3", name: "Tienda Sur", location: "Calle 10 #8-20, Pitalito", status: "Activa" },
    { id: "4", name: "Kiosko Mall", location: "Centro Comercial Plaza, Local 15", status: "Activa" },
    { id: "5", name: "Bodega Principal", location: "Zona Industrial, Bodega 3", status: "Activa" },
];

export default function StoresPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Tiendas / Almacenes
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Gestión de las 5 ubicaciones activas.
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-md transition-all">
                    <Plus className="h-4 w-4 mr-2" /> Nueva Tienda
                </FluidButton>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stores.map((store) => (
                    <GlassCard key={store.id} className="p-6 border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <Store className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-slate-800 mb-1">{store.name}</h3>
                                <div className="flex items-start gap-1.5 text-sm text-slate-500 mb-2">
                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                    <span>{store.location}</span>
                                </div>
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    {store.status}
                                </span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
