
var GO1ILZ_HASH = ['zati', 'mobilya', 'ticari', 'kargo', 'arac'];
var menuHtml = '';

var TASIMA_TIPLERI = [
    { code: 'CA', title: { en: 'Personal Effects' }, icon: 'inventory_2' },
    { code: 'CO', title: { en: 'Furniture' }, icon: 'weekend' },
    { code: 'FU', title: { en: 'Commercial' }, icon: 'business_center' },
    { code: 'RE', title: { en: 'Cargo' }, icon: 'local_shipping' },
    { code: 'AU', title: { en: 'Vehicle' }, icon: 'directions_car' }
];

var lang = 'en';
var data = (typeof json !== 'undefined' && json.desing && json.desing.data && Array.isArray(json.desing.data)) ? json.desing.data : null;

var go1ilzBase = '/' + lang + '/smart-calculator/';
for (var i = 0; i < TASIMA_TIPLERI.length; i++) {
    var tip = TASIMA_TIPLERI[i];
    var it = data && data[i] ? data[i] : tip;
    var title = (it.title && it.title.en) ? it.title.en
              : (it.title && it.title[lang]) ? it.title[lang]
              : tip.title.en;
    var iconName = (it && it.icon) ? it.icon : tip.icon;
    var hash = GO1ILZ_HASH[i] || 'zati';
    var href = go1ilzBase + '#' + hash;
    menuHtml += '<a class="modulex-item" href="' + href + '" aria-label="' + title + '" data-request-type="' + tip.code + '">';
    menuHtml += '<span class="modulex-item-badge">' + tip.code + '</span>';
    menuHtml += '<span class="modulex-item-icon material-symbols-outlined" aria-hidden="true">' + iconName + '</span>';
    menuHtml += '<span class="modulex-item-title">' + title + '</span>';
    menuHtml += '<span class="modulex-item-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>';
    menuHtml += '</a>';
}
html = html.replace(/\{\{menu\}\}/g, menuHtml || '');
