Package.describe({
    summary: "Alt flux packaged for Meteor",
    version: "0.0.1",
    name: "shockitv:alt-flux",
    git: "",
    documentation: "readme.md"
});

var EXTERNALIFY_VERSION = "0.1.0";
var ALT_VERSION = "0.17.1"

Npm.depends(
    {
        'alt': ALT_VERSION,
        'externalify': EXTERNALIFY_VERSION,
    }
);

Package.onUse(function(api) {
    api.use([
        'cosmos:browserify@0.5.0'
    ]);

    api.addFiles([
        'client.browserify.options.json',
        'client.browserify.js'
    ]);

    api.export(["alt"]);
});
