$(document).ready(function(){$(".linkedin").on("click",function(){window.location.href=$(this).attr("href")}),$(window).on("scroll",function(){$(document).scrollTop()>80?($(".nav").css("fontSize","12px"),$(".nav").css("padding","5px")):($(".nav").css("fontSize","16px"),$(".nav").css("padding","10px"));var a=[];$("#header .nav a").each(function(){a.push($(this).prop("hash"))}),$(window).scrollTop()<770?($("a[href="+a[0]+"] li").css("background-color","green"),$(".nav :not(a[href="+a[0]+"] li)").css("background-color","transparent")):$(window).scrollTop()>=771&&$(window).scrollTop()<1e3?($("a[href="+a[1]+"] li").css("background-color","green"),$(".nav :not(a[href="+a[1]+"] li)").css("background-color","transparent")):$(window).scrollTop()>=1001&&$(window).scrollTop()<1500?($("a[href="+a[2]+"] li").css("background-color","green"),$(".nav :not(a[href="+a[2]+"] li)").css("background-color","transparent")):$(window).scrollTop()>=1501&&$(window).scrollTop()<2e3?($("a[href="+a[3]+"] li").css("background-color","green"),$(".nav :not(a[href="+a[3]+"] li)").css("background-color","transparent")):($("a[href="+a[4]+"] li").css("background-color","green"),$(".nav :not(a[href="+a[4]+"] li)").css("background-color","transparent"))})}),$(document).ready(function(){$(".hack").each(function(){$(this).hover(function(){$(this).css("cursor","pointer")})}),$("#hackList").on("click","img",function(a){var b=$('<div class="transparentScreen" />'),c=$(".modal").css("display","initial"),d=$("<ul />"),e=($(this).clone().find("img"),$(a.target)),f=$("<img />"),g=$("<li />");f.attr("src",$(this).attr("src")),g.append(f),d.append(g),c.find(".description").append(e.next().clone()),c.find(".listContainer").append(d),$("body").append(c),$("body").append(b);var h=parseInt(e.attr("value"));$(".modal .imgArea").on("mouseenter",function(){$(".modal .arrows").fadeIn("fast")}).mouseleave(function(){$(".modal .arrows").fadeOut("fast")}),$(".arrows").on("click",function(){var a,b,c=$("#hackList").find("img"),d=c.length;h++,$(".modal .description").html($(c[h%d]).next().clone()),b=$(c[h%d]).attr("value"),a=$('img[value="'+b+'"]'),$(".modal .listContainer img").attr("src",a.attr("src"))}),$(".transparentScreen").on("click",function(){$(".modal").css("display","none"),$(".modal .description").empty(),$(".arrows").unbind("click"),$(".modal").find("ul").remove(),$(this).remove()})})}),$(document).ready(function(){$("#header .nav").on("click","a",function(a){var b=$(a.currentTarget).prop("hash");a.preventDefault(),$("html,body").stop().animate({scrollTop:$(b).prop("offsetTop")},800)})});