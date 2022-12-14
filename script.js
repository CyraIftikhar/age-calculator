function calculateAge() {
  let dob = document.getElementById("dob").value;
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();

  document.getElementById("age").innerHTML = "Your age is: " + age;
}
