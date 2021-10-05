
let fs = require('fs'); 
let path = require('path');

// check if Logs directory exists
if(fs.existsSync("Logs")) {
    // list of all files from Logs directory
    fs.readdir("Logs", (err, files) => {
        // check for error
        if (err) throw err;

        // Traverse through list of all files 
        // of Logs directory
        for (const file of files) {
            // Create complete path of the file using 
            // join() function and delete it
            const filepath = path.join("Logs", file);
            fs.unlink(filepath, err => {
                // If there is any error
                if (err) throw err;
            });
            // Print out the file name to console
            console.log(`delete files...${file}`);
        }
        // Remove the Logs directory
        fs.rmdirSync("Logs");
    });
}