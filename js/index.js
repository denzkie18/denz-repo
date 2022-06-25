$(document).ready(function(){
  
  //List of Novels
  let novel_index = [
      {
        title: "Sword of the Philosopher",
        sourceLink: "series/Kenja-no-Tsurugi-Light-Novel.html"
      },
      {
        title: "Bofuri: I Don't Want to Get Hurt, so I'll Max Out My Defense",
        sourceLink: "series/Itai-No-Wa-Iya-Light-Novel.html"
      },
      {
        title: "Welcome to Cheap Restaurant of Outcasts!",
        sourceLink: "series/Welcome-to-Cheap-Restaurant-of-Outcasts-Light-Novel.html"
      },
      {
        title: "86-Eighty Six",
        sourceLink: "series/Eight-Six-Light-Novel.html"
      },
      {
        title: "Arifureta Shokugyou de Sekai Saikyou",
        sourceLink: "series/Arifureta Shokugyou de Sekai Saikyou-Light-Novel.html"
      },
      {
        title: "The Blonde Saint Only Makes Strange Noises In Front Of Me, What Should I Do? (WN)",
        sourceLink: "series/The-Blonde-Saint-Only-Makes-Strange-Noises-In-Front-Of-Me-What-Should-I-Do-Light-Novel.html"
      },
      {
        title: "Unmotivated Hero’s Tale (WN)",
        sourceLink: "series/Unmotivated Hero’s Tale-Light-Novel.html"
      },
      {
        title: "[New Life+] Young Again in Another World",
        sourceLink: "series/Young Again in Another World-Light-Novel.html"
      },
      {
        title: "Date A Live",
        sourceLink: "series/Date A Live-Light-Novel.html"
      },
      {
        title: "Our Dating Story: The Experienced You and The Inexperienced Me",
        sourceLink: "series/Our Dating Story The Experienced You and The Inexperienced Me-Light-Novel.html"
      },
      {
        title: "Tensei Shitara Slime Datta Ken",
        sourceLink: "series/Tensei Shitara Slime Datta Ken-Light-Novel.html"
      },
      {
        title: "She's the Cutest... But We're Just Friends!",
        sourceLink: "series/Shes the Cutest But We're-Just-Friends-Light-Novel.html"
      },
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
  
  let recommendBook = document.createElement('li');
  let recommendBookLink = document.createElement('a');
  recommendBookLink.innerHTML = 'Download EBook Reader';
  recommendBookLink.href = 'https://drive.google.com/file/d/1TRoEIisxu0hTvj8JiPwP3-NcYSdQ876L/view?usp=drivesdk';
  recommendBook.append(recommendBookLink);
  $('#list2').append(recommendBook);
  
});