(function() {
	var Form = {

		createTooltip: function(text) {

			var rawTooltipTemplate = document.getElementById("tooltipTemplate");
			var tempContainer = document.createElement("div");
			tempContainer.innerHTML = rawTooltipTemplate.textContent;
			var tooltip = tempContainer.querySelector("div");
			var tooltipText = tooltip.querySelector("span");
			tooltipText.textContent = text;
			document.body.appendChild(tempContainer);
			return tooltip;

		}, 
		
		appendTooltipNextTop: function(elementSelector, text) {
			var tooltip = this.createTooltip(text);
			var element = document.querySelector(elementSelector);

			var leftPosition = element.offsetLeft;
			var elementWidth = window.getComputedStyle(element).width;
			elementWidth = elementWidth.replace("px", "");
			elementWidth = parseInt(elementWidth);

			var paddingLeft = parseInt(window.getComputedStyle(element).paddingLeft.replace("px",""));
			var paddingRight = parseInt(window.getComputedStyle(element).paddingRight.replace("px",""));



			var tooltipPosition = leftPosition + paddingLeft + paddingRight + elementWidth;

			document.body.appendChild(tooltip);
			tooltip.style.left = tooltipPosition + "px";
		}
	};

	document.addEventListener("DOMContentLoaded", function(){
	Form.appendTooltipNextTop("#userName", "Some stuff");

	});
	

})();