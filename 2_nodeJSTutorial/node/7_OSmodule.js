

const osModule = require('os');

// info about the current user 
const user = osModule.userInfo()
console.log(user)

// method returns the uptime in seocnds 
// console.log(`the system uptime is ${osModule.uptime} seconds`);

/**
 * Extra knowledge : WHat is uptime ?
 * Ans : it is the time from which the system has been working since last complete switch off
 * Also shut down does not resets uptime , but restart does surely . because shut down is not fully switch off
 */


// know everything about the user ----
const currentOSInfo = {
    name: osModule.type(),
    release:osModule.release(),
    totalMemo:osModule.totalmem(),
    freeMemo:osModule.freemem(),
    cpuInfo:osModule.cpus(),
    loadavg:osModule.loadavg(),
    hostname:osModule.hostname(),
    any:osModule.homedir(),
}

console.log(currentOSInfo);



