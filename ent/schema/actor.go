package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Actor holds the schema definition for the Actor entity.
type Actor struct {
	ent.Schema
}

// Fields of the Actor.
func (Actor) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique().Immutable().DefaultFunc(uuid.NewString),
		field.String("name"),
		field.Time("birthdate").Optional().Nillable(),
		field.Float("heightCm").Optional(),
		field.Enum("gender").
			Values(
				"Male",
				"Female",
			),
	}
}

// Edges of the Actor.
func (Actor) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("medias", Media.Type).Ref("actors"), // [m:m] Actor -> Media
		edge.To("thumbnail", Image.Type).Unique(),     // [1:1] Actor -> Image
	}
}
