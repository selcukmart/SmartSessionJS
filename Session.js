"use strict";
var Session = {
    default_cache_prefix: 'ONLINEKURUM__',
    default_timeout: 14400,
    set: function (name, value) {
        return sessionStorage.setItem(this.prefix() + name, this.set_value(value));
    },
    get: function (name) {
        return this.get_value(sessionStorage.getItem(this.prefix() + name));
    },
    remove: function (name) {
        return sessionStorage.removeItem(this.prefix() + name);
    },
    isset: function (name) {
        var data = sessionStorage.getItem(this.prefix() + name);
        if (data === null) {
            return false;
        } else {
            return true;
        }
    },
    prefix: function () {
        return this.default_cache_prefix;
    },
    set_value: function (value) {
        if (typeof value === 'object') {
            return JSON.stringify(value);
        } else {
            return value;
        }
    },
    get_value: function (value) {
        if (typeof value !== 'string') {
            return value;
        }
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
};
