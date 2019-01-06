let link = document.createElement("link");
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
//change name "Fruits & Vegetables Corp"
document.getElementsByTagName('head')[0].appendChild(link);
document.title = "Fruits & Vegetables Corp";
//make a h1 to the title
let name = document.querySelector("h1");
name.textContent = "Fruits &  Vegetables Corp";
//change from bananas to Vegetables
let listVeg = document.querySelectorAll("a");
let lastLi = listVeg[listVeg.length - 1];
lastLi.textContent = "Vegetables";
//Swapping contact and about
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
main.insertBefore(about, contact);
//H2 and P tag in the section
about.removeChild(about.childNodes[0]);
h2About = document.createElement("h2");
h2About.textContent = "About";
about.appendChild(h2About,);
pAbout = document.createElement("p");
pAbout.textContent = "We're the best in fruits & vegetables";
about.appendChild(pAbout);

h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
contact.appendChild(h2Contact);
contact.insertBefore(h2Contact, contact.childNodes[0]);
//changing td to th and creating a table
let allTd = document.querySelectorAll("td");
let firstTd = allTd[0];
let secondTd = allTd[1];

let newTh1 = document.createElement("th");
newTh1.textContent = "Name";

let newTh2 = document.createElement("th");
newTh2.textContent = "Email";

firstTd.parentNode.replaceChild(newTh1, firstTd);
secondTd.parentNode.replaceChild(newTh2, secondTd);
