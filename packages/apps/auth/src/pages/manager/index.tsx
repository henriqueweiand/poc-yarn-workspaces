import { Button } from '@monorepo/uikit'
import { formExposed, formValues } from 'auth-components/forms/person/types'
import React, { useRef, useCallback } from 'react'
import { Card, Container, Title, Link } from './styles'
import { ManagerProps } from './types'
import { Forms } from 'auth-components'

const Manager: React.FC<ManagerProps> = () => {
	const formPersonRef = useRef<formExposed>(null)

	const submitAction = useCallback((values: formValues) => {
		// REGRA DE NEGOCIO PARA MANAGER.

		console.log(values)
	}, [])

	return (
		<Container data-test="pages-manager">
			<Title>Manager</Title>
			<Card>
				<Forms.Person ref={formPersonRef} submitAction={submitAction} />

				<Button type="button" onClick={() => formPersonRef.current?.submit()}>
					Enviar
				</Button>

				<Link to="/">Admin</Link>
			</Card>
		</Container>
	)
}

export default Manager
