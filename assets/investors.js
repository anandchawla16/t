(function(){
  var fallbackFinancials = [
    {fy:"2021-22",income:163.64,ebitda:11.14,pbt:7.34,pat:5.61,shareholderFunds:114.71,dividendPercent:25},
    {fy:"2022-23",income:208.35,ebitda:36.57,pbt:32.07,pat:23.90,shareholderFunds:136.40,dividendPercent:50},
    {fy:"2023-24",income:214.08,ebitda:43.26,pbt:37.26,pat:28.39,shareholderFunds:154.07,dividendPercent:110},
    {fy:"2024-25",income:206.20,ebitda:28.83,pbt:22.65,pat:17.39,shareholderFunds:171.50,dividendPercent:50},
    {fy:"2025-26",income:178.19,ebitda:37.62,pbt:32.61,pat:25.10,shareholderFunds:193.56,dividendPercent:60}
  ];
  var fallbackDocs = [
    {date:"2026-09-30",fy:"2026-27",quarter:"Q2",category:"Shareholding",title:"Shareholding Pattern — 30 September 2026",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2026-08-25",fy:"2026-27",quarter:"Q2",category:"AGM",title:"54th AGM Proceedings & Chairman Speech",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"30"},
    {date:"2026-08-25",fy:"2026-27",quarter:"Q2",category:"AGM",title:"Regulation 44 — E-Voting Results & Scrutinizer Report",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"44"},
    {date:"2026-08-10",fy:"2026-27",quarter:"Q1",category:"Financial Results",title:"Unaudited Financial Results — Q1 FY2026-27",url:"https://www.indiagelatine.com/financial/Outcome%20of%20BM_10%20Aug%202026-merged.pdf",featured:true,regulation:"33"},
    {date:"2026-06-30",fy:"2026-27",quarter:"Q1",category:"Shareholding",title:"Shareholding Pattern — 30 June 2026",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2026-05-21",fy:"2025-26",quarter:"FY",category:"Financial Results",title:"Audited Financial Results — FY2025-26",url:"https://www.indiagelatine.com/financial/Fin%20results%20FY%202025-26%20pdf.pdf",featured:true,regulation:"33"},
    {date:"2026-05-21",fy:"2025-26",quarter:"FY",category:"Annual Reports",title:"Annual Report — FY2025-26",url:"https://www.indiagelatine.com/financial/Annual%20Report_FY%202025-26%20(002).pdf",featured:true,regulation:"34"},
    {date:"2026-05-21",fy:"2025-26",quarter:"FY",category:"Corporate Actions",title:"Final Dividend — Record Date & Related Disclosure",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"42"},
    {date:"2026-03-31",fy:"2025-26",quarter:"Q4",category:"Shareholding",title:"Shareholding Pattern — 31 March 2026",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2026-02-10",fy:"2025-26",quarter:"Q3",category:"Financial Results",title:"Unaudited Financial Results — Q3 FY2025-26",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"33"},
    {date:"2025-12-31",fy:"2025-26",quarter:"Q3",category:"Shareholding",title:"Shareholding Pattern — 31 December 2025",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2025-11-10",fy:"2025-26",quarter:"Q2",category:"Financial Results",title:"Unaudited Financial Results — Q2 FY2025-26",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"33"},
    {date:"2025-09-30",fy:"2025-26",quarter:"Q2",category:"Shareholding",title:"Shareholding Pattern — 30 September 2025",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2025-08-11",fy:"2025-26",quarter:"Q1",category:"Financial Results",title:"Unaudited Financial Results — Q1 FY2025-26",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"33"},
    {date:"2025-06-30",fy:"2025-26",quarter:"Q1",category:"Shareholding",title:"Shareholding Pattern — 30 June 2025",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"31"},
    {date:"2025-09-04",fy:"2024-25",quarter:"FY",category:"Annual Reports",title:"Annual Report — FY2024-25",url:"https://www.indiagelatine.com/financial/IGC%20Limited_AR%202024-25_4-9-25-for%20printing_2%20(2).pdf",featured:false,regulation:"34"},
    {date:"2025-05-22",fy:"2024-25",quarter:"FY",category:"Financial Results",title:"Audited Financial Results — FY2024-25",url:"https://www.indiagelatine.com/financial/Fin%20Results%20March%20-%2025-dsc.pdf",featured:false,regulation:"33"},
    {date:"2024-09-01",fy:"2023-24",quarter:"FY",category:"Annual Reports",title:"52nd Annual Report — FY2023-24",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"34"},
    {date:"2023-09-01",fy:"2022-23",quarter:"FY",category:"Annual Reports",title:"51st Annual Report — FY2022-23",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"34"},
    {date:"2022-09-01",fy:"2021-22",quarter:"FY",category:"Annual Reports",title:"50th Annual Report — FY2021-22",url:"https://www.indiagelatine.com/financialinfo.html",featured:false,regulation:"34"}
  ];
  var financials = fallbackFinancials.slice();
  var docs = fallbackDocs.slice();
  var activeFY = "All";
  var activeCategory = "All";
  var metric = "income";
  var metricMeta = {
    income:{label:"Total income",suffix:" Cr",prefix:"₹",decimals:2},
    ebitda:{label:"EBITDA",suffix:" Cr",prefix:"₹",decimals:2},
    pbt:{label:"PBT",suffix:" Cr",prefix:"₹",decimals:2},
    pat:{label:"PAT",suffix:" Cr",prefix:"₹",decimals:2},
    shareholderFunds:{label:"Shareholders' funds",suffix:" Cr",prefix:"₹",decimals:2},
    dividendPercent:{label:"Dividend",suffix:"%",prefix:"",decimals:0}
  };

  function fmtDate(d){
    if(!d) return "";
    var x = new Date(d+"T00:00:00");
    return x.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
  }
  function escapeHTML(v){
    return String(v||"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c];});
  }
  function renderChart(){
    var el=document.getElementById("financialChart");
    if(!el) return;
    var w=Math.max(el.clientWidth,640), h=330, pad={l:54,r:26,t:32,b:46};
    var vals=financials.map(function(d){return Number(d[metric])||0;});
    var max=Math.max.apply(null,vals)*1.12, min=0;
    var usableW=w-pad.l-pad.r, usableH=h-pad.t-pad.b;
    function x(i){return pad.l+(usableW*(i/(financials.length-1)));}
    function y(v){return pad.t+usableH-(v-min)/(max-min)*usableH;}
    var grid="",labels="",points="",path="";
    for(var g=0;g<=4;g++){
      var gy=pad.t+usableH*(g/4);
      var gv=max-(max-min)*(g/4);
      grid+='<line class="chart-gridline" x1="'+pad.l+'" y1="'+gy+'" x2="'+(w-pad.r)+'" y2="'+gy+'"></line>';
      labels+='<text class="chart-axis" x="4" y="'+(gy+4)+'">'+(metric==="dividendPercent"?Math.round(gv)+"%":"₹"+gv.toFixed(0))+'</text>';
    }
    financials.forEach(function(d,i){
      var px=x(i),py=y(Number(d[metric])||0), m=metricMeta[metric];
      path+=(i===0?"M":"L")+px+" "+py+" ";
      labels+='<text class="chart-axis" text-anchor="middle" x="'+px+'" y="'+(h-12)+'">'+d.fy+'</text>';
      points+='<circle cx="'+px+'" cy="'+py+'" r="5"><title>'+d.fy+": "+m.prefix+(Number(d[metric])||0).toFixed(m.decimals)+m.suffix+'</title></circle>';
      points+='<text class="chart-value" text-anchor="middle" x="'+px+'" y="'+(py-13)+'">'+m.prefix+(Number(d[metric])||0).toFixed(m.decimals)+m.suffix+'</text>';
    });
    el.innerHTML='<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-label="'+metricMeta[metric].label+' five year trend">'+grid+labels+'<path class="chart-line" d="'+path+'"></path>'+points+'</svg>';
    var title=document.getElementById("chartTitle"); if(title) title.textContent=metricMeta[metric].label+" — 5 year trend";
  }
  function renderMetricTabs(){
    document.querySelectorAll("[data-metric]").forEach(function(btn){
      btn.classList.toggle("active",btn.getAttribute("data-metric")===metric);
      btn.onclick=function(){metric=btn.getAttribute("data-metric");renderMetricTabs();renderChart();};
    });
  }
  function renderFilters(){
    var fys=["All"].concat(Array.from(new Set(docs.map(function(d){return d.fy;}))).sort().reverse());
    var cats=["All"].concat(Array.from(new Set(docs.map(function(d){return d.category;}))).sort());
    var fy=document.getElementById("fyChips"), cat=document.getElementById("categoryChips");
    if(fy) fy.innerHTML=fys.map(function(v){return '<button class="chip '+(v===activeFY?"active":"")+'" data-fy="'+v+'">'+(v==="All"?"All years":"FY "+v)+'</button>';}).join("");
    if(cat) cat.innerHTML=cats.map(function(v){return '<button class="chip '+(v===activeCategory?"active":"")+'" data-category="'+v+'">'+v+'</button>';}).join("");
    document.querySelectorAll("[data-fy]").forEach(function(b){b.onclick=function(){activeFY=b.getAttribute("data-fy");renderFilters();renderDocs();};});
    document.querySelectorAll("[data-category]").forEach(function(b){b.onclick=function(){activeCategory=b.getAttribute("data-category");renderFilters();renderDocs();};});
  }
  function renderDocs(){
    var q=((document.getElementById("docSearch")||{}).value||"").toLowerCase().trim();
    var rows=docs.filter(function(d){
      return (activeFY==="All"||d.fy===activeFY) && (activeCategory==="All"||d.category===activeCategory) &&
        (!q||(d.title+" "+d.category+" "+d.fy+" "+d.quarter).toLowerCase().indexOf(q)>-1);
    }).sort(function(a,b){return b.date.localeCompare(a.date);});
    var list=document.getElementById("documentList"); if(!list) return;
    if(!rows.length){list.innerHTML='<div class="empty">No disclosures match these filters.</div>';return;}
    list.innerHTML=rows.map(function(d){
      return '<div class="doc-row"><div class="doc-date">'+fmtDate(d.date)+'</div><div><div class="doc-title">'+escapeHTML(d.title)+'</div><div class="small">FY '+escapeHTML(d.fy)+(d.quarter?" · "+escapeHTML(d.quarter):"")+(d.regulation?" · Reg. "+escapeHTML(d.regulation):"")+'</div></div><div class="doc-cat">'+escapeHTML(d.category)+'</div><a class="pdf-link" href="'+escapeHTML(d.url)+'" target="_blank" rel="noopener">View ↗</a></div>';
    }).join("");
  }
  function renderLatest(){
    var latest=docs.slice().sort(function(a,b){return b.date.localeCompare(a.date);})[0];
    var t=document.getElementById("latestDisclosure");
    var l=document.getElementById("latestDisclosureLink");
    if(t&&latest) t.textContent=latest.title+" · "+fmtDate(latest.date);
    if(l&&latest) l.href=latest.url;
  }
  function renderCards(){
    var last=financials[financials.length-1]; if(!last) return;
    var map={metricIncome:["income","₹"," Cr",2],metricEbitda:["ebitda","₹"," Cr",2],metricPat:["pat","₹"," Cr",2],metricFunds:["shareholderFunds","₹"," Cr",2],metricDividend:["dividendPercent","","%",0]};
    Object.keys(map).forEach(function(id){
      var el=document.getElementById(id); if(!el)return; var m=map[id]; el.textContent=m[1]+Number(last[m[0]]).toFixed(m[3])+m[2];
    });
  }
  async function loadRemote(){
    var endpoint=(window.IGCL_CONFIG||{}).investorEndpoint;
    if(!endpoint) return;
    try{
      var r=await fetch(endpoint,{cache:"no-store"});
      if(!r.ok) throw new Error("HTTP "+r.status);
      var j=await r.json();
      if(Array.isArray(j.financials)&&j.financials.length) financials=j.financials;
      if(Array.isArray(j.documents)&&j.documents.length) docs=j.documents;
    }catch(e){console.warn("Using local investor data fallback",e);}
  }
  async function init(){
    await loadRemote();
    renderCards();renderLatest();renderMetricTabs();renderChart();renderFilters();renderDocs();
    var s=document.getElementById("docSearch"); if(s) s.addEventListener("input",renderDocs);
    window.addEventListener("resize",function(){clearTimeout(window.__igclChartTimer);window.__igclChartTimer=setTimeout(renderChart,100);});
  }
  document.addEventListener("DOMContentLoaded",init);
})();