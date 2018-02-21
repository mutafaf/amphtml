/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A whitelist of djb2a hashes of publisher origins.
 * @const {!Array<string>}
 */
export const ORIGIN_WHITELIST = [
  '3451824873',
  '834917366',
  '4273375831',
  '750731789',
  '3322156041',
  '878041739',
  '2199838184',
  '708478954',
  '142793127',
  '2414533450',
  '212690086',
  '799038630',
  '2128662947',
  '3561349461',
  '2930531110',
  '791888271',
  '3743398870',
  '4127351496',
  '3623074634',
  '3935672072',
  '4138748709',
  '2185544172',
  '805461297',
  '3018644774',
  '363894702',
  '4200069764',
  '3390751743',
  '1758506884',
  '1527955987',
  '2616846056',
  '2587850265',
  '4053566461',
  '1597805481',
  '759835262',
  '2231215830',
  '3408249191',
  '2718273594',
  '2479885882',
  '4118683051',
  '781950191',
  '3307671928',
  '4137746800',
  '2114974219',
  '3960376034',
  '2741673809',
  '1960384540',
  '1370863654',
  '2246978037',
  '3424311896',
  '3261687030',
  '3252080663',
  '525657889',
  '1085278050',
  '3309952347',
  '3060985947',
  '1515192136',
  '414191242',
  '4011166599',
  '3381390900',
  '1628432066',
  '2852627326',
  '3584992110',
  '773697188',
  '508331528',
  '3263349802',
  '976603789',
  '1531622827',
  '1040387537',
  '251839354',
  '3341054457',
  '1137284944',
  '2038626037',
  '192946894',
  '2933287666',
  '3132507840',
  '590180088',
  '2529138038',
  '2062991370',
  '2003114268',
  '2076974480',
  '3040972817',
  '270580042',
  '1348111506',
  '3133369938',
  '973612916',
  '3144086645',
  '2861134475',
  '1210508580',
  '2637085339',
  '3353312560',
  '2939338957',
  '1476740172',
  '1729406438',
  '1366298771',
  '475325125',
  '965728075',
  '4140762491',
  '667802223',
  '2845803411',
  '3129729985',
  '1081382723',
  '2529319010',
  '628256541',
  '1462086116',
  '3355368229',
  '1948987049',
  '3902596111',
  '2428857403',
  '4205379393',
  '3172876126',
  '354082441',
  '4050194446',
  '2514009950',
  '1866288580',
  '884942273',
  '552831033',
  '1279420495',
  '3284374556',
  '2375389254',
  '3162265419',
  '3670522374',
  '2812672743',
  '2887960156',
  '1604714840',
  '176099546',
  '722659024',
  '1844097179',
  '2284332078',
  '4083044353',
  '431449824',
  '2138194233',
  '1542890108',
  '2723434276',
  '1193086302',
  '2606715995',
  '2517493756',
  '2299758819',
  '3036809290',
  '3494887100',
  '481608910',
  '468972428',
  '3919621757',
  '1120549175',
  '3572504894',
  '795111685',
  '3535681127',
  '1066656902',
  '826702818',
  '3429649351',
  '990312922',
  '1548043628',
  '2491279653',
  '2761508292',
  '2118239665',
  '2738155690',
  '2930818498',
  '1765761661',
  '2325333010',
  '1926444709',
  '2632194804',
  '3700982698',
  '740460396',
  '959889676',
  '2271213671',
  '3821795909',
  '1048768124',
  '1734343726',
  '2934412348',
  '2797839121',
  '1390195319',
  '2207832807',
  '4177803870',
  '2326328585',
  '4143625838',
  '907695148',
  '4249223952',
  '2917909858',
  '3446215673',
  '3828921363',
  '1960309827',
  '3568064118',
  '802940860',
  '1061774354',
  '2725145135',
  '3022092377',
  '3887937944',
  '2038733725',
  '2795182078',
  '2362191459',
  '2051204756',
  '3866956400',
  '763580606',
  '10089108',
  '1048639639',
  '3181090214',
  '1314122247',
  '853535426',
  '3464002149',
  '1239612924',
  '2600368355',
  '3964022265',
  '179954814',
  '1645367571',
  '1911273138',
  '1958476175',
  '273580543',
  '4206479264',
  '932642421',
  '2872980659',
  '1641755208',
  '3574354948',
  '535848262',
  '2413038656',
  '3402978750',
  '3326846086',
  '1224563123',
  '2718446350',
  '2759976952',
  '2373437534',
  '2497925282',
  '989444878',
  '1172399292',
  '926902921',
  '338844244',
  '353380306',
  '1463873379',
  '2150296095',
  '3741803823',
  '3295776646',
  '399163616',
  '3385846727',
  '884037848',
  '1384885545',
  '690204840',
  '793360597',
  '1323716407',
  '1502183303',
  '1502183300',
  '3768651282',
  '1291285285',
  '3841844405',
  '1587531568',
  '1452555948',
  '4045001232',
  '809525143',
  '436035672',
  '3655120568',
  '3376790055',
  '3226517851',
  '2451485116',
  '4098138342',
  '2252559194',
  '1420964370',
  '4220526267',
  '613252162',
  '2374338088',
  '3711744991',
  '2498415300',
  '32924227',
  '335855777',
  '3551433075',
  '3591311390',
  '785278645',
  '3256754508',
  '4171920376',
  '4015960781',
  '1924394550',
  '1651834381',
  '2052997999',
  '166080441',
  '1657655384',
  '1358275160',
  '283661147',
  '1820719129',
  '1436589466',
  '760645918',
  '302251478',
  '962380673',
  '2236849121',
  '4051110478',
  '1024745460',
  '1762779619',
  '129196458',
  '4166688207',
  '836634675',
  '2972849537',
  '2388222966',
  '4237182114',
  '2486258543',
  '4189681769',
  '673490260',
  '2688673784',
  '3361466716',
  '122776143',
  '1980609434',
  '1275112483',
  '3355865416',
  '2214432888',
  '4102232185',
  '220103233',
  '1897877027',
  '1506356073',
  '1019348494',
  '4195946149',
  '886030867',
  '4136314176',
  '1221946827',
  '188153886',
  '3109674920',
  '4072394641',
  '1416203172',
  '154680092',
  '167065142',
  '675617839',
  '4031427958',
  '3450221390',
  '1574632236',
  '1219663970',
  '2825564215',
  '2866448207',
  '1424038674',
  '4062202631',
  '4205027822',
  '3458310975',
  '605645428',
  '2784479860',
  '2471412274',
  '1212905960',
  '2602595202',
  '684496063',
  '1790421447',
  '2465244303',
  '812914966',
  '2771839729',
  '1337085136',
  '509801075',
  '2927763036',
  '721006546',
  '166550074',
  '1452631355',
  '2247419316',
  '3916735828',
  '1296373605',
  '932940871',
  '2797844367',
  '1267058499',
  '616398681',
  '2311290044',
  '1224575240',
  '3692367215',
  '3931371606',
  '885000263',
  '2732398879',
  '817596813',
  '241505564',
  '1638733129',
  '3942169396',
  '436895478',
  '699835401',
  '3367171293',
  '2835331287',
  '1408213495',
  '2500743291',
  '2134891083',
  '779185847',
  '911963500',
  '4286009170',
  '2798104093',
  '2893590542',
  '455553168',
  '3090399922',
  '3473901382',
  '1182996899',
  '402077837',
  '3695202375',
  '1426205130',
  '1831449632',
  '1203629527',
  '3739222329',
  '1167928101',
  '3835330948',
  '3319768647',
  '3739723588',
  '220632861',
  '2487828098',
  '1873175698',
  '2911378586',
  '3216947982',
  '3785031815',
  '4092369519',
  '1885949806',
  '382915004',
  '2342924379',
  '1796631487',
  '2672599929',
  '1451865411',
  '646925241',
  '2636391541',
  '3416831537',
  '473408210',
  '3808515023',
  '4265092200',
  '101608808',
  '165218748',
  '676286387',
  '3718288426',
  '803626326',
];