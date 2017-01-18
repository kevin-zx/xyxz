package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "汉字1"
	Println(regexp.MatchString("^\\p{Han}+$", a))
	// unicode.Is(a)
}
