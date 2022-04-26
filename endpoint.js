//template https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY



function Endpoint (){

  const key = "BMesV3WfstAndw6U3m4nLq1VPEiDcubSlwFcOk2Z"


  this.for = function(object){

    return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${object.date}&camera=${object.camera}&api_key=${key}`

   

  }

}
             //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-01-01&camera=fhaz&api_key=BMesV3WfstAndw6U3m4nLq1VPEiDcubSlwFcOk2Z
function call (){
  
  
  
}

