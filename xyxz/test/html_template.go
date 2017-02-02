package main

import (
	"html/template"
	"log"
	"os"
)

func main() {
	const tpl = `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>{{.Title}}</title>
	</head>
	<body>
		{{range .Items}}<div>{{ .a }}</div>{{else}}<div><strong>no rows</strong></div>{{end}}
	</body>
</html>`

	check := func(err error) {
		if err != nil {
			log.Fatal(err)
		}
	}
	t, err := template.New("webpage").Parse(tpl)
	check(err)

	data := struct {
		Title string
		Items []map[string]string
	}{
		Title: "My page",
		Items: []map[string]string{
			map[string]string{
				"a": "aa",
				"b": "bb",
			},
		},
	}

	err = t.Execute(os.Stdout, data)
	check(err)

	// noItems := struct {
	// 	Title string
	// 	Items []string
	// }{
	// 	Title: "My another page",
	// 	Items: []string{},
	// }

	// err = t.Execute(os.Stdout, noItems)
	// check(err)

}
