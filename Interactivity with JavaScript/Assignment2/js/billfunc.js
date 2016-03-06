/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

/*
 * Completed by Patricia Xiao
 * 2016/2/22 22:59 Beijing Time
 */


function billingFunction(){
	// judge if the checkbox is checked
	var checked = document.getElementById("same").checked;
	// if it is a change from unchecked to checked
	if (checked){
		// Whenever the checkbox is checked, 
		// the code should automatically copy the values from Shipping Name and Shipping Zip into the Billing Name and Billing Zip.
		var name = document.getElementById("shippingName").value;
		var zipcode = document.getElementById("shippingZip").value;
		document.getElementById("billingName").value = name;
		document.getElementById("billingZip").value = zipcode;
	}
	// if it is unchecked
	else{
		// If the checkbox is unchecked, 
		// the Billing Name and Billing Zip should go blank.
		document.getElementById("billingName").value = "";
		document.getElementById("billingZip").value = "";
	}
}
