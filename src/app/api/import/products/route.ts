import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { products } = data;

        if (!Array.isArray(products)) {
            return NextResponse.json(
                { error: 'Se esperaba un array de productos' },
                { status: 400 }
            );
        }

        const results = {
            success: 0,
            errors: 0,
            duplicates: 0,
            details: [] as any[],
        };

        for (const product of products) {
            try {
                // Validar campos requeridos
                if (!product.sku || !product.name) {
                    results.errors++;
                    results.details.push({
                        sku: product.sku || 'N/A',
                        error: 'SKU y nombre son obligatorios',
                    });
                    continue;
                }

                // Verificar si el producto ya existe
                const existing = await prisma.product.findUnique({
                    where: { sku: product.sku },
                });

                if (existing) {
                    results.duplicates++;
                    results.details.push({
                        sku: product.sku,
                        warning: 'Producto ya existe, se omitió',
                    });
                    continue;
                }

                // Crear producto
                await prisma.product.create({
                    data: {
                        sku: product.sku,
                        name: product.name,
                        description: product.description || '',
                        price: parseFloat(product.price) || 0,
                        cost: parseFloat(product.cost) || 0,
                        category: product.category || 'General',
                        taxRate: parseFloat(product.taxRate) || 19,
                        minStock: parseInt(product.minStock) || 0,
                    },
                });

                results.success++;
                results.details.push({
                    sku: product.sku,
                    status: 'Importado correctamente',
                });
            } catch (error: any) {
                results.errors++;
                results.details.push({
                    sku: product.sku,
                    error: error.message,
                });
            }
        }

        return NextResponse.json({
            message: 'Importación completada',
            results,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Error al procesar la importación', details: error.message },
            { status: 500 }
        );
    }
}
