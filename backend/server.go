package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/ledinhbao/ngsf-management/ngsf"
)

// CustomerAPIData struct contains information about an customer
type CustomerAPIData struct {
	ID               uint   `json:"id"`
	Name             string `json:"name" form:"name"`
	NGCHolding       int    `json:"ngcholding" form:"ngcholding"`
	Money            int    `json:"money" form:"money"`
	TransactionCount int    `json:"transaction_count"`
}

var customers = []CustomerAPIData{
	CustomerAPIData{
		ID:               1,
		Name:             "Tran Huu Nghi",
		NGCHolding:       16000,
		Money:            160,
		TransactionCount: 1,
	},
}
var ngcTransactions = []ngsf.NGCTransaction{
	{
		ID:         1,
		CustomerID: 1,
		Amount:     16000,
		Price:      160,
		Date:       time.Date(2020, 01, 10, 8, 0, 00, 0, time.Local),
		CreatedAt:  time.Now(),
		UpdatedAt:  time.Now(),
	},
}

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
		var newCustomer CustomerAPIData = CustomerAPIData{}
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
