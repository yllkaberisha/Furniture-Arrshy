const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

console.warn("main starts")

const navOpen = () => {
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style = 'height: 100vh; overflow: hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style = 'height: initial; overflow: visible;';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// Close the navigation on small screens when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navClose();
    }
  });
});

// Close the navigation on window resize if it's open
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navClose();
  }
});



var form = document.getElementById("contact");

async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } 
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
if(form){
form.addEventListener("submit", handleSubmit)

}

// ----------------------------------------------------------------

var currentHour = new Date().getHours();

var greeting = 'Good ';
if (currentHour >= 5 && currentHour < 12) {
  greeting = greeting.concat('morning!');
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = greeting.concat('afternoon!');
} else {
  greeting = greeting.concat('evening!');
}

var timeOfTheDay = document.getElementById('timeOfTheDay')
if (timeOfTheDay)
  timeOfTheDay.innerText = greeting;

// ----------------------------------------------------------------
// var audio = document.getElementById('ourStoryAudio');

// if(audio){
//         var scrollThreshold = 500; 
//         audio.currentTime = 8;

//         function handleScroll() {
//             var scrollPosition = window.scrollY || document.documentElement.scrollTop;

//             audio.currentTime = 8;

//             if (scrollPosition > scrollThreshold) {
//                 audio.pause();
//             } else {
//                 audio.play();
//             }
//         }

//         // Attach the scroll event listener
//         window.addEventListener('scroll', handleScroll);

//         // Pause the audio when the user leaves the page
//         window.addEventListener('beforeunload', function() {
//             audio.pause();
//         });
//       }
// ----------------------------------------------------------------



var heroInfoElement = document.querySelector('.hero__info');
if(heroInfoElement){
  heroInfoElement.innerHTML = heroInfoElement.innerHTML.replaceAll('Lorem', 'Arrshy Furniture');
  var matchResult = heroInfoElement.innerHTML.match('Arrshy Furniture');

  if (matchResult) {
    heroInfoElement.textContent += 'Arrshy Furniture is first company in Kosovo to sell in all continents of the wold.';
  }

}
// ----------------------------------------------------------------


  var allItems = [
    { name: 'Wooden Table', description: 'High-quality wooden table', price: 300, material: 'wood' },
    { name: 'Wooden Shelf', description: 'Sturdy wooden shelf', price: 150, material: 'wood' },
    { name: 'Wooden Bed Frame', description: 'Elegant wooden bed frame', price: 500, material: 'wood' },
    { name: 'Metal Chair', description: 'Durable metal chair', price: 150, material: 'metal' },
    { name: 'Metal Table', description: 'Sleek metal table', price: 200, material: 'metal' },
    { name: 'Metal Bookshelf', description: 'Modern metal bookshelf', price: 180, material: 'metal' }
  ];

  // Function to render table rows and calculate total price
  function renderTable(material, items, tbodyId, totalId) {
    var tableBody = document.getElementById(tbodyId);
    var totalElement = document.getElementById(totalId);

    // Render table rows
    var rows = items.map(function(item) {
      return `<tr>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
              </tr>`;
    });

    // Append rows to the table body
    if(tableBody)
      tableBody.innerHTML = rows.join('');

    // Calculate total price using reduce
    var totalPrice = items.reduce(function(total, item) {
      return total + item.price;
    }, 0);

    // Display total price in the footer
    if(totalElement)
      totalElement.textContent = '$' + totalPrice.toString();
  }

  // Filter and render for metal materials
  var metalMaterials = allItems.filter(function(item) {
    return item.material === 'metal';
  });

  renderTable('metal', metalMaterials, 'metal-material-items', 'metal-total');

  // Filter and render for wood materials
  var woodMaterials = allItems.filter(function(item) {
    return item.material === 'wood';
  });

  renderTable('wood', woodMaterials, 'wood-material-items', 'wood-total');


console.warn("Main Ends")
