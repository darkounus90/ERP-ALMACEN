"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ProductTable } from "@/components/inventory/product-table";
import { FluidButton } from "@/components/ui/fluid-button";
import { Plus, Search, Filter } from "lucide-react";
import { useState } from "react";

// Mock data (replace with Prisma query later)
const mockProducts = [
    { id: "1", sku: "SKU-001", name: "Audífonos Inalámbricos", price: 120000, stock: 45, store: "Tienda Principal" },
    { id: "2", sku: "SKU-002", name: "Teclado Mecánico", price: 350000, stock: 12, store: "Centro" },
    { id: "3", sku: "SKU-003", name: "Mouse Gamer", price: 180000, stock: 8, store: "Tienda Principal" },
    { id: "4", sku: "SKU-004", name: "Hub USB-C", price: 95000, stock: 67, store: "Kiosko Mall" },
    { id: "5", sku: "SKU-005", name: "Soporte Laptop", price: 120000, stock: 3, store: "Tienda Principal" },
];

export default function InventoryPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Gestión de Inventario
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Control de productos en las 5 tiendas activas.
                    </p>
                </div>
                <FluidButton className="bg-primary hover:bg-primary/90 text-white shadow-md transition-all" onClick={() => alert("Abrir Modal Nuevo Producto")}>
                    <Plus className="h-4 w-4 mr-2" /> Nuevo Producto
                </FluidButton>
            </div>

            <GlassCard className="flex items-center gap-4 p-4 border shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o SKU..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-md pl-10 pr-4 py-2 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium">
                    <Filter className="h-4 w-4" /> Filtros
                </button>
            </GlassCard>

            <ProductTable products={filteredProducts} />
        </div>
    );
}
