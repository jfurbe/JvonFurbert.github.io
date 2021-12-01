

var nav = (input)=>{

   let links = ['link-dark"','link-dark"','link-dark"']
   let current = 'active  bg-dark" aria-current="page"'
   
   if (input.includes('index')){
      links[0] = current;
   }
   else if (input.includes('projects')){
      links[1] = current;
   }
   else {
      links[2] = current;
   }
 
   return (`<ul class="nav nav-pills"> \
   <li class="nav-item">   \
     <a class="nav-link ${links[0]} href="./index.html">Home</a> \
   </li> \
   <li class="nav-item"> \
     <a class="nav-link ${links[1]} href="./projects.html">Project Page</a> \
   </li> \
   <li class="nav-item"> \
     <a class="nav-link ${links[2]} href="./misc.html">Misc</a> \
   </li> \
   <li class="nav-item"> \
     <a class="nav-link disabled">Disabled</a> \
   </li> \
   </ul>`) 
} 

var footer = '<hr> \
<p>Check out my gitHub <a href="https://github.com/jfurbe/pholio" class="link-dark">@jfurbe</a></p> \
<p>Feel Free to contact me at <a href = "mailto: mrbroadstrokes@gmail.com" class="link-dark">Email</a></p>'