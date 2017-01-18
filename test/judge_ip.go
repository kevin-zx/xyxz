package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "127.0.0.1"
	Println(regexp.MatchString("^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$", a))
	// unicode.Is(a)
}
