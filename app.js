var figlet = require("figlet");

var msg = '';
process.argv.forEach(function (val, index, array) {
    if (index > 1) { msg = msg + val + ' '; }
});

figlet.text(msg, function(error, data) {
    if (error)
        console.log(error);
    else
        console.log(data);
});

