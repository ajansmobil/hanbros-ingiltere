

var lang = json && json.lang ? json.lang : "en";
var title =
  json.desing && json.desing.title
    ? json.desing.title[lang] || json.desing.title.en || json.desing.title.tr
    : "🎟️ Discount voucher";
var subtitle =
  json.desing && json.desing.subtitle
    ? json.desing.subtitle[lang] || json.desing.subtitle.en || json.desing.subtitle.tr
    : "Complete the form for your fair discount voucher";
html = html.replace(new RegExp("{{title}}", "g"), title);
html = html.replace(new RegExp("{{subtitle}}", "g"), subtitle);
