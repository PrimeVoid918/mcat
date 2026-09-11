package main

import (
	"embed"
	"log"
	"mcat/internal/db"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	actor "mcat/internal/actor"
	genre "mcat/internal/genre"
	image "mcat/internal/image"
	media "mcat/internal/media"
	mediasource "mcat/internal/mediasource"
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
	genreService := genre.NewService(database.Client())
	imageService := image.NewService(database.Client())
	mediasourceService := mediasource.NewService(database.Client())

	// Create an instance of the app structure
	app := NewApp(mediaService, actorService, genreService)

	// Create application with options
	err = wails.Run(&options.App{
		Title:  "mcat",
		Width:  1024,
		Height: 768,
		Debug: options.Debug{
			OpenInspectorOnStartup: true,
		},
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			mediaService,
			genreService,
			actorService,
			imageService,
			mediasourceService,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
