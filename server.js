/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Función multiplicación de 2 números
const multiplicacion = (n1, n2) => {
	return n1 * n2;
}

// App
const app = express();

app.get('/', (req, res) => {
	// Obtener los valores de los query parameters
	const n1 = parseFloat(req.query.n1);
	const n2 = parseFloat(req.query.n2);

	// Verificar que los parámetros sean números válidos
	if (isNaN(n1) || isNaN(n2)) {
		res.status(400).send('Por favor, proporcione números válidos para n1 y n2.');
		return;
	}

	// Calcular el resultado de la multiplicación
	const resultado = multiplicacion(n1, n2);

	// Responder con el resultado
	res.send(`Hello remote world!\nEl resultado de la multiplicación es: ${resultado}`);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// Exportar la función para usarla en las pruebas
module.exports = {
	multiplicacion
};
