 var U = {};
 var C = {};
 C.DEC_SEPARATOR = ",";
 C.dateFormat = "dd-NNN-yyyy";
 C.dateDBFormat = "yyyy-MM-dd";
 C.dateFeedbackFormat = "dd-MM-yyyy"; 
 C.dateTimeDBFormat = "yyyy-MM-dd HH:mm:ss";
 C.LISTVIEW_ROW_MINIMUM_HEIGHT = 40;

   
 U.formatDate = require('./getDateFromFormat').formatDate; //function from "common/getDateFromFormat.js"
 U.getDateFromFormat = function(dateStr,dateFormat) {
    return new Date(getDateFromFormat(dateStr,dateFormat)); //function from "common/getDateFromFormat.js"
 }; 
 U.roundNumeric = function(dec, decPos) {
    if (decPos == null) {
        decPos = 2;
    }
    var multiplier = 10 * decPos;
    // toFixed also rounds!
    var result = (dec * multiplier / multiplier).toFixed(decPos).toString();
    return result;
 };
 U.mergeProperties = function(prop1,prop2) {
 	var temp = {};
 	for(var i in prop1) {
 		temp[i] = prop1[i];
 	}
 	for(var i in prop2) {
 		temp[i] = prop2[i];
 	}
 	return temp;
 };
 
U.getDateWithoutTime = function(date) {
    if(date == null) {
        return null;
    }
	date.setHours(0,0,0,0);
	//alert(date);
	return date;	
};

// Function to test if device is iOS 7 or later
U.isiOS7Plus = function() {
    // iOS-specific test
    if (Titanium.Platform.name == 'iPhone OS')
    {
        var version = Titanium.Platform.version.split(".");
        var major = parseInt(version[0],10);

        // Can only test this support on a 3.2+ device
        if (major >= 7)
        {
            return true;
        }
    }
    return false;
};

U.getWindowTop = function() {
    if (U.isiOS7Plus()) {
        return 20;
    }
    return 0;
};

U.getBackAnimation = function(win) {
    win.left = - Ti.Platform.displayCaps.platformWidth;
    //win.width = Ti.Platform.displayCaps.platformWidth;
    var animation = Ti.UI.createAnimation();
    animation.left = 0;
    animation.duration = 300;
    return animation;
};

U.getForwardAnimation = function(win) {
    win.left = Ti.Platform.displayCaps.platformWidth;
    //win.width = Ti.Platform.displayCaps.platformWidth;
    var animation = Ti.UI.createAnimation();
    animation.left = 0;
    animation.duration = 300;
    return animation;
};

U.playSound = function(soundUrl) {
    var player = Ti.Media.createSound({url: soundUrl});
    player.play();
    player = null;
};

U.playSoundOk = function() {
    U.playSound("/sounds/update_ok.wav");
};

U.playSoundErr = function() {
    U.playSound("/sounds/update_error.wav");
};

U.isValidInteger = function(intString) {
	if (intString == null) {
		return false;
	}
	return /^\d+$/.test(intString);
};

U.isValidDecimal = function(decString, minDecPos, maxDecPos) {
	if (decString == null) {
		return false;
	}
	// by default we allow 1 to 2 decimal places
	if (minDecPos == null) {
		minDecPos = 1;
	}
	if (maxDecPos == null) {
		maxDecPos = 2;
	}
	var decParts = decString.split(C.DEC_SEPARATOR);
	if (decParts.length == 1) {
		return U.isValidInteger(decParts[0]);
	} else if (decParts.length == 2) {
		var decRegex = new RegExp("^\\d{" + minDecPos + "," + maxDecPos + "}$");
		return U.isValidInteger(decParts[0]) && decRegex.test(decParts[1]);
	} else {
		return false;
	}
};

// NB: Only use this function after isValidDecimal success
U.parseDecimal = function(decString) {
	// always use dot as decimal separator, parseFloat is locale INDEPENDENT
	var tmpStr = decString.replace(C.DEC_SEPARATOR, ".");
	return parseFloat(tmpStr);
};

U.formatDecimal = function(dec, decPos) {
	if (decPos == null) {
		decPos = 2;
	}
	var multiplier = 10 * decPos;
	// toFixed also rounds!
	var result = (dec * multiplier / multiplier).toFixed(decPos).toString();
	return result.replace(".", C.DEC_SEPARATOR);
};

U.getSuggestedHeight = function(text,left,right) {
    var width = Ti.Platform.displayCaps.platformWidth;
    if(left || right) {
        width = width - left - right;
    }
    var labelTmp = Titanium.UI.createLabel({
        text : text,
        width : width
    });
    var height = labelTmp.suggestHeight();
    if(height < C.LISTVIEW_ROW_MINIMUM_HEIGHT) {
        return C.LISTVIEW_ROW_MINIMUM_HEIGHT;
    } else {
        return height; 
    }
};

U.getSuggestedHeightFixedWidth = function(text,width) {
    var labelTmp = Titanium.UI.createLabel({
        text : text,
        width : width
    });
    var height = labelTmp.suggestHeight();
    if(height < C.LISTVIEW_ROW_MINIMUM_HEIGHT) {
        return C.LISTVIEW_ROW_MINIMUM_HEIGHT;
    } else {
        return height; 
    }
};

module.exports.utils = U;
module.exports.constants = C;