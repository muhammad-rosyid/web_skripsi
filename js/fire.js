

    // if ((sessionStorage.getItem('login') == 'false') || (sessionStorage.getItem('login') == null)) {
    //     // alert('Login sulu boss');
    //     location.href = 'login2.php';
    //     return false;
    // } else {

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyA6Rld-TFq2NdBMgB5F0Wm9Iv6w30cDB-8",
            authDomain: "skripsi-3d7ec.firebaseapp.com",
            databaseURL: "https://skripsi-3d7ec.firebaseio.com",
            projectId: "skripsi-3d7ec",
            storageBucket: "skripsi-3d7ec.appspot.com",
            messagingSenderId: "161617203947",
            appId: "1:161617203947:web:e5559e7279f73e575ae4ae",
            measurementId: "G-NHLPL12N55"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        database = firebase.database()
        var ref = database.ref().child("alat/data_alat");
        ref.on('value', getData, errData);

    // }

function getData(snap) {
    var data = snap.val();
    var keys = Object.keys(data);
    console.log(data);
    // for (var i = 0; i < keys.length; i++) {
    //     var k = keys[i];
    //     var ph = data[k].pH;
    //     var suhu = data[k].suhu;
    
    // };
    
    document.getElementById('suhu').innerHTML += data.suhu + '&deg; C';
    document.getElementById('ph').innerHTML += data.pH + ' ';

}
function errData(err) {
    console.log('error !');
    console.log(err);
}
