import React from 'react'
import { Provider } from 'react-redux'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import Jugadores from './components/Jugadores'
import store from './store'
import styles from './styles/styles.scss'

const App = () => (
	<Provider store={store}>
		<main>
			<h1>Manager</h1>
			<Jugadores />
			<EquipoSeleccionado />
		</main>
	</Provider>
)

export default App
