package actor

import "mcat/ent"

type ActorService struct {
	client *ent.Client
}

func NewService(client *ent.Client) *ActorService {
	return &ActorService{
		client: client,
	}
}
