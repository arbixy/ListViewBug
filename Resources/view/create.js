var utilsModule = require('../common/utils');
var U = utilsModule.utils;
var C = utilsModule.constants;
var styles = require('../common/styles');
var _ = require('../common/l10n');
var dataModule = require('../common/data');
var brandsData = dataModule.brands;

module.exports = createNewFeedbackWindow;

function createNewFeedbackWindow(columns, data, orderData) {
	
    var win = Ti.UI.createWindow({
        navBarHidden : true,
        backgroundColor : '#e8e4e0',
        statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        top : U.getWindowTop()
    });
    
    var feedbackData = {
    	feedbackDate : new Date(),
    	columns: columns,
    	brands: brandsData,
    	customer: (typeof orderData === 'undefined')?null:orderData.customer
    };
    
    if(data) {
    	feedbackData = data;
    }

    var popovercenterView = Ti.UI.createView({
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        backgroundColor : '#00FFFFFF',
        verticalAlign : 'center',
        layout : 'vertical'
    });
    win.add(popovercenterView);

    //Status view   
    var statusView = Ti.UI.createView(styles.statusView);
    var statusWrapperView = Ti.UI.createView(styles.statusWrapperView);
    statusView.add(statusWrapperView);

    var cancelButton = Ti.UI.createButton(U.mergeProperties(styles.cancelButton,{
        title: "Cancel", width: 120
    })); 
    var cancelEvent = function() {};
    
    cancelButton.addEventListener('click', cancelEvent);
    statusView.add(cancelButton);

    var labelWrapper = Ti.UI.createView(styles.windowTitleWrapperView);
    statusWrapperView.add(labelWrapper);

    var titleLabel = Ti.UI.createLabel(U.mergeProperties(styles.windowTitle, {
        text : "Title", top:5, bottom:5
    }));
    labelWrapper.add(titleLabel);

    win.add(statusView);

    // Customer info view
    var dateView = Ti.UI.createView(styles.dateView);
    var dateWrapperView = Ti.UI.createView(styles.dateWrapperView);
    dateView.add(dateWrapperView);
    win.add(dateView);
    
    
    //date
    var dateFieldView = Ti.UI.createView(U.mergeProperties(styles.dateFieldView,{
       right: 185, width: 120
    }));
    dateWrapperView.add(dateFieldView);

    var dateViewWrapper = Ti.UI.createView(U.mergeProperties(styles.dateFieldWrapperView,{
       left: 0, width: 120
    }));
    dateFieldView.add(dateViewWrapper);
    var dateLabel = Ti.UI.createLabel(U.mergeProperties(styles.fieldLabel,{
       top: 10,
       text: "Date"
    }));
    dateViewWrapper.add(dateLabel);

    var horizontalLineView = Ti.UI.createView({
        width: 120,
        height:Ti.UI.SIZE,
        left: 10, top: 10
    });

    var dateValue = Ti.UI.createLabel(U.mergeProperties(styles.fieldValue,{
        width: 120
    }));
    dateValue.text = U.formatDate(feedbackData.feedbackDate, C.dateFeedbackFormat);
    dateValue.color = 'black';

    horizontalLineView.add(dateValue);

    dateViewWrapper.add(horizontalLineView);
	   
    var repNameFieldView = Ti.UI.createView(U.mergeProperties(styles.dateFieldView, {
    	right: 5, width: 175
    }));
    dateWrapperView.add(repNameFieldView);
    
    var repNameWrapperView = Ti.UI.createView(U.mergeProperties(styles.dateFieldWrapperView, {
    	left: 0, width: 170
    }));
    repNameFieldView.add(repNameWrapperView);
    
    var repNameLabel = Ti.UI.createLabel(U.mergeProperties(styles.fieldLabel, {
    	top: 10,
    	text: 'Rep Name'
    }));
    repNameWrapperView.add(repNameLabel);
    
    var repNameValue = Ti.UI.createLabel(U.mergeProperties(styles.fieldValue, {
    	width: 170
    }));
    var repNameArray = "Moo Foo";
    var repName = "";
    for(var i = 0; i < repNameArray.length; i++) {
    	repName += repNameArray[i];
    }
    repNameArray = null;
    repNameValue.text = repName;
    repNameWrapperView.add(repNameValue);
    
    //customer
    var customerFieldView = Ti.UI.createView(U.mergeProperties(styles.customerFieldView, {
       right: 310, left: 0 
    }));
    dateWrapperView.add(customerFieldView);

    var customerViewWrapper = Ti.UI.createView(styles.customerFieldWrapperView);
    customerFieldView.add(customerViewWrapper);
    var customerLabel = Ti.UI.createLabel(U.mergeProperties(styles.customerLabel, {
        top: 10
    }));
    customerViewWrapper.add(customerLabel);

    horizontalLineView = Ti.UI.createView({
        width:Ti.UI.FILL,
        height:Ti.UI.SIZE,
        left: 10, top: 10
    });
    var customerValue = Ti.UI.createLabel(U.mergeProperties(styles.customerValue, {
        right: 200
    }));
    customerValue.text = "User";
    customerValue.color = (feedbackData.customer === null)?'red':'black';
    horizontalLineView.add(customerValue);
    var changeCustomerButton = Ti.UI.createButton(U.mergeProperties(styles.customerChangeBtn, {
        right: 5
    }));
    
    
    horizontalLineView.add(changeCustomerButton);
    customerViewWrapper.add(horizontalLineView);
    
    
    var column1EnterEvent = function(e) {
    	var item = e.section.items[e.itemIndex];
    	var value = e.value;
    	
    	var feedbackRowData = feedbackData.brands[e.itemIndex];
    	if(value && value > 0) {
    		if(!U.isValidDecimal(value)) {
    			item.column1.value = '';
    			this.value = '';
    			e.section.updateItemAt(e.itemIndex, item);
    			feedbackRowData.column1Value = '';
                return;
    		} else {
    			if(feedbackRowData.column1Value && (feedbackRowData.column1Value == value)) {
    				this.value = feedbackRowData.column1Value;
    			} else {
    				var parsedValue = parseFloat(value);
    				this.value = '';
    				item.column1.value = parsedValue;
    				feedbackRowData.column1Value = parsedValue;
    			}
    			
    			e.section.replaceItemsAt(e.itemIndex, 1, [item]);
    		}
    	} else {
    		item.column1.value = '';
    		this.value = '';
    		e.section.updateItemAt(e.itemIndex, item);
    		feedbackRowData.column1Value = '';
    	}
    };
    
    var column1DropdownEvent = function(e) {};
    
    var column2EnterEvent = function(e) {
    	var item = e.section.items[e.itemIndex];
    	var value = e.value;
    	
    	var feedbackRowData = feedbackData.brands[e.itemIndex];
    	if(value && value > 0) {
    		if(!U.isValidDecimal(value)) {
    			item.column2.value = '';
    			this.value = '';
    			e.section.updateItemAt(e.itemIndex, item);
    			feedbackRowData.column1Value = '';
                return;
    		} else {
    			// if(feedbackRowData.column2Value && (feedbackRowData.column2Value == value)) {
    				// this.value = feedbackRowData.column2Value;
    			// } else {
    				var parsedValue = parseFloat(value);
    				this.value = '';
    				item.column2.value = parsedValue;
    				feedbackRowData.column2Value = parsedValue;
    			// }
    			
    			e.section.replaceItemsAt(e.itemIndex, 1, [item]);
    		}
    	} else {
    		item.column2.value = '';
    		this.value = '';
    		e.section.updateItemAt(e.itemIndex, item);
    		feedbackRowData.column2Value = '';
    	}
    };
    
    var column2DropdownEvent = function(e) {};
    
    var column3EnterEvent = function(e) {
    	var item = e.section.items[e.itemIndex];
    	var value = e.value;
    	
    	var feedbackRowData = feedbackData.brands[e.itemIndex];
    	if(value && value > 0) {
    		if(!U.isValidDecimal(value)) {
    			item.column3.value = '';
    			this.value = '';
    			e.section.updateItemAt(e.itemIndex, item);
    			feedbackRowData.column3Value = '';
                return;
    		} else {
    			if(feedbackRowData.column3Value && (feedbackRowData.column3Value == value)) {
    				this.value = feedbackRowData.column3Value;
    			} else {
    				var parsedValue = parseFloat(value);
    				this.value = '';
    				item.column3.value = parsedValue;
    				feedbackRowData.column3Value = parsedValue;
    			}
    			
    			e.section.replaceItemsAt(e.itemIndex, 1, [item]);
    		}
    	} else {
    		item.column3.value = '';
    		this.value = '';
    		e.section.updateItemAt(e.itemIndex, item);
    		feedbackRowData.column3Value = '';
    	}
    };
    
    var column3DropdownEvent = function(e) {};
    
    var column4EnterEvent = function(e) {
    	var item = e.section.items[e.itemIndex];
    	var value = e.value;
    	
    	var feedbackRowData = feedbackData.brands[e.itemIndex];
    	if(value && value > 0) {
    		if(!U.isValidDecimal(value)) {
    			item.column4.value = '';
    			this.value = '';
    			e.section.updateItemAt(e.itemIndex, item);
    			feedbackRowData.column4Value = '';
                return;
    		} else {
    			if(feedbackRowData.column4Value && (feedbackRowData.column4Value == value)) {
    				this.value = feedbackRowData.column4Value;
    			} else {
    				var parsedValue = parseFloat(value);
    				this.value = '';
    				item.column4.value = parsedValue;
    				feedbackRowData.column4Value = parsedValue;
    			}
    			
    			e.section.replaceItemsAt(e.itemIndex, 1, [item]);
    		}
    	} else {
    		item.column4.value = '';
    		this.value = '';
    		e.section.updateItemAt(e.itemIndex, item);
    		feedbackRowData.column4Value = '';
    	}
    };
    
    var column4DropdownEvent = function(e) {};
    
    //Table section
    var tableViewBgr = Ti.UI.createView(U.mergeProperties(styles.tableViewBgr2, {
    	top:180
    }));
    win.add(tableViewBgr); 
   
    
    var template1 = {
        childTemplates: [
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    left: 0
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    right: 0
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    right: 580
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    right: 440
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    right: 300
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.verticalSeparator,{
                    right: 160
                })
            },	         
            {
                type: 'Ti.UI.Label',
                bindId: 'brand',
                properties: U.mergeProperties(styles.tableDataLabel,{
                    left: 0, right: 580
                })
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.tableNumericVerticalView,{
                    right: 440, width: 140
                }),
                childTemplates: (columns[0].type-1)?[{
                    type: 'Ti.UI.TextField',
                    bindId: 'column1',
                    events: {'blur':column1EnterEvent},
                    properties: U.mergeProperties(styles.tableInputField,{
                        right: 5, width: 130
                    })
                }]:[ {
                    type: 'Ti.UI.Label',
                    bindId: 'column1',
                    properties: U.mergeProperties(styles.tableDataLabel,{
                        right: 35, left: 5
                    })
                },
                {
                	type: 'Ti.UI.Button',
                	bindId: 'column1Button',
                	events:{'click':column1DropdownEvent},
                	properties: U.mergeProperties(styles.tableDropdownButton,{
                		right : 5,
                		width : 30,
                		top: -35
                	}) 
                }]
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.tableNumericVerticalView,{
                    right: 300, width: 140
                }),
                childTemplates: (columns[1].type-1)?[ {
                    type: 'Ti.UI.TextField',
                    bindId: 'column2',
                    events: {'blur':column2EnterEvent},
                    properties: U.mergeProperties(styles.tableInputField,{
                        right: 5, width: 130
                    })
                }]:[ {
                    type: 'Ti.UI.Label',
                    bindId: 'column2',
                    properties: U.mergeProperties(styles.tableDataLabel,{
                        right: 35, left: 5
                    })
                },
                {
                	type: 'Ti.UI.Button',
                	bindId: 'column2Button',
                	events:{'click':column2DropdownEvent},
                	properties: U.mergeProperties(styles.tableDropdownButton,{
                		right : 5,
                		width : 30,
                		top: -35
                	}) 
                }]
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.tableDataCenteredLabel,{
                    right: 160, width: 140
                }),
                childTemplates:(columns[2].type-1)?[ {
                    type: 'Ti.UI.TextField',
                    bindId: 'column3',
                    events: {'blur':column3EnterEvent},
                    properties: U.mergeProperties(styles.tableInputField,{
                        right: 5, width: 130
                    })
                }]:[ {
                    type: 'Ti.UI.Label',
                    bindId: 'column3',
                    properties: U.mergeProperties(styles.tableDataLabel,{
                        right: 35, left: 5
                    })
                },
                {
                	type: 'Ti.UI.Button',
                	bindId: 'column3Button',
                	events:{'click':column3DropdownEvent},
                	properties: U.mergeProperties(styles.tableDropdownButton,{
                		right : 5,
                		width : 30,
                		top: -35
                	}) 
                }]
            },
            {
                type: 'Ti.UI.View',
                properties: U.mergeProperties(styles.tableNumericVerticalView,{
                    right: 0, width: 160
                }),
                childTemplates: (columns[3].types-1)?[ {
                    type: 'Ti.UI.TextField',
                    bindId: 'column4',
                    events:{'blur':column4EnterEvent},
                    properties: U.mergeProperties(styles.tableInputField,{
                        right: 5, width: 150
                    })
                }]:[ {
                    type: 'Ti.UI.Label',
                    bindId: 'column4',
                    properties: U.mergeProperties(styles.tableDataLabel,{
                        right: 35, left: 5
                    })
                },
                {
                	type: 'Ti.UI.Button',
                	bindId: 'column4Button',
                	events:{'click':column4DropdownEvent},
                	properties: U.mergeProperties(styles.tableDropdownButton,{
                		right : 5,
                		width : 30,
                		top: -35
                	}) 
                }]
            },
        ]
    };  

    
    var tableView = Ti.UI.createListView({
        background : '#00FFFFFF',
        templates : {
            'template': template1
        },
        separatorInsets: { left: 0, right: 0 },
        defaultItemTemplate : 'template',
        allowsSelection : false,
       // footerView : verticalSignatureView,
        caseInsensitiveSearch: true,
        searchHidden: false
    });
    
    var refreshListView = function(feedbackData) {
    	var section = Ti.UI.createListSection(styles.tableSection);
    	var data2 = [];
    	if(feedbackData.brands.length > 0) {
    		var i = 0;
		        while (i < feedbackData.brands.length) {
					    data2.push({
		                    properties : {
		                        height : U.getSuggestedHeight(feedbackData.brands[i].name,0,580),
		                        backgroundColor : i % 2 == 0 ? 'white' : '#F8F7F6',
		                    },
		                    brand : {
		                        text : feedbackData.brands[i].name
		                    },
		                    column1 : columns[0].type-1?{
		                        value : feedbackData.brands[i].column1Value?feedbackData.brands[i].column1Value:''
		                    }:{
		                    	text : feedbackData.brands[i].column1Value?feedbackData.brands[i].column1Value:''
		                    },
		                    column2 : columns[1].type-1?{
		                    	value: feedbackData.brands[i].column2Value?feedbackData.brands[i].column2Value:''
		                    }:{
		                    	text : feedbackData.brands[i].column2Value?feedbackData.brands[i].column2Value:''
		                    },
		                    column3 : columns[2].type-1?{
		                        value : feedbackData.brands[i].column3Value?feedbackData.brands[i].column3Value:''
		                    }:{
		                        text : feedbackData.brands[i].column3Value?feedbackData.brands[i].column3Value:''
		                    },
		                    column4 : columns[3].type-1?{
		                        value : feedbackData.brands[i].column4Value?feedbackData.brands[i].column4Value:''
		                    }:{
		                        text : feedbackData.brands[i].column4Value?feedbackData.brands[i].column4Value:''
		                    }
		                });
		                i++;
		           }
    	}
    	section.setItems(data2);
    	var sections = [];
    	sections.push(section);
    	tableView.setSections(sections);
    };
    
    var checkForPreviousFeedback = function(feedbackData) {
    	refreshListView(feedbackData);
	};
	
    checkForPreviousFeedback(feedbackData);
    
    
    refreshListView(feedbackData);
	       
    var tableHeaderView = constructFeedbackTableheader();
    tableViewBgr.add(tableHeaderView);
    tableViewBgr.add(tableView); 
    
    var buttonView = Ti.UI.createView({
    	bottom: 0,
    	height: 70
    });

    var clearBtn = Ti.UI.createButton(U.mergeProperties(styles.formClearBtn, {
    	width: 140,
    	contentInsets: {top:5,left:20,right:5,bottom:5},
		imageInsets: {top:-5,left:-50,right:0,bottom:-5},
		title: "Button"
    }));
    clearBtn.addEventListener('click', function() {});
    buttonView.add(clearBtn);
    
    var saveBtn = Ti.UI.createButton(U.mergeProperties(styles.formSaveBtn, {
    	width: 140,
    	contentInsets: {top:5,left:20,right:5,bottom:5},
		imageInsets: {top:-5,left:-50,right:0,bottom:-5},
		title: "Save"
    }));
    saveBtn.addEventListener('click', function(){});
    buttonView.add(saveBtn);
    win.add(buttonView);
    
    return win;
};

function constructFeedbackTableheader() {
	columns = null;
    var templateHeader = {
        childTemplates: [
        { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                left : 0,
                backgroundColor : '#9D9792'
            })
        }, { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                right : 0,
                backgroundColor : '#9D9792'
            })
        }, { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                right: 580
            })
        }, { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                right : 440
            })
        }, { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                right : 300
            })
        }, { type: 'Ti.UI.View',
            properties:
            U.mergeProperties(styles.verticalSeparator, {
                right : 160
            })
        },{ type: 'Ti.UI.Label',
            bindId: 'brand',
            properties:
            U.mergeProperties(styles.tableHeaderCenteredLabel, {
                left : 0,
                right: 580
            })
        }, { type: 'Ti.UI.Label',
            bindId: 'column1',
            properties:
            U.mergeProperties(styles.tableHeaderCenteredLabel, {
                right : 440,
                width : 140
            })
        }, { type: 'Ti.UI.Label',
            bindId: 'column2',
            properties:
            U.mergeProperties(styles.tableHeaderCenteredLabel, {
                right : 300,
                width : 140
            })
        }, { type: 'Ti.UI.Label',
            bindId: 'column3',
            properties:
            U.mergeProperties(styles.tableHeaderCenteredLabel, {
                right : 160,
                width : 140
            })
	     }, { type: 'Ti.UI.Label',
	     	  bindId: 'column4',
	     	  properties:
	     	  U.mergeProperties(styles.tableHeaderCenteredLabel, {
	     	  	right : 0,
	     	  	width: 160
	     	  })
       		
       }
        ]
    };
	var columns = dataModule.feedbackTableheaderColumns;
    
    var longestString = "";
    for (var i = 0; i < columns.length; i++) {
    	if(longestString.length < columns[i].length) {
    		longestString = columns[i];
    	}
    }
	
	var height = U.getSuggestedHeightFixedWidth(longestString, 140);
	longestString = null;
	
    var data = [];
    data.push({
        properties : {
        	height: height,
            backgroundColor : '#9D9792'
        },
        brand : {
            text : "Item"
        },
        column1 : {
            text : columns[0]
        },
        column2 : {
            text : columns[1]
        },
        column3 : {
            text : columns[2]
        },
        column4: {
        	text : columns[3]
        }
    });
    var headerView = Ti.UI.createListView({
        background : '#00FFFFFF',
        height : height,
        templates : {
            'template' : templateHeader
        },
        defaultItemTemplate : 'template',
        allowsSelection : false,
        footerTitle : '',
        touchEnabled : false
    });
    var section = Ti.UI.createListSection(U.mergeProperties(styles.tableSection, {
        heigth : Ti.UI.SIZE
    }));
    section.setItems(data);
    headerView.setSections([section]);
    width = null;
    return headerView;
}
