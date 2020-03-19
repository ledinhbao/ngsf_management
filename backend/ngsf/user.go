package ngsf

import "time"

type User struct {
	ID        uint
	Username  string
	Password  string
	Email     string
	Rank      int
	CreatedAt time.Time
	UpdatedAt time.Time
}
