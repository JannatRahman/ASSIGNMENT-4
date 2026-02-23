let interviewList = [];
let rejectedList = [];


// STEP-1
let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count');
let rejected = document.getElementById('rejected-count');

// -----------------------------

const allCardSection = document.getElementById('all-cards');

const mainContainer = document.querySelector('main')
// ---------------

// PART OF STEP - 2: (all main tbn)
const allBtn = document.getElementById('main-all-btn')
const interviewBtn = document.getElementById('main-interview-btn')
const rejectBtn = document.getElementById('main-reject-btn')
// --------------------------


function calculateCount(){
total.innerText = allCardSection.children.length
interview.innerText = interviewList.length
rejected.innerText = rejectedList.length
}
calculateCount()
// --------------

// STEP - 2
function toggleStyle(id){
  allBtn.classList.remove('bg-blue-500', 'text-white')
  interviewBtn.classList.remove('bg-blue-500', 'text-white')
  rejectBtn.classList.remove('bg-blue-500', 'text-white')
  // ------------

  allBtn.classList.add('bg-white', 'text-black')
  interviewBtn.classList.add('bg-white', 'text-black')
  rejectBtn.classList.add('bg-white', 'text-black')
  // ------------
  // console.log(id);

  // -----------
const selected = document.getElementById(id)
// console.log(selected)

// --------------
selected.classList.remove('bg-white', 'text-black');
selected.classList.add('bg-blue-500', 'text-white');
}

// PART 3
mainContainer.addEventListener('click', function(event){
 const parentNode = event.target.parentNode.parentNode;
 const mobileFirst = parentNode.querySelector('.mobileFirst').innerText
 const developer = parentNode.querySelector('.developer').innerText
 const remote = parentNode.querySelector('.remote').innerText

 console.log(mobileFirst, developer, remote);
 
})
