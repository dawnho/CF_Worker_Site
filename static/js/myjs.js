window.onload = function() {
	if(!window.jQuery){
		alert('jQuery not loaded');
	}
	else{
		$(document).ready(function(){
			$(".collapse").collapse();
		});
    }
}

