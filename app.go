package main

import (
	"context"
	"fmt"
	actor "mcat/internal/actor"
	media "mcat/internal/media"
)

// App struct
type App struct {
	ctx          context.Context
	mediaService *media.Service
	actorService *actor.Service
}

// NewApp creates a new App application struct
func NewApp(mediaService *media.Service, actorService *actor.Service) *App {
	return &App{
		mediaService: mediaService,
		actorService: actorService,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
