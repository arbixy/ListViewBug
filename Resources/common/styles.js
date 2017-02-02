var styles = {};
var U = require('./utils').utils;
var _ = require('./l10n');
module.exports = styles;

styles.tabBarView = {
	backgroundColor: 'white',//rgb(119,115,114)',
	bottom: 0,
	height: 60,
	width: Ti.UI.FILL,
	verticalAlign:'center'
};

styles.tabBarButtonWrapView = {
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	top: 5,
	bottom: 5,
	backgroundColor: 'transparent'
};

styles.orderFormTotalView = {
	backgroundColor:'transparent',
	bottom: 0,
	height: 60,
	width: Ti.UI.FILL
};

styles.orderFormTotalOpaqueView = {
	backgroundColor:'black',
	opacity: 0.7,
	bottom: 0,
	height: 60,
	width: Ti.UI.FILL
};

styles.orderFormTotalWrapperView = {
	width: Ti.UI.FILL,
	height: Ti.UI.SIZE
};

styles.sendAgainBtn = {
    height: 40,
    width: Ti.UI.SIZE,
    style:'none',
    borderWidth: 1,
    contentInsets: {top:5,left:10,right:5,bottom:5},
    imageInsets: {top:-5,left:-10,right:0,bottom:-5},
    image:'/images/email.png',  
    backgroundColor: 'rgb(59,157,6)',
    backgroundSelectedColor: 'transparent',
    color: 'white',
    left: 5
};

styles.sendAgainLabel = {
    color: 'white',
    font: {fontSize: 14},
    left: 6
};

styles.formClearBtn = {
	height: 40,
	width: Ti.UI.SIZE,
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	image:'/images/clearIcon.png',	
	title: _('form.clear'),
	style:'none',
	borderWidth: 1,
	color: 'white',
	backgroundColor: 'rgb(221,68,38)',
	left: 5,
	right: 5
};

styles.formDraftBtn = {
	height: 40,
	width: Ti.UI.SIZE,
	contentInsets: {top:5,left:10,right:5,bottom:5},
	title: _('form.draft'),
	style:'none',
	borderWidth: 1,
	color: 'white',
	backgroundColor: '#9d9792',
	right: 249
};

styles.formSaveBtn = {
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	backgroundColor: '#3B9D06',
	backgroundSelectedColor: '#00FFFFFF',
	selectedColor: 'black',
	image:'/images/saveIcon.png',	
	title: _('form.save'),
	color: 'white',
	right: 5
};

styles.formNoteBtn = {
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	title: _('form.note'),
	contentInsets: {top:5,left:10,right:10,bottom:5},
	right: 174,
	borderWidth: 1,
	color: 'white',
	backgroundColor: '#9d9792',
	backgroundSelectedColor: '#00FFFFFF'
};

styles.formTotalSignButton = {
	width: Ti.UI.SIZE,
    height: 40,
    title: _('salesOrder.sign'),
    right: 105,
    contentInsets: {top:5,left:10,right:10,bottom:5},
	style:'none',
	borderWidth: 1,
	color: 'white',
	backgroundColor: '#F36633',
	backgroundSelectedColor: '#00FFFFFF'
};


styles.orderFormTotalLabelValueWrapperView = {
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	layout:'horizontal',
	left: 130,
	right: 400
};

styles.formTotalLabel = {
	font: {fontSize:22},
	color: 'white',
	text: _('form.total')
};

styles.formTotalValue = {
	font: {fontSize:22},
	color: 'white',
	left: 2
};

//DATE FIELD

styles.dateView = {
	top:50,
	height: 130,
	backgroundColor:'transparent',
	width: Ti.UI.FILL
};

styles.dateWrapperView = {
	top:10,
	bottom: 10,
	left: 5,
	right: 5,
};

styles.gradientFieldView = {
    layout: 'horizontal',
    height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	top: 10,
	backgroundGradient:{
    	type:'linear',
    	colors:["rgb(232,228,224)","white"]
    }
};

styles.dateFieldView = U.mergeProperties(styles.gradientFieldView, {
	height: 130,
	width: 300	
});

styles.dateFieldWrapperView = {
	top:0,
	left: 10,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	layout:'vertical',
	verticalAlign:'center',
	color:'black'
};

styles.fieldLabel = {
	left: 10,
	color:'rgb(132,127,123)',
	text: _('form.date')
};

styles.fieldValue = {
	left: 10,
	color:'black'
};

styles.changeDateBtn = {
	top:0,
	right:20,
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	backgroundColor: 'white',
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	image:'/images/calendarIcon.png',	
	title: _('form.date.change'),
	color: 'rgb(243,106,0)'
};

//CUSTOMER FIELD


styles.customerFieldView = U.mergeProperties(styles.gradientFieldView, {
	left: 20,
	height: 130,
	width: Ti.UI.FILL	
});

styles.customerFieldWrapperView = {
	top: 0,
	left: 10,
	right: 5,
	height: Ti.UI.SIZE,
	layout:'vertical',
	verticalAlign:'center'
};

styles.customerLabel = {
	right: 200,
	left: 0,
	color:'rgb(132,127,123)',
	text: "User"
};

styles.customerValue = {
	left: 10, 
	color:'black'
};

styles.customerChangeBtn = {
	top: 0,
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	backgroundColor: 'white',
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	image:'/images/customerIcon.png',	
	title: "User",
	color: 'rgb(243,106,0)'
};

styles.customerClearBtn = {
    top:25,
    height: 40,
    width: Ti.UI.SIZE,
    style:'none',
    borderWidth: 1,
    backgroundColor: 'white',
    contentInsets: {top:5,left:10,right:5,bottom:5},
    imageInsets: {top:-5,left:-10,right:0,bottom:-5},
    image:'/images/clear.png',   
    title: "User",
    color: 'rgb(243,106,0)'
};

//REPORTS FIELD

styles.customerFieldView = U.mergeProperties(styles.gradientFieldView, {
	left: 20,
	height: 130,
	width: Ti.UI.FILL	
});

styles.customerFieldWrapperView = {
	top: 0,
	left: 10,
	right: 5,
	height: Ti.UI.SIZE,
	layout:'vertical',
	verticalAlign:'center'
};

styles.reportsLabel = {
	right: 200,
	left: 0,
	color:'rgb(132,127,123)',
	text: _('form.reports')
};

styles.customerValue = {
	left: 10, 
	color:'black'
};

styles.consolidatedReportBtn = {
	top: 0,
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	backgroundColor: 'white',
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	image:'/images/customerIcon.png',	
	title: _('createReports.form.consolidatedReportButton'),
	color: 'rgb(243,106,0)'
};

styles.pharmacyReportBtn = {
	top: 0,
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	backgroundColor: 'white',
	contentInsets: {top:5,left:10,right:5,bottom:5},
	imageInsets: {top:-5,left:-10,right:0,bottom:-5},
	image:'/images/customerIcon.png',	
	title: _('createReports.form.pharmacyReportButton'),
	color: 'rgb(243,106,0)'
};

styles.dateReportBtn = {
    top:25,
    height: 40,
    width: Ti.UI.SIZE,
    style:'none',
    borderWidth: 1,
    backgroundColor: 'white',
    contentInsets: {top:5,left:10,right:5,bottom:5},
    imageInsets: {top:-5,left:-10,right:0,bottom:-5},
    image:'/images/customerIcon.png',   
    title: _('createReports.form.dateReportButton'),
    color: 'rgb(243,106,0)'
};

//Table styles
styles.tableViewBgr = {
	top:180,
	bottom: 60,
	left: 5,
	right: 5,
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: '#E8E4E0',//"#9D9792",
	layout:'vertical',
	verticalAlign:'center'
};

styles.tableViewBgr2 = {
	top:180,
	left: 5,
	right: 5,
	bottom:70,
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: 'rgb(232,228,224)',//"rgb(157,151,146)",
	layout:'vertical',
	verticalAlign:'center'
};

styles.tableTitle = {
	top: 10,
	left: 10,
	text: _('form.priceList'),
	font: { fontSize: 24},
	color: "rgb(157,151,146)"
};

styles.tableDataRowCell = {
	height: Ti.UI.FILL,
	top: 5,
	left: 5,
	right: 5
};

styles.tableDataLabel = {
	height: Ti.UI.FILL,
	font: { fontSize: 16},
	color: "rgb(157,151,146)"
};
styles.tableDataCenteredLabel = {
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    font: { fontSize: 16},
    textAlign: 'center',
    color: "rgb(157,151,146)"
};

styles.verticalSeparator = {
	backgroundColor: 'rgb(232,228,224)',
	height: Ti.UI.FILL,
	width: 1
};

styles.tableInputWrapVertical = {
	layout: 'vertical',
	verticalAlign:'center',
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL
};

styles.tableNumericVerticalView = {
	layout: 'vertical',
	verticalAlign:'center',
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL
};

styles.tableInputWrapHorizontal = {
	layout: 'horizontal',
	height: Ti.UI.SIZE,
	width: 120
};

styles.tableRow = {
	selectedBackgroundColor: 'transparent',
	selectionStyle: 0,
	width: Ti.UI.FILL,
	height: 50
};

styles.tableSection = {
	backgroundColor:'transparent',
	width: Ti.UI.FILL,
    height: Ti.UI.FILL
};

styles.tableHeaderLabel = {
	height: Ti.UI.FILL,
	textAlign: 'center',
	wordWrap: 'true',
	font: { fontSize: 16},
	color: "white"
};

styles.tableHeaderCenteredLabel = {
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    textAlign: 'center',
    wordWrap: 'true',
    font: { fontSize: 16},
    color: "white"
};

styles.tableInputField = {
	height: 25,
	color: 'black',//'rgb(243,106,0)',
	backgroundColor: 'white',
	textAlign: 'center',
	width: 30,
	borderWidth: 1,
	borderColor:'rgb(232,228,224)',
	textAlign: 'right',
	autocorrect: false,
	paddingRight: 5,
    keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
};

styles.tableDropdownButton = {
	backgroundImage: '/images/icon-dropdown.png',
	borderWidth: 1
};

styles.tableInputMinusButton = {
	height: 32,
	width: 32,
	borderRadius: 14,
	borderWidth: 1,
	backgroundImage: '/images/leftArrowOrange.png',
	borderColor: 'rgb(232,228,224)'
};

styles.tableInputPlusButton = {
	height: 32,
	width: 32,
	left: 10,
	backgroundImage: '/images/rightArrowOrange.png',
	borderRadius: 13,
	borderWidth: 1
};

styles.windowTitle = {
	font: { fontSize: 22},
	color: 'white'
};

styles.statusView = {
	backgroundColor: 'rgb(243,106,0)',
	top: 0,
	height: 50	
};

styles.statusWrapperView = {
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	top: 0,
	layout: 'horizontal'
};

styles.windowTitleWrapperView = {
	top: 5,
	width: Ti.UI.FILL,
	height: Ti.UI.SIZE
};

styles.homeButton = {
	borderWidth: 0,
	width:40,
	height:40,
	left: 10,
	image: '/images/home.png',
    backgroundColor: 'transparent',
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
};

styles.settingsButton = {
	borderWidth: 0,
	width:40,
	height: 40,
	right: 10,
	image: '/images/settings.png',
    backgroundColor: 'transparent',
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
};


// HOME styles

styles.homeLargeButton = {
	width:430,
	height: 110,
	opacity: 0.7,
	backgroundColor: '#00FFFFFF',
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	left:25,
	right:25
};

styles.createSalesOrderHomeButton = U.mergeProperties(styles.homeLargeButton, {
	backgroundImage: '/images/homeSalesButton.png'
});

styles.createReportsHomeButton = U.mergeProperties(styles.homeLargeButton, {
	backgroundImage: '/images/homeReportButton.png'
});

styles.createSendHomeButton = U.mergeProperties(styles.homeLargeButton, {
	backgroundImage: '/images/homeSendButton.png'
});

styles.createRecordsHomeButton = U.mergeProperties(styles.homeLargeButton, {
	backgroundImage: '/images/homeRecordsButton.png'
});

styles.createFeedbackHomeButton = U.mergeProperties(styles.homeLargeButton, {
	backgroundImage: '/images/homeFeedbackButton.png'
});

styles.homeBackgroundView = {
	backgroundImage: '/images/homeBackgr.jpg',
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	top:0
};

styles.homeView = {
	backgroundColor:'00FFFFFF',
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	layout: 'vertical',
	verticalAlign:'center'
};

styles.homeWrapView = {
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	top: 10,
	bottom: 10,
	layout: 'horizontal',
	backgroundColor: '#00FFFFFF'
};

styles.button = {
	height: 40,
	width: Ti.UI.SIZE,
	style:'none',
	borderWidth: 1,
	font: {fontWeight:'bold',fontSize:18},
	contentInsets: {top:5,left:5,right:5,bottom:5},
	color: 'white',
	backgroundSelectedColor: 'black',
	backgroundColor: 'rgb(243,106,0)'
};

styles.tabButton = U.mergeProperties(styles.button, {
        width: 172,
        height: 50, top: 0,
        backgroundColor: 'rgb(157,151,146)',
        titleInsets: {top:0,left:-60,right:30,bottom:0},
        imageInsets: {top:0,left:+122,right:0,bottom:0},
        wrapText: 'true',
});

styles.textChangableButton = {
    height: 40,
    width: Ti.UI.SIZE,
    style:'none',
    borderWidth: 1,
    contentInsets: {top:5,left:5,right:5,bottom:5},
    color: 'black',
    backgroundSelectedColor: 'black',
    backgroundColor: 'white'
};

styles.statusBarButton = {
    height: 40,
    width: Ti.UI.SIZE,
    style:'none',
    borderWidth: 1,
    font: {fontWeight:'bold',fontSize:18},
    contentInsets: {top:5,left:5,right:5,bottom:5},
    color: 'rgb(243,106,0)',
    borderColor: 'rgb(243,106,0)',
    backgroundSelectedColor: 'black',
    backgroundColor: 'white'
};

styles.popoverVerticalView = {    
    width:Ti.UI.FILL,
    height:Ti.UI.SIZE,
    layout: 'vertical',
    verticalAlign:'center',
    backgroundGradient:{
        type:'linear',
        colors:["rgb(232,228,224)","white"]
    }
};

styles.popoverTransparentVerticalView = {    
    width:Ti.UI.SIZE,
    height:Ti.UI.SIZE,
    layout: 'vertical',
    verticalAlign:'center',
    backgroundColor: 'transparent'
};

styles.popoverButtonView = {
		background:'transparent',
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		layout: 'horizontal'
};

styles.buttonInBar = {
	width: 120,
	color: 'rgb(243,106,0)',
	selectedColor: 'white',
	font: {fontWeight:'bold',fontSize:18},
	contentInsets: {top:0,left:5,right:5,bottom:0},
	style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	height: 40	
};

styles.buttonInBarStyles = {
	selectedColor: 'white',
	color: 'rgb(243,106,0)',
	selectedBackgroundColor: 'rgb(243,106,0)',
	backgroundColor: 'transparent'
};

styles.buttonBarSeparator = {
	top: 0,
	backgroundColor: 'black',
	height: Ti.UI.FILL,
	width: 1
};

styles.buttonBarLabelBarPairView = {
	width:Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	layout: 'horizontal',
	backgroundColor: 'transparent'
};

styles.buttonBarVerticalView = {
	width:Ti.UI.SIZE,
	height: 40,
	layout: 'vertical',
	backgroundColor: 'transparent',
	verticalAlign:'center'
};

styles.buttonBarView = {
	width: Ti.UI.SIZE,
	height: 40,
	borderWidth: 1,
	backgroundColor:'white',
	layout: 'horizontal',
	verticalAlign: 'center'
};

styles.customerOrderByLabel = {
	font: {fontSize:16},
	right: 30,
	backgroundColor:'transparent',
	color: "rgb(157,151,146)",
};

styles.confirmationLabelWrapper = {
	backgroundColor: 'transparent',
	top: 20,
	left: 10,
	right: 10,
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	layout: 'vertical',
	verticalAlign:'center'
};

styles.confirmationLabel = {
	font: {fontSize:16},
	text: _('salesForm.popover.save.confirmation.text'),
	height: Ti.UI.SIZE,
	width: 300,
	textAlign: "center",
	color: "black"
};

styles.popoverVerticalButtonView = {
	top: 20,
	background:'transparent',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	layout: 'vertical',
	verticalAlign:'center'
};

// Create new order screen

styles.cancelButton = U.mergeProperties(styles.statusBarButton,{
	borderWidth: 1,
	width:Ti.UI.SIZE,
	height:40,
	left: 10,
	top:5, bottom:5
});

styles.orderButton = U.mergeProperties(styles.statusBarButton,{
	borderWidth: 0,
	width:Ti.UI.SIZE,
	height:40,
	right: 10,
	top:5, bottom:5
});

styles.createOrderVerticalView = {
	top: 50,
    backgroundGradient:{
        type:'linear',
        colors:["rgb(232,228,224)","white"]
    },
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	layout: 'vertical',
	left: 0
};

styles.createTransparentVerticalView = {
    top: 50,
    background:'transparent',
    width:Ti.UI.SIZE,
    height:Ti.UI.SIZE,
    layout: 'vertical',
    left: 0
};

styles.createOrderHorizontalView = {
	top: 0,
	background:'transparent',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	layout: 'horizontal',
	left: 0
};

styles.createNewOrderTopLabel = {
	font: {fontStyle:'italic'},
	color:'rgb(132,127,123)',
	left: 5,
	top: 10,
	text: _('order.createNewOrder.topLabel')
};

styles.orderLabel = {
	color:'rgb(132,127,123)',
	left: 5
};

styles.orderValue = {
	color:'black',
	left: 5
};

styles.inputField = {
	height: 40,
	color: 'black',//'rgb(243,106,0)',
	backgroundColor: 'white',
	textAlign: 'center',
	width: 80,
	borderWidth: 1,
	borderColor:'rgb(232,228,224)',
	textAlign: 'right',
	borderStyle: Ti.UI.INPUT_BORDER_STYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
};

styles.invisiblePopoverCenterView = {
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        backgroundColor : 'trasnsparent',
        verticalAlign : 'center',
        layout : 'vertical'
};

styles.orderVerticalScrollableView = {
    top: 0,
    backgroundColor:'trasnsparent',
    width:Ti.UI.SIZE,
    height:Ti.UI.SIZE,
    layout: 'vertical',
    left: 15
};

styles.scrollView = {
    top: 50,
    contentWidth: 'auto',
    contentHeight: 'auto',
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false,
    width: '100%',
    height: '100%'
};

styles.termsCondsLabel = {
    height: Ti.UI.SIZE,
    font: { fontSize: 12},
    color: "rgb(157,151,146)",
};

styles.termsCondsWrapper = {
    layout: 'vertical',
    height: Ti.UI.SIZE
};

styles.searchProduct = {
  hintText: _('salesOrder.searchBar.searchProduct'),
  top: 170,
  height: 50,
  barColor: 'white',
  focusable: true,
  showCancel : true,
  borderWidth : 0
};
