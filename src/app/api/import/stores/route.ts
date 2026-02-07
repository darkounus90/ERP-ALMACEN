import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { stores } = data;

        if (!Array.isArray(stores)) {
            return NextResponse.json(
                { error: 'Se esperaba un array de tiendas' },
                { status: 400 }
            );
        }

        const results = {
            success: 0,
            errors: 0,
            duplicates: 0,
            details: [] as any[],
        };

        for (const store of stores) {
            try {
                // Validar campos requeridos
                if (!store.name) {
                    results.errors++;
                    results.details.push({
                        name: store.name || 'N/A',
                        error: 'El nombre es obligatorio',
                    });
                    continue;
                }

                // Verificar si la tienda ya existe
                const existing = await prisma.store.findFirst({
                    where: { name: store.name },
                });

                if (existing) {
                    results.duplicates++;
                    results.details.push({
                        name: store.name,
                        warning: 'Tienda ya existe, se omitió',
                    });
                    continue;
                }

                // Crear tienda
                const created = await prisma.store.create({
                    data: {
                        name: store.name,
                        address: store.address || '',
                        phone: store.phone || '',
                        manager: store.manager || '',
                    },
                });

                results.success++;
                results.details.push({
                    name: store.name,
                    id: created.id,
                    status: 'Importada correctamente',
                });
            } catch (error: any) {
                results.errors++;
                results.details.push({
                    name: store.name,
                    error: error.message,
                });
            }
        }

        return NextResponse.json({
            message: 'Importación de tiendas completada',
            results,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Error al procesar la importación', details: error.message },
            { status: 500 }
        );
    }
}
