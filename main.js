for (index in sequence)
{
	css_submit(sequence[index])
}


function css_submit(css)
{
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
		
	$("*").animate({
		fontSize: "72pt"
	}, 500
	)
	
	
	style.type = 'text/css';

	style.appendChild(document.createTextNode(css));
			
	//head.appendChild(style);
	
	return false;
}