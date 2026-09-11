package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Image holds the schema definition for the Image entity.
type Image struct {
	ent.Schema
}

// Fields of the Image.
func (Image) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique().Immutable().DefaultFunc(uuid.NewString),
		field.String("path"),
		field.String("checksum").Optional(),
		field.Int("fileSizeBytes").Optional(),
		field.String("mimeType").Optional(), // supposed to be enum
		field.Int("widthPx").Optional(),
		field.Int("heightPx").Optional(),
		field.String("altText").Optional(),
		field.String("caption").Optional(),
		field.Time("createdAt"),
		field.Time("updatedAt").Optional(),
		field.Enum("displayType").
			Values(
				"PREVIEW",
				"THUMBNAIL",
			),
	}
}

// Edges of the Image.
func (Image) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("actor", Actor.Type).Ref("thumbnail").Unique(),             // [1:1] Image -> Actor
		edge.From("mediaSource", MediaSource.Type).Ref("thumbnail").Unique(), // [1:1] Image -> MediaSource
		edge.From("media", Media.Type).Ref("thumbnail").Unique(),             // [1:1] Image -> Media
		edge.From("mediaas", Media.Type).Ref("previews").Unique(),            // [m:1] Image -> Meida
	}
}
