package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Customer struct contains information about an customer
type Customer struct {
	ID   uint   `json:"id"`
	Name string `json:"name"`
}

func main() {
	app := gin.Default()

	// Allow Access-Control-Allow-Origin in header, before setting any route.
	app.Use(cors.Default())

	// TODO connect to sqlite3 database
	// TODO Fetch customers data from database
	app.GET("/customers", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"customers": Customer{ID: 1, Name: "Tran Huu Nghi"},
		})
	})

	app.Run(":8090")
}
