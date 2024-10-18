package acme

import (
	"acme/generated"
	"context"
	"time"
)

// Client is a client for the acme service.
type Client struct {
	client *generated.ClientWithResponses
}

// NewClient creates a new client for the acme service
func NewClient(url string) (*Client, error) {
	genClient, err := generated.NewClientWithResponses(url)
	if err != nil {
		return nil, err
	}

	acme := Client{client: genClient}
	return &acme, nil
}

// GetPetById an example of a higher level function that uses the generated client
func (a *Client) GetPetById(id int64) (*generated.Pet, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	response, err := a.client.GetPetByIdWithResponse(ctx, id)
	if err != nil {
		return nil, err
	}

	// types!
	pet := response.JSON200
	return pet, nil
}
