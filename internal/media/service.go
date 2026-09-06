package media

import (
	"context"
	"mcat/ent"
	"mcat/ent/media"
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

func (s *Service) FindAll() ([]*ent.Media, error) {
	return s.client.Media.
		Query().
		All(context.Background())
}

func (s *Service) FindByID(
	id string,
) (*ent.Media, error) {
	return s.client.Media.
		Query().
		Where(media.IDEQ(id)).
		Only(context.Background())
}

func (s *Service) FindByCode(
	code string,
) (*ent.Media, error) {
	return s.client.Media.
		Query().
		Where(media.CodeEQ(code)).
		Only(context.Background())
}

func (s *Service) Create(
	input CreateInput,
) (*ent.Media, error) {
	if err := ValidateCreateInput(input); err != nil {
		return nil, err
	}

	build := s.client.Media.
		Create().
		SetTitle(input.Title).
		SetCode(input.Code)

	if input.DurationSeconds != nil {
		build.SetDurationSeconds(*input.DurationSeconds)
	}

	if input.ReleaseDate != nil {
		build.SetReleaseDate(*input.ReleaseDate)
	}

	if input.Description != nil {
		build.SetDescription(*input.Description)
	}

	return build.Save(context.Background())
}

func (s *Service) Update(
	id string,
	input UpdatePayloadInput,
) (*ent.Media, error) {
	if err := ValidateUpdatePayload(input); err != nil {
		return nil, err
	}

	build := s.client.Media.UpdateOneID(id)

	if input.Title != nil {
		build.SetTitle(*input.Title)
	}

	if input.Code != nil {
		build.SetCode(*input.Code)
	}

	if input.DurationSeconds != nil {
		build.SetDurationSeconds(*input.DurationSeconds)
	}

	if input.ReleaseDate != nil {
		build.SetReleaseDate(*input.ReleaseDate)
	}

	if input.Description != nil {
		build.SetDescription(*input.Description)
	}

	return build.Save(context.Background())
}

func (s *Service) DeleteById(
	id string,
) error {
	validId, err := validator.ValidateString(&id, "media ID")
	if err != nil {
		return err
	}

	return s.client.Media.
		DeleteOneID(validId).
		Exec(context.Background())
}
