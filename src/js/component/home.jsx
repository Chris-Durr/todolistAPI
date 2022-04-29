import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function Home() {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	//WOLOLO 1

	useEffect(() => {
		subirToDo();
	}, [lista]);

	useEffect(() => {
		descargarToDo();
	}, []);

	function subirToDo() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(lista);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			redirect: "follow",
			body: raw,
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/ChrisDurr",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
			})
			.catch((error) => console.log("error", error));
	}

	function descargarToDo() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/ChrisDurr")
			.then((response) => response.json())
			.then((result) => setLista(result))
			.catch((error) => console.log("error", error));
	}
	//WOLOLO 2
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
					setLista([...lista, { label: tarea, done: false }]);
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
