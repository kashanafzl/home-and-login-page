



function homeandlogin() {

   

    // let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password ===" "  ) {
        window.alert('please fill the required')
        
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)
      
      window.location.href = '../../../Dentishwebsite.html'
      
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert(errorMessage)
      });
    


    }
}
