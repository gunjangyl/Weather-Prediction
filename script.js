//window.alert("Hello!");

async function tosearch()
{
   // window.alert("Hello");
   const city=document.querySelector('#search>input').value;

   if(city=="")
   {
    alert("Please enter a city name");
   }

   else
   {
    const apikey="d9618fc2d393e08e5efc96e37dffde46";
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&&q=` + city + `&appid=${apikey}`;
    let res = await fetch(url);
    let data=await res.json();
    temp.innerHTML= Math.round(data.main.temp)+"°C";
    document.getElementById('city').innerHTML=data.name;
    wind.innerHTML=data.wind.speed+"km/h";
    humidity.innerHTML=data.main.humidity+"%";


    



    //console.log(res);
    console.log(data);
    

   }
   
}