document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();

  console.log('Page Loaded');
});

const form = document.querySelector('#addEvent')
const sche = document.querySelector('#Schedural')
// saveing data
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('Jackie').add({
    Date:   form.date.value,
    Event:  form.event.value
  });
  document.getElementById('dt').value='';
  document.getElementById('et').value='';

});

//getting data
function showsche(doc){
  let li    = document.createElement('li');
  let Date  = document.createElement('span');
  let bk    = document.createElement('br');
  let Event = document.createElement('span');
  let x     = document.createElement('div');

  li.setAttribute('data-id',doc.id)
  Date.textContent  = "Date:  " + doc.data().Date;
  Event.textContent = "Event:  "+ doc.data().Event;
  x.textContent     = 'X'


  li.appendChild(Date);
  li.appendChild(bk);
  li.appendChild(Event);
  li.appendChild(x);

  sche.appendChild(li);
  //delete data

  x.addEventListener('click',(e)=>{
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id')
    db.collection('Jackie').doc(id).delete();
  }).then((e) =>{
    document.location.reload()
  });

}

db.collection('Jackie').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
    showsche(doc);
  })

})
