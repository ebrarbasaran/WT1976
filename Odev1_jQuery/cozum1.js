$(document).ready(function(){

    // görev 1
    $("#gorev1 > button").click(function(){
        var basliklar = Array.from($("h2:lt(3)"));
        basliklar.forEach(baslik => {
            $("#gorev1 > ul").append("<li>" + baslik.textContent + "</li>");
        });
    });
    
    // görev 2
    $("#gorev2 > button").click(function(){
        var basliklar = Array.from($("h2"));
        var adet = basliklar.length;
        $("#gorev2 > input[type = text]").val(adet);
    });
    
    
    // görev 3
    $("#gorev3 > button").click(function(){
        var text = $("article > h1").text();
        $("#gorev3 > input[type = text]").val(text);

    });
    // görev 4
    $("#gorev4 > button").click(function(){
        var p = Array.from($("p"));
        var b = Array.from($("h2"));
        for (let i = 0; i < p.length; i++) {
            b[i].append(" ( " + p[i].textContent.length + " karakter )")
            
        }
    });
    // görev 5
    $("#gorev5 > button").click(function(){
        $("h2:odd").css("color","blue");
        $("h2:even").css("color","orange");
        $("h1").css("color","red"); 
    });
    // görev 6
    $("#gorev6").click(function(){
        $("p:eq(0)").fadeOut("slow");
    });

    // görev 7
    $("#gorev7 > button").click(function(){
        var basliklar = Array.from($("h2:contains('can')"));
        basliklar.forEach(baslik => {
            $("#gorev7 > ul").append("<li>" + baslik.textContent + "</li>" )
        });
        
    });

    // görev 8
    $("#gorev8").click(function(){
        var baslik = $("<h2>");
        baslik.html("Lorem");
        $("h1").append(baslik);
        var text = $("<p>");
        text.addClass("txt")
        $("h1").after(txt);
        $.ajax({
            url: "lorem.html",
            type: get,
            succes: function(data){
                for (var ad of data) {
                    $(".txt").load("lorem.html")
                  }
            }
        });
    });
    // görev 9
    $("h2,h1").mouseenter(function(){
        var text = $(this).hover().text();
        $("#gorev9 > input[type = text]").val(text);
    });

    // görev 10
    $("#gorev10 > button").click(function () {
        var newDiv = $("<div>");
        $("footer").append(newDiv);
        newDiv.addClass("imgDiv");
        $('.imgDiv').prepend('<img class = ".imgDiv" src = "check.png" width="100" height="100" style="position: fixed; bottom: 350px; right: 30px;">');

    });
});


