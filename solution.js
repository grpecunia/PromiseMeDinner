
async function makeFood(steps, id){
  for(const step of steps){
      await addFood(step, id)
  }
  document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)
}


Promise.all([makeFood(steak, '#steak'), makeFood(mashPotatoes, '#mashPotatoes'), makeFood(brusselSprouts, '#brusselSprouts')]).then(res=>{
  console.log('breakfast is made!!',res)
  document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`
})


//RECURSIVE SOLUTION
// recrusive(0)
// function recrusive(i){
//   addFood(steak[i], '#steak', function(){
//     i++;
//     if(i < steak.length){
//       recrusive(i)
//     }
//   })
// }




// async function makeFood(steps, id){
//     let promises = []
//     for(const step of steps){
//       console.log(step)
//       promises.push( 
//         await addFood(step, id)
//       )
//     }
//     document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)
//     return promises
//   }
  
  
// Promise.all([makeFood(steak, '#steak'), makeFood(mashPotatoes, '#mashPotatoes'), makeFood(brusselSprouts, '#brusselSprouts')]).then(res=>{
//     console.log('breakfast is made!!',res)
//     document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`
// })
  
