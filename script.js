const navBar = document.querySelector('.navbar');
const  Menu = document.querySelector('.menu');

Menu.addEventListener('click', () => {
  navBar.classList.toggle("navbar-open");
})

// kontak
function mengirim(){
  var nama = document.getElementById("nama") 
  var email = document.getElementById("email") 
  var negara = document.getElementById("negara") 
  var pesan = document.getElementById("pesan") 
  var agree = document.getElementById("agree")
  var eror = document.getElementById("eror")

  if(nama.value == ""){
    eror.innerHTML = "Nama harus diisi!"
    alert("Nama harus diisi!")
  }
  else if(!email.value.endsWith("@gmail.com")){
    eror.innerHTML = "Email harus diakhiri dengan @gmail.com!"
    alert("Email harus diakhiri dengan @gmail.com!")
  }
  else if(negara.value == ""){
    eror.innerHTML = "Negara haris diisi!"
    alert("Negara harus diisi!")
  }
  else if(pesan.value == ""){
    eror.innerHTML = "Pesan haris diisi!"
    alert("Pesan harus diisi!")
  }
  else if(!agree.checked){
    eror.innerHTML = "Kamu harus setuju menerima salinan pesan!"
    alert("Kamu harus setuju menerima salinan pesan!")
  }
  else{
    eror.innerHTML = ""
    alert("Sukses!")
  }
}