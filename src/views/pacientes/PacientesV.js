// ** React Imports
import { React, Fragment, useEffect } from 'react'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'

import { getToken } from '@store/actions/login/login'
// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

import { getPacientes } from '@src/services/personaService'
// ** User View Components

// ** Styles
import '@styles/react/apps/app-users.scss'

const PacientesV = () => {
    const store = useSelector(state => state),
        dispatch = useDispatch()
    useEffect(async () => {
        await getPacientes(10, 1, '<>').then((e) => {
            
            dispatch(getToken(e.data.token, e.data.user))
            const usuario = {
                avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,

                ability: [
                    {
                        action: 'manage',
                        subject: 'all'
                    }
                ]

            }
            const data = { ...usuario, accessToken: selector.login.usuario.token }
            ability.update(data.ability)
            history.push(getHomeRouteForLoggedInUser('admin'))
            toast.success(
                <ToastContent name={e.data.user.nombreCompleto} role={e.data.administrador || 'admin'} />,
                { transition: Slide, hideProgressBar: true, autoClose: 2000 }
            )
        }).catch(err => {
            console.log(err)
        })
    }, [dispatch])
    return (
        <Fragment>
            <ListPacientes pacientes></ListPacientes>
        </Fragment>
    )
}

export default PacientesV