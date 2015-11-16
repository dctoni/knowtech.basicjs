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

			tooltip.id = element.id + "-tooltip";
			var OtherTooltip = document.querySelector("#"+ tooltip.id);
			OtherTooltip.parentNode.removeChild(OtherTooltip);

			var leftPosition = element.offsetLeft;
			var elementWidth = window.getComputedStyle(element).width;
			elementWidth = elementWidth.replace("px", "");
			elementWidth = parseInt(elementWidth);

			var paddingLeft = parseInt(window.getComputedStyle(element).paddingLeft.replace("px",""));
			var paddingRight = parseInt(window.getComputedStyle(element).paddingRight.replace("px",""));



			var tooltipPosition = leftPosition + paddingLeft + paddingRight + elementWidth;

			document.body.appendChild(tooltip);
			tooltip.style.left = tooltipPosition + 10 + "px";

			var topPosition = element.offsetTop;
			tooltip.style.top = topPosition + "px";
		}
	};

	document.addEventListener("DOMContentLoaded", function() {

		var registerMeButton = document.getElementById("registerUserButton");
		
		registerMeButton.addEventListener("click", function(e){
			var userName = document.getElementById("userName").value;
			if (userName == "" || userName == null) {
				Form.appendTooltipNextTop("#userName", "Username no puede estar vacío");
			} else {
				Form.tooltip.style = "";
			}

			var password = document.getElementById("password").value;
			if (password == "" || password == null) {
				Form.appendTooltipNextTop("#password", "Password no puede estar vacío");
			} else {
				Form.tooltip.style = "";
			}
			
			var repeatpassword = document.getElementById("repeatpassword").value;
			if (repeatpassword == "" || repeatpassword == null) {
				Form.appendTooltipNextTop("#repeatpassword", "Repeat Password no puede estar vacío");
			} else {
				Form.tooltip.style = "";
			}

			var email = document.getElementById("email").value;
			if (email == "" || email == null) {
				Form.appendTooltipNextTop("#email", "Email no puede estar vacío");
			} else {
				Form.tooltip.style = "";
			}

			e.preventDefault();

		});

	});

})();