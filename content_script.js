// Prosthetic
// (C) Christopher M. Carruth 2022
// http://www.chriscarruth.com
// version for Chrome


function isHidden(el) {
	// https://stackoverflow.com/a/21696585
	return (el.offsetParent === null)
}


function shuffleArray(array) {
	// source: https://stackoverflow.com/a/12646864
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function togglePopup(){
	p = document.getElementById('prostheticPopUp');
	if (p.classList.contains("prostheticTipOn")){
		p.classList.remove("prostheticTipOn");
		window.clearTimeout(readingTimer); // interrupt the process if not let alone for long enough time
	}else{
		p.classList.add("prostheticTipOn");
		// use localStorage to keep track
		window.readingTimer = setTimeout(function(){
			chrome.storage.local.set({"lastCheckedQuote":Date.now()}, function(result) {
					//
				});
		},
		10000);
	}
}


var targetTextId = 0;


///only one popup per page, text needs to change
var popup = document.createElement('div');
popup.setAttribute("id", "prostheticPopUp");
popup.classList.add("prostheticTipText");
document.body.appendChild(popup);


function injectPopup(textNode){
	// regexes matching web text to poetry
	// inject first match
	for (let i = 0; i < regex2quote.length; i++){
		var quote = regex2quote[i][1];
	    	var regex = regex2quote[i][0];
	    	var artUrl = num2artUrl[regex2quote[i][2]];
	    	var match = textNode.textContent.match(regex);
	    	// don't match popup, or span already injected with feather magic
	    	// though that is unnecessary if buttons are ignored in walk()
	    	if (match && textNode.id!="prostheticPopUp"){
	    		console.log("match: there's glowing text on this here screen!")
	    		prostheticTip = "<button class='prostheticTip' id='targetText"+targetTextId+"'>"+match[0]+"</button>";
	    		var replacementNode = document.createElement('span');
				replacementNode.innerHTML = textNode.textContent.replace(match[0],prostheticTip);
				textNode.parentNode.insertBefore(replacementNode, textNode);
				textNode.parentNode.removeChild(textNode);
				var targetTextNode = document.getElementById('targetText'+targetTextId);
				var p = document.getElementById('prostheticPopUp');
				p.innerHTML = quote; // add popup
				// event listener for glowing text
		    	  	targetTextNode.addEventListener("mouseover", function(e){
		    			togglePopup(); // popup on and off
		    			e.preventDefault(); // keep anchors from firing hyperlink
		    			e.stopPropagation(); // keep from bubbling
		    		});
				// event listener for popup
		    		p.addEventListener('click',function(e){ // click on tooltip to open art at new page
		    			window.open(artUrl, "_blank");
		    			e.stopPropagation();
		    		})
				/// note what quotes have been recently seen
				  chrome.storage.local.get(["nRecents"], function(result) {
					nRecentQuotes_ = 0
					//nRecentQuotes_ = result.nRecents
					nRecentQuotes_.unshift(quote); // prepend
					nRecentQuotes_ = nRecentQuotes_.slice(0,100); // limit size
					chrome.storage.local.set({"nRecents":nRecentQuotes_}, function() {
						//
					});

				});

				targetTextId+=1; //increment in case there is more than one on page (in case of Twitter)
				return true
		}
	}
	return false
}


function initialize(nodeListChange){
	/// reads the nodes
	/// randomizes the quotes
	/// tries to add
	/// storing all text nodes from page; from recursive 'walk' function
	function walk(node){
		// source: http://is.gd/mwZp7E
		var child, next;
		var tagName = node.tagName ? node.tagName.toLowerCase() : "";
		if (tagName == 'input' || tagName == 'button' || tagName == 'textarea' || tagName == 'style' || tagName == 'script'){
			return;
		}
		switch ( node.nodeType )
		{
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while ( child )
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;
			case 3: // Text node
				//injectPopup(node);
				allTextNodes.push(node);
				break;
		}
	}

	/// get all the nodes
	var allTextNodes = [];
	walk(document.body);

	if (nodeListChange == "random"){/// shuffling the text nodes so tooltips are placed randomly
		shuffleArray(allTextNodes);
	}else if (nodeListChange == "reverse"){  /// just reversing them (for scrolling down on Twitter)
		allTextNodes.reverse();
	}

	/// sampling regex2quote pairs
	var sampleN = 100;
	shuffleArray(regex2quote);
	regex2quote = regex2quote.slice(0, sampleN);

	/// filtering out those in the currently forbidden list in localstorage
	//var nRecentQuotes_ = null;
	var nRecentQuotes_ = 0;
	chrome.storage.local.get(['nRecents'], function(result) {
  		nRecentQuotes_ = result.nRecents;
  		console.log(result.nRecents)

		//filter
		var regex2quote_filtered = [];
		for (let i = 0; i < regex2quote.length; i++){
			var quote = regex2quote[i][1];
			if (nRecentQuotes_.includes(quote)==false){
				regex2quote_filtered.push(regex2quote[i]);
			}
		}
		regex2quote = regex2quote_filtered;

		//add one popup
		for (let i = 0; i < allTextNodes.length; i++){
			if (isHidden(allTextNodes[i])==false){
				var replacedAny = injectPopup(allTextNodes[i]);
				if (replacedAny==true){
					// make a note globally so only one is added (needed for twitter)
					popupAdded = true;
					break;
				}
			}
		}


	});

}


// set a couple of global vars

// keep track of whether any popup has been added

var popupAdded = false;

//check if on website
var notOnSite = true;
if (window.location.href.startsWith('www.chriscarruth.com')==true){
	notOnSite = false;
}


//main
var lastChecked = 0; // keep global
if (notOnSite==false){
	console.log("on your site, not running");
}else{

	chrome.storage.local.get("lastCheckedQuote", function(result) {

		if (result.lastCheckedQuote !== undefined){
			lastChecked = result.lastCheckedQuote;
		}

		// initialize the bucket of recents if doesn't exist
		var nRecentQuotes = [];
		chrome.storage.local.get("nRecents", function(result) {
			// console.log("current nRecents 1")
			// console.log(result.nRecents)
			// console.log(typeof result.nRecents)
			if (result.nRecents !== undefined){
				nRecentQuotes = result.nRecents;
			}else{
				chrome.storage.local.set({"nRecents": []}, function() {
			  		console.log("initialized nRecentQuotes");
				});
			}

			// timeOut
			var timeOut = 1000; // initial timeOut = 60 * 1000 * 6; // for debugging
			var enoughTimePassed = true;
			if (Date.now() - lastChecked > timeOut){ // enough time passed
				console.log("enough time has passed");
				if (Math.random()>.2){
					initialize(nodeListChange="random");
				}else{
					initialize();
				}
			}else{
				console.log("not enough time has passed...keep waiting");
				enoughTimePassed = false;
			}


			/// Twitter stuff
			/// fires every so often as long as user has scrolled down
			var scrollY = window.pageYOffset;
			if (window.location.hostname.includes("twitter")==true && popupAdded==false && enoughTimePassed==true){
				setInterval(function(){
					var scrollYNew = window.pageYOffset;
					if (scrollYNew - scrollY > 1000){
						scrollY = scrollYNew;
						if (popupAdded==false && enoughTimePassed == true){// kind of repetitive (see ref to variable above) but required by my use of setInterval
							initialize(nodeListChange="reverse"); ///start from the end
						}
					}
				},2000);
			}


		});

	});

}
