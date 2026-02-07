# Guía de Migración - Sistema Actual → ERP Pitalito

## 📋 Estrategia de Migración

### Fase 1: Análisis y Preparación (1-2 días)
1. **Exportar datos del sistema actual**
   - Productos e inventario
   - Clientes
   - Proveedores
   - Historial de ventas (últimos 6-12 meses)
   - Facturas pendientes

2. **Formato recomendado**: CSV o Excel
   - Más fácil de manipular
   - Compatible con scripts de importación
   - Puedes editarlo manualmente si es necesario

### Fase 2: Importación de Datos Maestros (2-3 días)

#### A. Tiendas/Almacenes
```csv
nombre,direccion,telefono,responsable
Tienda Centro,Calle 5 #3-45,3001234567,Juan Pérez
Tienda Norte,Carrera 7 #12-30,3007654321,María García
```

#### B. Productos
```csv
sku,nombre,precio_compra,precio_venta,categoria,iva,stock_minimo
SKU-001,Producto A,10000,15000,Categoría 1,19,5
SKU-002,Producto B,20000,30000,Categoría 2,19,10
```

#### C. Clientes
```csv
documento,tipo_documento,nombre,telefono,email,direccion
123456789,CC,Cliente Ejemplo,3001234567,cliente@email.com,Calle 1
```

### Fase 3: Migración Gradual (Recomendado)

**Opción 1: Migración Paralela (Más Segura)**
- Semana 1-2: Usa ambos sistemas simultáneamente
- Registra nuevas ventas en el nuevo sistema
- Mantén el viejo para consultas históricas
- Ventaja: Sin riesgo de pérdida de datos

**Opción 2: Migración por Módulos**
- Semana 1: Solo inventario en el nuevo sistema
- Semana 2: Agregar facturación
- Semana 3: Migrar clientes y reportes
- Semana 4: Sistema completo

**Opción 3: Migración Total (Solo si tienes backup completo)**
- Fin de semana: Exportar todo del sistema viejo
- Importar al nuevo sistema
- Lunes: Arrancar con el nuevo sistema
- Riesgo: Mayor, pero más rápido

### Fase 4: Validación (1 semana)
- Comparar totales de inventario
- Verificar saldos de clientes
- Revisar facturas pendientes
- Confirmar que no hay datos perdidos

## 🛠️ Herramientas de Importación

### Script de Importación Automática
Ubicación: `/src/scripts/import-data.ts`

### API de Importación
Endpoint: `POST /api/import/products`
Endpoint: `POST /api/import/customers`
Endpoint: `POST /api/import/inventory`

## 📊 Checklist de Migración

### Antes de Migrar
- [ ] Backup completo del sistema actual
- [ ] Exportar todos los datos a CSV/Excel
- [ ] Revisar integridad de datos exportados
- [ ] Configurar base de datos PostgreSQL
- [ ] Probar importación con datos de prueba

### Durante la Migración
- [ ] Importar tiendas/almacenes
- [ ] Importar productos
- [ ] Importar inventario por tienda
- [ ] Importar clientes
- [ ] Importar proveedores
- [ ] Importar facturas pendientes (opcional)

### Después de Migrar
- [ ] Verificar totales de inventario
- [ ] Confirmar lista de clientes
- [ ] Revisar precios de productos
- [ ] Capacitar al equipo en el nuevo sistema
- [ ] Mantener sistema viejo como respaldo (1 mes)

## 🔄 Sincronización Temporal (Opcional)

Si necesitas usar ambos sistemas temporalmente:

1. **Exportación diaria del sistema viejo**
   - Script automático que exporta ventas del día
   - Se importa al nuevo sistema cada noche

2. **Doble registro manual**
   - Registrar ventas en ambos sistemas
   - Solo durante 1-2 semanas de transición

## 📞 Soporte Durante la Migración

### Problemas Comunes y Soluciones

**Problema**: Productos duplicados
**Solución**: Usar SKU como identificador único

**Problema**: Precios inconsistentes
**Solución**: Validar antes de importar, crear reporte de diferencias

**Problema**: Inventario descuadrado
**Solución**: Hacer conteo físico antes de migrar

**Problema**: Clientes sin documento
**Solución**: Asignar documento genérico (999999999) temporalmente

## 🎯 Recomendación Final

**Para tu caso específico (5 tiendas):**

1. **Fin de semana largo** (Viernes-Domingo):
   - Viernes tarde: Exportar datos
   - Sábado: Importar y validar
   - Domingo: Pruebas finales
   - Lunes: Arrancar con nuevo sistema

2. **Mantener sistema viejo activo** por 1 mes para consultas

3. **Capacitar equipo** el viernes antes de la migración

¿Necesitas ayuda con algún paso específico?
