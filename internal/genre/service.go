package genre

import (
	"context"
	"mcat/ent"
	"mcat/ent/genre"
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

func (s *Service) FindAll(ctx context.Context) ([]*ent.Genre, error) {
	return s.client.Genre.
		Query().
		All(ctx)
}

func (s *Service) FineById(
	ctx context.Context,
	id string,
) ([]*ent.Genre, error) {
	return s.client.Genre.
		Query().
		Where(genre.IDEQ(id)).
		All(ctx)
}

func (s *Service) Create(
	ctx context.Context,
	input CreateInput,
) (*ent.Genre, error) {
	name, err := validator.ValidateRequiredString(input.Name, "genre name")
	if err != nil {
		return nil, err
	}

	create := s.client.Genre.Create().SetName(name)

	return create.Save(ctx)
}

func (s *Service) Update(
	ctx context.Context,
	id string,
	input UpdateInput,
) (*ent.Genre, error) {
	if err := ValidateUpdateInput(input); err != nil {
		return nil, err
	}

	update := s.client.Genre.UpdateOneID(id)

	return update.Save(ctx)
}

func (s *Service) DeleteById(
	ctx context.Context,
	id string,
) error {
	validId, err := validator.ValidateString(&id, "Genre ID")
	if err != nil {
		return err
	}

	return s.client.Genre.DeleteOneID(validId).Exec(ctx)
}
