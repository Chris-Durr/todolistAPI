import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function Home() {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	function borrar(i) {
		let re = lista.filter((valor, index) => {
			return index != i;
		});
		setLista(re);
	}
	return (
		<div className="ToDoApp text-center">
			<h1>ToDO List</h1>
			<input
				placeholder="Add ToDo"
				onChange={(e) => {
					setTarea(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setLista([...lista, tarea]);
				}}>
				Agregar ToDO
			</button>
			<ul id="uladd">
				{lista.map(function (valor, i) {
					return (
						<li key={i}>
							{valor}
							<Button
								variant="outline-danger"
								onClick={() => {
									borrar(i);
								}}>
								✕
							</Button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
