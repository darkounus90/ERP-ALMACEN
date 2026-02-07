# 🚀 Guía de Despliegue - Sistema ERP Pitalito

## Opciones de Despliegue (de más fácil a más complejo)

---

## 🌟 Opción 1: Vercel (RECOMENDADO - Más Fácil)

### ✅ Ventajas
- **100% Gratis** para proyectos personales
- **Despliegue automático** desde GitHub
- **HTTPS gratis** incluido
- **Dominio gratis**: `tu-proyecto.vercel.app`
- **Actualización automática** al hacer push a GitHub
- **Optimizado para Next.js** (es de los mismos creadores)

### 📋 Pasos

#### 1. Crear cuenta en Vercel
- Ve a: https://vercel.com/signup
- Regístrate con tu cuenta de GitHub

#### 2. Importar el proyecto
- Click en "Add New Project"
- Selecciona el repositorio: `darkounus90/ERP-ALMACEN`
- Click en "Import"

#### 3. Configurar variables de entorno
En la sección "Environment Variables", agrega:
```
DATABASE_URL=postgresql://usuario:contraseña@host:5432/nombre_db
```

#### 4. Deploy
- Click en "Deploy"
- Espera 2-3 minutos
- ¡Listo! Tu app estará en: `https://erp-almacen.vercel.app`

### 🔄 Actualizaciones Futuras
Cada vez que hagas `git push`, Vercel desplegará automáticamente.

---

## 🐳 Opción 2: Servidor Propio con Docker (Intermedio)

### ✅ Ventajas
- Control total del servidor
- Puedes usar tu propio dominio
- Funciona en cualquier servidor (VPS, AWS, etc.)

### 📋 Requisitos
- Servidor con Ubuntu/Debian
- Docker instalado
- Dominio propio (opcional)

### 📝 Archivos Necesarios

Voy a crear los archivos Docker para ti...

---

## 🖥️ Opción 3: Servidor VPS Manual (Avanzado)

### ✅ Ventajas
- Máximo control
- Puedes instalar lo que necesites

### 📋 Pasos

1. **Alquilar un VPS** (DigitalOcean, Linode, AWS)
2. **Instalar Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clonar el repositorio**:
```bash
git clone https://github.com/darkounus90/ERP-ALMACEN.git
cd ERP-ALMACEN
```

4. **Instalar dependencias**:
```bash
npm install
```

5. **Configurar variables de entorno**:
```bash
echo "DATABASE_URL=postgresql://..." > .env
```

6. **Build del proyecto**:
```bash
npm run build
```

7. **Instalar PM2** (para mantener la app corriendo):
```bash
sudo npm install -g pm2
pm2 start npm --name "erp-pitalito" -- start
pm2 save
pm2 startup
```

8. **Configurar Nginx** (proxy reverso):
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Instalar SSL con Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tu-dominio.com
```

---

## 🗄️ Base de Datos PostgreSQL

### Opción A: Neon (Gratis y Fácil)
1. Ve a: https://neon.tech
2. Crea una cuenta gratis
3. Crea una base de datos
4. Copia la URL de conexión
5. Pégala en las variables de entorno

### Opción B: Supabase (Gratis y con extras)
1. Ve a: https://supabase.com
2. Crea un proyecto
3. Copia la URL de PostgreSQL
4. Úsala en tu `.env`

### Opción C: Servidor Propio
```bash
# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# Crear base de datos
sudo -u postgres psql
CREATE DATABASE erp_pitalito;
CREATE USER erp_user WITH PASSWORD 'tu_password';
GRANT ALL PRIVILEGES ON DATABASE erp_pitalito TO erp_user;
\q
```

---

## 🎯 Recomendación Final

### Para Empezar (Hoy mismo):
**Vercel + Neon** = 100% Gratis, 5 minutos de configuración

### Para Producción (Futuro):
**VPS + PostgreSQL propio** = Más control, ~$5-10/mes

---

## 📊 Comparación Rápida

| Opción | Costo | Dificultad | Tiempo Setup | Escalabilidad |
|--------|-------|------------|--------------|---------------|
| Vercel + Neon | Gratis | ⭐ Fácil | 5 min | Alta |
| Docker | $5-10/mes | ⭐⭐ Media | 30 min | Alta |
| VPS Manual | $5-20/mes | ⭐⭐⭐ Alta | 1-2 horas | Muy Alta |

---

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel/tu servidor
2. Verifica que la `DATABASE_URL` sea correcta
3. Asegúrate de haber ejecutado `npx prisma migrate deploy`

---

## ✅ Checklist de Despliegue

- [ ] Código en GitHub (✅ Ya lo tienes)
- [ ] Cuenta en Vercel creada
- [ ] Base de datos PostgreSQL lista (Neon/Supabase)
- [ ] Variable `DATABASE_URL` configurada
- [ ] Migraciones ejecutadas (`npx prisma migrate deploy`)
- [ ] Aplicación desplegada
- [ ] Pruebas de funcionalidad
- [ ] Migración de datos completada

---

## 🎉 ¡Listo para Producción!

Una vez desplegado, tu ERP estará disponible 24/7 en internet y podrás:
- ✅ Acceder desde cualquier dispositivo
- ✅ Compartir con tu equipo
- ✅ Usar en las 5 tiendas simultáneamente
- ✅ Tener backups automáticos (con Neon/Supabase)

**Siguiente paso**: ¿Quieres que te ayude a desplegarlo en Vercel ahora mismo?
