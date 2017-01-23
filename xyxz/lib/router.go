package lib

/// Handle is just like "net/http" Handlers, only takes params.
type Handle func(http.ResponseWriter, *http.Request, url.Values)

// Router name says it all.
type Router struct {
	tree        *node
	rootHandler Handle
}

// New creates a new router. It takes the root (fall through) route
// like how the default mux works. The only difference, you get to specify one.
func New(rootHandler Handle) *Router {
	node := node{component: "/", isNamedParam: false, methods: make(map[string]Handle)}
	return &Router{tree: &node, rootHandler: rootHandler}
}
