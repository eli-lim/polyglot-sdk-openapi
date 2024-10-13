import { getPetById, Pet } from "./generated";
import { Client, createClient } from '@hey-api/client-fetch';

import { Config } from "@hey-api/client-fetch";

/**
 * This is an example of how to use the generated client to build a higher-level SDK.
 * Notice that the code here is fully type-safe, and we don't have to manually maintain
 * the API type bindings - the openapi library takes care of that.
 */
export class Acme {

    /**
     * The underlying HTTP client that performs the requests.
     */
    readonly client: Client;

    constructor(config: Config) {
        this.client = createClient(config);

        // Register some middleware
        this.client.interceptors.request.use((request) => {
            request.headers.set('content-type', 'application/json');
            // We can add more logic here, e.g. auth, analytics, etc.
            return request;
        });
    }

    async getPetById(petId: number): Promise<Pet | undefined> {
        const response = await getPetById({
            client: this.client,
            path: {
                petId,
            },
        });

        if (response.error) {
            throw new Error(`Failed to get pet by ID: ${JSON.stringify(response.error)}`);
        }

        return response.data;
    }
}
