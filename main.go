package main

import (
	"embed"
	"log"
	"mcat/internal/db"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	actor "mcat/internal/actor"
	media "mcat/internal/media"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	database, err := db.NewClient(db.Config{FilePath: "./mcat.db"})
	if err != nil {
		log.Fatal(err)
	}
	defer database.Close() // ??

	mediaService := media.NewService(database.Client())
	actorService := actor.NewService(database.Client())

	// Create an instance of the app structure
	app := NewApp(mediaService, actorService)

	// Create application with options
	err = wails.Run(&options.App{
		Title:  "mcat",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			mediaService,
			actorService,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
