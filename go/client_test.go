package acme

import (
	"acme/generated"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestClient(t *testing.T) {
	client, err := NewClient("https://petstore3.swagger.io/api/v3")
	assert.Nil(t, err)

	pet, err := client.GetPetById(1)
	assert.Nil(t, err)

	// Individually
	assert.Equal(t, "Pet1", pet.Name)
	assert.Equal(t, generated.PetStatus("available"), *pet.Status)
	assert.Equal(t, []string{"test1", "test2"}, pet.PhotoUrls)
	assert.Equal(t, int64(1), *pet.Id)
	assert.Equal(t, 0, len(*pet.Tags))
}
