package media

import (
	"errors"
	"time"
)

type CreateInput struct {
	Title           string
	Code            string
	DurationSeconds *int
	ReleaseDate     *time.Time
	Description     *string
}

// ! refactor, use (input *CreateInput)
func ValidateCreateInput(input CreateInput) error {
	if input.DurationSeconds != nil && *input.DurationSeconds < 0 {
		return errors.New("duration cannot be negative")
	}
	if input.ReleaseDate != nil && input.ReleaseDate.IsZero() {
		//! other possible time
		return errors.New("invalid date")
	}
	//! possible string validator
	// if input.Description != nil {
	// 	return errors.New("duration cannot be negative")
	// }
	return nil
}

type UpdatePayloadInput struct { // pointers are used here because they can be nil
	Title           *string
	Code            *string
	DurationSeconds *int
	ReleaseDate     *time.Time
	Description     *string
}

func ValidateUpdatePayload(input UpdatePayloadInput) error {
	if input.Title == nil &&
		input.Code == nil &&
		input.DurationSeconds == nil &&
		input.ReleaseDate == nil &&
		input.Description == nil {
		return errors.New("at least one field must be provided")
	}
	if input.DurationSeconds != nil && *input.DurationSeconds < 0 {
		return errors.New("duration cannot be negative")
	}
	if input.ReleaseDate != nil && input.ReleaseDate.IsZero() {
		//! other possible time
		return errors.New("invalid date")
	}
	//! possible string validator
	// if input.Description != nil {
	// 	return errors.New("duration cannot be negative")
	// }
	return nil
}
