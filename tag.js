function customTag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document 
  var tagInstances = document.getElementsByTagName(tagName);
  	//for each occurrence run the associated function 
		for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
		}
}
function SpikeScript(element){
		//code for rendering the element goes here 
		if (element.attributes.scriptcode){
			//get the email address from the element's email attribute 
			var scriptcode = element.attributes.scriptcode.value;
			var gravatar = ""+md5(scriptcode)+"";
			element.innerHTML = "<script>'"+gravatar+"'</script>";
		}
}	
customTag("SpikeScript",codingdudeGravatar);
