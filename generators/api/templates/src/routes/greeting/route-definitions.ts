import { IRouteDefinition } from '@vamship/expressjs-routes';
import greetingHandler from '../../handlers/greeting-handler';

const routeDefinitions: IRouteDefinition[] = [
    {
        method: 'GET',
        path: '/:language/:name',
        handler: greetingHandler,
        inputMapper: {
            name: 'params.name',
            language: 'params.language'
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            description: 'Schema for greet user API',
            properties: {
                language: { type: 'string', enum: ['en', 'fr'] },
                name: { type: 'string', minLength: 2 }
            },
            required: ['name', 'language']
        }
    }
];

export default routeDefinitions;
