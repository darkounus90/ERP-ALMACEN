# Plantillas CSV para Migración

Este directorio contiene plantillas de ejemplo para facilitar la migración de datos desde tu sistema anterior.

## 📁 Archivos Disponibles

### 1. tiendas-ejemplo.csv
Plantilla para importar tiendas/almacenes.

**Campos:**
- `name`: Nombre de la tienda (obligatorio)
- `address`: Dirección completa
- `phone`: Teléfono de contacto
- `manager`: Nombre del responsable

### 2. productos-ejemplo.csv
Plantilla para importar productos.

**Campos:**
- `sku`: Código único del producto (obligatorio)
- `name`: Nombre del producto (obligatorio)
- `description`: Descripción detallada
- `price`: Precio de venta
- `cost`: Costo de compra
- `category`: Categoría del producto
- `taxRate`: Porcentaje de IVA (19 por defecto)
- `minStock`: Stock mínimo para alertas

### 3. inventario-ejemplo.csv
Plantilla para importar cantidades de inventario por tienda.

**Campos:**
- `productSku`: SKU del producto (debe existir previamente)
- `storeId`: ID de la tienda (debe existir previamente)
- `quantity`: Cantidad en stock

## 🔧 Cómo Usar

1. **Descarga la plantilla** desde la interfaz web de migración
2. **Abre con Excel o Google Sheets**
3. **Llena tus datos** siguiendo el formato de ejemplo
4. **Guarda como CSV** (separado por comas)
5. **Sube el archivo** en la página de Migración

## ⚠️ Notas Importantes

- Los archivos deben estar en formato CSV con codificación UTF-8
- La primera línea (encabezados) no debe modificarse
- Los campos marcados como obligatorios no pueden estar vacíos
- Para inventario, primero debes importar tiendas y productos

## 📊 Orden Recomendado de Importación

1. **Primero**: Tiendas
2. **Segundo**: Productos
3. **Tercero**: Inventario (requiere que tiendas y productos ya existan)
4. **Cuarto**: Clientes (opcional)

## 🆘 Soporte

Si tienes problemas con la importación, revisa:
- Que el formato CSV sea correcto
- Que no haya caracteres especiales problemáticos
- Que los IDs de referencia existan (para inventario)
- Los mensajes de error en la interfaz de migración
