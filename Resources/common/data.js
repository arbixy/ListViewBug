var columns = [{
	"id": 5,
	"name": "Option I",
	"type": 1,
	"number": 1
},
{
	"id": 6,
	"name": "Option II",
	"type": 2,
	"number": 2
},
{
	"id": 7,
	"name": "Option III",
	"type": 2,
	"number": 3
},
{
	"id": 8,
	"name": "Option IV",
	"type": 1,
	"number": 4
}];

var brands = [];
for (var i=1; i<30; i++) {
  brands.push({"id":i,"name":"Item "+i});
};

var feedbackTableheaderColumns = ["Option I","Option II","Option III", "Option IV"];

module.exports.columns = columns;
module.exports.brands = brands;
module.exports.feedbackTableheaderColumns = feedbackTableheaderColumns;