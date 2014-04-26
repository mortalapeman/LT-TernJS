## TernJS

A Light Table plugin utilizing [Tern](https://github.com/marijnh/tern), a fantastic JavaScript code analysis server.

### Features

* Auto-completion
* In-line documentation
* Jump to definition

The listed features are only a subset of what Tern is capable of, more to come.

### Configuration

Normally tern servers are configured through a `.tern-project` file; however, the ability for a workspace to contain multiple directories means multiple configuration files could exist for one workspace. Support for `.tern-project` files is coming, it's just not there yet.

#### Behavior Configuration

The default configuration for Tern is the browser environment `(:lt.plugins.tern/libs :browser :ecma5)`. To change to nodejs, merge the following changes in to your workspace behaviors:

    {:+ {:tern.config [(:lt.plugins.tern/libs :ecma5)
                       (:lt.plugins.tern/plugin :node true)]}
     :- {:tern.config [:lt.plugins.tern/libs]}}

To setup a configuration for RequireJS:

    {:+ {:tern.config [(:lt.plugins.tern/plugin :requirejs {:baseURL "/home/path/to/project/dir"})
                       :lt.plugins.tern/lazy-loading]}}

Arguments to `:lt.plugins.tern/libs` can be:

1. One or many built in libs: `:ecma5 :browser :jquery :underscore`
2. One or many file path(s) to valid JSON Tern lib(s).

Arguments to `:lt.plugins.tern/plugin` can be:

1. One of the built in plugins: `:angular :component :doc_comment :node :requirejs`
2. One file path to a valid Tern JavaScript plugin.


### Contributing

This is still a work in progress, pull requests are always welcome.

### License

Copyright (C) 2014 by Eric Pritchett

Distributed under the GPLv3, see license.md for the full text.
