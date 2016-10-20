//Palindrome 
(function(num){
  var rem = 0;
  var org = num;
  var rev = 0;
  
  while (parseInt(num,10) > 0) {
    rev = parseInt(rev,10) * 10;
    rev = parseInt(rev,10) + num % 10;
    num = parseInt(num,10) / 10;
  }
  console.log('Check num is Pal '+ parseInt(rev,10));
}(121));

//ArmStrong
(function(num){
  var org = num;
  var rem = 0;
  var newnum = 0;
  while (parseInt(num,10) > 0) {
    rem = parseInt(num,10) % 10;
    newnum = parseInt(newnum,10) + (parseInt(rem,10)*parseInt(rem,10)*parseInt(rem,10));
    num = parseInt(num,10) /10;
  }
  
  if(newnum == org) {
    console.log(newnum +' is Armstrong');
  } else
  {
    console.log(newnum +' is not Armstrong');
  }
  
}(153));  
