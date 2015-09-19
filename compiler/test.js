if (process.argv.length < 3) {
    console.log("\n  Usage: node ./test.js <file>");
} else {
    var compiler = require('./');
    var fs = require('fs');

    var contents = fs.readFileSync(process.argv[2], 'utf8');

    console.time("overall");

    console.time("parse");
    var ast = compiler.parse(contents);
    console.timeEnd("parse");

    try {
        var types = require('./types');

        console.log("Execution tree:");
        console.time("execute");
        var result = compiler.compile(ast);
        console.timeEnd("execute");
        console.timeEnd("overall");

        console.log(">", require('util').inspect(result.result, {colors: true}));
        console.log("Commands:");
        console.log(result.context.commandStructure.map(function (item) {
            return types.Command.cast.string(item);
        }).join("\n"));

    } catch (ex) {
        if (ex.loc) ex.message += " on line " + ex.loc.start.line + " column " + ex.loc.start.column;
        console.log(ex.stack);
    }
}