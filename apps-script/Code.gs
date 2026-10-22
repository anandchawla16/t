var SHEET_DOCUMENTS = "Investor Documents";
var SHEET_FINANCIALS = "Financials";

function doGet() {
  var payload = {
    updatedAt: new Date().toISOString(),
    documents: readDocuments_(),
    financials: readFinancials_()
  };
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function readDocuments_() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_DOCUMENTS);
  if (!sheet) return [];
  var values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  var headers = values.shift().map(normalize_);
  return values.filter(function(row){ return row.join("").trim() !== ""; }).map(function(row){
    var obj = {};
    headers.forEach(function(h,i){ obj[h] = row[i] || ""; });
    return {
      date: obj.date,
      fy: obj.fy,
      quarter: obj.quarter,
      category: obj.category,
      title: obj.title,
      url: obj.url,
      featured: String(obj.featured).toLowerCase() === "yes" || String(obj.featured).toLowerCase() === "true",
      regulation: obj.regulation
    };
  });
}

function readFinancials_() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_FINANCIALS);
  if (!sheet) return [];
  var values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  var headers = values.shift().map(normalize_);
  return values.filter(function(row){ return row.join("").trim() !== ""; }).map(function(row){
    var obj = {};
    headers.forEach(function(h,i){ obj[h] = row[i] || ""; });
    return {
      fy: obj.fy,
      income: number_(obj.income),
      ebitda: number_(obj.ebitda),
      pbt: number_(obj.pbt),
      pat: number_(obj.pat),
      shareholderFunds: number_(obj.shareholderfunds),
      dividendPercent: number_(obj.dividendpercent)
    };
  });
}

function normalize_(v) {
  return String(v).trim().toLowerCase().replace(/[^a-z0-9]/g,"");
}
function number_(v) {
  var n = parseFloat(String(v).replace(/,/g,""));
  return isNaN(n) ? 0 : n;
}
