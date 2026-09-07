package mediasource

import (
	"context"
	"mcat/ent"
	"mcat/ent/mediasource"
	"mcat/internal/validator"
)

type Service struct {
	client *ent.Client
}

func NewService(client *ent.Client) *Service {
	return &Service{
		client: client,
	}
}

func (s *Service) FindAll() ([]*ent.MediaSource, error) {
	return s.client.MediaSource.
		Query().
		All(context.Background())
}

func (s *Service) FindOneByID(
	id string,
) (*ent.MediaSource, error) {
	validId, err := validator.ValidateString(&id, "id")
	if err != nil {
		return nil, err
	}

	return s.client.MediaSource.
		Query().
		Where(mediasource.IDEQ(validId)).
		Only(context.Background())
}

func (s *Service) Create(
	input CreateInput,
) (*ent.MediaSource, error) {
	if err := ValidateCreateInput(input); err != nil {
		return nil, err
	}

	create := s.client.MediaSource.
		Create().
		SetName(input.Name).
		SetURL(input.URL)

	return create.Save(context.Background())
}

func (s *Service) Update(

	id string,
	input UpdateInput,
) (*ent.MediaSource, error) {
	validID, err := validator.ValidateString(&id, "id")
	if err != nil {
		return nil, err
	}

	if err := ValidateUpdateInput(input); err != nil {
		return nil, err
	}

	update := s.client.MediaSource.
		UpdateOneID(validID)

	if input.Name != nil {
		update.SetName(*input.Name)
	}
	if input.URL != nil {
		update.SetURL(*input.URL)
	}

	return update.Save(context.Background())
}

func (s *Service) DeleteByID(
	id string,
) error {
	validID, err := validator.ValidateString(&id, "id")
	if err != nil {
		return err
	}

	return s.client.MediaSource.
		DeleteOneID(validID).
		Exec(context.Background())
}
