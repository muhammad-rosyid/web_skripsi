<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login My Aquascape</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-40">
						Welcome
					</span>
					<span class="login100-form-avatar">
						<img src="images/aquicon.png" alt="AVATAR">
					</span>

					<div class="wrap-input100 validate-input m-t-55 m-b-35" data-validate = "Enter username">
						<input class="input100" type="text" name="username" id="username">
						<span class="focus-input100" data-placeholder="Username"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						<input class="input100" type="password" name="pass" id="password">
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" id="btn-login">
							Login
						</button>
					</div>

					<ul class="login-more p-t-190">
						<li class="m-b-8">
							<span class="txt1">
								Forgot
							</span>

							<a href="#" class="txt2">
								Username / Password?
							</a>
						</li>

						<li>
							<span class="txt1">
								Don’t have an account?
							</span>

							<a href="#" class="txt2">
								Sign up
							</a>
						</li>
					</ul>
				</form>
				<label class="setuser" id="setuser" name="setuser" style="display: none;"></label>
          		<label class="setpass" id="setpass" name="setpass" style="display: none;"></label>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="https://www.gstatic.com/firebasejs/7.11.0/firebase.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-database.js"></script>
	<!-- <script src="js/fire.js"></script> -->
	<script src="js/main.js"></script>
	<script src="js/koneksi.js"></script>

	<script>
		$('#btn-login').on('click', function(){
          login();
        }) 

        $('#password').on('keyup', function(e){
          if(e.keyCode == 13){
            login();
          }
        })

        function login(){
            var username = $('#username').val();
            var password = $('#password').val();
            var setuser = $('#setuser').html();
            var setpass = $('#setpass').html();

            if((username == setuser) && (password == setpass)){
              sessionStorage.setItem('login', 'true');
              // window.location.href = '';
              window.location.assign("index.php");
              return false;
            } else {
                console.log('gagal masuk');
				alert('password salah boss');
				return false;
                // window.location.href = 'login2.php';
            }
        }
	</script>

</body>
</html>