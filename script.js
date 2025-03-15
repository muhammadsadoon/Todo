const data = {
    1:{id:100,name:"sadoon",number:6454521231},
    2828:{id:200,name:"ali",number:51321313},
    3:{id:3676,name:"javad",number:4131323132},
    4:{id:46764,name:"arsalan",number:1563132132},
    5:{id:5454,name:"ahmed",number:1312534635},
    6:{id:63434,name:"rehan",number:5143131},
    7:{id:734344,name:"malik",number:1531321},
    8:{id:8234,name:"rajio",number:1354313},
    9:{id:9234,name:"kaif",number:16841},
    10:{id:10234,name:"hootman",number:3443515},
    11:{id:1143,name:"sadik",number:13513515},
    12:{id:1254,name:"saad",number:84532135},
    13:{id:1334,name:"saqlain",number:584135646},
    14:{id:1467,name:"salar",number:543515154},
    15:{id:1576,name:"saeed",number:5612348463},
    16:{id:1645,name:"muhammad",number:56131354312},
    17:{id:1734,name:"mioz",number:534351651},
    18:{id:1846,name:"yarfa",number:165131354},
    19:{id:1948,name:"yousuf",number:5498434686},
    20:{id:2546,name:"mujeed",number:76546548},
}
function user(num) {
    if(data[num]){
        console.log(`the name is ${data[num].name}\nThe number is ${data[num].number}\nThe roll number is ${data[num].id}`);
    }else{
        console.log("not existed");
        
    }
}
function submit() {
    const userInput = document.getElementsByClassName("userInput").value
    console.log(userInput);
    

}