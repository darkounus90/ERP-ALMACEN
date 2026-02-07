import { FluidButton } from "@/components/ui/fluid-button";
import { Lock, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/80"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-200"></div>
                {/* You could add a background image here */}
            </div>

            <div className="z-10 w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="p-8 text-center bg-white border-b border-slate-100">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <span className="text-2xl font-bold">EP</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Bienvenido</h1>
                    <p className="text-slate-500 text-sm mt-1">Inicia sesión en tu ERP</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Usuario</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="admin"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="password"
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Link href="/dashboard" className="block w-full">
                        <FluidButton className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11">
                            INGRESAR AL SISTEMA
                        </FluidButton>
                    </Link>

                    <div className="text-center pt-4">
                        <a href="#" className="text-xs text-primary hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 text-center text-xs text-slate-400 border-t border-slate-100">
                    &copy; 2026 Sistema ERP Pitalito v1.0
                </div>
            </div>
        </main>
    );
}
