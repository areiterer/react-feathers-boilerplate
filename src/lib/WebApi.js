import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import authentication from 'feathers-authentication/client';

import { apiUrl } from '../config';

export const app = feathers()
	.configure(rest(apiUrl).fetch(fetch))
	.configure(hooks())
	.configure(authentication({
		storage: window.localStorage
	}));
