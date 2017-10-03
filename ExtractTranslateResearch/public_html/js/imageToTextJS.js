/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var extractedText;
var translatedText;
var webSearchResult;
$(document).ready(function(){
    
    $("#imageId1").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        
        var params = {
            // Request parameters
                "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'http://www.lonvig.biz/spanish-bull-500-text.jpg'}",
            
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);                
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";                
                extractedText = text;
            }              
        })
    });
    
        
    $("#imageId2").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'http://www.mipuntomap.com/wp-content/imagenes/ultimas%20noticias.jpg'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
    
    $("#imageId3").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'http://www.aprendexojo.com/wp-content/uploads/2014/06/PortadaLibroXojo.png'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
    
    $("#imageId4").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'http://s4.favim.com/610/141104/beards-boyfriend-espanol-love-Favim.com-2210404.jpg'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
    $("#imageId5").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'https://img.buzzfeed.com/buzzfeed-static/static/2016-11/21/15/enhanced/buzzfeed-prod-fastlane01/enhanced-11028-1479758708-21.jpg'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
    $("#imageId6").on('click', function(){
        $("#p2").empty();
        document.getElementById("b2").style.visibility = "hidden";  
        $("#bingsearch").empty();
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body
            data: "{'url':'https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/3317797000131023030157.jpg'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
    
    $("#b3").on('click', function(){        
        var params = {
            // Request parameters
            "language": "unk",           
        };       
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "POST",
            // Request body            
            data: "{'url':'"+$('input[name="Insert Image URL"]').val()+"'}",
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                console.log(response);
                var text = "";
                $.each(response.regions, function(k1, v1) {                                             
                    $.each(v1.lines, function(k2, v2) {                
                       $.each(v2.words, function(k3, v3) {                
                            text = text + " " +v3.text.toString();   
                        });               
                    });          
                });
                document.getElementById("p1").innerHTML ="<b>Extracted Text =</b>  " + text;
                document.getElementById("b1").style.visibility = "visible";
                extractedText = text;
            }
        })        
    });    
    
    
     
    
    $("#b1").on('click', function(){
        var lang;
        var params = {
            // Request parameters
            "text": extractedText,   
            "key": "key"
        };       
        $.ajax({
            url: "https://translate.yandex.net/api/v1.5/tr.json/detect?" + $.param(params),
            type: "GET",
            
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                
                var lang = response.lang;
                var params = {
                // Request parameters
                "text": extractedText,   
                "key": "Key",
                "lang": lang + "-en"
                };  
               
                $.ajax({
                        url: "https://translate.yandex.net/api/v1.5/tr.json/translate?" + $.param(params),
                type: "POST",
                success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here
                  console.log(response);  
                  translatedText = response.text;
                  document.getElementById("p2").innerHTML ="<b>Translated Text =</b>  " + translatedText;
                  document.getElementById("b1").style.visibility = "hidden";                  
                  document.getElementById("b2").style.visibility = "visible";
                }
                });              
            }
        });
    });    

    
    $("#b2").on('click', function(){
        
        document.getElementById("b2").style.visibility = "hidden";
        $("#bingsearch").empty();
        console.log("translatedText = ",translatedText.toString());
        var params = {
            // Request parameters
                "q": translatedText.toString(),                
        };       
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/search?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","Key");
            },
            type: "GET",            
            success: function (response) {
                //return response; remove this line, async return doesn't help here
                //find the respective cell and update your div here                                                
                webSearchResult = response;
                console.log(webSearchResult);
                var webpages = webSearchResult.webPages.value;
                
                $("#bingsearch").append("<h2>Web Search Results: </h2>");
                
                $.each(webpages, function(k1,v1){
                    console.log(v1);

                    $("#bingsearch").append("<p><b><a href="+v1.url+">"+v1.name+"</a></b><br>"+
                            v1.snippet+"</br></p>");
                    
                });
            }              
        })
    });
    
})