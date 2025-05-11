let dailyList = [
  {
    item: 'wake up',
    dueDate: '20-04-2025',
    dueTime: '5:00'
  },
  {
    item: 'go to gym',
    dueDate: '20-04-2025',
    dueTime: '5:35'
  }
];

DisplayItems();

function addDaily() {
  let inputElement = document.querySelector('#daily-input');
  let dateElement = document.querySelector('#daily-date');
  let timeElement = document.querySelector('#daily-time');

  let dailyItem = inputElement.value;
  let dailyDate = dateElement.value;
  let dailyTime = timeElement.value;
  dailyList.push({ item: dailyItem, dueDate: dailyDate, dueTime: dailyTime });
  inputElement.value = '';
  dateElement.value = '';
  timeElement.value = '';

  DisplayItems()
  // console.log(dailyItem);
}

function DisplayItems() {
  let containerElement = document.querySelector('.daily-container');

  let newHtml = '';

  for (let i = 0; i < dailyList.length; i++) {
    // let item = dailyList[i].item
    // let dueDate = dailyList[i].dueDate
    // let dueTime = dailyList[i].dueTime
    let { item, dueDate, dueTime } = dailyList[i];
    newHtml += `
      
    <span>${item}</span>
    <span>${dueDate}</span>
    <span>${dueTime}</span>
    <button class="delete" onclick="dailyList.splice(${i}, 1); DisplayItems();">Delete</button>
      
    `;

  }
  containerElement.innerHTML = newHtml;
}
