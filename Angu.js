angular.module('kmi', [])
  .controller('kmiControler', function() {
    var kmiList = this;
     kmiList.kmi = "Tavo KMI Yra";
     kmiList.svoris = 70;
     kmiList.ugis = 170;
     kmiList.img ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Orange_question_mark.svg/450px-Orange_question_mark.svg.png";
      var a;

      kmiList.show = function() {
         a = (kmiList.svoris / (kmiList.ugis*kmiList.ugis))*10000;
         
if(((a > 80)||( a < 8)||(a===0))){
 
     kmiList.kmi = " Neteisingai įvesti duomenys ";
     kmiList.info ="";
     kmiList.img = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Goofy.svg/1200px-Goofy.svg.png"
 
}
else {
 
    kmiList.kmi =   " Tavo KMI yra " + a.toPrecision(3);
    
    kmiList.display();
}
}


kmiList.display = function(){

if((a>18.5)&&(a<24.9)){
    kmiList.info = " Jūsų kmi yra geras";
    kmiList.img = "https://thumbs.dreamstime.com/b/skinny-guy-n-gym-vector-illustration-cool-cartoon-style-geometrical-flat-isolated-white-background-70243123.jpg";
    
  
   } if  (a<18.5){
    kmiList.info = " Jūsų kmi yra per mažas";
    kmiList.img = "https://friendlystock.com/wp-content/uploads/2018/09/6-dabbing-skeleton-character-vector-cartoon-clipart.jpg";
  

  }if (a>24.9){
    kmiList.info = " Jūsų kmi yra per didelis";
    kmiList.img = "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180273512/95584741-cute-fat-cartoon-human.jpg";
  }


}


  });