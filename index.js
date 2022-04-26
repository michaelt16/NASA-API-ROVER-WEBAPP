// the birthplace of awesome
document.addEventListener("DOMContentLoaded", ()=>{
  functions()
})


function functions(){
  document.querySelector(".container").addEventListener ("click", test)

}

function test(e){
  console.log(e.target.nodeName)
 
  if (e.target.nodeName == "BUTTON"){
    showLoadingAnimation()
    
   //maybe i can save the value of each thing into session storage and then i get the info and use it for the for(object)
    sessionStorage.setItem("selected",selectedCamera())

    let dates = document.querySelector ('input[type="date"]')
    sessionStorage.setItem("date", dates.value)


   


    const endpoint = new Endpoint()
    let camera = sessionStorage.getItem("selected")
    
    let date= sessionStorage.getItem("date") 
    
    
    fetch(endpoint.for ({date,camera})).then((resp)=>resp.json()).then((data)=>{
      
      document.querySelector("#photos").replaceChildren()
     
     data.photos.forEach((object)=>{
       console.log(object.img_src)
      
       let img = document.createElement("img")
       img.src = object.img_src
       
       
       document.querySelector("#photos").appendChild(img)
       
  
  
     })
     //if theres no images then i make the box
    }).then(hideLoadingAnimation())







 
 
  }

 

  
 
  
  

}

function removeChildNodes(nodeList){
  while(nodeList.firstChild){
      nodeList.removeChild(nodeList.firstChild);
  }
}

function selectedCamera(){
  let radioButton = document.querySelectorAll ("input[type=radio]")

  // radioButton.find((radio)=>radio.checked)
//i gotta turn nodelist into array
  let chosen = Array.from(radioButton).find((radio)=> radio.checked)

  console.log(chosen.value)
 return chosen.value
}



function showLoadingAnimation(){

  //hides photos and show spiny

  let spin = document.querySelector("#spinny")
  spin.classList.remove ("hidden")
  
  
  let photos = document.querySelector("#photos")
  photos.classList.add("hidden")


}

function  hideLoadingAnimation(){

  //hides spiny and show photos
  let spin = document.querySelector("#spinny")
  spin.classList.add ("hidden")

  let photos = document.querySelector("#photos")
  photos.classList.remove("hidden")
}
