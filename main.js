var stylesheet_main = null;

initialize();

function initialize()
{
    head = document.head || document.getElementsByTagName('head')[0],
    stylesheet_main = document.createElement('style');
	
	stylesheet_main.type = 'text/css';

	head.appendChild(stylesheet_main);
}

function css_submit()
{	
	update_css(document.getElementById("css_text_input").value);	
	
	return false;
}

function update_css(css)
{
	if (stylesheet_main.childNodes.length > 0)
	{
		//stylesheet_main.removeChild(stylesheet_main.childNodes[0]);
	}
	
	stylesheet_main.appendChild(document.createTextNode(css));	
}