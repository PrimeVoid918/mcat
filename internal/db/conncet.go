package db

import (
	"mcat/ent"

	"entgo.io/ent/dialect"
	_ "github.com/mattn/go-sqlite3"
	_ "modernc.org/sqlite"

	"context"
	"fmt"
	"time"
)

type Config struct {
	FilePath string
	InMemory bool
}

type Database struct {
	client *ent.Client
}

func Open(dsn string) (*ent.Client, error) {
	client, err := ent.Open(dialect.SQLite, dsn)
	if err != nil {
		return nil, fmt.Errorf("failed opening connection: %w", err)
	}

	return client, nil
}

func (db *Database) Close() error {
	return db.client.Close()
}

func (db *Database) Client() *ent.Client {
	return db.client
}

// NewClient creates the MCat database client and runs migrations.
func NewClient(cfg Config) (*Database, error) {
	var dsn string

	if cfg.InMemory {
		dsn = "file:ent?mode=memory&cache=shared&_fk=1"
	} else {
		dsn = fmt.Sprintf("file:%s?_fk=1", cfg.FilePath)
	}

	client, err := Open(dsn)
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := client.Schema.Create(ctx); err != nil {
		client.Close()
		return nil, fmt.Errorf("failed creating schema resources: %w", err)
	}

	return &Database{
		client: client,
	}, nil
}
