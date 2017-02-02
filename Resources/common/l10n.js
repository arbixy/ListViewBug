/*

Titanium L10N framework - Main logic

Copyright Igor Afanasyev <afan@mail.ru>

Version 1.0 - 2010-03-05

*/

//------------------------------------------------------------------------------
function L10NObject() {
//------------------------------------------------------------------------------
  this.LangPreferenceName = 'lang'; // change if you want to store language preference in some other variable
  this.LangUrlPreferenceName = 'lang-url'; // change if you want to store language URL preference in some other variable
  this.LangDir = 'lang'; // change if you want to store language files in some other directory
  this.DefaultLanguage = 'en'; // change if you want to have another default language

  this.FileSignature = /^\[L10N\]/;
  this.LanguageFiles = {};
  this.LanguageOverrideFiles = {};
  this.Languages = [];
  this.UserLanguage = '';
  this.LoadedLanguage = '';
  this.LoadedLanguageFile = '';
  this.LocalizedStrings = {};

  this.LanguageNames = {
    'en'    : 'English',		// English
    /*'bg'    : 'Български'//,		// Bulgarian
    'ru'    : 'Русский',		// Russian
    'fr'    : 'Français',		// French
    'de'    : 'Deutsch',		// German
    'ja'    : '日本語',			// Japanese
    'nl'    : 'Nederlands',		// Dutch
    'it'    : 'Italiano',		// Italian
    'es'    : 'Español',		// Spanish
    'pt-br' : 'Português',		// Portuguese (Brazil)
    'pt'    : 'Português (Portugal)',	// Portuguese (Portugal)
    'da'    : 'Dansk',			// Danish
    'fi'    : 'Suomi',			// Finnish
    'nb'    : 'Norsk (bokmål)',		// Norway
    'sv'    : 'Svenska',		// Swedish
    'ko'    : '한국어',			// Korean
    'zh-cn' : '简体中文',			// Chinese Simplified
    'zh-tw' : '繁體中文',			// Chinese Traditional
    'pl'    : 'Polski',			// Polish
    'tr'    : 'Türkçe',			// Turkish
    'uk'    : 'Українська',		// Ukrainian
    //'' : '',				// Arabic
    'hr'    : 'Hrvatski',		// Croatian
    'cs'    : '`Ce`stina',		// Czech
    'el'    : 'Ελληνικά',		// Greek
    'he'    : 'עברית',			// Hebrew
    'ro'    : 'Română',			// Romanian
    'sk'    : 'Slovenčina',		// Slovak
    //'' : '',				// Thai
    'id'    : 'Bahasa Indonesia'	// Indonesian*/
  };

  //----------------------------------------------------------------------------
  this.getLocalizedString = function (s, defaultString) {
  //----------------------------------------------------------------------------
    var result = this.LocalizedStrings[s];
    if (result) { return result; }
    if (defaultString) { return defaultString; }
    return '[' + s + ']';
  };

  //----------------------------------------------------------------------------
  this.getLanguageDisplayName = function (lang) { // e.g. 'en' or 'en-us', optional
  //----------------------------------------------------------------------------
    if (!lang) { lang = this.LoadedLanguage; } // use current language if not specidied

    var result = this.LanguageNames[lang]; // full language name (e.g. 'en-us')
    if (result) { return result; }

    result = this.LanguageNames[lang.substring(0,2)]; // just language ('en')
    if (result) { return result; } 

    return lang;
  };

  //----------------------------------------------------------------------------
  this.loadLanguage = function (lang) { // e.g. 'en' or 'en-us'
  //----------------------------------------------------------------------------
    Ti.API.debug('Loading language "' + lang + '"');
	lang = lang.toLowerCase();
    var result = false;
	if(lang == 'de') {
      result = this.loadLanguageFromFile('de.txt');
	} else {
	    if (this.LanguageOverrideFiles[lang]) {
	      result = this.loadLanguageFromFile(this.LanguageOverrideFiles[lang]);
	    }
	
	    if (!result && this.LanguageFiles[lang]) {
	      result = this.loadLanguageFromFile(this.LanguageFiles[lang]);
	    }
	}

    if (result) {
      this.LoadedLanguage = lang;
	  MONTH_NAMES=new Array(_('month.January'),_('month.February'),_('month.March'),_('month.April'),_('month.May'),_('month.June'),_('month.July'),_('month.August'),_('month.September'),_('month.October'),_('month.November'),_('month.December'),_('month.Jan'),_('month.Feb'),_('month.Mar'),_('month.Apr'),_('month.May'),_('month.Jun'),_('month.Jul'),_('month.Aug'),_('month.Sep'),_('month.Oct'),_('month.Nov'),_('month.Dec'));
      DAY_NAMES=new Array(_('day.Sunday'),_('day.Monday'),_('day.Tuesday'),_('day.Wednesday'),_('day.Thursday'),_('day.Friday'),_('day.Saturday'),_('day.Sun'),_('day.Mon'),_('day.Tue'),_('day.Wed'),_('day.Thu'),_('day.Fri'),_('day.Sat'));
    }
    return result;
  };

  //----------------------------------------------------------------------------
  this.loadLanguageFromFile = function (file) { // e.g. 'en-us.txt'
  //----------------------------------------------------------------------------
    Ti.API.debug('Loading language from file "' + file + '"');

    var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, file);
	if(!f || !f.read()) {
        f = Ti.Filesystem.getFile(Ti.Filesystem.getResourcesDirectory(), this.LangDir, file);
	}
    Ti.API.debug('Loading from file "' + f + '"');

    if (!f) {
      Ti.API.warn('Failed to open file "' + file + '"');
      return false; // failed to open file
    }
    var contents = f.read();
	//Ti.API.warn('contents "' + contents + '"');
    if (!contents) {
      Ti.API.warn('Failed to read file "' + f.nativePath + '"');
      return false; // failed to read file
    }
    f = null;
    contents = contents.text;
    if (!contents) {
      Ti.API.warn('Failed to convert file "' + file + '" contents to string');
      return false; // failed to convert file to string
    }
    if (!contents.match(this.FileSignature)) {
      Ti.API.warn('File "' + file + '" seems to have the wrong format');
      return false; // failed to understand the file contents
    }

    var result = false;
    var lines = contents.split('\n');
    for (var i = 0; i < lines.length; i++) {
	  if(lines[i].indexOf('#') == 0 || lines[i].trim().length == 0) {
	  	continue; //skip lines with comment or only new line (with empty spaces)
	  }
      var m = lines[i].match(/^(\w[\!\?\(\)\'\w\s\d\-\.:\/\\]*)=(.+)\r?$/);
      if (m) {
        result = true; // ok, at least one string matching the mask has been found
        var key = m[1];
        var value = m[2];
        if (this.LocalizedStrings[key]) {
          Ti.API.warn('Duplicate key "' + key + '" found in "' + file + '"');
        }
        value = value.replace(/\\\\/g, '\u0001');
        value = value.replace(/\\n/g, '\n');
        value = value.replace(/\u0001/g, '\\');
        this.LocalizedStrings[key] = value;
      } else {
          Ti.API.warn('Line with incorrect key found in "' + file + '": ' + lines[i]);
	  }
    }

    this.LoadedLanguageFile = file;
    return result;
  };

  //----------------------------------------------------------------------------
  this.scanLocalizationFiles = function () {
  //----------------------------------------------------------------------------
    var dir = Ti.Filesystem.getFile(Ti.Filesystem.getResourcesDirectory(), this.LangDir);
    var files = dir.getDirectoryListing();
  
    this.LanguageFiles = {};
    this.LanguageOverrideFiles = {};
    this.Languages = [];

    var lang = {};
    for (var i = 0; i < files.length; i++) {
      var m = files[i].match(/^(\w\w(-\w\w){0,1})(\.override){0,1}\.txt$/);
      if (m) {
        if (m[3]) { // if .override suffix is present
          this.LanguageOverrideFiles[m[1]] = files[i]; // add filename to overrdies list
        } else {
          this.LanguageFiles[m[1]] = files[i]; // add filename to languages list
        }
        lang[m[1]] = 1; // remember language
      }
    }

    // constructing the compound array of languages with no duplicates
    for (var key in lang) {
      if (true) { // to avoid warning message from Titanium compiler
        this.Languages.push(key);
      }
    }
  };

  //----------------------------------------------------------------------------
  this.getPreferredLanguage = function () {
  //----------------------------------------------------------------------------
    return Ti.App.Properties.getString(this.LangPreferenceName);
  };

  //----------------------------------------------------------------------------
  this.setPreferredLanguage = function (lang) { // e.g. 'en' or 'en-us'
  //----------------------------------------------------------------------------
    if (lang) {
      Ti.App.Properties.setString(this.LangPreferenceName, lang);
    } else {
      Ti.App.Properties.removeProperty(this.LangPreferenceName);
    }
  };

  // initialization code
  this.scanLocalizationFiles();

}

//------------------------------------------------------------------------------

var L10N = new L10NObject(); // global object

/*
function _(s, defaultString) {
  return L10N.getLocalizedString(s, defaultString);
}
*/

function _(s) {
	var translatedValue = L10N.getLocalizedString(s);
	if(arguments.length > 1) {
		for(var i=1;i<arguments.length;i++) {
			translatedValue = translatedValue.replace("{"+(i-1)+"}",arguments[i]);
		}
	}
    return translatedValue;
}

module.exports = _;

