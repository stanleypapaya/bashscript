var fs = require('fs')

var dirName = process.argv[2]
if (fs.existsSync(dirName)) {
    process.exit(0)
} 

fs.mkdirSync("./" + dirName) 
process.chdir("./" + dirName) 
fs.mkdirSync('css') 
fs.mkdirSync('js') 
fs.writeFileSync("./index.html", "<!DOCTYPE>\n")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", 'var string = "Hello World"\n')
fs.appendFileSync("./js/main.js", "alert(string)\n")
fs.appendFileSync("./index.html", "<title>Hello</title>\n")
fs.appendFileSync("./index.html", "<h1>Hi</h1>\n")
process.exit(0)