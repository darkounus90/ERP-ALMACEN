"use client";

import { Edit, Trash2, Box } from "lucide-react";

interface Product {
    id: string;
    sku: string;
    name: string;
    price: number;
    stock: number;
    store: string;
}

interface ProductTableProps {
    products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="w-full text-left text-sm">
                <div className="bg-slate-50 border-b border-slate-200 p-4 grid grid-cols-6 font-semibold text-slate-600 uppercase tracking-wide text-xs">
                    <div className="col-span-2">Producto</div>
                    <div>SKU</div>
                    <div>Precio</div>
                    <div>Stock</div>
                    <div className="text-right">Acciones</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="p-4 grid grid-cols-6 items-center hover:bg-slate-50/80 transition-colors group"
                        >
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                    <Box className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-medium text-slate-800">{product.name}</div>
                                    <div className="text-xs text-slate-500">{product.store}</div>
                                </div>
                            </div>
                            <div className="text-slate-500 font-mono text-xs bg-slate-100 px-2 py-1 rounded inline-block w-fit">{product.sku}</div>
                            <div className="font-semibold text-slate-700">
                                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price)}
                            </div>
                            <div>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${product.stock < 10
                                        ? "bg-red-50 text-red-700 border-red-100"
                                        : "bg-emerald-50 text-emerald-700 border-emerald-100"
                                    }`}>
                                    {product.stock} unid.
                                </span>
                            </div>
                            <div className="text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="h-8 w-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-white hover:text-primary hover:border-primary transition-all shadow-sm">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="h-8 w-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all shadow-sm">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {products.length === 0 && (
                        <div className="p-12 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 mb-4">
                                <Box className="h-6 w-6 text-slate-400" />
                            </div>
                            <h3 className="text-sm font-medium text-slate-900">No hay productos</h3>
                            <p className="mt-1 text-sm text-slate-500">Comienza agregando un nuevo producto al inventario.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
