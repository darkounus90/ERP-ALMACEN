# 🐳 Despliegue con Docker

## Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone https://github.com/darkounus90/ERP-ALMACEN.git
cd ERP-ALMACEN
```

### 2. Configurar variables de entorno
```bash
cp .env.docker.example .env
# Edita .env y cambia el password
```

### 3. Levantar los servicios
```bash
docker-compose up -d
```

### 4. Ver logs
```bash
docker-compose logs -f app
```

### 5. Acceder a la aplicación
Abre tu navegador en: http://localhost:3000

## Comandos Útiles

### Ver estado de los contenedores
```bash
docker-compose ps
```

### Detener los servicios
```bash
docker-compose down
```

### Reiniciar
```bash
docker-compose restart
```

### Ver logs de PostgreSQL
```bash
docker-compose logs -f postgres
```

### Ejecutar migraciones manualmente
```bash
docker-compose exec app npx prisma migrate deploy
```

### Acceder a la base de datos
```bash
docker-compose exec postgres psql -U erp_user -d erp_pitalito
```

## Backup de la Base de Datos

### Crear backup
```bash
docker-compose exec postgres pg_dump -U erp_user erp_pitalito > backup_$(date +%Y%m%d).sql
```

### Restaurar backup
```bash
cat backup_20260207.sql | docker-compose exec -T postgres psql -U erp_user erp_pitalito
```

## Producción

Para producción, modifica `docker-compose.yml`:
- Cambia los puertos si es necesario
- Usa volúmenes externos para backups
- Configura un proxy reverso (Nginx/Traefik)
- Habilita SSL/HTTPS

## Troubleshooting

### Error de conexión a la base de datos
```bash
docker-compose logs postgres
docker-compose restart postgres
```

### La app no inicia
```bash
docker-compose logs app
docker-compose exec app npx prisma generate
docker-compose restart app
```

### Limpiar todo y empezar de nuevo
```bash
docker-compose down -v
docker-compose up -d
```
