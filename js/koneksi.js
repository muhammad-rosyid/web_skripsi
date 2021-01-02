var setUsername;
var setPass;

(function () {

    if ((sessionStorage.getItem('login') == 'true')) {
        // alert('Login sulu boss');
        location.href = 'index.php';
        return false;
    } else {

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
        firebase.analytics();

        // const preObject = document.getElementById('object');
        // const dbRefObject = firebase.database().ref().child('Data-Alat');
        // dbRefObject.on('value', snap => console.log(snap.val()));

        database = firebase.database();
        // var ref = database.ref().child("Data-Alat");
        var reflog = database.ref().child("alat/login");
        // ref.on('value', getData, errData);
        reflog.on('value', getDataLogin, errData);

        // var userId = firebase.auth().currentUser.uid;
        // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        //   // ...
        // });
    }
}());

// function getData(snap) {
//     // console.log(snap.val());
//     var data = snap.val();
//     var keys = Object.keys(data);
//     // console.log(keys);
//     for (var i = 0; i < keys.length; i++) {
//         var k = keys[i];
//         var suhu = data[k].suhu;
//         var kekeruhan = data[k].kekeruhan;
//         var pakan = data[k].pakan;
//         var notkeruh = data[k].notkeruh;
//         var notpakan = data[k].notpakan;
//         var notsuhu = data[k].notsuhu;

//         // console.log ( k +' isi email : '+ email + ', Username : '+ username);
//         console.log(suhu + kekeruhan + pakan);

//         document.getElementById('suhu').innerHTML += suhu + ' C';
//         document.getElementById('pakan').innerHTML += pakan + ' cm';
//         document.getElementById('kekeruhan').innerHTML += kekeruhan + 'ntu';
//     };
// }
function getDataLogin(snap) {
    // console.log(snap.val());
    var data = snap.val();
    var keys = Object.keys(data);
    // for (var i = 0; i < keys.length; i++) {
    // var k = keys[0];
    setUsername = data['username'];
    setPass = data['pass'];
    // console.log('username : ' + setUsername);
    // console.log('password : ' + setPass);
    $('#setuser').html(setUsername);
    $('#setpass').html(setPass);
    // document.getElementById("setuser").style.display = 'none';
    // document.getElementById("setpass").style.display = 'none';
    // document.getElementById("setuser").style.display = 'none';
    // document.getElementById("setpass").style.display = 'none';
    // };
    // console.log('username =' + setUsername + ', password = ' + setPass);
}

function errData(err) {
    console.log('error !');
    console.log(err);
}

      // function writeUserData(userId, suhu, pakan, kekeruhan) {
      //   firebase.database().ref('Data-Alat/' + userId).set({
      //     suhu        : suhu,
      //     pakan       : pakan,
      //     kekeruhan   : kekeruhan,
      //   });
      // }