
let listMahasiswa = ["Arya", "Irfan", "Dani"];
listMahasiswa.push("Irfan"); 
console.log(listMahasiswa); 

let setMahasiswa = new Set(["Arya", "Irfan", "Dani"]);
setMahasiswa.add("Irfan");
setMahasiswa.add("Arya"); 
console.log(setMahasiswa); 

let mapNilai = new Map();
mapNilai.set("Irfan", 90);
mapNilai.set("Arya", 95);
console.log(mapNilai.get("Irfan")); 
