function ui(selector){
	
	var instance = {},
		width = parseInt(d3.select(selector).style("width")), 
	    height = parseInt(d3.select(selector).style("height"));

		
	var	color = "white"; // default for setter


	instance.slider = function(){
		
		var circleR = height/2,
			borderWidth = 1,
			borderRadius = height/2 +4;
	
		var svgSlider = d3.select(selector).append("svg")
			.attr("width",width)
			.attr("height",height)
			.append("g"),

		drag = d3.behavior.drag()
			.on("drag",move),

		dataSet = [[ width/2 , height/2]];

		svgSlider.selectAll("circle")
			.data(dataSet)
			.enter()
	   		.append("circle")
			.attr("r", circleR)
			.attr("fill",color)
			.attr("transform", function(d) {
				return "translate(" + d + ")";
			})
			.call(drag);
		
		function move(d) {

			var xScale = d3.scale.linear()
				.domain([0,width])
				.range([circleR,width - circleR ])
				.clamp(true);

			var x = d3.event.x;
		
			d3.select(this)
				.attr("transform",function(d) { 
				return "translate(" + xScale(x) + "," + height/2 + ")";});
		};
	

		d3.select(selector)
			.style("border-style","solid")
			.style("border-width",borderWidth + "px")
			.style("border-radius",borderRadius + "px")
			.style("border-color",color);

		return instance;
	};

	// setter/getter 

	instance.color = function(c) {
		if(!arguments.length) return color;
		color = c;
		return instance;
	};

	return instance;

};