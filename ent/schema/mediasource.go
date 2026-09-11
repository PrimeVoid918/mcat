package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// MediaSource holds the schema definition for the MediaSource entity.
type MediaSource struct {
	ent.Schema
}

// Fields of the MediaSource.
func (MediaSource) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique().Immutable().DefaultFunc(uuid.NewString),
		field.String("name"),
		field.String("url").Unique(),
	}
}

// Edges of the MediaSource.
func (MediaSource) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("thumbnail", Image.Type).Unique(),               // [1:1] MediaSource -> Image
		edge.From("medias", Media.Type).Ref("sources").Unique(), // [m:1] MediaSource -> Media
	}
}
