 
 //click on the menu
 
 
 $(document).ready(function(){
    $("#navbar").click(function(){
      $("#come").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $("#btn").click(function(){
      $("#show-menu").slideDown("slow");
    });
  });

  //hide and show
  $(document).ready(function(){
    $("#hide").click(function(){
      $("#contactForm").hide();
    });
    $("#show").click(function(){
      $("#contactForm").show();
    });
  });