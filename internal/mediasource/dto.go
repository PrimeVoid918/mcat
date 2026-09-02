package mediasource

import (
	"errors"
	"mcat/internal/validator"
)

//! url parser to validate it is a valid url

type CreateInput struct {
	Name string
	URL  string
}

func ValidateCreateInput(input CreateInput) error {
	_, err := validator.ValidateRequiredString(input.Name, "name")
	if err != nil {
		return err
	}
	_, err = validator.ValidateRequiredString(input.URL, "url")
	if err != nil {
		return err
	}

	return nil
}

type UpdateInput struct {
	Name *string
	URL  *string
}

func ValidateUpdateInput(input UpdateInput) error {
	if input.Name == nil && input.URL == nil {
		return errors.New("at least one field must be provided")
	}

	if input.Name != nil {
		if _, err := validator.ValidateRequiredString(*input.Name, "name"); err != nil {
			return err
		}
	}

	if input.URL != nil {
		if _, err := validator.ValidateRequiredString(*input.URL, "url"); err != nil {
			return err
		}
	}

	return nil
}
