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
        dispatch()
      /*   await getPacientes(10, 1, '<>').then((e) => {
            
            dispatch(getToken(e.data.token, e.data.user))
            
        
        }).catch(err => {
            console.log(err)
        }) */
    }, [dispatch])
    return (
        <Fragment>
            <ListPacientes pacientes></ListPacientes>
        </Fragment>
    )
}

export default PacientesV