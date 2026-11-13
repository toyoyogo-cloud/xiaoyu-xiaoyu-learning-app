(function(){
"use strict";
const MAPS={"hanlin-h2-math-3a-u1":{"id":"hanlin-h2-math-3a-u1","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"1","unitName":"三角函數","learningContent":"弧度量、正弦、餘弦、正切函數圖形與週期現象","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與108課綱高二數學A版，目次列三角函數；只作單元對照，不表示題目取自教材。","mappingId":"hanlin-h2-math-3a-u1","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-math-3a-u2":{"id":"hanlin-h2-math-3a-u2","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"2","unitName":"指數與對數函數","learningContent":"按比例成長模型、指數與對數圖形及生活應用","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-14","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與目次單元；段考區間仍為題庫依單元順序推定。","mappingId":"hanlin-h2-math-3a-u2","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-math-3a-u3":{"id":"hanlin-h2-math-3a-u3","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"3","unitName":"平面向量","learningContent":"平面向量運算、內積、行列式與幾何應用","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與目次單元；段考區間仍為題庫依單元順序推定。","mappingId":"hanlin-h2-math-3a-u3","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-physics-ii":{"id":"hanlin-h2-physics-ii","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"物理","semester":"上學期","publisher":"hanlin","volume":"選修物理(II) 力學二與熱學","unitCode":"全冊","unitName":"力學二與熱學","learningContent":"高二上選修物理(II)冊別層級對照；官方商品頁未列完整章節，故不進一步推定段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/004022","sourceTitle":"翰林書城－高中課本選修物理(II)力學二與熱學","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高中二年級、上學期及課本名稱；僅作冊別／主題層級對照。","mappingId":"hanlin-h2-physics-ii","courseType":"未確認","mappingLevel":"volume"},"hanlin-h2-chemistry-iii-u1":{"id":"hanlin-h2-chemistry-iii-u1","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"1","unitName":"化學平衡","learningContent":"化學平衡與平衡移動","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-14","verificationStatus":"source-checked","notes":"官方頁明示高二、高三、全學年，目次列化學平衡；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u1","courseType":"未確認","mappingLevel":"unit"},"hanlin-h2-chemistry-iii-u2":{"id":"hanlin-h2-chemistry-iii-u2","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"2","unitName":"沉澱反應與溶解平衡","learningContent":"溶解平衡、沉澱與溶度積概念","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示目次列沉澱反應與溶解平衡；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u2","courseType":"未確認","mappingLevel":"unit"},"hanlin-h2-chemistry-iii-u3":{"id":"hanlin-h2-chemistry-iii-u3","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"3","unitName":"酸鹼反應","learningContent":"酸鹼反應、滴定與緩衝概念","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示目次列酸鹼反應與酸鹼滴定實驗；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u3","courseType":"未確認","mappingLevel":"unit"},"knsh-g6-social-6a-u2-1":{"id":"knsh-g6-social-6a-u2-1","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"社會","semester":"上學期","publisher":"knsh","volume":"社會六上","unitCode":"2-1","unitName":"個人發展如何受到社會變遷的影響","learningContent":"個人角色、性別角色與族群文化隨社會變遷的影響","sourceType":"official-publisher","sourceUrl":"https://sdgs.knsh.com.tw/campus/SDGS_FILE_E/%E7%A4%BE%E6%9C%83%E5%85%AD%E4%B8%8ACH2L1%E5%80%8B%E4%BA%BA%E7%99%BC%E5%B1%95%E5%A6%82%E4%BD%95%E5%8F%97%E5%88%B0%E7%A4%BE%E6%9C%83%E8%AE%8A%E9%81%B7%E7%9A%84%E5%BD%B1%E9%9F%BF_%E6%95%99%E5%AD%B8%E8%B3%87%E6%BA%90.pdf","sourceTitle":"康軒社會六上2-1教學資源PDF","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方教學資源直接標示社會六上2-1，並列六年級學習重點；僅對應涉及個人發展／社會變遷的題目。","mappingId":"knsh-g6-social-6a-u2-1","courseType":"國小","mappingLevel":"unit"},"hanlin-g6-math-6a-volume":{"id":"hanlin-g6-math-6a-volume","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(6上)","unitCode":"冊別層級","unitName":"數學(6上)冊別層級對照（未核對具體單元）","learningContent":"官方商品頁確認六年級、上學期、數學與冊別；未提供可核對單元目次，不據此標記特定單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/1030111","sourceTitle":"翰林書城－國小課本數學(6上)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"僅作冊別／學期層級資料核對；不代表本批題目取自教材，也不將一般知識點冒稱翰林專屬單元。","mappingId":"hanlin-g6-math-6a-volume","courseType":"國小","mappingLevel":"volume"},"hanlin-g6-math-6b-volume":{"id":"hanlin-g6-math-6b-volume","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","publisher":"hanlin","volume":"數學(6下)","unitCode":"冊別層級","unitName":"數學(6下)冊別層級對照（未核對具體單元）","learningContent":"官方商品頁確認六年級、下學期、數學與冊別；未提供可核對單元目次，不據此標記特定單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/1030121","sourceTitle":"翰林書城－國小課本數學(6下)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"僅作冊別／學期層級資料核對；不代表本批題目取自教材，也不將一般知識點冒稱翰林專屬單元。","mappingId":"hanlin-g6-math-6b-volume","courseType":"國小","mappingLevel":"volume"},"hanlin-h2-chemistry-ii-structure-rate":{"id":"hanlin-h2-chemistry-ii-structure-rate","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"化學","semester":"上學期","publisher":"hanlin","volume":"選修化學(II)物質構造與反應速率","unitCode":"全冊","unitName":"物質構造與反應速率（冊別層級；未核對細分目次）","learningContent":"對應官方課本名稱所示的物質構造與反應速率主題；商品頁未列完整章節目次，故不再推定細分單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/005022","sourceTitle":"翰林書城－高中課本選修化學(II)物質構造與反應速率","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方翰林課本頁明示高中2年級、上學期及冊名「選修化學(II)物質構造與反應速率」；僅冊別層級，不宣稱細分單元已核對。不同商品編號的實驗手冊或習作可能有不同學期，不能與此課本頁混用。此映射不代表學校採用版本。","mappingId":"hanlin-h2-chemistry-ii-structure-rate","courseType":"未確認","mappingLevel":"volume"},"hanlin-h2-biology-ii-plant":{"id":"hanlin-h2-biology-ii-plant","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"生物","semester":"上學期","publisher":"hanlin","volume":"選修生物(II)生命的起源與植物","unitCode":"冊別層級","unitName":"生命的起源與植物（冊別層級）","learningContent":"僅對植物相關知識點作冊別層級對照；官方商品頁未列完整單元目次，不推定具體章節或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/006022","sourceTitle":"翰林書城－高中課本選修生物(II)生命的起源與植物","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高中二年級、上學期及冊名；此映射不代表已核對具體單元目次。","mappingId":"hanlin-h2-biology-ii-plant","courseType":"未確認","mappingLevel":"volume","excludedTopics":["遺傳","基因型","基因","表現型","等位基因","顯性","隱性","染色體","孟德爾"]},"hanlin-h2-chemistry-i-matter-energy":{"id":"hanlin-h2-chemistry-i-matter-energy","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"化學","semester":"上學期","publisher":"hanlin","volume":"選修化學(I)物質與能量","unitCode":"冊別層級","unitName":"物質與能量（冊別層級）","learningContent":"官方課本頁確認高中二年級、上學期及冊名；未提供可核對細分目次，僅限冊別層級，不據此推定具體單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/005021","sourceTitle":"翰林書城－高中課本選修化學(I)物質與能量","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方商品頁明示高中二年級、上學期及課本名稱「物質與能量」；本映射只證明冊別層級，不能推論細分單元或學校段考範圍。題目為原創，非教材或歷屆試題原文。","mappingId":"hanlin-h2-chemistry-i-matter-energy","courseType":"未確認","mappingLevel":"volume"},"nani-g6-math-6b-base-comparison":{"id":"nani-g6-math-6b-base-comparison","mappingId":"nani-g6-math-6b-base-comparison","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"官方數位教學資源單元","unitName":"基準量和比較量","mappingLevel":"unit","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_content?a=341&b=1","sourceTitle":"南一資源_內文－數學6下｜基準量和比較量","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"南一官方資源頁明示數學6下、國小數學6年級及「基準量和比較量」單元標題；僅支持此資源單元層級，不代表完整教科書目次或學校採用版本。"},"nani-g6-math-6b-four-operations":{"id":"nani-g6-math-6b-four-operations","mappingId":"nani-g6-math-6b-four-operations","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"索引標題","unitName":"四則混合運算（官方索引標題層級）","mappingLevel":"official-resource-title","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_list?b=1&page=6&t=","sourceTitle":"南一資源_國小資源索引－數學6下：四則混合運算","verifiedAt":"2026-11-13","verificationStatus":"official-index-link-only","notes":"南一官方資源列表頁明示「數學6下｜四則混合運算」、數學及六年級；詳情頁未能由本次查詢直接讀取，故只標官方索引標題層級，不宣稱完整教科書目次或學校採用版本。"},"nani-g6-math-6b-chicken-rabbit":{"id":"nani-g6-math-6b-chicken-rabbit","mappingId":"nani-g6-math-6b-chicken-rabbit","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"官方資源標題","unitName":"怎樣解題：雞兔問題（官方資源標題層級）","mappingLevel":"official-resource-title","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_content?a=394&b=1","targetUrl":"https://tpack.nani.com.tw/nani_content?a=394&b=1","sourceTitle":"南一資源_內文－數學6下｜怎樣解題：雞兔問題","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"南一官方詳情頁明示「數學6下｜怎樣解題：雞兔問題」、國小數學數位教學應用及國小數學6年級標籤；僅作官方資源標題層級對照，不宣稱完整教科書目次或學校採用版本。"}};
const UN="unassigned";
const core=q=>q&&(q.frameworkId==="curriculum-108"||q.sourceType==="original-curriculum-aligned");
const label=q=>String(q.unit||q.learningContent||q.t||q.topic||"");
const UNIT_ALIASES={
 "hanlin-h2-math-3a-u1":["三角函數","三角比","特殊角","三角測量","弧度","正弦","餘弦","正切","週期","象限","三角方程式"],
 "hanlin-h2-math-3a-u2":["指數","對數","log","成長模型","衰變","半衰期"],
 "hanlin-h2-math-3a-u3":["平面向量","向量","內積","投影","行列式","單位向量"],
 "knsh-g6-social-6a-u2-1":["個人發展如何受到社會變遷的影響","社會變遷與性別角色","社會變遷與家庭分工","個人發展與社會變遷"],
 "hanlin-h2-chemistry-iii-u1":["化學平衡","平衡常數","勒沙特列","反應商","平衡移動"],
 "hanlin-h2-chemistry-iii-u2":["沉澱","溶解平衡","溶度積","共同離子","Ksp"],
 "hanlin-h2-chemistry-iii-u3":["酸鹼","pH","滴定","緩衝","鹽類水解"],
 "nani-g6-math-6b-base-comparison":["基準量和比較量","基準量與比較量"],
 "nani-g6-math-6b-four-operations":["四則混合運算"],
 "nani-g6-math-6b-chicken-rabbit":["雞兔問題","雞兔同籠"]
};
const VOLUME_SCOPES={
 "hanlin-h2-physics-ii":["動量","衝量","碰撞","作功","做功","做的功","機械功","位能","動能","力矩","角動量","熱","比熱","熱膨脹","熱傳導","熱力學","熱機","氣體","彈簧","圓周","向心","波以耳","線膨脹","機械能"],
 "hanlin-h2-chemistry-ii-structure-rate":["反應速率","催化劑","活化能","反應級數","物質構造","電子組態","價電子"],
 "hanlin-h2-biology-ii-plant":["植物細胞","光合作用","蒸散","氣孔","維管束","木質部","韌皮部"],
 "hanlin-h2-chemistry-i-matter-energy":["焓","反應熱","能量","赫斯定律"],
 "hanlin-g6-math-6a-volume":[],
 "hanlin-g6-math-6b-volume":[]
};
function questionText(q){
 return [q.unit,q.t,q.topic,q.learningContent,q.q,q.e].filter(Boolean).join(" ");
}
function mappingScopeMatches(q,m,id){
 const text=questionText(q);
 const excluded=(Array.isArray(m&&m.excludedTopics)?m.excludedTopics:[]).concat(id==="hanlin-h2-physics-ii"?["電路","電功率","電流","電壓","電阻","電磁","磁場","電場"]:[]);
 if(excluded.some(term=>text.includes(term)))return false;
 const level=m.mappingLevel||"volume";
 const terms=level==="unit"||level==="official-resource-title"?UNIT_ALIASES[id]:VOLUME_SCOPES[id];
 if(!Array.isArray(terms)||!terms.length)return false;
 return terms.some(term=>text.toLowerCase().includes(String(term).toLowerCase()));
}
function validMappingForQuestion(q,m,id){
 if(!m||!m.publisher||!m.sourceUrl||!m.sourceTitle||!m.verifiedAt||!m.verificationStatus||!m.notes)return false;
 if(!/^https:\/\//.test(m.sourceUrl))return false;
 if(!["source-checked","official-index-link-only"].includes(m.verificationStatus))return false;
 if(!["unit","volume","official-resource-title"].includes(m.mappingLevel||""))return false;
 if(m.stage&&q.stage&&m.stage!==q.stage)return false;
 if(m.grade&&String(m.grade).split(/[、,，]/).indexOf(q.grade)<0)return false;
 if(m.subject&&q.subject!==m.subject)return false;
 if(m.courseTrack&&q.courseTrack!==m.courseTrack)return false;
 if(q.courseType&&q.courseType!=="未確認"&&m.courseType!==q.courseType)return false;
 if(q.schoolYear&&q.schoolYear!=="未標示"&&m.schoolYear!==q.schoolYear)return false;
 const qs=q.semester||UN,ms=m.semester||UN;
 if(qs!==UN&&ms!==UN&&ms!=="全學年"&&qs!==ms)return false;
 return mappingScopeMatches(q,m,id);
}
function resolveMappings(q){
 const raw=Array.isArray(q.publisherMappings)?q.publisherMappings:[];
 const out=[];
 for(const x of raw){
  const id=x.mappingId||x.id;
  const m=MAPS[id];
  if(!validMappingForQuestion(q,m,id))continue;
  const level=m.mappingLevel||"volume";
  out.push({
   publisher:m.publisher,mappingId:id,sourceUrl:m.sourceUrl,sourceTitle:m.sourceTitle,
   verifiedAt:m.verifiedAt,verificationStatus:m.verificationStatus,notes:m.notes,
   mappingLevel:level,volume:m.volume||m.unitName||"",unitCode:m.unitCode||"",
   unitName:m.unitName||"",unitAliases:UNIT_ALIASES[id]||[],
   scopeKeywords:VOLUME_SCOPES[id]||[],semester:m.semester||UN,
   grade:m.grade,subject:m.subject,courseTrack:m.courseTrack||null,
   schoolYear:m.schoolYear||"未標示",courseType:m.courseType||"未確認"
  });
 }
 return out;
}
function inferred(q){
 const grade = q.grade || "";
 const subject = q.subject || "";
 const unit = label(q);
 if(grade==="六年級"&&subject==="數學"){
  if(/基準量和比較量|基準量與比較量/.test(unit)) return {mappingId:"nani-g6-math-6b-base-comparison",semester:"下學期",basis:"publisher-source-verified",confidence:"high",notes:"南一官方6下資源明示「基準量和比較量」；只作單元層級對照。"};
  if(/四則混合運算/.test(unit)) return {mappingId:"nani-g6-math-6b-four-operations",semester:"下學期",basis:"publisher-source-verified",confidence:"medium",notes:"南一官方資源索引標題明示數學6下「四則混合運算」；只作官方索引標題層級對照，詳情頁未核對。"};
  if(/雞兔問題|雞兔同籠/.test(unit)) return {mappingId:"nani-g6-math-6b-chicken-rabbit",semester:"下學期",basis:"publisher-source-verified",confidence:"medium",notes:"南一官方索引標題顯示數學6下雞兔問題；詳情頁未能讀取，僅保留官方資源標題層級。"};
  if(/比與比值|比與比例|比例(?!尺)|配比/.test(unit)) return {semester:"上學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見單元群推定上學期前段；非學校正式段考範圍。"};
  if(/百分率|折扣/.test(unit)) return {semester:"上學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見百分率單元群推定；非學校正式段考範圍。"};
  if(/比例尺|速率/.test(unit)) return {semester:"上學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見比例尺與速率單元群推定；非學校正式段考範圍。"};
  if(/圓周|圓面積/.test(unit)) return {semester:"下學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見圓形單元群推定；非學校正式段考範圍。"};
  if(/體積|表面積/.test(unit)) return {semester:"下學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見立體形體單元群推定；非學校正式段考範圍。"};
  if(/平均數|中位數|統計|機率|全距|相對次數/.test(unit)) return {semester:"下學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見統計與機率單元群推定；非學校正式段考範圍。"};
 }
 if(grade==="高二"&&subject==="數學"&&q.courseTrack==="數學A"){
  if(/三角|弧度|正弦|餘弦|正切/.test(unit)) return {mappingId:"hanlin-h2-math-3a-u1",semester:"上學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
  if(/指數|對數|log|成長|衰變/.test(unit)) return {mappingId:"hanlin-h2-math-3a-u2",semester:"上學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
  if(/向量|內積|投影|行列式/.test(unit)) return {mappingId:"hanlin-h2-math-3a-u3",semester:"上學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
 }
 if(grade==="高二"&&subject==="物理"&&mappingScopeMatches(q,MAPS["hanlin-h2-physics-ii"],"hanlin-h2-physics-ii"))
  return {mappingId:"hanlin-h2-physics-ii",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方頁確認高二上選修物理(II)冊名「力學二與熱學」；只作冊別層級對照，未核對細分單元或段考。"};
 if(grade==="高二"&&subject==="化學"&&mappingScopeMatches(q,MAPS["hanlin-h2-chemistry-ii-structure-rate"],"hanlin-h2-chemistry-ii-structure-rate"))
  return {mappingId:"hanlin-h2-chemistry-ii-structure-rate",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方頁確認高二上選修化學(II)冊名「物質構造與反應速率」；只作冊別／主題層級對照。"};
 if(grade==="高二"&&subject==="化學"){
  if(/化學平衡|平衡常數|勒沙特列|反應商|平衡移動/.test(unit)) return {mappingId:"hanlin-h2-chemistry-iii-u1",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示化學平衡單元；教材標示高二、高三全學年。"};
  if(/溶解平衡|溶度積|沉澱|共同離子|Ksp/.test(unit)) return {mappingId:"hanlin-h2-chemistry-iii-u2",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示沉澱反應與溶解平衡單元；教材標示高二、高三全學年。"};
  if(/酸鹼|緩衝|滴定|鹽類水解|pH/.test(unit)) return {mappingId:"hanlin-h2-chemistry-iii-u3",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示酸鹼反應單元；教材標示高二、高三全學年。"};
 }
 if(grade==="高二"&&subject==="生物"&&mappingScopeMatches(q,MAPS["hanlin-h2-biology-ii-plant"],"hanlin-h2-biology-ii-plant"))
  return {mappingId:"hanlin-h2-biology-ii-plant",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方課本頁確認高二上選修生物(II)「生命的起源與植物」；只作冊別層級對照，不宣稱細分目次。"};
 if(grade==="六年級"&&subject==="社會"&&mappingScopeMatches(q,MAPS["knsh-g6-social-6a-u2-1"],"knsh-g6-social-6a-u2-1"))
  return {mappingId:"knsh-g6-social-6a-u2-1",semester:"上學期",basis:"publisher-source-verified",confidence:"high",notes:"康軒官方六上2-1教學資源明示個人發展與社會變遷單元；不代表學校採用版本。"};
 return null;
}
function domainFor(q){
 const subject=q.subject||"",t=label(q)+" "+String(q.q||"");
 const rules={
 "國語":[["閱讀理解",/閱讀|文本|文章|摘要|主旨|推論|觀點|證據|敘事|段落|說明文|程序|論證|公告|資訊|論據|句意|事實|意見/],["詞語修辭",/詞語|成語|字義|詞義|語境|修辭|譬喻|擬人/],["語文句型",/句型|複句|語意|語法|標點|詞性|轉折|因果|讓步/],["文學寫作",/詩|文言|古文|文學|寫作|作文|意象/]],
 "國文":[["閱讀理解",/閱讀|文本|文章|摘要|主旨|推論|觀點|證據|論證|論述|文意|語意/],["字詞文言",/字音|字形|字義|詞義|文言|古文|成語|古典/],["語文修辭",/句型|語法|修辭|譬喻|排比|倒裝|論述|語意/],["文學寫作",/詩|詞|曲|文學|寫作|作文|意象/]],
 "英文":[["閱讀理解",/閱讀|文章|對話|公告|表格|圖表|信件|主旨/],["字彙片語",/字彙|單字|片語|詞義|同義|反義|字義/],["文法句型",/文法|時態|被動|關係子句|關係代名詞|假設|分詞|動名詞|不定詞|主詞|動詞|介系詞|連接詞|過去完成式|過去式|現在完成式|條件句|倒裝|讓步|頻率|可數|不可數|最高級|比較級|borrow|lend|There be/],["寫作溝通",/寫作|改寫|翻譯|情境|回應|溝通/]],
 "英語":[["閱讀理解",/閱讀|文章|對話|公告|表格|圖表|信件|主旨/],["字彙片語",/字彙|單字|片語|詞義|同義|反義|字義/],["文法句型",/文法|時態|被動|關係子句|關係代名詞|假設|分詞|動名詞|不定詞|第三人稱單數|介系詞|連接詞|過去式|現在完成式|條件句|倒裝|頻率|可數|不可數|最高級|比較級|There be|borrow|lend|名詞/],["生活溝通",/問候|對話|情境|溝通|日常|表達|安全告示/]],
 "數學":[["數與運算",/整數|分數|小數|四則|比例|比值|百分率|根式|數列|時間|速率|單價|總價|折扣|容量|單位|需求價格彈性/],["代數與函數",/代數|方程|不等式|多項式|函數|一次|二次|指數|對數|導數|斜率|直線/],["幾何與測量",/幾何|角|三角形|圓|面積|體積|表面積|向量|三角函數|座標|比例尺|周長/],["統計與機率",/統計|平均數|中位數|眾數|機率|排列|組合|抽樣|常態分配|全距/]],
 "自然":[["生物生命",/生物|植物|動物|細胞|遺傳|生態|光合作用|食物鏈|食物網|天擇|人體/],["物理能量",/力|運動|速度|加速度|電|磁|光|聲|熱|能量|浮力|密度|凝結|蒸發|氣壓/],["化學物質",/化學|物質|原子|分子|溶液|酸鹼|反應|溶解/],["地球環境",/地球|地層|岩石|地震|火山|天氣|氣候|水循環|天文|月相|月食|日食|太陽|星座/],["科學探究",/實驗|變因|假設|觀察|測量|數據|控制組/]],
 "物理":[["電磁學",/電場|電流|電壓|電阻|磁場|電磁|感應|電路|電功率|電能/],["力學運動",/力學|運動|速度|速率|加速度|牛頓|動量|衝量|碰撞|力矩|重力|位能|自由落體|位置時間|機械能|作功|功率/],["熱學能量",/熱|溫度|熱量|內能|熱力學|能量|比熱|熱膨脹|熱傳導|熱機/],["波動聲光",/波動|波長|頻率|聲|光|折射|反射|干涉/],["近代物理",/量子|光電效應|原子核|放射|相對論/]],
 "化學":[["物質構造",/原子|分子|電子|軌域|鍵結|週期表|價電子|同位素|元素|化合物|純物質|混合物/],["反應與計量",/反應|莫耳|濃度|計量|氧化|還原|速率|催化|溶液|稀釋/],["平衡與酸鹼",/平衡|沉澱|溶度積|酸鹼|滴定|緩衝|pH|水解/],["有機化學",/有機|官能基|聚合|高分子/],["實驗分析",/實驗|測量|分析|指示劑/]],
 "生物":[["細胞分子",/細胞|細胞膜|酵素|DNA|RNA|蛋白質|代謝|分裂|滲透/],["遺傳演化",/遺傳|基因|染色體|演化|天擇|突變/],["生理植物",/植物|光合作用|蒸散|氣孔|維管束|循環|神經|免疫/],["生態環境",/生態|族群|群集|食物網|生物多樣性|演替|先驅生物/]],
 "歷史":[["臺灣史",/臺灣|原住民|荷西|清領|日治|戰後|解嚴/],["中國東亞史",/中國|秦|漢|唐|宋|明|清|東亞|日本|韓國/],["世界史",/世界|希臘|羅馬|歐洲|工業革命|殖民|冷戰|全球化|文藝復興|古典思想|工業化/],["史料判讀",/史料|史觀|年代|歷史解釋|史料互證|轉型正義|多重因果|歷史因果/]],
 "地理":[["自然地理",/地形|氣候|河流|海岸|土壤|板塊|迎風坡|緯度|日照/],["人文地理",/人口|都市|聚落|產業|農業|工業|移民|供應鏈|全球化|聚集經濟|國際分工|人類發展指數/],["區域地理",/區域|亞洲|歐洲|非洲|美洲|臺灣|東南亞/],["地圖資訊",/地圖|比例尺|座標|GIS|地理資訊|空間/]],
 "公民":[["憲法政府",/憲法|憲政|政府|權力分立|行政|立法|司法/],["法律人權",/法律|法治|人權|權利|義務|社會權|比例原則|正當程序|法律保留/],["政治參與",/政治|選舉|民主|政黨|公共政策|公民參與/],["經濟社會",/經濟|市場|供需|價格|消費|生產|勞動|社會福利|課稅|外部成本/]],
 "社會":[["歷史脈絡與史料",/史料|歷史|冷戰|殖民|革命|戰後|主權|民族自決|文化資產|臺灣史|文藝復興|古典思想|轉型正義/],["地理空間與環境",/地圖|比例尺|人口|交通|都市|產業|區域|供應鏈|氣候|防洪|土地利用|季風|地形|GIS|地理/],["公民制度與公共參與",/民主|公民|政府|地方自治|權力|法律|人權|權利|選舉|司法|行政|公共|參與|法治|比例原則|法律保留/],["社會變遷與文化",/社會變遷|家庭|文化|族群|性別|人口結構|移民|地方產業|永續消費|分工|供需|經濟/]],
 "經濟":[["經濟與資源配置",/經濟|市場|供需|價格|成本|機會成本|外部性|彈性|課稅|資源配置/]],
 "資訊":[["資訊科技與資料素養",/資訊|資料|演算法|程式|網路|媒體|查證|隱私|安全/]],
 "資訊素養":[["資訊科技與資料素養",/資訊|資料|演算法|程式|網路|媒體|查證|隱私|安全/]]
 };
 for(const [n,re] of (rules[subject]||[]))if(re.test(t))return n;
 if(subject==="社會")return "社會探究與公共議題";
 if(subject==="經濟")return "經濟與資源配置";
 if(subject==="資訊"||subject==="資訊素養")return "資訊科技與媒體素養";
 if(subject==="地球科學")return /天氣|氣候|大氣/.test(t)?"大氣氣候":/地震|岩石|板塊|地層/.test(t)?"地質地球內部":/星|月|行星|宇宙/.test(t)?"天文宇宙":"地球系統";
 return "綜合／待細分";
}
function typeFor(q){
 const t=String(q.q||"")+" "+label(q);
 if(/表格|統計圖|折線圖|長條圖|圓餅圖|地圖|示意圖|圖中|圖表/.test(t))return "圖表資料判讀";
 if(/實驗|控制變因|假設|觀察紀錄/.test(t))return "實驗探究";
 if(/計算|多少|求出|等於|幾公尺|幾公分|幾秒|幾焦耳/.test(t))return "計算應用";
 if(/閱讀|文章|文本|公告|對話|信件/.test(t))return "閱讀理解";
 if(/原因|最可能|推論|結論|理由|最適當/.test(t))return "推理判斷";
 return "概念辨識";
}
function difficultyFor(q){const v=q.difficultyLevel||q.d||q.difficulty||"";return ["基礎","中等","進階","挑戰"].includes(v)?v:"未標示";}
function classify(q){
 q=q||{};
 const savedIndex=window.QUESTION_CLASSIFICATION_INDEX;
 const saved=savedIndex&&q.id?savedIndex[q.id]:null;
 // 已保存分類優先；但未分類學期／段考仍可由後續有依據的規則補齊。
 const source=saved?Object.assign({},q,saved):q;
 const isCore=core(source);
 let semester=source.semester||UN, examPeriod=source.examPeriod||UN;
 let basis=source.classificationBasis||(isCore?"curriculum-core":"unassigned");
 let confidence=source.confidence||"low";
 let publisherStatus=source.publisherStatus||(isCore?"curriculum-core":"pending");
 let notes=source.classificationNotes||source.reason||(isCore?"依108課綱共同核心原創；未取得足以指定出版社或段考範圍的證據。":"來源與分類資料不足，待核對。");
 let mappings=resolveMappings(source);
 let rejectedMapping=Array.isArray(source.publisherMappings)&&source.publisherMappings.length>0&&mappings.length===0;
 const rule=(semester===UN||examPeriod===UN)?inferred(source):null;
 if(rule){
  const ruleMap=rule.mappingId?MAPS[rule.mappingId]:null;
  const samePublisherConflict=!!(ruleMap&&mappings.some(m=>m.publisher===ruleMap.publisher&&m.mappingId!==rule.mappingId));
  if(!samePublisherConflict){
   if(semester===UN&&rule.semester)semester=rule.semester;
   if(examPeriod===UN&&rule.examPeriod)examPeriod=rule.examPeriod;
   if(rule.mappingId&&!mappings.some(m=>m.mappingId===rule.mappingId)){
    const m=ruleMap;
    if(m&&validMappingForQuestion(source,m,rule.mappingId)){
     mappings.push({publisher:m.publisher,mappingId:m.mappingId||m.id,sourceUrl:m.sourceUrl,sourceTitle:m.sourceTitle,verifiedAt:m.verifiedAt,verificationStatus:m.verificationStatus,notes:m.notes,mappingLevel:m.mappingLevel||"volume",volume:m.volume||m.unitName||"",unitCode:m.unitCode||"",unitName:m.unitName||"",unitAliases:UNIT_ALIASES[rule.mappingId]||[],scopeKeywords:VOLUME_SCOPES[rule.mappingId]||[],semester:m.semester||UN,grade:m.grade,subject:m.subject,courseTrack:m.courseTrack||null,schoolYear:m.schoolYear||"未標示",courseType:m.courseType||"未確認"});
    }else rejectedMapping=true;
   }
   if(rule.basis==="question-bank-inference"&&basis!=="publisher-source-verified"){basis="question-bank-inference";confidence=rule.confidence||"medium";notes=rule.notes;}
   else if(rule.basis==="publisher-source-verified"){basis="publisher-source-verified";confidence=rule.confidence||"medium";notes=rule.notes;}
  }else{
   notes+=" 同一出版社已有不同冊別／課程映射，為避免混用版本，保留既有映射且不新增第二筆。";
  }
 }
 if(mappings.length){
  publisherStatus="publisher-mapped";
  const officialSemesters=[...new Set(mappings.map(m=>m.semester).filter(x=>x&&x!==UN))];
  if(officialSemesters.length===1&&(semester===UN||basis==="publisher-source-verified"))semester=officialSemesters[0];
  if(basis==="curriculum-core"||basis==="unassigned")basis="publisher-source-verified";
  if(!source.classificationNotes&&!rule)notes=mappings.map(m=>m.notes).join(" ");
  if(confidence==="low")confidence=mappings.every(m=>m.mappingLevel==="unit")?"high":"medium";
 }else{
  if(rejectedMapping){publisherStatus=isCore?"curriculum-core":"pending";notes+=" 原出版社映射因年級、科目、學期、課程軌別或單元／冊別範圍未通過一致性檢查，故不納入出版社篩選。";}
  if(basis==="publisher-source-verified")basis=isCore?"curriculum-core":"unassigned";
  if(!isCore&&basis==="curriculum-core")basis="unassigned";
  if(!notes)notes=isCore?"依108課綱共同核心；未取得足以指定出版社或段考範圍的證據。":"來源與分類資料不足，待核對。";
 }
 const sourceRef=mappings.length?mappings.map(m=>m.sourceUrl).join("|"):(rejectedMapping?"108課綱共同核心；原出版社映射未通過範圍檢查":(source.sourceRef||""));
 return {semester,examPeriod,classificationBasis:basis,confidence,publisherStatus,publisherMappings:mappings,classificationNotes:notes,reason:notes,sourceRef,learningDomain:source.learningDomain||domainFor(source),questionType:source.questionType||typeFor(source),learningUnit:source.learningUnit||label(source)||"未標示",difficultyLevel:difficultyFor(source)};
}
window.questionClassificationFor=classify;
window.QUESTION_CLASSIFICATION_RULES_VERSION="2026-11-14.21";
})();
