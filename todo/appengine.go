// Copyright 2011 The Go Authors.  All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// +build appengine

package todo

import (
	"net/http"

	"github.com/campoy/todo/server"
)

func init() {
	http.Handle("/task/", server.Handler())
}