import { createStore } from 'redux'

const initialState = {
	jugadores: [
		{
			id: 1,
			nombre: 'Nancy Obregon',
			foto: 'https://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg'
		},
		{
			id: 2,
			nombre: 'Nallely Obregon',
			foto: 'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg'
		},
		{
			id: 3,
			nombre: 'Brenda Obregon',
			foto: 'https://image.flaticon.com/icons/png/512/17/17004.png'
		},
		{
			id: 4,
			nombre: 'Berenisse Obregon',
			foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbSGytcoYvho8pFs9u3lOPUfw5jnmvU2EVQ&usqp=CAU'
		},
		{
			id: 5,
			nombre: 'Nancy Obregon',
			foto: 'https://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg'
		},
		{
			id: 6,
			nombre: 'Nallely Obregon',
			foto: 'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg'
		},
		{
			id: 7,
			nombre: 'Brenda Obregon',
			foto: 'https://image.flaticon.com/icons/png/512/17/17004.png'
		},
		{
			id: 8,
			nombre: 'Berenisse Obregon',
			foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbSGytcoYvho8pFs9u3lOPUfw5jnmvU2EVQ&usqp=CAU'
		},
		{
			id: 9,
			nombre: 'Nancy Obregon',
			foto: 'https://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg'
		},
		{
			id: 10,
			nombre: 'Nallely Obregon',
			foto: 'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg'
		},
		{
			id: 11,
			nombre: 'Brenda Obregon',
			foto: 'https://image.flaticon.com/icons/png/512/17/17004.png'
		},
		{
			id: 12,
			nombre: 'Berenisse Obregon',
			foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbSGytcoYvho8pFs9u3lOPUfw5jnmvU2EVQ&usqp=CAU'
		}
	],
	titulares: [],
	suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
	if (action.type === 'AGREGAR_TITULAR') {
		return {
			...state,
			titulares: state.titulares.concat(action.jugador),
			jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id)
		}
	}

	if (action.type === 'AGREGAR_SUPLENTE') {
		return {
			...state,
			suplentes: state.suplentes.concat(action.jugador),
			jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id)
		}
	}

	if (action.type === 'QUITAR_TITULAR') {
		return {
			...state,
			titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
			jugadores: state.jugadores.concat(action.jugador)
		}
	}

	if (action.type === 'QUITAR_SUPLENTE') {
		return {
			...state,
			suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
			jugadores: state.jugadores.concat(action.jugador)
		}
	}

	return state
}

export default createStore(reducerEntrenador)
