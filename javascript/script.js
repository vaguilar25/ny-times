$(document).ready(function(){
    var apiKey = "4884a5de92f24947b5a32839f9a49e4e";
    var searchString = "Steph Curry";
//    var searchString = $("....").val();
//    var numrecords = $("....").val();
//    var startYear = $("....").val() + "0101";
//    var endYear = $("....").val() + "1231";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+apiKey+
        "&q="+searchString;
//        "&begin_date="+startYear+
//        "&end_date="endYear;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        console.log(response.response.docs[0].headline.main);
        var getData = response.response.docs;
        console.log(response.response.docs);
       generateArticles(response.response.docs);
//        var getParentDiv = $(".card");
//    var ChildList = $(".ul");
//    ChildList.addClass("list-group list-group-flush");
//    console.log("inside generate article");
//    console.log(getData.length);
//    console.log(getData[0]);
//  console.log("getData[0] -" ,getData[0]);
//   for(i=0;i<getData.length;i++){
//       var addList = $("<li>");
//       addList.addClass("list-group-item");
//       console.log("inside for loop");
//       addList.text(getData[i].headline.main);
//       ChildList.append(addList);
//       console.log(getData[i]);
//       console.log(getData[i].headline.main);
//   }
    })
    
    
})


//var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//url += '?' + $.param({
//  'api-key': "4884a5de92f24947b5a32839f9a49e4e",
//  'q': "trump"
//});
////var getRes ;
////$.ajax({
////  url: url,
////  method: 'GET',
////}).done(function(result) {
////  
////    
////    getRes = result.response.docs;
////    console.log(getRes);
////    console.log(getRes.length);
////    generateArticles(getRes);
////    
////}).fail(function(err) {
////  throw err;
////});




function generateArticles(getData){
    var getParentDiv = $(".card");
    var ChildList = $("<ul>");
    ChildList.addClass("list-group list-group-flush");
    console.log("inside generate article");
    console.log(getData.length);
    console.log(getData[0]);
  console.log("getData[0] -" ,getData[0]);
   for(i=0;i<getData.length;i++){
       var addList = $("<li>");
       addList.css("background-color","#ecf0f1");
       addList.addClass("list-group-item well");
       console.log("inside for loop");
       addList.text(getData[i].headline.main);
       ChildList.append(addList);
       console.log(getData[i]);
       console.log(getData[i].headline.main);
   }
    getParentDiv.append(ChildList);
    
}