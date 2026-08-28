package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Media holds the schema definition for the Media entity.
type Media struct {
	ent.Schema
}

// Fields of the Media.
func (Media) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique().Immutable(),
		field.String("title"),
		field.String("code").Unique(),
		field.Int("durationSeconds").Optional(),
		field.Time("releaseDate").Optional(),
		field.String("description").Optional(),
	}
}

// Edges of the Media.
func (Media) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("actors", Actor.Type),             // [m:m] Media -> Actors
		edge.To("genres", Genre.Type),             // [m:m] Media -> Genres
		edge.To("sources", MediaSource.Type),      // [1:m] Media -> MediaSource
		edge.To("thumbnail", Image.Type).Unique(), // [1:1] Media -> Image
		edge.To("previews", Image.Type),           // [1:m] Media -> Image
	}
}
