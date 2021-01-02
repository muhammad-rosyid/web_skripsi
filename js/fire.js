

    if ((sessionStorage.getItem('login') == 'false') || (sessionStorage.getItem('login') == null)) {
        alert('Login sulu boss');
        location.href = 'indexlogin.php';
        // return false;
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
        database = firebase.database()
        var ref = database.ref().child("alat/data_alat");
        ref.on('value', getData, errData);

    }

function getData(snap) {
    var data = snap.val();
    var keys = Object.keys(data);
    console.log(data);
    // for (var i = 0; i < keys.length; i++) {
    //     var k = keys[i];
    //     var ph = data[k].pH;
    //     var suhu = data[k].suhu;
    
    // };
    
    document.getElementById('suhu').innerHTML = data.suhu + '&deg; C';
    document.getElementById('ph').innerHTML = data.pH + ' ';
    
    if(data.pH > 6.5 && data.pH < 7.5){
        $('#status_ph').addClass('text-success')
        $('#status_ph').removeClass('text-danger')
    } else {
        $('#status_ph').addClass('text-danger')
        $('#status_ph').removeClass('text-success')
    }
    if(data.suhu > 25 && data.suhu < 40){
        $('#status_suhu').addClass('text-success')
        $('#status_suhu').removeClass('text-danger')
    } else {
        $('#status_suhu').addClass('text-danger')
        $('#status_suhu').removeClass('text-success')
    }
    
    $('#statusLED').html(data.statusLED)
    if(data.statusLED == "ON"){
        $('#statusLED').addClass('text-success')
        $('#statusLED').removeClass('text-danger')
    } else {
        $('#statusLED').addClass('text-danger')
        $('#statusLED').removeClass('text-success')
    }

    $('#status_ph').html(data.ketPH)
    $('#status_suhu').html(data.ketSUHU)
    $('.jamAwal').html(data.jamAwal)
    $('.jamAkhir').html(data.jamAkhir)


}
function errData(err) {
    console.log('error !');
    console.log(err);
}
