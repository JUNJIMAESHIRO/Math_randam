
$(function(){
  var count = 0;
  var ranmath = Math.floor( Math.random() * 11 ) ;
  $("#mathbutton").on("click",function(){
    count = count+1;
    let math = $("#text").val()
    console.log(math);
    if (math == ranmath) {
      let farst = $(".farst_results")
      var answer1 = "Awesome"
      farst.text(answer1)
      let total = $(".totaltaime")
      var totalcount = "This time you hit it with in "+ count + " time!"
      total.text(totalcount)
      $(".againbutton").show()
    }else if (math < ranmath){
      let farst = $(".farst_results")
      var answer2 = "Higher"
      farst.text(answer2)
    }else if (math > ranmath){
      let farst = $(".farst_results")
      var answer3 = "Lower"
      farst.text(answer3)
    }
  })
  // againのボタンを押した際の動作
  $(".againbutton").on("click",function() {
    location.reload();
  })

})