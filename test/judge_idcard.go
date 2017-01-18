package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "342422199202281412"
	Println(regexp.MatchString(`^(\d{17})([0-9]|X)$`, a))
	// unicode.Is(a)
}
