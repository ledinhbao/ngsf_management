package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Customer struct contains information about an customer
type Customer struct {
	ID               uint   `json:"id"`
	Name             string `json:"name"`
	NGCHolding       int    `json:"ngcholding"`
	Money            int    `json:"money"`
	TransactionCount int    `json:"transaction_count"`
}

func main() {
	app := gin.Default()

	// Allow Access-Control-Allow-Origin in header, before setting any route.
	app.Use(cors.Default())

	// TODO connect to sqlite3 database
	// TODO Fetch customers data from database
	app.GET("/customers", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"customers": []Customer{
				Customer{1, "Tran Huu Nghi", 16000, 160.00, 1},
			},
		})
	})

	app.Run(":8090")
}
