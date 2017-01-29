import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import authentication from 'feathers-authentication/client';

export const app = feathers()
	.configure(rest('http://localhost:3030').fetch(fetch))
	.configure(hooks())
	.configure(authentication({
		storage: window.localStorage
	}));
