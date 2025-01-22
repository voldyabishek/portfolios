// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show an alert when the button is clicked
document.getElementById('showAlertBtn').addEventListener('click', () => {
    alert("Hello! Thanks for visiting my portfolio.");
});

// // Form Validation (Example for the contact form)
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (!name || !email || !message) {
//         alert("Please fill out all fields.");
//     } else {
//         alert("Message sent successfully!");
//         // Optionally clear the form fields after submission
//         document.getElementById('contactForm').reset();
//     }
// });


// event listner

const button=document.querySelector("#btnsub")
console.log(button)



//click rename
   button.addEventListener("click",(event)=>
{
    console.log(event.target);
    event.target.textContent="your message was send"
})