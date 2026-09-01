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

func (s *Service) FindAll(ctx context.Context) ([]*ent.Media, error) {
	return s.client.Media.
		Query().
		All(ctx)
}

func (s *Service) FindByID(
	ctx context.Context,
	id string,
) (*ent.Media, error) {
	return s.client.Media.
		Query().
		Where(media.IDEQ(id)).
		Only(ctx)
}

func (s *Service) FindByCode(
	ctx context.Context,
	code string,
) (*ent.Media, error) {
	return s.client.Media.
		Query().
		Where(media.CodeEQ(code)).
		Only(ctx)
}

func (s *Service) Create(
	ctx context.Context,
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

	return build.Save(ctx)
}

func (s *Service) Update(
	ctx context.Context,
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

	return build.Save(ctx)
}

func (s *Service) DeleteById(
	ctx context.Context,
	id string,
) error {
	validId, err := validator.ValidateString(&id, "media ID")
	if err != nil {
		return err
	}

	return s.client.Media.
		DeleteOneID(validId).
		Exec(ctx)
}
