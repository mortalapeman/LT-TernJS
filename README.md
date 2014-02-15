## TernJS

A Light Table plugin utilizing [Tern](https://github.com/marijnh/tern), a fantastic JavaScript code analysis server.

### Features

* Auto-completion
* In-line documentation
* Jump to definition

The listed features are only a subset of what Tern is capable of, more to come.

### Gotchas/Known Issues

* All json defs are loaded by default, this means you will get auto-completion for jQuery even if you don't have jQuery in your project.
* Same goes for plugins, you will get auto-completion for AngularJS even if you haven't don't have it in your workspace.
* No distinction between browser and NodeJS environment, a side effect of blindly loading all plugins.
* Auto-completion shows 2 initial placeholder values while waiting for a response from the server.

All these problems will be addressed in future releases, feedback is appreciated!

### Contributing

This is still a work in progress, pull requests are always welcome.

### License

Copyright (C) 2014 by Eric Pritchett

Distributed under the GPLv3, see license.md for the full text.
