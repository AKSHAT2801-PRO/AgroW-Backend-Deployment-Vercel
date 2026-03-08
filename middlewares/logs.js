const fs = require('fs');

function logRequests(filename) {
    return (req,res,next)=>{
        const log = `${new Date().toISOString()} - ${req.ip} - ${req.method} -  at -  ${req.originalUrl}\n`;
        fs.appendFile(filename, log, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
        next();
    };
}
module.exports = {logRequests};