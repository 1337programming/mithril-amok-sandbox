'use strict';
var binds = function(prop) {
    return {oninput: m.withAttr("value", prop), value: prop()};
};

var routes = {};