import React, { Component } from 'react'
import { CategoriasConsumer } from './../context/CategoriasContext';
import { EventosConsumer } from './../context/EventosContext';


class Formulario extends Component {
	state = { 
		nombre :'',
		categoria : ''
	 }
	 //si le usuario agrega categoria o evento

	 obtenerDatosEvento = e => {
		this.setState({
			[e.target.name] : e.target.value
		})
	 }

	render() { 
		return (
			<EventosConsumer>
			{(value) =>{
				console.log(value)
				return(
						<form
							onSubmit={e => {
								e.preventDefault();
								value.obtenerEventos(this.state)
								}}
						>
						<fieldset className="uk-fieldset uk-margin">
							<legend className= "uk-legend uk-text-center">
								buscar tu evento por nombre o categoria
							</legend>
						</fieldset>

						<div className= "uk-column-1-3@m uk-margin">
							<div className="uk-margin" uk-margin="true">
								<input 
									name ="nombre"
									className ="uk-input"
									type="text"
									placeholder="nombre de evento o ciudad"
									onChange={this.obtenerDatosEvento}
								/>
							</div>
							<div className="uk-margin" uk-margin="true">
								<select
									className="uk-select"
									name="categoria"
									onChange={this.obtenerDatosEvento}
								>
								<option  value="">--Selecciona Categoria --</option>
								<CategoriasConsumer>
									{value =>{
										return (
											value.categorias.map(categoria => (
												<option key={categoria.id} value={categoria.id} data-uk-form-select>
													{categoria.short_name_localized}
												</option>
											))
										)
									}}
								</CategoriasConsumer>

								</select>
							</div>
							<div >
								<input 
									className ="uk-button uk-button-danger"
									type="submit"
									value="buscar envento"
								/>
							</div>					
						</div>
					</form>
				)
			}}

			</EventosConsumer>
		);
	}
}
 
export default Formulario;