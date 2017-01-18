package main

import (
	"crypto/md5"
	"fmt"
)

func main() {
	h := md5.New()
	token := fmt.Sprintf("%x", h.Sum(nil))
	fmt.Println(token)
}
