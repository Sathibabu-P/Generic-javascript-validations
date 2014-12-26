/*
  JavaScript validation file.
  Author:****
  CopyRight:@nyros
*/

var email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var numeric = /^\d*(?:\.\d\d)?$/;
var alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
var string = /^[a-zA-Z]*$/;


window.onload=function(){

/*error diaply function*/  
var style="display: none;background-color: red;padding: 10px;top:0px;margin:0px auto;width:100%;text-align:center;color: rgb(255, 255, 255);font-size: 12px;position:fixed;";
var p = document.createElement('p');
p.id = 'error';
p.style = style;
document.body.appendChild(p);  
/*error diaply function*/  
var form = document.getElementsByTagName("form");
for(var j=0;j<form.length;j++)
{



var elLength = form[j].elements.length;


    for (var i=0; i<elLength; i++)
    {
     
        form[j].elements[i].onkeyup=function () {           
        var classname=this.getAttribute("isValidate"); 
        var tag = this.tagName;        
        var type = this.type;  
        var msg=this.getAttribute("msg");
        var min=this.getAttribute("min");
        var max=this.getAttribute("max");
        var value=this.value;
        var length=this.value.length;   
        var check=checklength(min,max,length); 

      
        if(tag=="INPUT" && check==0){
          document.getElementById("error").style.display = 'block';
          document.getElementById("error").innerHTML=msg;           
          this.focus();
          this.value=value;
          return false;
        } else if(tag=="INPUT" && classname=="string")
        {
          
         if (!string.test(value)) {     
          document.getElementById("error").innerHTML=msg;   
         // form.elements[i].outerHTML+='<p style="'+style+'" class="msg">'+msg+'</p>';
          this.focus();
          this.value=value; 
          return false;
         } else  document.getElementById("error").innerHTML='';document.getElementById("error").style.display = 'none';
        } else if(tag=="INPUT" && classname=="email")
        {
         if (!email.test(value)) {  
          document.getElementById("error").style.display = 'block';       
          document.getElementById("error").innerHTML=msg; 
            this.focus();
          this.value=value;
          return false;
         } else  document.getElementById("error").innerHTML='';document.getElementById("error").style.display = 'none';
        }else if(tag=="INPUT" && classname=="alphanumeric")
        {
         if (!alphanumeric.test(value)) {
          document.getElementById("error").innerHTML=msg; 
            this.focus();
          this.value=value;
          return false;
         } else  document.getElementById("error").innerHTML='';document.getElementById("error").style.display = 'none';
        }else if(tag=="INPUT" && classname=="numeric")
        {
         if (!numeric.test(value)) {
          document.getElementById("error").innerHTML=msg; 
            this.focus();
          this.value=value;
          return false;
         } else  document.getElementById("error").innerHTML='';document.getElementById("error").style.display = 'none';
        } 



       }

      
   
    }
  
 }   
}



          function checklength(min,max,val)
          {

                      if(min>0 && max>0){              
                          if(val < min || val > max)
                           return 0;   else return 1; 
                       } else if(min>0 && !max){              
                          if(val < min)
                          return 0; else return 1; 
                      } else if(max>0 && !min){              
                          if(val > max)
                          return 0;  else return 1;                   
                      } else return 1;
                    
          }

          function check_check(type,name)
          {
            var c = document.getElementsByTagName('input');
            for (var i = 0; i < c.length; i++)
            {
              if (c[i].type == type && c[i].getAttribute("name")==name)
              {
                 if (c[i].checked) {return true}
              }
            }
            return false;
          }

function validate(form){

 
	var elLength = form.elements.length;
	
	 for (var i=1; i<elLength; i++)
    { 
        
        var tag = form.elements[i].tagName;
        var type = form.elements[i].type;  
        if(tag=="INPUT" || tag=="SELECT" || tag=="TEXTAREA")  {
        var required=form.elements[i].getAttribute("required");        
        var classname=form.elements[i].getAttribute("isvalidate");       
        var msg=form.elements[i].getAttribute("msg");
        var min=form.elements[i].getAttribute("min");
        var max=form.elements[i].getAttribute("max");  
        var length = form.elements[i].value.length;        
        var check=checklength(min,max,length);    
        } 

        if((tag=="INPUT" || tag=="SELECT" || tag=="TEXTAREA") && required=="true")
        {

        	var value=form.elements[i].value;  
        	var length=form.elements[i].value.length;   
        	if(length<1)   	{        	
        	form.elements[i].setAttribute('placeholder','This field is required'); 
          document.getElementById("error").style.display = 'block'; 
           document.getElementById("error").innerHTML='This field is required';                
            form.elements[i].focus();            
            return false; 
        	
        	}  

        }
        if(tag=="INPUT" && check==0){
          document.getElementById("error").style.display = 'block';
          document.getElementById("error").innerHTML=msg; 
          form.elements[i].focus();
          form.elements[i].value=value;
          return false;
        } else  if(tag=="INPUT" && classname=="string")
        {
           
         if (!string.test(value)) { 
         document.getElementById("error").style.display = 'block';    
          document.getElementById("error").innerHTML=msg;   
		 // form.elements[i].outerHTML+='<p style="'+style+'" class="msg">'+msg+'</p>';
		  form.elements[i].focus();
		  form.elements[i].value=value;	
		  return false;
		 } 
        } else if(tag=="INPUT" && classname=="email")
        {
         if (!email.test(value)) {	
      document.getElementById("error").style.display = 'block';	  
		  document.getElementById("error").innerHTML=msg; 
		  form.elements[i].focus();
		  form.elements[i].value=value;
		  return false;
		 }
        }else if(tag=="INPUT" && classname=="alphanumeric")
        {
         if (!alphanumeric.test(value)) {
          document.getElementById("error").style.display = 'block';
		  document.getElementById("error").innerHTML=msg; 
		  form.elements[i].focus();
		  form.elements[i].value=value;
		  return false;
		 }
        }else if(tag=="INPUT" && classname=="numeric")
        {
         if (!numeric.test(value)) {
          document.getElementById("error").style.display = 'block';
		  document.getElementById("error").innerHTML=msg; 
		  form.elements[i].focus();
		  form.elements[i].value=value;
		  return false;
		 }
        } 
        else if(tag=="INPUT" && type=="checkbox")
        {
           var name=form.elements[i].getAttribute("name");
         if (!check_check(type,name)) {
          document.getElementById("error").style.display = 'block';
          document.getElementById("error").innerHTML='Check atleast one option'; 
          form.elements[i].focus();             
          return false;
         }
        } else if(tag=="INPUT" && type=="radio")
        {
          var name=form.elements[i].getAttribute("name");
        if (!check_check(type,name)) {
          document.getElementById("error").style.display = 'block';
          document.getElementById("error").innerHTML='Check atleast one option'; 
          form.elements[i].focus();                
          return false;
         }
        }
       
        
   
	}
  
  document.getElementById("error").innerHTML='Form submitted sucessfully...'; 
}



