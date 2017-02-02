package main

import (
	"html/template"
	"log"
	"net/http"
)

type test struct {
	UserName string
}

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	usr := test{UserName: "test"}
	t, _ := template.ParseFiles("./views/main.gtpl")
	t.Execute(w, usr)
}

func signup(w http.ResponseWriter, r *http.Request) {

	s1, _ := template.ParseFiles("./views/header.gtpl", "./views/signup.gtpl", "./views/footer.gtpl")
	s1.ExecuteTemplate(w, "header", nil)
	s1.ExecuteTemplate(w, "signup", nil)
	s1.ExecuteTemplate(w, "footer", nil)
	s1.Execute(w, nil)
}

func main() {
	http.Handle("/asset/", http.StripPrefix("/asset/",
		http.FileServer(http.Dir("./static/"))))
	http.HandleFunc("/", sayhelloName)
	http.HandleFunc("/signup/", signup)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
