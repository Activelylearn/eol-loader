"use strict";

module.exports = function(content) {
    const eolNormalized = content.replace(/\r\n/g, "\n");
    this.callback(null, eolNormalized);
}
