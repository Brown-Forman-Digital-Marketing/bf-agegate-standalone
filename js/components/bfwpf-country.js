import * as bfUtilities from '/js/utilities.js';

class CountryInput extends HTMLSelectElement {
    static countryList = [
      {"name":"Afghanistan","iso2_code":"AF","iso3_code":"AFG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Albania","iso2_code":"AL","iso3_code":"ALB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Algeria","iso2_code":"DZ","iso3_code":"DZA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Andorra","iso2_code":"AD","iso3_code":"AND","spirits_lda":"18","wine_lda":"18"},
      {"name":"Angola","iso2_code":"AO","iso3_code":"AGO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Anguilla","iso2_code":"AI","iso3_code":"AIA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Antigua And Barbuda","iso2_code":"AG","iso3_code":"ATG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Argentina","iso2_code":"AR","iso3_code":"ARG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Armenia","iso2_code":"AM","iso3_code":"ARM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Aruba","iso2_code":"AW","iso3_code":"ABW","spirits_lda":"18","wine_lda":"18"},
      {"name":"Australia","iso2_code":"AU","iso3_code":"AUS","spirits_lda":"18","wine_lda":"18"},
      {"name":"Austria","iso2_code":"AT","iso3_code":"AUT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Azerbaidjan","iso2_code":"AZ","iso3_code":"AZE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bahamas","iso2_code":"BS","iso3_code":"BHS","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bahrain","iso2_code":"BH","iso3_code":"BHR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bangladesh","iso2_code":"BD","iso3_code":"BGD","spirits_lda":"18","wine_lda":"18"},
      {"name":"Barbados","iso2_code":"BB","iso3_code":"BRB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Belarus","iso2_code":"BY","iso3_code":"BLR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Belgium","iso2_code":"BE","iso3_code":"BEL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Belize","iso2_code":"BZ","iso3_code":"BLZ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Benin","iso2_code":"BJ","iso3_code":"BEN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bermuda","iso2_code":"BM","iso3_code":"BMU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bhutan","iso2_code":"BT","iso3_code":"BTN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bolivia","iso2_code":"BO","iso3_code":"BOL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bosnia And Herzegovina","iso2_code":"BA","iso3_code":"BIH","spirits_lda":"18","wine_lda":"18"},
      {"name":"Botswana","iso2_code":"BW","iso3_code":"BWA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Brazil","iso2_code":"BR","iso3_code":"BRA","spirits_lda":"18","wine_lda":"18"},
      {"name":"British Virgin Islands","iso2_code":"VG","iso3_code":"VGB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Brunei","iso2_code":"BN","iso3_code":"BRN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Bulgaria","iso2_code":"BG","iso3_code":"BGR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Burkina Faso","iso2_code":"BF","iso3_code":"BFA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Burundi","iso2_code":"BI","iso3_code":"BDI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cambodia","iso2_code":"KH","iso3_code":"KHM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cameroon","iso2_code":"CM","iso3_code":"CMR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Canada","iso2_code":"CA","iso3_code":"CAN","spirits_lda":"19","wine_lda":"19"},
      {"name":"Cape Verde Island","iso2_code":"CV","iso3_code":"CPV","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cayman Islands","iso2_code":"KY","iso3_code":"CYM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Central African Republic","iso2_code":"CF","iso3_code":"CAF","spirits_lda":"18","wine_lda":"18"},
      {"name":"Chad","iso2_code":"TD","iso3_code":"TCD","spirits_lda":"18","wine_lda":"18"},
      {"name":"Chile","iso2_code":"CL","iso3_code":"CHL","spirits_lda":"18","wine_lda":"18"},
      {"name":"China","iso2_code":"CN","iso3_code":"CHN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Colombia","iso2_code":"CO","iso3_code":"COL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Comoros","iso2_code":"KM","iso3_code":"COM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Congo","iso2_code":"CG","iso3_code":"COG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cook Islands","iso2_code":"CK","iso3_code":"COK","spirits_lda":"20","wine_lda":"20"},
      {"name":"Costa Rica","iso2_code":"CR","iso3_code":"CRI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Croatia","iso2_code":"HR","iso3_code":"HRV","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cuba","iso2_code":"CU","iso3_code":"CUB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Cyprus","iso2_code":"CY","iso3_code":"CYP","spirits_lda":"18","wine_lda":"18"},
      {"name":"Czech Republic","iso2_code":"CZ","iso3_code":"CZE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Dem. Rep. Of Congo","iso2_code":"CD","iso3_code":"COD","spirits_lda":"18","wine_lda":"18"},
      {"name":"Denmark","iso2_code":"DK","iso3_code":"DNK","spirits_lda":"18","wine_lda":"18"},
      {"name":"Djibouti","iso2_code":"DJ","iso3_code":"DJI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Dominica","iso2_code":"DM","iso3_code":"DMA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Dominican Republic","iso2_code":"DO","iso3_code":"DOM","spirits_lda":"18","wine_lda":"18"},
      {"name":"East Timor","iso2_code":"TL","iso3_code":"TLS","spirits_lda":"20","wine_lda":"20"},
      {"name":"Ecuador","iso2_code":"EC","iso3_code":"ECU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Egypt","iso2_code":"EG","iso3_code":"EGY","spirits_lda":"18","wine_lda":"18"},
      {"name":"El Salvador","iso2_code":"SV","iso3_code":"SLV","spirits_lda":"18","wine_lda":"18"},
      {"name":"Equatorial Guinea","iso2_code":"GQ","iso3_code":"GNQ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Eritrea","iso2_code":"ER","iso3_code":"ERI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Estonia","iso2_code":"EE","iso3_code":"EST","spirits_lda":"18","wine_lda":"18"},
      {"name":"Ethiopia","iso2_code":"ET","iso3_code":"ETH","spirits_lda":"18","wine_lda":"18"},
      {"name":"Faroe Islands","iso2_code":"FO","iso3_code":"FRO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Fiji","iso2_code":"FJ","iso3_code":"FJI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Finland","iso2_code":"FI","iso3_code":"FIN","spirits_lda":"20","wine_lda":"18"},
      {"name":"France","iso2_code":"FR","iso3_code":"FRA","spirits_lda":"18","wine_lda":"18"},
      {"name":"French Polynesia","iso2_code":"PF","iso3_code":"PYF","spirits_lda":"18","wine_lda":"18"},
      {"name":"Gabon","iso2_code":"GA","iso3_code":"GAB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Gambia","iso2_code":"GM","iso3_code":"GMB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Georgia","iso2_code":"GE","iso3_code":"GEO","spirits_lda":"21","wine_lda":"21"},
      {"name":"Germany","iso2_code":"DE","iso3_code":"DEU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Ghana","iso2_code":"GH","iso3_code":"GHA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Gibraltar","iso2_code":"GI","iso3_code":"GIB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Greece","iso2_code":"GR","iso3_code":"GRC","spirits_lda":"18","wine_lda":"18"},
      {"name":"Greenland","iso2_code":"GL","iso3_code":"GRL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Grenada","iso2_code":"GD","iso3_code":"GRD","spirits_lda":"18","wine_lda":"18"},
      {"name":"Guadeloupe","iso2_code":"GP","iso3_code":"GLP","spirits_lda":"18","wine_lda":"18"},
      {"name":"Guam","iso2_code":"GU","iso3_code":"GUM","spirits_lda":"21","wine_lda":"21"},
      {"name":"Guatemala","iso2_code":"GT","iso3_code":"GTM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Guinea","iso2_code":"GN","iso3_code":"GIN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Guinea-bissau","iso2_code":"GW","iso3_code":"GNB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Guyana","iso2_code":"GY","iso3_code":"GUY","spirits_lda":"18","wine_lda":"18"},
      {"name":"Haiti","iso2_code":"HT","iso3_code":"HTI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Honduras","iso2_code":"HN","iso3_code":"HND","spirits_lda":"18","wine_lda":"18"},
      {"name":"Hungary","iso2_code":"HU","iso3_code":"HUN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Iceland","iso2_code":"IS","iso3_code":"ISL","spirits_lda":"20","wine_lda":"20"},
      {"name":"India","iso2_code":"IN","iso3_code":"IND","spirits_lda":"25","wine_lda":"25"},
      {"name":"Indonesia","iso2_code":"ID","iso3_code":"IDN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Iran","iso2_code":"IR","iso3_code":"IRN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Iraq","iso2_code":"IQ","iso3_code":"IRQ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Ireland","iso2_code":"IE","iso3_code":"IRL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Israel","iso2_code":"IL","iso3_code":"ISR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Italy","iso2_code":"IT","iso3_code":"ITA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Ivory Coast","iso2_code":"CI","iso3_code":"CIV","spirits_lda":"18","wine_lda":"18"},
      {"name":"Jamaica","iso2_code":"JM","iso3_code":"JAM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Japan","iso2_code":"JP","iso3_code":"JPN","spirits_lda":"20","wine_lda":"20"},
      {"name":"Jordan","iso2_code":"JO","iso3_code":"JOR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Kazakhstan","iso2_code":"KZ","iso3_code":"KAZ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Kenya","iso2_code":"KE","iso3_code":"KEN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Kiribati","iso2_code":"KI","iso3_code":"KIR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Kuwait","iso2_code":"KW","iso3_code":"KWT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Kyrgyzstan","iso2_code":"KG","iso3_code":"KGZ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Laos","iso2_code":"LA","iso3_code":"LAO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Latvia","iso2_code":"LV","iso3_code":"LVA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Lebanon","iso2_code":"LB","iso3_code":"LBN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Lesotho","iso2_code":"LS","iso3_code":"LSO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Liberia","iso2_code":"LR","iso3_code":"LBR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Libya","iso2_code":"LY","iso3_code":"LBY","spirits_lda":"18","wine_lda":"18"},
      {"name":"Liechtenstein","iso2_code":"LI","iso3_code":"LIE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Lithuania","iso2_code":"LT","iso3_code":"LTU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Luxembourg","iso2_code":"LU","iso3_code":"LUX","spirits_lda":"18","wine_lda":"18"},
      {"name":"Macau","iso2_code":"MO","iso3_code":"MAC","spirits_lda":"21","wine_lda":"21"},
      {"name":"Macedonia","iso2_code":"MK","iso3_code":"MKD","spirits_lda":"18","wine_lda":"18"},
      {"name":"Madagascar","iso2_code":"MG","iso3_code":"MDG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Malawi","iso2_code":"MW","iso3_code":"MWI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Malaysia","iso2_code":"MY","iso3_code":"MYS","spirits_lda":"21","wine_lda":"21"},
      {"name":"Maldives","iso2_code":"MV","iso3_code":"MDV","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mali","iso2_code":"ML","iso3_code":"MLI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Malta","iso2_code":"MT","iso3_code":"MLT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Martinique","iso2_code":"MQ","iso3_code":"MTQ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mauritania","iso2_code":"MR","iso3_code":"MRT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mauritius","iso2_code":"MU","iso3_code":"MUS","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mexico","iso2_code":"MX","iso3_code":"MEX","spirits_lda":"18","wine_lda":"18"},
      {"name":"Moldova","iso2_code":"MD","iso3_code":"MDA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Monaco","iso2_code":"MC","iso3_code":"MCO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mongolia","iso2_code":"MN","iso3_code":"MNG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Montenegro","iso2_code":"ME","iso3_code":"MNE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Morocco","iso2_code":"MA","iso3_code":"MAR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Mozambique","iso2_code":"MZ","iso3_code":"MOZ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Myanmar","iso2_code":"MM","iso3_code":"MMR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Namibia","iso2_code":"NA","iso3_code":"NAM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Nauru","iso2_code":"NR","iso3_code":"NRU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Nepal","iso2_code":"NP","iso3_code":"NPL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Netherlands","iso2_code":"NL","iso3_code":"NLD","spirits_lda":"18","wine_lda":"18"},
      {"name":"New Caledonia","iso2_code":"NC","iso3_code":"NCL","spirits_lda":"18","wine_lda":"18"},
      {"name":"New Zealand","iso2_code":"NZ","iso3_code":"NZL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Nicaragua","iso2_code":"NI","iso3_code":"NIC","spirits_lda":"18","wine_lda":"18"},
      {"name":"Niger","iso2_code":"NE","iso3_code":"NER","spirits_lda":"18","wine_lda":"18"},
      {"name":"Nigeria","iso2_code":"NG","iso3_code":"NGA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Niue","iso2_code":"NU","iso3_code":"NIU","spirits_lda":"20","wine_lda":"20"},
      {"name":"North Korea","iso2_code":"KP","iso3_code":"PRK","spirits_lda":"18","wine_lda":"18"},
      {"name":"Norway","iso2_code":"NO","iso3_code":"NOR","spirits_lda":"20","wine_lda":"18"},
      {"name":"Oman","iso2_code":"OM","iso3_code":"OMN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Pakistan","iso2_code":"PK","iso3_code":"PAK","spirits_lda":"18","wine_lda":"18"},
      {"name":"Panama","iso2_code":"PA","iso3_code":"PAN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Papua New Guinea","iso2_code":"PG","iso3_code":"PNG","spirits_lda":"18","wine_lda":"18"},
      {"name":"Paraguay","iso2_code":"PY","iso3_code":"PRY","spirits_lda":"18","wine_lda":"18"},
      {"name":"Peru","iso2_code":"PE","iso3_code":"PER","spirits_lda":"18","wine_lda":"18"},
      {"name":"Philippines","iso2_code":"PH","iso3_code":"PHL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Pitcairn Island","iso2_code":"PN","iso3_code":"PCN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Poland","iso2_code":"PL","iso3_code":"POL","spirits_lda":"18","wine_lda":"18"},
      {"name":"Portugal","iso2_code":"PT","iso3_code":"PRT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Puerto Rico","iso2_code":"PR","iso3_code":"PRI","spirits_lda":"18","wine_lda":"18"},
      {"name":"Qatar","iso2_code":"QA","iso3_code":"QAT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Reunion Island","iso2_code":"RE","iso3_code":"REU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Romania","iso2_code":"RO","iso3_code":"ROU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Russia","iso2_code":"RU","iso3_code":"RUS","spirits_lda":"18","wine_lda":"18"},
      {"name":"Rwanda","iso2_code":"RW","iso3_code":"RWA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Helena","iso2_code":"SH","iso3_code":"SHN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Kitts And Nevis","iso2_code":"KN","iso3_code":"KNA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Lucia","iso2_code":"LC","iso3_code":"LCA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Martin","iso2_code":"MF","iso3_code":"MAF","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Pierre And Miquelon","iso2_code":"PM","iso3_code":"SPM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saint Vincent And Grenadines","iso2_code":"VC","iso3_code":"VCT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Samoa","iso2_code":"WS","iso3_code":"WSM","spirits_lda":"18","wine_lda":"18"},
      {"name":"San Marino","iso2_code":"SM","iso3_code":"SMR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Sao Tome And Principe","iso2_code":"ST","iso3_code":"STP","spirits_lda":"18","wine_lda":"18"},
      {"name":"Saudi Arabia","iso2_code":"SA","iso3_code":"SAU","spirits_lda":"18","wine_lda":"18"},
      {"name":"Senegal","iso2_code":"SN","iso3_code":"SEN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Serbia","iso2_code":"RS","iso3_code":"SRB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Seychelles","iso2_code":"SC","iso3_code":"SYC","spirits_lda":"18","wine_lda":"18"},
      {"name":"Sierra Leone","iso2_code":"SL","iso3_code":"SLE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Singapore","iso2_code":"SG","iso3_code":"SGP","spirits_lda":"18","wine_lda":"18"},
      {"name":"Slovakia","iso2_code":"SK","iso3_code":"SVK","spirits_lda":"18","wine_lda":"18"},
      {"name":"Slovenia","iso2_code":"SI","iso3_code":"SVN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Solomon Islands","iso2_code":"SB","iso3_code":"SLB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Somalia","iso2_code":"SO","iso3_code":"SOM","spirits_lda":"18","wine_lda":"18"},
      {"name":"South Africa","iso2_code":"ZA","iso3_code":"ZAF","spirits_lda":"18","wine_lda":"18"},
      {"name":"South Korea","iso2_code":"KR","iso3_code":"KOR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Spain","iso2_code":"ES","iso3_code":"ESP","spirits_lda":"18","wine_lda":"18"},
      {"name":"Sri Lanka","iso2_code":"LK","iso3_code":"LKA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Sudan","iso2_code":"SD","iso3_code":"SDN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Suriname","iso2_code":"SR","iso3_code":"SUR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Swaziland","iso2_code":"SZ","iso3_code":"SWZ","spirits_lda":"18","wine_lda":"18"},
      {"name":"Sweden","iso2_code":"SE","iso3_code":"SWE","spirits_lda":"20","wine_lda":"18"},
      {"name":"Switzerland","iso2_code":"CH","iso3_code":"CHE","spirits_lda":"18","wine_lda":"18"},
      {"name":"Syria","iso2_code":"SY","iso3_code":"SYR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Tadjikistan","iso2_code":"TJ","iso3_code":"TJK","spirits_lda":"18","wine_lda":"18"},
      {"name":"Taiwan","iso2_code":"TW","iso3_code":"TWN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Tanzania","iso2_code":"TZ","iso3_code":"TZA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Thailand","iso2_code":"TH","iso3_code":"THA","spirits_lda":"20","wine_lda":"20"},
      {"name":"Togo","iso2_code":"TG","iso3_code":"TGO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Tonga","iso2_code":"TO","iso3_code":"TON","spirits_lda":"18","wine_lda":"18"},
      {"name":"Trinidad And Tobago","iso2_code":"TT","iso3_code":"TTO","spirits_lda":"18","wine_lda":"18"},
      {"name":"Tunisia","iso2_code":"TN","iso3_code":"TUN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Turkey","iso2_code":"TR","iso3_code":"TUR","spirits_lda":"24","wine_lda":"24"},
      {"name":"Turkmenistan","iso2_code":"TM","iso3_code":"TKM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Turks And Caicos Islands","iso2_code":"TC","iso3_code":"TCA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Tuvalu","iso2_code":"TV","iso3_code":"TUV","spirits_lda":"18","wine_lda":"18"},
      {"name":"USA","iso2_code":"US","iso3_code":"USA","spirits_lda":"21","wine_lda":"21"},
      {"name":"Uganda","iso2_code":"UG","iso3_code":"UGA","spirits_lda":"18","wine_lda":"18"},
      {"name":"Ukraine","iso2_code":"UA","iso3_code":"UKR","spirits_lda":"18","wine_lda":"18"},
      {"name":"United Arab Emirates","iso2_code":"AE","iso3_code":"ARE","spirits_lda":"18","wine_lda":"18"},
      {"name":"United Kingdom","iso2_code":"GB","iso3_code":"GBR","spirits_lda":"18","wine_lda":"18"},
      {"name":"Uruguay","iso2_code":"UY","iso3_code":"URY","spirits_lda":"18","wine_lda":"18"},
      {"name":"Uzbekistan","iso2_code":"UZ","iso3_code":"UZB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Vanuatu","iso2_code":"VU","iso3_code":"VUT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Vatican City","iso2_code":"VA","iso3_code":"VAT","spirits_lda":"18","wine_lda":"18"},
      {"name":"Venezuela","iso2_code":"VE","iso3_code":"VEN","spirits_lda":"18","wine_lda":"18"},
      {"name":"Vietnam","iso2_code":"VN","iso3_code":"VNM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Wallis And Futuna Islands","iso2_code":"WF","iso3_code":"WLF","spirits_lda":"20","wine_lda":"20"},
      {"name":"Western Sahara","iso2_code":"EH","iso3_code":"ESH","spirits_lda":"18","wine_lda":"18"},
      {"name":"Yemen","iso2_code":"YE","iso3_code":"YEM","spirits_lda":"18","wine_lda":"18"},
      {"name":"Zambia","iso2_code":"ZM","iso3_code":"ZMB","spirits_lda":"18","wine_lda":"18"},
      {"name":"Zimbabwe","iso2_code":"ZW","iso3_code":"ZWE","spirits_lda":"18","wine_lda":"18"}
      ];

    constructor() {
      // Always call super first in constructor
      super();
    }

    connectedCallback() {
      let me = this;
      me.loaded = false;
      bfUtilities.bfDocReadyWithInit(me, function(){
        me.countrySetup();
        me.loaded = true;
      });
    }

    countrySetup() {
      let me = this;

      me.default_iso = me.dataset.hasOwnProperty('defaultIso') ? me.dataset['defaultIso'] : 'US';
      me.default_iso = me.default_iso.toUpperCase();

      me.empty_selection_text = me.dataset.hasOwnProperty('emptySelectionText') ? me.dataset['emptySelectionText'] : 'Choose One';

      me.innerHTML = `<option value="">${me.empty_selection_text}</option>`;

      CountryInput.countryList.forEach((country) => {
        let opt = document.createElement("option");
        opt.value = country.iso2_code;
        opt.text = country.name;

        opt.dataset.spiritsLda = country.spirits_lda;
        opt.dataset.wineLda = country.wine_lda;

        if(opt.value === me.default_iso) {
          opt.selected = true;
        }
        me.add(opt, null);
      });
    }

    getSelectedOption() {
      let me = this;
      return me.options[me.selectedIndex];
    }
  }

  customElements.define('country-input', CountryInput, {extends: 'select'});