var credFile = require("firebase.json");

module.exports = () => ({
    upload: {
        provider: 'to-firebase',
        providerOptions: {
            serviceAccount: credFile ,
            
            bucket: "lucas-husni.appspot.com/",
            debugLogs: true
        },
    },
}); 