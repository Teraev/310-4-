let students = ["Shaxboz","Alibek","Daler","Bexruz","Jaxongir","Radmir","Abdumanon","Alsafir"]

let even_names = []
let odd_names = []

if (students%2 === 0)
   students.push(even_names)
else 
   students.push(odd_names)



console.log(even_names , odd_names);






let arr = [2,1,1,9,22,7,1,38,14,4,3,1]
let total = 0
arr.sort((a,b) => a - b   )
arr.map((item) => total += item)
console.log(total);
