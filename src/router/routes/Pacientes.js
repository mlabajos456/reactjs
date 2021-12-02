import { lazy } from 'react'
const PacientesRoutes = [
    {
        path: '/pacientes',
        component: lazy(async () => import('../../views/pacientes/PacientesV'))
    }
]

export default PacientesRoutes
