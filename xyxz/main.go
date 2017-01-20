package main

import (
	"html/template"
	"log"
	"net/http"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("./views/mian.gtpl")
	t.Execute(w, nil)
}

func main() {
	http.Handle("/asset/", http.StripPrefix("/asset/",
		http.FileServer(http.Dir("./static/"))))
	http.HandleFunc("/", sayhelloName)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
