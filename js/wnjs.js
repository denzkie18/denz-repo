$(document).ready(function(){
  
  //List of Novels
  let novel_index = [
      {
        title: "An A-Ranked Adventurer’s “Slow-living”",
        sourceLink: "series/An-a-Rank-Adventurer-slow-Living-Light-Novel.html"
      },
      {
        title: "Sword of the Philosopher",
        sourceLink: "series/Kenja-no-Tsurugi-Light-Novel.html"
      },
      {
        title: "The Blonde Saint Only Makes Strange Noises In Front Of Me, What Should I Do? (WN)",
        sourceLink: "series/The-Blonde-Saint-Only-Makes-Strange-Noises-In-Front-Of-Me-What-Should-I-Do-Light-Novel.html"
      },
      {
        title: "Unmotivated Hero’s Tale (WN)",
        sourceLink: "series/Unmotivated Hero’s Tale-Light-Novel.html"
      }
    ];
  
  let list_1 = $("#list3");
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