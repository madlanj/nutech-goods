const paths = require('path')
const fs = require("fs")
const DeleteFileSingle = (filename)=> {
    let destinations = paths.resolve(paths.join(__dirname,"..","..",filename))

    if(fs.existsSync(destinations)) {
        fs.unlink(destinations, (err) => {
            if (err) {
                console.error(err)
                return
            }

            console.log("file Removed!")
        })

    }
}
module.exports = DeleteFileSingle