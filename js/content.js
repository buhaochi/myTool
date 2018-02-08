($(".reputation-score").filter(function(index) {
  return $( this ).text()<10;
}).parents(".question-summary").hide());
