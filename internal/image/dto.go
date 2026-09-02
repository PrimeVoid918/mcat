package image

import (
	"errors"
	"mcat/internal/validator"
)

type CreateInput struct {
	Path          string
	Checksum      *string
	FileSizeBytes *int
	MimeType      *string
	WidthPx       *int
	HeightPx      *int
	AltText       *string
	Caption       *string
	// CreatedAt     time.Time // created upon db creation
	// UpdatedAt   *time.Time
	DisplayType string
}

func ValidateDisplayTypeEnum(input string) error {
	switch input {
	case "PREVIEW", "THUMBNAIL":
		return nil
	default:
		return errors.New("invalid display type")
	}
}

func ValidateCreate(input CreateInput) error {
	_, err := validator.ValidateRequiredString(input.Path, "path")
	if err != nil {
		return err
	}
	_, err = validator.ValidateRequiredString(input.DisplayType, "display_type")
	if err != nil {
		return err
	}

	err = ValidateDisplayTypeEnum(input.DisplayType)
	if err != nil {
		return err
	}

	if input.FileSizeBytes != nil && *input.FileSizeBytes < 0 {
		return errors.New("file size bytes cannot be negative")
	}
	if input.WidthPx != nil && *input.WidthPx < 0 {
		return errors.New("width px cannot be negative")
	}
	if input.HeightPx != nil && *input.HeightPx < 0 {
		return errors.New("height px cannot be negative")
	}

	return nil
}

type UpdateInput struct {
	Path          *string
	Checksum      *string
	MimeType      *string
	AltText       *string
	Caption       *string
	DisplayType   *string
	FileSizeBytes *int
	WidthPx       *int
	HeightPx      *int
}

func ValidateUpdateInput(input UpdateInput) error {
	if input.Path == nil &&
		input.Checksum == nil &&
		input.MimeType == nil &&
		input.AltText == nil &&
		input.Caption == nil &&
		input.DisplayType == nil &&
		input.FileSizeBytes == nil &&
		input.WidthPx == nil &&
		input.HeightPx == nil {
		return errors.New("at least one field must be provided")
	}

	if input.Path != nil {
		if _, err := validator.ValidateString(input.Path, "Path"); err != nil {

			return err
		}
	}
	if input.Checksum != nil {
		if _, err := validator.ValidateString(input.Checksum, "Checksum"); err != nil {
			return err

		}
	}
	// if input.AltText != nil {
	// 	if _, err := validator.ValidateString(input.AltText, "AltText"); err != nil {
	// 		return err
	// 	}
	// }
	// if input.Caption != nil {
	// 	_, err := validator.ValidateString(input.Caption, "Caption")
	// 	if err != nil {
	// 		return err
	// 	}
	// }

	if input.MimeType != nil {
		if _, err := validator.ValidateRequiredString(*input.MimeType, "mime type"); err != nil {
			return err
		}

		if err := ValidateMimeType(*input.MimeType); err != nil {
			return err
		}
	}

	if input.DisplayType != nil {
		if _, err := validator.ValidateRequiredString(*input.DisplayType, "display type"); err != nil {
			return err
		}

		if err := ValidateDisplayTypeEnum(*input.DisplayType); err != nil {
			return err
		}
	}

	if input.FileSizeBytes != nil && *input.FileSizeBytes < 0 {
		return errors.New("file size bytes cannot be negative")
	}
	if input.WidthPx != nil && *input.WidthPx < 0 {
		return errors.New("width px cannot be negative")
	}
	if input.HeightPx != nil && *input.HeightPx < 0 {
		return errors.New("height px cannot be negative")
	}

	return nil
}

func ValidateMimeType(value string) error {
	switch value {
	case "image/jpeg",
		"image/png",
		"image/webp",
		"image/gif":
		return nil
	default:
		return errors.New("unsupported image MIME type")
	}
}
