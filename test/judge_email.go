package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "daflkj@qq.com"
	Println(regexp.MatchString(`^([\w\.\_]{2,10})@(\w{1,}).([a-z]{2,4})$`, a))
	// unicode.Is(a)
}
