$('.tmls-slider').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.books-slider-main').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
   speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.part-logos').slick({
  dots: false,
infinite: true,
autoplay:true,
arrows: false,
autoplaySpeed:0,
speed:8000,
cssEase: 'linear',
Swiping: true,
slidesToShow: 5,
pauseOnHover:false,
slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// popup step form js


// document.querySelectorAll(".open-popup").addEventListener("click", function() {
//   document.querySelectorAll(".popup-form").classList.add("active");
// });

// document.querySelectorAll(".close-popup").addEventListener("click", function() {
//   document.querySelectorAll(".popup-form").classList.remove("active");
// });
// function setValues(amt, pkg) {
//         $('#amt').val(amt);
//         $('#pkg').val(pkg);
//     }

//     $(document).ready(function () {
//         // Attach a click event handler to the anchor link
//         $("#signupLink").click(function (event) {
//             // event.preventDefault(); 
//             // Prevent the link from navigating

//             // Call the get_pkg function and capture the returned object
//             var result = get_pkg('399', 'ESSENTIAL PACKAGE');

//             // Access individual data
//             var amt = result.amt;
//             var pkg = result.pkg;

//             // Display the individual data
//             alert("Amount: " + amt + ", Package: " + pkg);

//             // Set the values in the hidden inputs
//             setValues(amt, pkg);
//         });
//     });
$(document).ready(function () {
            // Parse the query parameters from the URL
            var urlParams = new URLSearchParams(window.location.search);
            var amt = urlParams.get("amt");
            var pkg = urlParams.get("pkg");

            // Set the values in the hidden input fields
            $('#amt').val(amt);
            $('#pkg').val(pkg);

            // Display the package name in the h1 tag
            $('#packageName').text(pkg);
            $('.packageprice').text(amt);
        });



var currentStep = 0;
var steps = document.getElementsByClassName("tab-content");
var tabButtons = document.getElementsByClassName("tab-button");
var nextButton = document.querySelector(".next-button");
var prevButton = document.querySelector(".prev-button");

function showStep(stepIndex) {
    for (var i = 0; i < steps.length; i++) {
        steps[i].style.display = "none";
    }
    steps[stepIndex].style.display = "block";
    updateButtons(stepIndex);
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function updateButtons(stepIndex) {
    if (stepIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (stepIndex === steps.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    // Disable tab buttons until the current step is completed
    for (var i = 0; i < tabButtons.length; i++) {
        if (i <= stepIndex) {
            tabButtons[i].disabled = false;
        } else {
            tabButtons[i].disabled = true;
        }
    }
}

nextButton.addEventListener("click", function () {
    // Validate the current step before moving to the next
    var currentStepContent = steps[currentStep];
    var inputs = currentStepContent.querySelectorAll("input[required], textarea[required]");

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            // alert("Please fill in all required fields.");
            return; // Prevent moving to the next step if validation fails
        }
    }

    nextStep();
});

showStep(currentStep);
updateButtons(currentStep);

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    // Hide all tab content and remove the "active" class from tab buttons
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected tab content and set the corresponding button as "active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

$(document).ready(function () {
            $("#next-btn").click(function (event) {
                event.preventDefault(); // Prevent the default form submission
                
                // Get form data
                var formData = $("#signup-form").serialize();
                
                // Send a POST request to the server
                $.post("sendmail.php", formData, function(data) {
                    console.log("Form data submitted successfully:", data);
                }).fail(function() {
                    console.error("Error submitting the form data.");
                });
            });
        });
        
let input = document.querySelector(".state");
let button = document.querySelector(".next-button");
button.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.querySelector(".state").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

document.getElementById("next-btn").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone =document.getElementById("phone").value;
  // var pkg = document.getElementById("hiddenInput").value;
  // var price = document.getElementsByClassName("pkg").value;
  // var amount = document.getElementsByClassName("amt").value;


  var displayArea = document.getElementById("displayArea");
  var clientemail = document.getElementById("clientemail");
  var client_num = document.getElementById("client_num");
  
  displayArea.innerHTML = name;
  clientemail.innerHTML = email;
  client_num.innerHTML = phone;
//   displayArea.innerHTML = "Full Name: " + name + "<br>Email Address: " + email +
//   "<br> Phone Number:" + phone;
});