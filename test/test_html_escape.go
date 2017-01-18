package main

import (
	. "fmt"
	"html/template"
)

func main() {
	//template HTMLEscape的主要作用是过滤html标签
	html_str := "insert into aaa <>"
	Println(html_str)
	Println(template.HTMLEscapeString(html_str))
}
