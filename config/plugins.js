var credFile = require("../config/firebase.json");

module.exports = () => ({
  upload: {
    provider: 'to-firebase',
    providerOptions: {
      serviceAccount: credFile ,
    
      bucket: "lucas-husni.appspot.com",
      debugLogs: true
    },
    breakpoints: {
      medium: 750,
      small: 300,
    }
  }
});