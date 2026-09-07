package image

import (
	"context"
	"mcat/ent"
	"mcat/ent/image"
	"mcat/internal/validator"
	"time"
)

type Service struct {
	client *ent.Client
}

func NewService(client *ent.Client) *Service {
	return &Service{
		client: client,
	}
}

func (s *Service) FindAll() ([]*ent.Image, error) {
	return s.client.Image.
		Query().
		All(context.Background())
}

func (s *Service) FindOneByID(
	id string,
) (*ent.Image, error) {
	validId, err := validator.ValidateString(&id, "id")
	if err != nil {
		return nil, err
	}

	return s.client.Image.
		Query().
		Where(image.IDEQ(validId)).
		Only(context.Background())
}

func (s *Service) Create(
	input CreateInput,
) (*ent.Image, error) {
	if err := ValidateCreate(input); err != nil {
		return nil, err
	}

	create := s.client.Image.
		Create().
		SetPath(input.Path).
		SetDisplayType(image.DisplayType(input.DisplayType)).
		SetCreatedAt(time.Now())

	if input.Checksum != nil {
		create.SetChecksum(*input.Checksum)
	}
	if input.FileSizeBytes != nil {
		create.SetFileSizeBytes(*input.FileSizeBytes)
	}
	if input.MimeType != nil {
		create.SetMimeType(*input.MimeType)
	}
	if input.WidthPx != nil {
		create.SetWidthPx(*input.WidthPx)
	}
	if input.HeightPx != nil {
		create.SetHeightPx(*input.HeightPx)
	}
	if input.AltText != nil {
		create.SetAltText(*input.AltText)
	}
	if input.Caption != nil {
		create.SetCaption(*input.Caption)
	}
	// if input.UpdatedAt != nil {
	// 	create.SetUpdatedAt(*input.UpdatedAt)
	// }

	return create.Save(context.Background())
}

func (s *Service) Update(
	id string,
	input UpdateInput,
) (*ent.Image, error) {
	validID, err := validator.ValidateRequiredString(id, "id")
	if err != nil {
		return nil, err
	}

	if err = ValidateUpdateInput(input); err != nil {
		return nil, err
	}

	update := s.client.Image.
		UpdateOneID(validID).
		SetUpdatedAt(time.Now())

	if input.Path != nil {
		update.SetPath(*input.Path)
	}
	if input.Checksum != nil {
		update.SetChecksum(*input.Checksum)
	}
	if input.MimeType != nil {
		update.SetMimeType(*input.MimeType)
	}
	if input.AltText != nil {
		update.SetAltText(*input.AltText)
	}
	if input.Caption != nil {
		update.SetCaption(*input.Caption)
	}
	if input.DisplayType != nil {
		update.SetDisplayType(image.DisplayType(*input.DisplayType))
	}
	if input.FileSizeBytes != nil {
		update.SetFileSizeBytes(*input.FileSizeBytes)
	}
	if input.WidthPx != nil {
		update.SetWidthPx(*input.WidthPx)
	}
	if input.HeightPx != nil {
		update.SetHeightPx(*input.HeightPx)
	}

	return update.Save(context.Background())
}

func (s *Service) DeleteByID(
	id string,
) error {
	validId, err := validator.ValidateString(&id, "delete id")
	if err != nil {
		return err
	}

	return s.client.Image.DeleteOneID(validId).Exec(context.Background())
}
