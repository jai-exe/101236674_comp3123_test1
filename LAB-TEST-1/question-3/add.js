let fs = require('fs'); // Import fs module using ES6 import

// Create Logs directory, if it does not exist
if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

// Change the current process to Logs directory
process.chdir("Logs");

// Create 10 log files
for(let i = 0; i < 10; i++) {
    // Create filename in the given format
    const filename = `log${i}.txt`;
    // Open the file and write some text into the file
    fs.writeFile(filename, 'some text', (err) => {
        // If there is any error in writing the file
        if (err) {
            // Throw the error
            throw err;
        }
    });
    // Output file name to console
    console.log(filename);
}