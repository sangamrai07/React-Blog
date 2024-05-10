
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBu75xO9vhvMQ2AIb5Td2VCHr_2srAILf8",
    authDomain: "bislerium-f5734.firebaseapp.com",
    projectId: "bislerium-f5734",
    storageBucket: "bislerium-f5734.appspot.com",
    messagingSenderId: "940942309747",
    appId: "1:940942309747:web:d07646960c1c8dcb4f6d06",
    // measurementId: "G-P4SX9HESNG"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});