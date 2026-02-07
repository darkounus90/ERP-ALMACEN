import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { inventory } = data;

        if (!Array.isArray(inventory)) {
            return NextResponse.json(
                { error: 'Se esperaba un array de inventario' },
                { status: 400 }
            );
        }

        const results = {
            success: 0,
            errors: 0,
            details: [] as any[],
        };

        for (const item of inventory) {
            try {
                // Validar campos requeridos
                if (!item.productSku || !item.storeId) {
                    results.errors++;
                    results.details.push({
                        sku: item.productSku || 'N/A',
                        error: 'SKU de producto y ID de tienda son obligatorios',
                    });
                    continue;
                }

                // Verificar que el producto existe
                const product = await prisma.product.findUnique({
                    where: { sku: item.productSku },
                });

                if (!product) {
                    results.errors++;
                    results.details.push({
                        sku: item.productSku,
                        error: 'Producto no encontrado',
                    });
                    continue;
                }

                // Verificar que la tienda existe
                const store = await prisma.store.findUnique({
                    where: { id: item.storeId },
                });

                if (!store) {
                    results.errors++;
                    results.details.push({
                        sku: item.productSku,
                        error: `Tienda ${item.storeId} no encontrada`,
                    });
                    continue;
                }

                // Crear o actualizar inventario
                await prisma.inventory.upsert({
                    where: {
                        productId_storeId: {
                            productId: product.id,
                            storeId: store.id,
                        },
                    },
                    update: {
                        quantity: parseInt(item.quantity) || 0,
                    },
                    create: {
                        productId: product.id,
                        storeId: store.id,
                        quantity: parseInt(item.quantity) || 0,
                    },
                });

                results.success++;
                results.details.push({
                    sku: item.productSku,
                    store: store.name,
                    quantity: item.quantity,
                    status: 'Importado correctamente',
                });
            } catch (error: any) {
                results.errors++;
                results.details.push({
                    sku: item.productSku,
                    error: error.message,
                });
            }
        }

        return NextResponse.json({
            message: 'Importación de inventario completada',
            results,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Error al procesar la importación', details: error.message },
            { status: 500 }
        );
    }
}
