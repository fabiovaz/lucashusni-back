var credFile = require("../config/firebase.json");

module.exports = () => ({
    upload: {
        provider: 'to-firebase',
        providerOptions: {
            serviceAccount: credFile ,
            
            bucket: "gs://lucas-husni.appspot.com/",
            debugLogs: true
        },
    },
}); 