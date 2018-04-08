$(".left").click(function(){
	$(this).replaceWith( "<form class='left'><input type='text' value='" +$(this).html()+ "'><input type='submit' value='حفظ'> </form>" );
});