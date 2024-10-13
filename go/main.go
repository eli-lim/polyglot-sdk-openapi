package main

import (
	"acme/generated"
	"context"
	"log"
)

func main() {
	// Init the generated client
	genClient, err := generated.NewClientWithResponses("https://petstore3.swagger.io/api/v3")
	if err != nil {
		log.Fatal(err)
	}

	// Make a request
	response, err := genClient.GetPetByIdWithResponse(context.TODO(), 1)
	if err != nil {
		log.Fatal(err)
	}

	pet := response.JSON200
	log.Println(pet)
}
