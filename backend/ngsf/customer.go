package ngsf

import "time"

type Customer struct {
	ID        uint
	Name      string
	CreatedAt time.Time
	UpdatedAt time.Time
}
