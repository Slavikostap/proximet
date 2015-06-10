
function Slider(){
	// $(".slider #1").show("fade", 500);
	$(".slider #1").delay(5500).hide(500);

	var sc=${".slider.img"}.size();
	var count=2;

	setinterval(function(){
		$(".slider #"+count).show(500);
		$(".slider #"+count).delay(3000).hide(500);

		if (count==sc){
			count=1;
		}else{
			count++;
		}, 4000);

	});
}