/*
 * Add the JavaScript here for the function billingFunction(). 
 * It is responsible for setting and clearing the fields in Billing Information
 *
 * Completed by Patricia Xiao
 * 2016/2/22 22:59 Beijing Time
 */

function billingFunction(){
	// judge if the checkbox is checked
	if (same.checked){
		// Whenever the checkbox is checked, 
		// the code should automatically copy the values from Shipping Name and Shipping Zip into the Billing Name and Billing Zip.
		billingName.value = shippingName.value;
		billingZip.value = shippingZip.value;
	}
	// if it is unchecked
	else{
		// If the checkbox is unchecked, 
		// the Billing Name and Billing Zip should go blank.
		billingName.value = "";
		billingZip.value = "";
	}
}