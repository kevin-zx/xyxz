package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "daflkj"
	Println(regexp.MatchString("^[a-zA-Z]+$", a))
	// unicode.Is(a)
}
