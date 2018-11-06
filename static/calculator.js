var first = 0
var last = 0;
var choice = true;

document.getElementById("initialize").onclick = function()
{
	first = 0;
	last = 0;
	choice = true;
	window.alert("This is a test")
}

document.getElementById("zero").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	}
	else
	{
		last *= 10;
	}
}

document.getElementById("one").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 1
	}
	else
	{
		last *= 10;
		last += 1;
	}
}

document.getElementById("two").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 2;
	}
	else
	{
		last *= 10;
		last += 2;
	}
}

document.getElementById("three").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 3;
	}
	else
	{
		last *= 10;
		last += 3;
	}
}

document.getElementById("four").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 4;
	}
	else
	{
		last *= 10;
		last += 4;
	}
}

document.getElementById("five").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 5;
	}
	else
	{
		last *= 10;
		last += 5;
	}
}

document.getElementById("six").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 6;
	}
	else
	{
		last *= 10;
		last += 6;
	}
}

document.getElementById("seven").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 7;
	}
	else
	{
		last *= 10;
		last += 7;
	}
}

document.getElementById("eight").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 8;
	}
	else
	{
		last *= 10;
		last += 8;
	}
}

document.getElementById("nine").onclick = function()
{
	if(choice)
	{
	    first *= 10;
	    first += 9;
	}
	else
	{
		last *= 10;
		last += 9;
	}
}

document.getElementById("plus").onclick = function()
{
	choice = false;
}

document.getElementById("minus").onclick = function()
{
	choice = false;
}

document.getElementById("multiply").onclick = function()
{
	choice = false;
}

document.getElementById("divide").onclick = function()
{
	choice = false;
}

document.getElementById("equals").onclick = function()
{
	window.alert("The result is: 14")
}