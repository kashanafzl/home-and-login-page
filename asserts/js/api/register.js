

  
function register() {

   

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if ( email === '' ||  password ==="") {
        window.alert('please fill the required')
    } else {
        // this is a use for create user on database
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          window.location.href = '../../../index.html'

          
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

    }
}
