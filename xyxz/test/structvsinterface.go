package main

import (
	"fmt"
)

type test struct {
	Name string
	Age  int
}

// func unpackStruct(t interface){
// 	// fmt.Println(t)
// 	// fmt.Println("...")
// }

func unpack_struct(i interface{}) {
	fmt.Println(i)

}

func main() {
	fmt.Println("test")
	var t = test{Name: "xy", Age: 10000}
	fmt.Println(t)
	unpack_struct(t)
}
