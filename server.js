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
	const resultado = multiplicacion(3, 4);
	res.send(`Hello remote world!\nEl resultado de la multiplicación es: ${resultado}`);
});

// Iniciar el servidor solo si el archivo es ejecutado directamente
if (require.main === module) {
	app.listen(PORT, HOST);
	console.log(`Running on http://${HOST}:${PORT}`);
}

// Exportar la función para usarla en las pruebas
module.exports = {
	multiplicacion
};