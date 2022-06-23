$(document).ready(function(){
  
  //List of Novels
  let novel_index = [
      {
        title: "Classroom of the Elite",
        sourceLink: "series/Classroom-of-the-Elite-Light-Novel.html"
      },
      {
        title: "How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?",
        sourceLink: "series/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me-Light-Novel.html"
      }
    ];
  
  let list_1 = $("#list");
  for(let x in novel_index){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href","");
    
    a.innerHTML = novel_index[x].title;
    a.href = novel_index[x].sourceLink;
    
    li.append(a);
    list_1.append(li);
    
  }
  
});