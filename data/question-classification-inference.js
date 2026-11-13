(function(){
"use strict";
const MAPS={"hanlin-h2-math-3a-u1":{"id":"hanlin-h2-math-3a-u1","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"1","unitName":"三角函數","learningContent":"弧度量、正弦、餘弦、正切函數圖形與週期現象","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與108課綱高二數學A版，目次列三角函數；只作單元對照，不表示題目取自教材。","mappingId":"hanlin-h2-math-3a-u1","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-math-3a-u2":{"id":"hanlin-h2-math-3a-u2","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"2","unitName":"指數與對數函數","learningContent":"按比例成長模型、指數與對數圖形及生活應用","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與目次單元；段考區間仍為題庫依單元順序推定。","mappingId":"hanlin-h2-math-3a-u2","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-math-3a-u3":{"id":"hanlin-h2-math-3a-u3","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(3A)（官方互動式教學講義，搭配翰林教材）","unitCode":"3","unitName":"平面向量","learningContent":"平面向量運算、內積、行列式與幾何應用","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/433021","sourceTitle":"翰林書城－高中互動式教學講義數學(3A)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、上學期與目次單元；段考區間仍為題庫依單元順序推定。","mappingId":"hanlin-h2-math-3a-u3","courseType":"未確認","mappingLevel":"unit","courseTrack":"數學A"},"hanlin-h2-physics-ii":{"id":"hanlin-h2-physics-ii","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"物理","semester":"上學期","publisher":"hanlin","volume":"選修物理(II) 力學二與熱學","unitCode":"全冊","unitName":"力學二與熱學","learningContent":"高二上選修物理(II)冊別層級對照；官方商品頁未列完整章節，故不進一步推定段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/004022","sourceTitle":"翰林書城－高中課本選修物理(II)力學二與熱學","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高中二年級、上學期及課本名稱；僅作冊別／主題層級對照。","mappingId":"hanlin-h2-physics-ii","courseType":"未確認","mappingLevel":"volume"},"hanlin-h2-chemistry-iii-u1":{"id":"hanlin-h2-chemistry-iii-u1","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"1","unitName":"化學平衡","learningContent":"化學平衡與平衡移動","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高二、高三、全學年，目次列化學平衡；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u1","courseType":"未確認","mappingLevel":"unit"},"hanlin-h2-chemistry-iii-u2":{"id":"hanlin-h2-chemistry-iii-u2","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"2","unitName":"沉澱反應與溶解平衡","learningContent":"溶解平衡、沉澱與溶度積概念","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示目次列沉澱反應與溶解平衡；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u2","courseType":"未確認","mappingLevel":"unit"},"hanlin-h2-chemistry-iii-u3":{"id":"hanlin-h2-chemistry-iii-u3","schoolYear":"未標示","stage":"高中","grade":"高二、高三","subject":"化學","semester":"全學年","publisher":"hanlin","volume":"選修化學(III)（官方互動式教學講義）","unitCode":"3","unitName":"酸鹼反應","learningContent":"酸鹼反應、滴定與緩衝概念","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/435023","sourceTitle":"翰林書城－高中互動式教學講義選修化學(III)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示目次列酸鹼反應與酸鹼滴定實驗；不推定學校段考。","mappingId":"hanlin-h2-chemistry-iii-u3","courseType":"未確認","mappingLevel":"unit"},"knsh-g6-social-6a-u2-1":{"id":"knsh-g6-social-6a-u2-1","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"社會","semester":"上學期","publisher":"knsh","volume":"社會六上","unitCode":"2-1","unitName":"個人發展如何受到社會變遷的影響","learningContent":"個人角色、性別角色與族群文化隨社會變遷的影響","sourceType":"official-publisher","sourceUrl":"https://sdgs.knsh.com.tw/campus/SDGS_FILE_E/%E7%A4%BE%E6%9C%83%E5%85%AD%E4%B8%8ACH2L1%E5%80%8B%E4%BA%BA%E7%99%BC%E5%B1%95%E5%A6%82%E4%BD%95%E5%8F%97%E5%88%B0%E7%A4%BE%E6%9C%83%E8%AE%8A%E9%81%B7%E7%9A%84%E5%BD%B1%E9%9F%BF_%E6%95%99%E5%AD%B8%E8%B3%87%E6%BA%90.pdf","sourceTitle":"康軒社會六上2-1教學資源PDF","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方教學資源直接標示社會六上2-1，並列六年級學習重點；僅對應涉及個人發展／社會變遷的題目。","mappingId":"knsh-g6-social-6a-u2-1","courseType":"國小","mappingLevel":"unit"},"hanlin-g6-math-6a-volume":{"id":"hanlin-g6-math-6a-volume","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"數學","semester":"上學期","publisher":"hanlin","volume":"數學(6上)","unitCode":"冊別層級","unitName":"數學(6上)冊別層級對照（未核對具體單元）","learningContent":"官方商品頁確認六年級、上學期、數學與冊別；未提供可核對單元目次，不據此標記特定單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/1030111","sourceTitle":"翰林書城－國小課本數學(6上)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"僅作冊別／學期層級資料核對；不代表本批題目取自教材，也不將一般知識點冒稱翰林專屬單元。","mappingId":"hanlin-g6-math-6a-volume","courseType":"國小","mappingLevel":"volume"},"hanlin-g6-math-6b-volume":{"id":"hanlin-g6-math-6b-volume","schoolYear":"未標示","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","publisher":"hanlin","volume":"數學(6下)","unitCode":"冊別層級","unitName":"數學(6下)冊別層級對照（未核對具體單元）","learningContent":"官方商品頁確認六年級、下學期、數學與冊別；未提供可核對單元目次，不據此標記特定單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/1030121","sourceTitle":"翰林書城－國小課本數學(6下)","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"僅作冊別／學期層級資料核對；不代表本批題目取自教材，也不將一般知識點冒稱翰林專屬單元。","mappingId":"hanlin-g6-math-6b-volume","courseType":"國小","mappingLevel":"volume"},"hanlin-h2-chemistry-ii-structure-rate":{"id":"hanlin-h2-chemistry-ii-structure-rate","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"化學","semester":"上學期","publisher":"hanlin","volume":"選修化學(II)物質構造與反應速率","unitCode":"冊名主題","unitName":"物質構造與反應速率（冊名層級）","learningContent":"對應官方課本名稱所示的物質構造與反應速率主題；商品頁未列完整章節目次，故不再推定細分單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/005022","sourceTitle":"翰林書城－高中課本選修化學(II)物質構造與反應速率","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方翰林課本頁明示高中2年級、上學期及冊名「選修化學(II)物質構造與反應速率」；僅冊名／主題層級，未核對完整細分目次。此前曾誤標下學期，本次依官方頁更正。此映射不代表學校採用版本。","mappingId":"hanlin-h2-chemistry-ii-structure-rate","courseType":"未確認","mappingLevel":"title-topic"},"hanlin-h2-biology-ii-plant":{"id":"hanlin-h2-biology-ii-plant","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"生物","semester":"上學期","publisher":"hanlin","volume":"選修生物(II)生命的起源與植物","unitCode":"冊別層級","unitName":"生命的起源與植物（冊別層級）","learningContent":"僅對植物相關知識點作冊別層級對照；官方商品頁未列完整單元目次，不推定具體章節或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/006022","sourceTitle":"翰林書城－高中課本選修生物(II)生命的起源與植物","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方頁明示高中二年級、上學期及冊名；此映射不代表已核對具體單元目次。","mappingId":"hanlin-h2-biology-ii-plant","courseType":"未確認","mappingLevel":"volume"},"hanlin-h2-chemistry-i-matter-energy":{"id":"hanlin-h2-chemistry-i-matter-energy","schoolYear":"未標示","stage":"高中","grade":"高二","subject":"化學","semester":"上學期","publisher":"hanlin","volume":"選修化學(I)物質與能量","unitCode":"冊別層級","unitName":"物質與能量（冊別層級）","learningContent":"官方課本頁確認高中二年級、上學期及冊名；未提供可核對細分目次，僅限冊別層級，不據此推定具體單元或段考。","sourceType":"official-publisher","sourceUrl":"https://books.hanlin.com.tw/product/005021","sourceTitle":"翰林書城－高中課本選修化學(I)物質與能量","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"官方商品頁明示高中二年級、上學期及課本名稱「物質與能量」；本映射只證明冊別層級，不能推論細分單元或學校段考範圍。題目為原創，非教材或歷屆試題原文。","mappingId":"hanlin-h2-chemistry-i-matter-energy","courseType":"未確認","mappingLevel":"volume"},"nani-g6-math-6b-base-comparison":{"id":"nani-g6-math-6b-base-comparison","mappingId":"nani-g6-math-6b-base-comparison","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"官方數位教學資源單元","unitName":"基準量和比較量","mappingLevel":"unit","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_content?a=341&b=1","sourceTitle":"南一資源_內文－數學6下｜基準量和比較量","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"南一官方資源頁明示數學6下、國小數學6年級及「基準量和比較量」單元標題；僅支持此資源單元層級，不代表完整教科書目次或學校採用版本。"},"nani-g6-math-6b-four-operations":{"id":"nani-g6-math-6b-four-operations","mappingId":"nani-g6-math-6b-four-operations","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"官方數位教學資源單元","unitName":"四則混合運算","mappingLevel":"unit","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_content?a=340&b=1","sourceTitle":"南一資源_內文－數學6下｜四則混合運算","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"南一官方資源頁明示數學6下、國小數學6年級及「四則混合運算」單元標題；僅支持此資源單元層級，不代表完整教科書目次或學校採用版本。"},"nani-g6-math-6b-chicken-rabbit":{"id":"nani-g6-math-6b-chicken-rabbit","mappingId":"nani-g6-math-6b-chicken-rabbit","publisher":"nani","stage":"國小","grade":"六年級","subject":"數學","semester":"下學期","volume":"數學6下","unitCode":"官方教學資源主題","unitName":"怎樣解題：雞兔問題","mappingLevel":"unit","schoolYear":"未標示","courseType":"國小","sourceUrl":"https://tpack.nani.com.tw/nani_content?a=394&b=1","sourceTitle":"南一資源_內文－數學6下｜怎樣解題：雞兔問題","verifiedAt":"2026-11-13","verificationStatus":"source-checked","notes":"南一官方資源平台頁面明示數學6下、國小數學6年級及雞兔同籠主題；頁面分享者為高師大，屬官方平台教學資源，不宣稱為南一課本原題或學校採用版本。"}};
const UN="unassigned";
const core=q=>q&&(q.frameworkId==="curriculum-108"||q.sourceType==="original-curriculum-aligned");
const label=q=>String(q.unit||q.learningContent||q.t||q.topic||"");
function resolveMappings(q){
 const raw=Array.isArray(q.publisherMappings)?q.publisherMappings:[];
 const out=[];
 for(const x of raw){
  const id=x.mappingId||x.id;
  const m=MAPS[id];
  if(!m) continue;
  if(m.courseTrack&&q.courseTrack!==m.courseTrack) continue;
  if(m.grade&&String(m.grade).split(/[、,，]/).indexOf(q.grade)<0) continue;
  if(m.subject&&q.subject!==m.subject) continue;
  out.push({
   publisher:m.publisher,mappingId:id,sourceUrl:m.sourceUrl,sourceTitle:m.sourceTitle,
   verifiedAt:m.verifiedAt,verificationStatus:m.verificationStatus,notes:m.notes,
   mappingLevel:m.mappingLevel||"volume",volume:m.volume||m.unitName||"",
   unitCode:m.unitCode||"",unitName:m.unitName||"",semester:m.semester||UN,
   grade:m.grade,subject:m.subject,courseTrack:m.courseTrack||null,
   schoolYear:m.schoolYear||"未標示",courseType:m.courseType||"未確認"
  });
 }
 return out;
}
function inferred(q){
 const g=q.grade||"",s=q.subject||"",u=label(q);
 if(g==="六年級"&&s==="數學"){
  if(/基準量和比較量|基準量與比較量/.test(u)) return {mappingId:"nani-g6-math-6b-base-comparison",semester:"下學期",basis:"publisher-source-verified",confidence:"high",notes:"南一官方6下資源明示「基準量和比較量」；只作單元層級對照。"};
  if(/四則混合運算/.test(u)) return {mappingId:"nani-g6-math-6b-four-operations",semester:"下學期",basis:"publisher-source-verified",confidence:"high",notes:"南一官方6下資源明示「四則混合運算」；只作單元層級對照。"};
  if(/雞兔問題|雞兔同籠/.test(u)) return {mappingId:"nani-g6-math-6b-chicken-rabbit",semester:"下學期",basis:"publisher-source-verified",confidence:"high",notes:"南一官方6下教學資源明示雞兔問題；屬教學資源主題對照。"};
  if(/比與比值|比與比例|比例|配比/.test(u)) return {semester:"上學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見單元群推定上學期前段；非學校正式段考範圍。"};
  if(/百分率|折扣/.test(u)) return {semester:"上學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見百分率單元群推定；非學校正式段考範圍。"};
  if(/比例尺|速率/.test(u)) return {semester:"上學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見比例尺與速率單元群推定；非學校正式段考範圍。"};
  if(/圓周|圓面積/.test(u)) return {semester:"下學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見圓形單元群推定；非學校正式段考範圍。"};
  if(/體積|表面積/.test(u)) return {semester:"下學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見立體形體單元群推定；非學校正式段考範圍。"};
  if(/平均數|中位數|統計|機率|全距|相對次數/.test(u)) return {semester:"下學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"依六年級題庫常見統計與機率單元群推定；非學校正式段考範圍。"};
 }
 if(g==="高二"&&s==="數學"&&q.courseTrack==="數學A"){
  if(/三角|弧度|正弦|餘弦|正切/.test(u)) return {mappingId:"hanlin-h2-math-3a-u1",semester:"上學期",examPeriod:"第一次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
  if(/指數|對數|log|成長|衰變/.test(u)) return {mappingId:"hanlin-h2-math-3a-u2",semester:"上學期",examPeriod:"第二次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
  if(/向量|內積|投影|行列式/.test(u)) return {mappingId:"hanlin-h2-math-3a-u3",semester:"上學期",examPeriod:"第三次段考",basis:"question-bank-inference",confidence:"medium",notes:"已確認題目課程軌別為數學A；依翰林數學3A官方單元次序推定段考，非學校正式範圍。"};
 }
 if(g==="高二"&&s==="物理"&&/動量|衝量|碰撞|力矩|角動量|彈簧|熱量|熱學|熱傳導|熱膨脹|靜力|力學|牛頓/.test(u))
  return {mappingId:"hanlin-h2-physics-ii",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方頁確認高二上選修物理(II)冊名「力學二與熱學」；本映射僅冊別層級，不代表學校採用版本或細分段考。"};
 if(g==="高二"&&s==="化學"&&/反應速率|催化劑|活化能|碰撞理論|物質構造|電子組態|價電子/.test(u))
  return {mappingId:"hanlin-h2-chemistry-ii-structure-rate",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方頁確認高二上選修化學(II)冊名「物質構造與反應速率」；此為冊名／主題層級，不宣稱完整單元目次。"};
 if(g==="高二"&&s==="化學"){
  if(/化學平衡|平衡常數|勒沙特列|反應商/.test(u)) return {mappingId:"hanlin-h2-chemistry-iii-u1",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示化學平衡單元；教材標示高二、高三全學年。"};
  if(/溶解平衡|溶度積|沉澱|共同離子/.test(u)) return {mappingId:"hanlin-h2-chemistry-iii-u2",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示沉澱反應與溶解平衡單元；教材標示高二、高三全學年。"};
  if(/酸鹼|緩衝|滴定|鹽類水解|pH/.test(u)) return {mappingId:"hanlin-h2-chemistry-iii-u3",semester:"全學年",basis:"publisher-source-verified",confidence:"high",notes:"翰林官方化學(III)目次明示酸鹼反應單元；教材標示高二、高三全學年。"};
 }
 if(g==="高二"&&s==="生物"&&/蒸散|氣孔|植物|維管束|木質部|韌皮部/.test(u))
  return {mappingId:"hanlin-h2-biology-ii-plant",semester:"上學期",basis:"publisher-source-verified",confidence:"medium",notes:"翰林官方課本頁確認高二上選修生物(II)「生命的起源與植物」；此為冊別層級，不宣稱完整細分目次。"};
 if(g==="六年級"&&s==="社會"&&/個人發展如何受到社會變遷的影響|社會變遷與性別角色|家庭分工與社會變遷/.test(u))
  return {mappingId:"knsh-g6-social-6a-u2-1",semester:"上學期",basis:"publisher-source-verified",confidence:"high",notes:"康軒官方六上2-1教學資源明示單元「個人發展如何受到社會變遷的影響」；不代表學校採用版本。"};
 return null;
}
function classify(q){
 q=q||{};
 const isCore=core(q);
 let semester=q.semester||UN, examPeriod=q.examPeriod||UN;
 let basis=q.classificationBasis||(isCore?"curriculum-core":"unassigned");
 let confidence=q.confidence||"low";
 let publisherStatus=q.publisherStatus||(isCore?"curriculum-core":"pending");
 let notes=q.classificationNotes||q.reason|| (isCore?"依108課綱共同核心原創；未取得足以指定出版社或段考範圍的證據。":"來源與分類資料不足，待核對。");
 let mappings=resolveMappings(q);
 const rule=inferred(q);
 if(rule){
  if(semester===UN&&rule.semester) semester=rule.semester;
  if(examPeriod===UN&&rule.examPeriod) examPeriod=rule.examPeriod;
  if(rule.mappingId&&!mappings.some(m=>m.mappingId===rule.mappingId)){
   const m=MAPS[rule.mappingId];
   if(m&&(!m.courseTrack||q.courseTrack===m.courseTrack)){
    mappings.push({publisher:m.publisher,mappingId:m.mappingId||m.id,sourceUrl:m.sourceUrl,sourceTitle:m.sourceTitle,verifiedAt:m.verifiedAt,verificationStatus:m.verificationStatus,notes:m.notes,mappingLevel:m.mappingLevel||"volume",volume:m.volume||m.unitName||"",unitCode:m.unitCode||"",unitName:m.unitName||"",semester:m.semester||UN,grade:m.grade,subject:m.subject,courseTrack:m.courseTrack||null,schoolYear:m.schoolYear||"未標示",courseType:m.courseType||"未確認"});
   }
  }
  if(rule.basis==="question-bank-inference"){
   basis="question-bank-inference";confidence=rule.confidence||"medium";notes=rule.notes;
  }else if(rule.basis==="publisher-source-verified"){
   basis="publisher-source-verified";confidence=rule.confidence||"medium";notes=rule.notes;
  }
 }
 if(mappings.length){
  publisherStatus="publisher-mapped";
  const officialSemesters=[...new Set(mappings.map(m=>m.semester).filter(x=>x&&x!==UN))];
  if(officialSemesters.length===1){
   const official=officialSemesters[0];
   if(semester===UN||basis==="publisher-source-verified") semester=official;
  }
  if(basis==="curriculum-core"||basis==="unassigned") basis="publisher-source-verified";
  if(!q.classificationNotes&&!rule) notes=mappings.map(m=>m.notes).join(" ");
  if(confidence==="low") confidence=mappings.every(m=>m.mappingLevel==="unit")?"high":"medium";
 }else{
  const hadInvalid=Array.isArray(q.publisherMappings)&&q.publisherMappings.length>0;
  if(hadInvalid){
   publisherStatus=isCore?"curriculum-core":"pending";
   if(!rule) notes+=" 原出版社映射因缺少必要課程軌別或有效來源而未採用。";
  }
  if(basis==="publisher-source-verified") basis=isCore?"curriculum-core":"unassigned";
  if(!isCore&&basis==="curriculum-core") basis="unassigned";
 }
 const sourceRef=mappings.length?mappings.map(m=>m.sourceUrl).join("|"):(q.sourceRef||"");
 return {semester,examPeriod,classificationBasis:basis,confidence,publisherStatus,publisherMappings:mappings,classificationNotes:notes,reason:notes,sourceRef};
}
window.questionClassificationFor=classify;
window.QUESTION_CLASSIFICATION_RULES_VERSION="2026-11-13.6";
})();
