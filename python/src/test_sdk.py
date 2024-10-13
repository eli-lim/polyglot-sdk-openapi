from .generated.swagger_petstore_open_api_3_0_client.models import Pet
from .sdk import Acme

async def test_main():
    """
    An example using the SDK to get a pet by ID.
    """

    client = Acme('https://petstore3.swagger.io/api/v3')

    pet = await client.get_pet(1)

    assert pet == Pet.from_dict({
        'category': {
            'id': 2,
            'name': 'Cats',
        },
        'id': 1,
        'name': 'Cat 1',
        'photoUrls': [
            'url1',
            'url2',
        ],
        'status': 'available',
        'tags': [
            {
                'id': 1,
                'name': 'tag1',
            },
            {
                'id': 2,
                'name': 'tag2',
            },
        ],
    })