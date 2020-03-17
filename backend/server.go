package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Customer struct contains information about an customer
type Customer struct {
	ID               uint   `json:"id"`
	Name             string `json:"name" form:"name"`
	NGCHolding       int    `json:"ngcholding"`
	Money            int    `json:"money"`
	TransactionCount int    `json:"transaction_count"`
}

var customers []Customer

func main() {
	app := gin.Default()

	// Allow Access-Control-Allow-Origin in header, before setting any route.
	app.Use(cors.Default())

	// TODO connect to sqlite3 database
	// TODO Fetch customers data from database
	app.GET("/customers", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"customers": customers,
		})
	})

	app.POST("/customer/create", func(c *gin.Context) {
		var newCustomer Customer = Customer{}
		c.BindJSON(&newCustomer)
		newCustomer.ID = uint(len(customers) + 1)
		customers = append(customers, newCustomer)
		// return status OK to client
		c.JSON(http.StatusOK, gin.H{
			"message": "Customer created",
		})
	})

	app.Run(":8090")
}
