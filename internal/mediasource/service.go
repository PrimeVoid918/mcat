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

func (s *Service) FindAll(
	ctx context.Context,
) ([]*ent.MediaSource, error) {
	return s.client.MediaSource.
		Query().
		All(ctx)
}

func (s *Service) FindOneByID(
	ctx context.Context,
	id string,
) (*ent.MediaSource, error) {
	validId, err := validator.ValidateString(&id, "id")
	if err != nil {
		return nil, err
	}

	return s.client.MediaSource.
		Query().
		Where(mediasource.IDEQ(validId)).
		Only(ctx)
}

func (s *Service) Create(
	ctx context.Context,
	input CreateInput,
) (*ent.MediaSource, error) {
	if err := ValidateCreateInput(input); err != nil {
		return nil, err
	}

	create := s.client.MediaSource.
		Create().
		SetName(input.Name).
		SetURL(input.URL)

	return create.Save(ctx)
}

func (s *Service) Update(
	ctx context.Context,
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

	return update.Save(ctx)
}

func (s *Service) DeleteByID(
	ctx context.Context,
	id string,
) error {
	validID, err := validator.ValidateString(&id, "id")
	if err != nil {
		return err
	}

	return s.client.MediaSource.DeleteOneID(validID).Exec(ctx)
}
