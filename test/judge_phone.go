package main

import (
	. "fmt"
	"regexp"
	// "unicode"
)

func main() {
	a := "daflkj@qq.com"
	Println(regexp.MatchString(`^(1[3|4|5|8][0-9]\d{4,8})$`, a))
	// unicode.Is(a)
}
