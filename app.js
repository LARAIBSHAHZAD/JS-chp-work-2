// var number = +prompt("Enter first number");
// var operator = prompt("Enter operator name");
// var secondNumber = +prompt("Enter second number");

// if(operator === "+"){
//     console.log(number + secondNumber);
// }
// if(operator === "-"){
//     console.log(number - secondNumber);
// }
// if(operator === "*"){
//     console.log(number * secondNumber);
// }
// if(operator === "/"){
//     console.log(number / secondNumber);
// }

// var lang = prompt("Enter computer language");

// if(lang === "javascript")
// {
//     var place = prompt("Enter your place");
//     if(place === "karachi")
//     {
//     var exp = prompt("Enter your experience");
//      if(exp === "2 years")
//      {
//         alert("Congratulations you're hired..");
//      }
//      else{
//         alert("Baary hokar aao")
//      }
//     }
//     else{
//         alert("Karachi aajao");
//     }
// }
// else{
//     alert("javascript seekho..");
// }

// Chapter 15-17

// Question 1 

var arr = [];

// Question 2 

var arr = []; 

// Question 3 

var arr1 = ["anas","hasan","umair","laraib"];

console.log(arr1);

// Question 4

var arr2 = [12,49,69,78];

console.log(arr2);

// Question 5

var arr3 = [true,false];

console.log(arr3);

// Question 6 

var arr4 = ["taha",true,35,undefined];

console.log(arr4);

// Question 7 

document.write("Qualifications:");

var arr5 = [ "<br><br>1)SSC" , "<br>2)HSC" , "<br>3)BCS" , "<br>4)BS" , "<br>5)BCOM" , "<br>6)MS" , "<br>7)M.Phil" , "<br>8)PhD"];

document.write(arr5[0]);
document.write(arr5[1]);
document.write(arr5[2]);
document.write(arr5[3]);
document.write(arr5[4]);
document.write(arr5[5]);
document.write(arr5[6]);
document.write(arr5[7]);

// Question 8 

var arrName = ["umair","Ahmed","laraib"];
var arrScore = [230,350,400];
var per = [];

per[0] = (arrScore[0]/500)*100;
per[1] = (arrScore[1]/500)*100;
per[2] = (arrScore[2]/500)*100;

document.write("<br><br><br><br>Score of " + arrName[0] + " is " + arrScore[0] +". Percentage: " + per[0] + "%");
document.write("<br>Score of " + arrName[1] + " is " + arrScore[1] +". Percentage: " + per[1] + "%");
document.write("<br>Score of " + arrName[2] + " is " + arrScore[2] +". Percentage: " + per[2] + "%");

// Question 9 

// Initialize an array with color names
var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Display the original array
document.write("<br><br>Original Array: " + colors.join(", ") + "<br><br>");

// a. Add a color to the beginning of the array
var newColorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(newColorBeginning);

// Display the updated array
document.write("Array after adding to the beginning: " + colors.join(", ") + "<br><br>");

// b. Add a color to the end of the array
var newColorEnd = prompt("Enter a color to add to the end:");
colors.push(newColorEnd);

// Display the updated array
document.write("Array after adding to the end: " + colors.join(", ") + "<br><br>");

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Pink");

// Display the updated array
document.write("Array after adding two more colors to the beginning: " + colors.join(", ") + "<br><br>");

// d. Delete the first color in the array
colors.shift();

// Display the updated array
document.write("Array after deleting the first color: " + colors.join(", ") + "<br><br>");

// e. Delete the last color in the array
colors.pop();

// Display the updated array
document.write("Array after deleting the last color: " + colors.join(", ") + "<br><br>");

// f. Add a color at a specific index
var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color you want to add at index " + indexToAdd);
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write("Array after adding a color at index " + indexToAdd + ": " + colors.join(", ") + "<br><br>");

// g. Delete colors at a specific index
var indexToDelete = prompt("Enter the index from which you want to delete colors:");
var deleteCount = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, deleteCount);

// Display the updated array
document.write("Array after deleting colors at index " + indexToDelete + ": " + colors.join(", ") + "<br><br>");

// Question 10 

var studentsScore = [350,260,500,135];

document.write("<br><br>Scores of Students : " + studentsScore);

studentsScore.sort();

document.write("<br>Ordered Scores of Students : " + studentsScore);

// Question 11 

var cityNames = ["<br>Karachi","Quetta","Lahore","Peshawar","Islamabad"];

document.write("<br><br><br>Cities List: " + cityNames);

var selectedCities = ["<br>" + cityNames[1] ,  cityNames[0] ,  cityNames[4]] 

document.write("<br><br>Selected cities list: " + selectedCities);

// Question 12 

var arr = ["<br>This","is","my","cat"];

document.write("<br><br><br>Array: " + arr);

var arrJoin = arr.join(" ");

document.write("<br><br>String: " + arrJoin);

// Question 13 

var array1 = ["<br>Keyboard","Printer","Monitor","Mouse"];

document.write("<br><br><br>Devices: " + array1);

document.write("<br><br>Out: " + array1[0]);

document.write("<br>Out: " + "<br>" + array1[1]);

document.write("<br>Out: " + "<br>" + array1[2]);

document.write("<br>Out: " + "<br>" + array1[3]);

// Question 14 

var array1 = ["<br>Keyboard","Printer","Monitor","Mouse"];

document.write("<br><br><br>Devices: " + array1);

document.write("<br><br>Out: " + "<br>" + array1[3]);

document.write("<br>Out: " + "<br>" + array1[2]);

document.write("<br>Out: " + "<br>" + array1[1]);

document.write("<br>Out: " +  array1[0]);

// Question 15 

var phoneManufacturers = ["<br><br><br>Apple", "<br>Samsung", "<br>Motorola", "<br>Nokia", "<br>Sony", "<br>Haier"];

var dropDown = [phoneManufacturers[0] + phoneManufacturers[1]  + phoneManufacturers[2] + phoneManufacturers[3] + phoneManufacturers[4] + phoneManufacturers[5]];

document.write(dropDown);

// END