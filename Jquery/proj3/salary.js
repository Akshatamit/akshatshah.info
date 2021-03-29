//salary.js by Akshat shah
postResult = function(list)


{
    var nameList, i, departmentList,titleList;
    if (list.length > 0) {
    $("#result").html("Name:" + list[0].name+ "<br />" +"Salary:" + list[0].salary + "<br />" +"Department: " + list[0].department + "<br />" +"Title: " + list[0].title );
    }


    nameList = "";
    for (i = 0; i < list.length; i += 1) {
        nameList = nameList + list[i].name + "<br />";
    }
    $("#names1").html("Number of matches: " + list.length);
    $("#names").html(nameList);
    
    
    
    departmentList ="";
    for (i=0; i< list.length; i += 1){
         departmentList = departmentList + list[i].department +"<br/>";
    }
    $("#departments1").html("Number of matches: " + list.length);
    $("#departments").html(departmentList);
    
    
    
    titleList ="";
    for (i=0; i< list.length; i += 1){
         titleList = titleList + list[i].title +"<br/>";
    }
    $("#titles1").html("Number of matches: " + list.length);
    $("#titles").html(titleList);
    
    
} 
submit = function()
{
    var searchWord = document.getElementById("key-word").value;
    query = new ChicagoEmployeesQuery(searchWord);
    $("#result").html("<P>waiting...</P>");
    query.getList(postResult);
}


$(function() {
    $("#start").click(submit);
});
