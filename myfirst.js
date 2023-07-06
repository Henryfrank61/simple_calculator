
function myFunction(){
    var f_num = parseInt(document.getElementById("int1").value);
                var s_num = parseInt(document.getElementById("int2").value);

               var sum = f_num + s_num;
               
            document.getElementById("int1").value=sum;
            // document.getElementById("int1").value = sum;
            document.getElementById("int2").value="";
          // document.getElementById("int3").value="";
          
}
function subtraction(){
    var f_num = parseInt(document.getElementById("int1").value);
                var s_num = parseInt(document.getElementById("int2").value);

               var sum = f_num - s_num;
               document.getElementById("int1").value = sum;  
              //  document.getElementById("int1").value=document.getElementById("int3").value;
               document.getElementById("int2").value="";
            //  document.getElementById("int3").value="";

}
function divide(){
    var f_num = parseInt(document.getElementById("int1").value);
                var s_num = parseInt(document.getElementById("int2").value);
                

               var sum = f_num / s_num;
               document.getElementById("int1").value = sum; 
              //  document.getElementById("int1").value=document.getElementById("int3").value;
               document.getElementById("int2").value="";
            //  document.getElementById("int3").value="";
 

               
}
function multiply(){
    var f_num = parseInt(document.getElementById("int1").value);
                var s_num = parseInt(document.getElementById("int2").value);

               var sum = f_num * s_num;
               document.getElementById("int1").value = sum;  
              //  document.getElementById("int1").value=document.getElementById("int3").value;
               document.getElementById("int2").value="";
            //  document.getElementById("int3").value="";

                
}
function cleartextbox(){
    document.getElementById("int1").value="";
    document.getElementById("int2").value="";
}