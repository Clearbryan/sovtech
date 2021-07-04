const args = process.argv.slice(2)
const fs = require('fs')

args.forEach((arg) => {
    let key = arg.split("=")[0]
    arg.split("=")[1]
    fs.writeFile('.env', `${arg}\n`, { flag: 'a+' }, (err) => {
        if(err) {
            console.log(err);
            process.exit(1)
        }
    })
    console.log(`${key} Environment variable generated successfully`);
})
