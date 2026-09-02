package actor

import (
	"errors"
	"mcat/internal/validator"
	"time"
)

type CreateInput struct {
	Name      string
	Birthdate *time.Time
	HeightCm  *float64
	Gender    string
}

// possible global enum validation heler
func ValidateGenderEnum(gender string) error {
	switch gender {
	case "Male", "Female":
		return nil
	default:
		return errors.New("invalid gender")
	}
}

func ValidateCreateInput(input CreateInput) error {
	if _, err := validator.ValidateRequiredString(input.Name, "name"); err != nil {
		return err
	}
	if err := ValidateGenderEnum(input.Gender); err != nil {
		return errors.New("invalid gender type, only Male/Female")
	}

	//!add a realistic maximum
	if input.HeightCm != nil && *input.HeightCm < 0 {
		return errors.New("HeightCm cannot be negative")
	}
	//! Birthdate must not be in the future.
	if input.Birthdate != nil && input.Birthdate.IsZero() {
		//! other possible time
		return errors.New("invalid date")
	}

	return nil
}

type UpdateInput struct {
	Name      *string
	Birthdate *time.Time
	HeightCm  *float64
	Gender    *string
}

func ValidateUpdateInput(input UpdateInput) error {
	if input.Name == nil &&
		input.Birthdate == nil &&
		input.HeightCm == nil &&
		input.Gender == nil {
		return errors.New("at least one of the field must be provided")
	}

	if input.Name != nil {
		if _, err := validator.ValidateRequiredString(*input.Name, "name"); err != nil {
			return err
		}
	}

	if input.Gender != nil {
		if err := ValidateGenderEnum(*input.Gender); err != nil {
			return errors.New("invalid gender type, only Male/Female")
		}
	}

	//!
	if input.HeightCm != nil && *input.HeightCm < 0 {
		return errors.New("HeightCm cannot be negative")
	}

	//!
	if input.Birthdate != nil && input.Birthdate.IsZero() {
		return errors.New("invalid date")
	}

	return nil
}
