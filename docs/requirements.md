# Requirements

## Functional requirements
- FR-001: La app debe renderizarse como embedded app dentro de Shopify Admin usando React Router, App Bridge y Polaris web components.
- FR-002: El dashboard debe mostrar estado general, metricas y cola principal de collection rule explanation.
- FR-003: La pantalla Rule debugger debe mostrar datos de ejemplo, prioridades, acciones visuales y limites del MVP.
- FR-004: La pantalla Collections debe validar server-side workflowName, ownerEmail y threshold.
- FR-005: La app debe mostrar estados loading, empty, success, error, validation error y permission error.
- FR-006: La integracion Shopify debe usar loaders/actions autenticados con authenticate.admin para rutas /app.
- FR-007: La app debe documentar y comprobar scopes requeridos: read_products.
- FR-008: Las respuestas GraphQL futuras deben manejar errors top-level y userErrors sin marcar exito falso.
- FR-009: La app debe incluir fixtures, mocks MSW, tests unitarios, componentes, E2E y accesibilidad.

## Pantallas necesarias
- Dashboard: collection health and top failing conditions.
- Rule debugger: pass/fail rule matrix.
- Collections: ignored collection settings.
- Help/QA: rule semantics and edge cases.

## Acciones del merchant
- Abrir dashboard.
- Revisar cola operativa.
- Cambiar escenario visual en workspace.
- Validar settings.
- Revisar QA y limites.

## Datos creados/leidos/actualizados/eliminados
- Lee datos mockeados en MVP visual.
- Persiste solo sesiones OAuth via Prisma.
- Define AppSetting y AppAuditEvent para la siguiente iteracion.
- No borra datos merchant.

## Shopify Admin API
- Admin GraphQL product and collection reads for rule conditions.
- Collection rule data and product fields evaluated server-side.
- Future admin block can open debugger from product or collection pages.

## Scopes requeridos
- Pedir: read_products
- No pedir: write_products, read_orders, read_customers

## Webhooks
- app/uninstalled
- app/scopes_update

## Billing
- No requerido para MVP visual. Futuro: plan mensual simple despues de validar funcionalidad real.

## AI
- No se usa IA en MVP. No se requieren API keys ni prompts.

## Non-functional requirements
- Seguridad: tokens solo server-side, secrets solo env vars.
- Privacidad: no customer/order data salvo que sea imprescindible en futuras versiones.
- Performance: paginacion cursor-based para listados reales.
- Accesibilidad: labels, foco visible, axe en preview.
- Resiliencia: estados recuperables para errores API, scopes y sesion.
- Mantenibilidad: config centralizada por app y tests trazables.
- Observabilidad: AppAuditEvent sin PII para acciones futuras.
- Localizacion: UI en ingles inicial, copy aislado para futura i18n.
