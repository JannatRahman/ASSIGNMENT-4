let interviewList =  [];
let rejectedList = [];

// STEP-1
let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count');
let rejected = document.getElementById('rejected-count');

// -----------

const filterAllBtn = document.getElementById('filter-all-btn')
const filterInterviewBtn = document.getElementById('filter-interview-btn')
const filterRejectedBtn = document.getElementById('filter-reject-btn')

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')

// -----------------
function calculateCount(){
  total.innerText = allCardSection.children.length
  interview.innerText = interviewList.length
  rejected.innerText = rejectedList.length
}
calculateCount();
// ----------------------------

function toggleStyle(id){
  filterAllBtn.classList.remove('bg-blue-500', 'text-white')
  filterInterviewBtn.classList.remove('bg-blue-500', 'text-white')
  filterRejectedBtn.classList.remove('bg-blue-500', 'text-white')
  // ------------
  filterAllBtn.classList.add('bg-white', 'text-black')
  filterInterviewBtn.classList.add('bg-white', 'text-black')
  filterRejectedBtn.classList.add('bg-white', 'text-black')
//  console.loh(id)
const selected = document.getElementById(id)
// console.log(selected)


selected.classList.remove('bg-white', 'text-black');
selected.classList.add('bg-blue-500', 'text-white');

if(id == 'filter-interview-btn'){
  allCardSection.classList.add('hidden');
  filterSection.classList.remove('hidden');
}else if(id == filter-all-btn){
  allCardSection.classList.remove('hidden');
  filterSection.classList.add('hidden');
}
}



// PART 3
mainContainer.addEventListener('click', function(event){

console.log(event.target.classList.contains('interview-btn'));

if(event.target.classList.contains('interview-btn')){
   const parentNode = event.target.parentNode.parentNode;

  const mobileFirst = parentNode.querySelector('.mobileFirst').innerText
  const developer = parentNode.querySelector('.developer').innerText
  const remote = parentNode.querySelector('.remote').innerText
  const notApplied = parentNode.querySelector('.not-applied-btn')

  const cardInfo = { 
  mobileFirst,
  developer, 
  remote,
  notApplied
  }
 
  const mobileExist = interviewList.find(item => item.mobileFirst == cardInfo.mobileFirst)

  parentNode.querySelector('.not-applied-btn').innerText = 'Applied'

  if(!mobileExist){
  interviewList.push(cardInfo)
  }
  renderInterview()
}
})


function renderInterview(){
   filterSection.innerHTML = ''

   for(let interview of interviewList){
    console.log(interview);

    let div = document.createElement('div');
    div.className = 'space-y-5 bg-white px-6 py-4 rounded-lg'
    div.innerHTML = `
     <div class="flex justify-between">
    <div>
      <h2 class="mobileFirst  font-bold ">Mobile First Corp</h2>
      <p class="developer text-gray-600">React Native Developer</p>
    </div>
    <div>
    <div>
       <i class="fa-regular fa-trash-can"></i>
    </div>
</div>
  </div>

<div class="text-gray-600 flex">
  <p class="remote">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p>
</div>

<div class="mb-5">
  <button class="not-applied-btn bg-blue-100 px-5 py-1 rounded mb-2 ">Not Applied</button>
  <p class="para-1-text text-gray-700">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
</div>

<div class="gap-10">
  <button id="interview-btn" class="border border-green-600 px-5 p-1  font-bold text-green-700 rounded">interview</button>
  <button id="rejected-btn" class="border border-red-600 px-5 p-1  font-bold text-red-700 rounded">Rejected</button>
</div>

</div>

    `
    filterSection.appendChild(div)
   }
} 







