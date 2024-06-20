import 'module-alias/register';

import { createServer } from 'node:http';
import { showRegisteredAccounts } from '@controllers/UserController';

function application() {
	const server = createServer((request, response) => {
		return response
			.writeHead(200, {
				'Content-Type': 'application/json',
			})
			.end(JSON.stringify(showRegisteredAccounts()));
	});

	return server;
}

const app = application().listen(3333);

app.on('listening', () => console.log('\nServer starded!'));
