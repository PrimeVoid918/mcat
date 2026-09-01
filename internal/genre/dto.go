package genre

import "errors"

type CreateInput struct {
	Name string
}

func ValidateCreateInput(intput CreateInput) error {
	// if
	return nil
}

type UpdateInput struct {
	Name *string
}

func ValidateUpdateInput(input UpdateInput) error {
	if input.Name == nil {
		return errors.New("at least one field must be provided")
	}

	return nil
}
