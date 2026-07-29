<div align="center">

# 🍕 Pizzeria Luna

### Sistema full-stack de gestión de pizzería en tiempo real

Proyecto de aprendizaje construido para dominar arquitectura de software de nivel senior:
backend, frontend, base de datos, tiempo real, seguridad, testing, CI/CD e IA.

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)

</div>

<br/>

## 📌 Sobre el proyecto

**Pizzeria Luna** simula una plataforma real de pedidos para una cadena de pizzerías con
múltiples locales. No es solo un CRUD: incluye **seis roles con vistas y permisos distintos**,
**actualizaciones en tiempo real** entre cliente/cocina/repartidor, **pagos con tarjeta
tokenizados vía Stripe**, y una arquitectura pensada para escalar a varios locales.

Construido como ejercicio deliberado para practicar el ciclo completo de un producto de
software real: desde el diseño de base de datos hasta CI/CD y hardening de seguridad.

<br/>

## 🧑‍🤝‍🧑 Roles del sistema

<div align="center">

| Rol | Puede hacer |
|---|---|
| 🧑 **Cliente** | Pedir, pagar con tarjeta, ver seguimiento del pedido en tiempo real |
| 🧑‍🍳 **Cocinero** | Seleccionar pedidos, seguir receta paso a paso o marcarla como completada |
| 🧑‍🍽️ **Mesero** | Crear pedidos por mesa/para llevar, gestionar pedidos web del local |
| 🛵 **Repartidor** | Ver entregas asignadas, confirmar pago (efectivo/tarjeta), actualizar estado |
| 👔 **Gerente** | Dashboard de su local, gestión de personal e inventario |
| 🛠️ **Admin General** | Dashboards de todos los locales, creación de cuentas y locales |

</div>

<br/>

## 🏗️ Arquitectura

<details>
<summary><b>Ver detalles de arquitectura</b></summary>

<br/>

- **Monorepo** gestionado con `pnpm workspaces` + `Turborepo`
- `apps/web` — React + TypeScript, rutas protegidas por rol
- `apps/api` — Node.js + Express + TypeScript, API REST + WebSocket (Socket.io)
- `apps/ai-service` — Python + FastAPI, microservicio de recomendaciones
- `packages/shared` — tipos TypeScript y componentes UI compartidos
- **PostgreSQL** como base de datos principal (Prisma ORM)
- **Redis** para caché y propagación de eventos en tiempo real

</details>

<br/>

## 🛣️ Roadmap del proyecto

Progreso gestionado 100% con [GitHub Projects](../../projects) y [Milestones](../../milestones).

- [x] Fase 0 — Discovery y alcance
- [x] Fase 1 — Arquitectura y stack
- [x] Fase 2 — Gestión del proyecto
- [x] Fase 3 — Setup de repositorio
- [ ] Fase 4 — Diseño de base de datos
- [ ] Fase 5 — Backend: autenticación y roles
- [ ] Fase 6 — Backend: lógica de negocio
- [ ] Fase 7 — Frontend: vistas por rol
- [ ] Fase 8 — Integración
- [ ] Fase 9 — QA, testing y Postman
- [ ] Fase 10 — Seguridad (hardening)
- [ ] Fase 11 — CI/CD y despliegue

<br/>

## ⚙️ Cómo correrlo localmente

```bash
# Clonar el repositorio
git clone https://github.com/Cristian880/Pizzeria-Luna.git
cd Pizzeria-Luna

# Instalar dependencias (monorepo completo)
pnpm install

# Levantar todas las apps en modo desarrollo
pnpm dev
```

> Requiere Node.js 20+, pnpm 9+, y una instancia de PostgreSQL corriendo localmente
> (o vía Docker — instrucciones detalladas próximamente en `/docs`).

<br/>

## 📄 Licencia

Distribuido bajo licencia MIT. Ver [`LICENSE`](./LICENSE) para más detalles.

<br/>

<div align="center">

Hecho con 🍕 y muchas tazas de café por **Cristian**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Cristian880)

</div>
<div align="center">
esto es una 2da prueba de push hacia el main, provando denegacion y pull request 
</div>
