$(document).ready(function(){
  
  //List of Novels
  let novel_index = [
      {
        title: "Shinwa Densetsu no Eiyuu no Isekaitan",
        sourceLink: "series/Shinwa Densetsu no Eiyuu no Isekaitan-Light-Novel.html"
      },
      {
        title: "After I Lectured an Unfriendly Girl Who Doesn't Let Strangers Approach her, She Really Took a Liking to Me",
        sourceLink: "series/Tanin-wo-Yosetsukenai-Buaisouna-Joshi-ni-Sekkyou-shitara-Mechakucha-Natsukareta-Light-Novel.html"
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
  let help = document.createElement('li');
  let wn = document.createElement('li');
  let recommendBookLink = document.createElement('a');
  let helpLink = document.createElement('a');
  let wnlink = document.createElement('a');
  recommendBookLink.innerHTML = 'Download EBook Reader';
  helpLink.innerHTML = 'How to Download?';
  wnlink.innerHTML = 'WN List';
  recommendBookLink.href = 'https://drive.google.com/file/d/1TRoEIisxu0hTvj8JiPwP3-NcYSdQ876L/view?usp=drivesdk';
  wnlink.href = 'https://www.lightnovelstorage.cf/WN-List.html';
  helpLink.href = 'help.html';
  recommendBook.append(recommendBookLink);
  wn.append(wnlink);
  help.append(helpLink);
  $('#list2').append(wn);
  $('#list2').append(help);
  $('#list2').append(recommendBook);
});