package ngsf

import "time"

// NGCTransaction records a transaction between customer and the Capital
type NGCTransaction struct {
	ID         uint
	CustomerID uint
	Amount     int
	Price      float32
	Date       time.Time

	// database fields
	CreatedAt time.Time
	UpdatedAt time.Time
}
