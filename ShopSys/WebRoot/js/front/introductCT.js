$(function(){broadcast();var result=$("#title").val();$("#aboutUs").html(result);$("#searchBtn").click(function(){var searchParam=$("#searchParam").val();if(searchParam==""){return false}InitialSearchResutlPage("pageContent_right");changeChildNav("products_childnav");loadProductsBySearParam(searchParam,9,1);initialPagination_products_search(searchParam)});$("#searchParam").bind("keypress",function(event){if(event.keyCode=="13"){var searchParam=$("#searchParam").val();if(searchParam==""){return false}InitialSearchResutlPage("pageContent_right");changeChildNav("products_childnav");loadProductsBySearParam(searchParam,9,1);initialPagination_products_search(searchParam)}})});