from .generated.swagger_petstore_open_api_3_0_client import Client as Client
from .generated.swagger_petstore_open_api_3_0_client.api.pet import get_pet_by_id
from .generated.swagger_petstore_open_api_3_0_client.models import Pet


class Acme:
    """
    A python SDK for the Petstore API. It uses the generated client to perform requests.
    Like the other SDKs, it provides a high-level interface with type bindings.
    """

    def __init__(self, base_url: str):
        self.client = Client(base_url=base_url)

    async def get_pet(self, pet_id) -> Pet:
        async with self.client as client:
            model: Pet = await get_pet_by_id.asyncio(client=client, pet_id=pet_id)
            return model
