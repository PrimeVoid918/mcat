package validator

import (
	"errors"
	"strings"
)

func ValidateString(s *string, fieldName string) (string, error) {
	if s == nil {
		return "", errors.New(fieldName + " is required and cannot be nil")
	}

	// Remove leading/trailing spaces (e.g., "   " becomes "")
	cleaned := strings.TrimSpace(*s)
	if cleaned == "" {
		return "", errors.New(fieldName + " cannot be empty or blank")
	}

	return cleaned, nil
}

func ValidateRequiredString(s string, fieldName string) (string, error) {
	cleaned := strings.TrimSpace(s)

	if cleaned == "" {
		return "", errors.New(fieldName + " cannot be empty or blank")
	}

	return cleaned, nil
}
