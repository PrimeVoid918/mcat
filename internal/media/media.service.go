package media

import "mcat/ent"

type MediaService struct {
	client *ent.Client
}

func NewService(client *ent.Client) *MediaService {
	return &MediaService{
		client: client,
	}
}
