package actor

import (
	"context"
	"mcat/ent"
	"mcat/ent/actor"
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

func (s *Service) FindByID(
	id string,
) (*ent.Actor, error) {
	return s.client.Actor.
		Query().
		Where(actor.IDEQ(id)).
		Only(context.Background())
}

func (s *Service) Create(
	input CreateInput,
) (*ent.Actor, error) {
	if err := ValidateCreateInput(input); err != nil {
		return nil, err
	}

	create := s.client.Actor.
		Create().
		SetName(input.Name).
		// SetGender(input.Gender)
		SetGender(actor.Gender(input.Gender))

	if input.Birthdate != nil {
		create.SetBirthdate(*input.Birthdate)
	}
	if input.HeightCm != nil {
		create.SetHeightCm(*input.HeightCm)
	}

	return create.Save(context.Background())
}

func (s *Service) Update(
	id string,
	input UpdateInput,
) (*ent.Actor, error) {
	if err := ValidateUpdateInput(input); err != nil {
		return nil, err
	}

	cleanId, err := validator.ValidateString(&id, "update ID")
	if err != nil {
		return nil, err
	}

	update := s.client.Actor.UpdateOneID(cleanId)

	if input.Name != nil {
		update.SetName(*input.Name)
	}

	if input.Birthdate != nil {
		update.SetBirthdate(*input.Birthdate)
	}

	if input.HeightCm != nil {
		update.SetHeightCm(*input.HeightCm)
	}

	if input.Gender != nil {
		update.SetGender(actor.Gender(*input.Gender))
	}

	return update.Save(context.Background())
}

func (s *Service) DeleteByID(
	id string,
) error {
	validId, err := validator.ValidateString(&id, "actor ID")
	if err != nil {
		return err
	}

	return s.client.Actor.
		DeleteOneID(validId).Exec(context.Background())
}
