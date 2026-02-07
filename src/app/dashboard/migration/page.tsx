"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { FluidButton } from "@/components/ui/fluid-button";
import { Upload, FileSpreadsheet, CheckCircle, XCircle, AlertCircle, Download } from "lucide-react";
import { useState } from "react";

type ImportType = 'stores' | 'products' | 'inventory';

interface ImportResult {
    success: number;
    errors: number;
    duplicates?: number;
    details: any[];
}

export default function MigrationPage() {
    const [importing, setImporting] = useState(false);
    const [importType, setImportType] = useState<ImportType>('products');
    const [result, setResult] = useState<ImportResult | null>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setImporting(true);
        setResult(null);

        try {
            const text = await file.text();
            const lines = text.split('\n');
            const headers = lines[0].split(',').map(h => h.trim());

            const data = lines.slice(1)
                .filter(line => line.trim())
                .map(line => {
                    const values = line.split(',').map(v => v.trim());
                    const obj: any = {};
                    headers.forEach((header, index) => {
                        obj[header] = values[index];
                    });
                    return obj;
                });

            // Enviar a la API correspondiente
            const response = await fetch(`/api/import/${importType}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ [importType]: data }),
            });

            const result = await response.json();
            setResult(result.results);
        } catch (error: any) {
            alert('Error al procesar el archivo: ' + error.message);
        } finally {
            setImporting(false);
        }
    };

    const downloadTemplate = (type: ImportType) => {
        const templates = {
            stores: 'name,address,phone,manager\nTienda Centro,Calle 5 #3-45,3001234567,Juan Pérez\n',
            products: 'sku,name,description,price,cost,category,taxRate,minStock\nSKU-001,Producto A,Descripción,15000,10000,Categoría 1,19,5\n',
            inventory: 'productSku,storeId,quantity\nSKU-001,store-id-1,100\n',
        };

        const blob = new Blob([templates[type]], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `plantilla-${type}.csv`;
        a.click();
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Migración de Datos
                </h2>
                <p className="text-slate-500 text-sm">
                    Importa datos desde tu sistema anterior en formato CSV.
                </p>
            </div>

            {/* Selector de tipo de importación */}
            <GlassCard className="p-6 border shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4">Tipo de Importación</h3>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { value: 'stores' as ImportType, label: 'Tiendas', icon: '🏪' },
                        { value: 'products' as ImportType, label: 'Productos', icon: '📦' },
                        { value: 'inventory' as ImportType, label: 'Inventario', icon: '📊' },
                    ].map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setImportType(option.value)}
                            className={`p-4 rounded-lg border-2 transition-all ${importType === option.value
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <div className="text-2xl mb-2">{option.icon}</div>
                            <div className="font-medium">{option.label}</div>
                        </button>
                    ))}
                </div>
            </GlassCard>

            {/* Área de carga */}
            <GlassCard className="p-8 border shadow-sm">
                <div className="text-center space-y-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Upload className="h-8 w-8 text-primary" />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Subir Archivo CSV
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">
                            Selecciona un archivo CSV con los datos a importar
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileUpload}
                                disabled={importing}
                                className="hidden"
                            />
                            <FluidButton
                                className="bg-primary hover:bg-primary/90 text-white shadow-md"
                                disabled={importing}
                            >
                                <FileSpreadsheet className="h-4 w-4 mr-2" />
                                {importing ? 'Importando...' : 'Seleccionar Archivo'}
                            </FluidButton>
                        </label>

                        <FluidButton
                            variant="outline"
                            onClick={() => downloadTemplate(importType)}
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Descargar Plantilla
                        </FluidButton>
                    </div>
                </div>
            </GlassCard>

            {/* Resultados */}
            {result && (
                <GlassCard className="p-6 border shadow-sm">
                    <h3 className="font-semibold text-slate-800 mb-4">Resultados de la Importación</h3>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                            <div className="flex items-center gap-2 text-emerald-700 mb-1">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-semibold">Exitosos</span>
                            </div>
                            <div className="text-2xl font-bold text-emerald-900">{result.success}</div>
                        </div>

                        {result.duplicates !== undefined && (
                            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                                <div className="flex items-center gap-2 text-amber-700 mb-1">
                                    <AlertCircle className="h-5 w-5" />
                                    <span className="font-semibold">Duplicados</span>
                                </div>
                                <div className="text-2xl font-bold text-amber-900">{result.duplicates}</div>
                            </div>
                        )}

                        <div className="p-4 rounded-lg bg-rose-50 border border-rose-200">
                            <div className="flex items-center gap-2 text-rose-700 mb-1">
                                <XCircle className="h-5 w-5" />
                                <span className="font-semibold">Errores</span>
                            </div>
                            <div className="text-2xl font-bold text-rose-900">{result.errors}</div>
                        </div>
                    </div>

                    {/* Detalles */}
                    <div className="max-h-96 overflow-y-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 sticky top-0">
                                <tr>
                                    <th className="text-left p-2 font-semibold text-slate-700">Item</th>
                                    <th className="text-left p-2 font-semibold text-slate-700">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {result.details.map((detail, index) => (
                                    <tr key={index} className="hover:bg-slate-50">
                                        <td className="p-2 font-mono text-xs">
                                            {detail.sku || detail.name || `Item ${index + 1}`}
                                        </td>
                                        <td className="p-2">
                                            {detail.status && (
                                                <span className="text-emerald-600">{detail.status}</span>
                                            )}
                                            {detail.warning && (
                                                <span className="text-amber-600">{detail.warning}</span>
                                            )}
                                            {detail.error && (
                                                <span className="text-rose-600">{detail.error}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            )}

            {/* Instrucciones */}
            <GlassCard className="p-6 border shadow-sm bg-indigo-50/50">
                <h3 className="font-semibold text-slate-800 mb-3">📋 Instrucciones</h3>
                <ol className="space-y-2 text-sm text-slate-600">
                    <li><strong>1.</strong> Descarga la plantilla CSV correspondiente</li>
                    <li><strong>2.</strong> Llena el archivo con tus datos (puedes usar Excel)</li>
                    <li><strong>3.</strong> Guarda como CSV (separado por comas)</li>
                    <li><strong>4.</strong> Sube el archivo usando el botón de arriba</li>
                    <li><strong>5.</strong> Revisa los resultados y corrige errores si es necesario</li>
                </ol>
            </GlassCard>
        </div>
    );
}
