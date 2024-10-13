import {describe, expect, test} from 'vitest';
import {Acme} from './sdk';

describe('sdk', () => {
    test('should fetch data successfully', async () => {
        const acme = new Acme({
            baseUrl: 'https://petstore3.swagger.io/api/v3',
        });

        const pet = await acme.getPetById(1);
        expect(pet).toStrictEqual({
            category: {
                id: 2,
                name: 'Cats',
            },
            id: 1,
            name: 'Cat 1',
            photoUrls: [
                'url1',
                'url2',
            ],
            status: 'available',
            tags: [
                {
                    id: 1,
                    name: 'tag1',
                },
                {
                    id: 2,
                    name: 'tag2',
                },
            ],
        });
    });
});