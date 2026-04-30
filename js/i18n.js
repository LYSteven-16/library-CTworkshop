/* ========== i18n — Paragraph-level translations ========== */
/* Keys = complete Chinese text nodes. Values = English translations. */
/* Default: English (en). localStorage.ct_lang */

var I18N = {
  en: {
    // ===== Shell / Navbar / Common =====
    '載入中…': 'Loading…',
    '知道了！': 'Got it!',
    '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習': '💡 Return to your Figma 🗺️ Learning Roadmap to continue',
    '解碼圖書館熱力圖——計算思維自學工坊': 'Decoding the Library Heatmap — CT Workshop',
    '🔍 解碼圖書館熱力圖': '🔍 Decoding the Library Heatmap',
    '計算思維自學工坊 — 用 6 個模組掌握 CT 四大核心能力': 'CT Workshop — Master 4 Core CT Skills in 6 Modules',
    '總學習時間約 <strong>3 小時</strong>，建議分 2-3 次完成。隨時可透過導航列返回此首頁。': 'Total time: about <strong>3 hours</strong>. We recommend 2-3 sessions. Use the navbar to return here anytime.',
    '返回首頁': 'Back to Home',
    '重新開始學習': 'Restart Learning',
    '確認重新開始': 'Confirm Restart',
    '這將清除所有學習進度和輸入內容，<br>包括姓名、完成狀態、工作單數據。<br>此操作無法復原！': 'This will erase ALL progress and input,<br>including your name, completion status, and worksheet data.<br>This cannot be undone!',
    '取消': 'Cancel',
    '確認清除': 'Confirm Reset',
    '所有進度已清除，可以重新開始了 ✨': 'All progress cleared. Ready for a fresh start ✨',
    '請輸入你的名字': 'Please enter your name',
    '輸入名字，領取專屬證書': 'Enter your name to get your certificate',
    '開始學習': 'Start Learning',
    '或直接開始：': 'Or skip:',
    '💡 回到 Figma 繼續學習': '💡 Return to Figma to Continue',
    '記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習！': 'Remember to return to your Figma 🗺️ Learning Roadmap!',
    '回到 Figma': 'Back to Figma',
    '完成後回到 Figma': 'Return to Figma when done',
    '🗺️ Learning Roadmap': '🗺️ Learning Roadmap',
    '替換姓名': 'Change Name',
    '已標記完成！': 'Marked as complete!',
    '已儲存 ✓': 'Saved ✓',
    '已儲存': 'Saved',
    '複製成功': 'Copied!',
    '📄 工作單已生成並下載！': '📄 Worksheet PDF downloaded!',
    '請輸入你的名字': 'Please enter your name',
    '開始學習吧！證書將使用預設稱呼 😊': 'Starting! Your certificate will use a default name 😊',
    '返回首頁': '返回首頁',

    // ===== Home Page =====
    '🔍 解碼圖書館熱力圖——計算思維自學工坊': '🔍 Decoding the Library Heatmap — CT Workshop',
    '計算思維自學工坊 — 用 6 個模組掌握 CT 四大核心能力': 'CT Workshop — Master 4 Core CT Skills in 6 Modules',
    '問題定義': 'Problem Def.',
    '分解': 'Decomposition',
    '模式識別': 'Pattern Recog.',
    '抽象': 'Abstraction',
    '算法設計': 'Algorithm Des.',
    '使用說明': 'Instructions',
    '學習地圖': 'Learning Map',
    '操作指引': 'How It Works',
    '輸入你的名字，點擊"開始"，然後依序完成 6 個模組。': 'Enter your name, click Start, then complete all 6 modules in order.',
    '每個模組都有互動練習，完成後會自動解鎖下一個。': 'Each module has interactive exercises. Complete one to unlock the next.',
    '完成後回到 Figma': 'Return to Figma when done',
    '🗺️ Learning Roadmap': '🗺️ Learning Roadmap',
    '按順序完成': 'In Order',
    '從模組 1 到模組 6，<br>每個模組環環相扣': 'From Module 1 to 6,<br>each one builds on the last',
    '互動後截圖': 'Save Progress',
    '完成每個互動後，<br>截圖保存到工作單': 'After each interaction,<br>your data is auto-saved',
    '提交 Figma 工作單': 'Submit Figma Worksheet',
    '全部完成後，<br>提交 Figma 工作單': 'When all done,<br>submit your Figma worksheet',
    '提交工作單': 'Submit Worksheet',
    '歡迎回來，': 'Welcome back, ',
    '！繼續你的學習旅程吧': '! Continue your learning journey.',
    '✅ 歡迎，': '✅ Welcome, ',
    '！點擊模組卡片開始學習吧 🎉': '! Click a module card to get started 🎉',
    '👋 歡迎回來，': '👋 Welcome back, ',
    '👋 開始你的學習旅程吧！': '👋 Begin your learning journey!',

    // Module cards
    '🎯 痛點挖掘': '🎯 Pain Point Discovery',
    '問題引入：為什麼圖書館需要人流監控？投票、思考、排序，像工程師一樣定義問題。': 'Why do libraries need traffic monitoring? Vote, think, rank — define problems like an engineer.',
    '🧅 解構問題': '🧅 Deconstructing Problems',
    '分解思維：洋蔥模型剝開問題層次，卡片分類拆分系統模組，數據流排序理清順序。': 'Decomposition: Onion model peels back layers, card classification splits modules, data flow ordering.',
    '🔎 模式偵探': '🔎 Pattern Detective',
    '模式識別：從一週人流數據中找出高峰低谷、異常突增，學會連線配對和預測。': 'Pattern Recognition: Find peaks, troughs, and anomalies in weekly data. Practice matching and prediction.',
    '🎨 視覺化設計師': '🎨 Visual Designer',
    '抽象：從數據到界面，參考真實案例，搭建手機原型，選擇性呈現關鍵資訊。': 'Abstraction: From data to interface. Study real examples, build a phone prototype, present key info.',
    '⚙️ 算法工程師': '⚙️ Algorithm Engineer',
    '核心模組：IR 感應器計數邏輯、防抖算法、流程圖填空，設計精確的計數方案。': 'Core module: IR sensor counting logic, debounce algorithm, flowchart fill-in. Design a precise counting system.',
    '🏆 系統整合與反思': '🏆 Integration & Reflection',
    '旅程回顧、概念測驗、自評雷達圖、反思便簽，完成後領取專屬證書！': 'Journey review, concept quiz, self-assessment radar, reflection notes — then get your certificate!',
    '模組 5 ⭐ 核心': 'Module 5 ⭐ Core',
    '約 20 分鐘': '~20 min',
    '約 25 分鐘': '~25 min',
    '約 30 分鐘': '~30 min',
    '約 35 分鐘': '~35 min',
    '約 40 分鐘': '~40 min',
    '進入模組 1 →': 'Go to Module 1 →',
    '進入模組 2 →': 'Go to Module 2 →',
    '進入模組 3 →': 'Go to Module 3 →',
    '進入模組 4 →': 'Go to Module 4 →',
    '進入模組 5 →': 'Go to Module 5 →',
    '完成課程！': 'Finish!',

    // ===== Module 1 =====
    '模組 1': 'Module 1',
    '🎯 痛點挖掘 — 問題引入': '🎯 Pain Point Discovery — Problem Introduction',
    '學習目標：': 'Learning Objective: ',
    '從真實情境出發，感受圖書館人流量監控的實際需求，定義核心問題，初步體驗計算思維的第一步——': 'Start from real-world scenarios, experience the actual need for library traffic monitoring, define the core problem, and take your first step in CT — ',
    '<strong>問題定義</strong>。': '<strong>Problem Definition</strong>.',
    '<i class="fas fa-book-open"></i> 想像這個場景…': '<i class="fas fa-book-open"></i> Imagine This Scenario…',
    '你抱著課本衝到圖書館，自修室門口貼著<strong>「已滿座」</strong>，只好站在走廊等。': 'You rush to the library, only to see "<strong>FULL</strong>" on the study room door — left standing in the hallway.',
    '你不知道<strong>其他樓層有沒有空位</strong>，跑上跑下才發現三樓還有座位。': 'You don\'t know <strong>if other floors have seats</strong>, running up and down only to find empty seats on the 3rd floor.',
    '考試週每天搶不到位子，卻不知道<strong>什麼時段人最少</strong>。': 'Exam week, no seats — and you have no idea <strong>when it\'s quietest</strong>.',
    '圖書館管理員也只能<strong>憑感覺</strong>判斷擁不擁擠，沒有即時數據。': 'Library staff can only <strong>guess</strong> how crowded it is — no real-time data.',
    '❓ 如果能設計一個系統解決這個問題，你最想讓它做什麼？': '❓ If you could design a system to solve this, what would you want it to do?',
    '<i class="fas fa-chart-bar"></i> 你去圖書館時遇到過幾次沒座位？': '<i class="fas fa-chart-bar"></i> How often do you find no seats at the library?',
    '0 次': '0 times',
    '1-3 次': '1-3 times',
    '4-6 次': '4-6 times',
    '7 次以上': '7+ times',
    '💡 <strong>想一想：</strong>你身邊有多少同學也遇過這種情況？當一個問題影響大多數人時，它就值得用技術來解決。接下來，我們要學會像工程師一樣<strong>定義問題</strong>。': '💡 <strong>Think:</strong> How many classmates face this too? When a problem affects most people, it\'s worth solving with tech. Now, let\'s learn to think like engineers: <strong>define the problem</strong>.',
    '<i class="fas fa-lightbulb"></i> 思考泡泡': '<i class="fas fa-lightbulb"></i> Thought Bubble',
    '如果你有一個魔法螢幕，能顯示圖書館哪裡有空座，你需要它顯示什麼資訊？': 'If you had a magic screen showing library seat availability, what info would you need?',
    '👥 現在有多少人？': '👥 How many now?',
    '🏢 哪層有空位？': '🏢 Which floor has seats?',
    '🕐 何時人最少？': '🕐 When is it quietest?',
    '🔔 人少時提醒我': '🔔 Alert me when quiet',
    '寫下你的想法…也可以點擊上面的提示詞': 'Write your thoughts... or click the prompts above',
    '<i class="fas fa-sort"></i> 問題排序：按重要性排列': '<i class="fas fa-sort"></i> Problem Ranking: Order by Importance',
    '將以下三個候選問題按你認為的重要性排序（最重要的排最前），排好後點擊確認。': 'Rank these 3 candidate problems by importance (most important first), then click confirm.',
    '如何統計進館人數？': 'How to count entries?',
    '如何展示空座資訊？': 'How to display seat availability?',
    '如何預測擁擠時段？': 'How to predict peak hours?',
    '<i class="fas fa-check"></i> 確認排序': '<i class="fas fa-check"></i> Confirm Order',
    '<i class="fas fa-hat-wizard"></i> 工程師的視角': '<i class="fas fa-hat-wizard"></i> Engineer\'s Perspective',
    '其實這三個問題沒有唯一正確的順序，但工程師通常會這樣想：': 'There\'s no single right order, but engineers usually think like this:',
    '統計人數': 'Count People',
    '先有數據，才能做事。感測器是所有功能的基礎。': 'Data comes first. Sensors are the foundation of everything.',
    '展示資訊': 'Display Info',
    '有了數據，要讓使用者看得懂，才有價值。': 'Data is useless if users can\'t understand it. Visualization creates value.',
    '預測時段': 'Predicted Times',
    '累積歷史數據後，才能做預測。這是最高級的功能。': 'Predictions need historical data. This is the most advanced feature.',
    '這正好對應了我們接下來的學習路線👇': 'This maps perfectly to our learning path 👇',
    '① 問題定義': '① Problem Def.',
    '② 分解': '② Decomposition',
    '③ 模式識別': '③ Pattern Recog.',
    '④ 抽象': '④ Abstraction',
    '⑤ 算法設計': '⑤ Algorithm Des.',
    '知識卡片：問題定義': 'Knowledge Card: Problem Definition',
    '<i class="fas fa-house"></i> 返回首頁': '<i class="fas fa-house"></i> Back to Home',
    '進入模組 2：分解思維 → <i class="fas fa-arrow-right"></i>': 'Go to Module 2: Decomposition → <i class="fas fa-arrow-right"></i>',
    '已投票！想想身邊同學是不是也遇過 📸': 'Vote recorded! How many classmates face this too? 📸',
    '排序已確認！看看工程師怎麼想 👇': 'Order confirmed! See how engineers think 👇',
    '← 模組 2': '← Module 2',
    '← 模組 3': '← Module 3',
    '← 模組 4': '← Module 4',
    '← 模組 5': '← Module 5',
    '模組 1 / 6 — 痛點挖掘': 'Module 1 / 6 — Pain Point Discovery',
    '模組 2 / 6 — 解構問題': 'Module 2 / 6 — Deconstructing Problems',
    '模組 3 / 6 — 模式偵探': 'Module 3 / 6 — Pattern Detective',
    '模組 4 / 6 — 視覺化設計師': 'Module 4 / 6 — Visual Designer',
    '模組 5 / 6 — 算法工程師': 'Module 5 / 6 — Algorithm Engineer',
    '模組 6 / 6 — 系統整合與反思': 'Module 6 / 6 — Integration & Reflection',
    '模組 1：痛點挖掘 — 問題引入': 'M1: Pain Point Discovery — Problem Introduction',
    '模組 2：解構問題 — 分解思維': 'M2: Deconstructing — Decomposition',
    '模組 3：模式偵探 — 模式識別': 'M3: Pattern Detective — Pattern Recognition',
    '模組 4：視覺化設計師 — 抽象': 'M4: Visual Designer — Abstraction',
    '模組 5：算法工程師 — 算法設計': 'M5: Algorithm Engineer — Algorithm Design',
    '模組 6：系統整合與反思': 'M6: Integration & Reflection',
    '模組 2': 'Module 2',
    '模組 3': 'Module 3',
    '模組 4': 'Module 4',
    '模組 5': 'Module 5',
    '模組 6': 'Module 6',
    '模組 1：問題引入': 'M1: Problem Framing',
    '模組 2：分解': 'M2: Decomposition',
    '模組 3：模式識別': 'M3: Pattern Recognition',
    '模組 4：抽象': 'M4: Abstraction',
    '模組 5：算法設計': 'M5: Algorithm Design',
    '模組 6：整合反思': 'M6: Integration & Reflection',
    '← 上一模組': '← Previous',
    '下一模組 →': 'Next →',

    // ===== Module 2 (partial - rest to be added) =====
    '🧩 解構問題 — 分解思維': '🧩 Deconstructing Problems — Decomposition',
    '上一模組我們定義了問題：': 'In Module 1 we defined the problem:',
    '「同學需要即時知道圖書館擁不擁擠」': '"Students need real-time info on library crowding"',
    '。但這個問題太大了——一個感測器怎麼變成同學手機上的資訊？': '. But this problem is huge — how does a sensor become info on a student\'s phone?',
    '這就像要把一頭大象裝進冰箱，不可能一步完成。我們需要': 'It\'s like putting an elephant in a fridge — impossible in one step. We need to',
    '把大問題切成<br>可管理的小部分': 'break a big problem into<br>manageable parts',
    '這正好對應了我們接下來的學習路線👇': 'This maps perfectly to our learning path 👇',
    '學會將「設計圖書館人流量監控系統」這個大問題分解為數據採集、傳輸、處理、展示四個功能模組，理解': 'Learn to decompose "Design a library traffic monitoring system" into data collection, transmission, processing, and display modules. Understand',
    '——把大問題切成可管理的小步驟。': '— Break big problems into manageable steps.',
    '——這就是': '— This is',
    '分解思維': 'Decomposition',
    '<i class="fas fa-onion"></i> 洋蔥模型：問題分層拆解': '<i class="fas fa-onion"></i> Onion Model: Layered Problem Breakdown',
    '從外到內，將現實痛點逐層剝開。下方的洋蔥圖展示了分層結構，點擊下方每一層查看詳細說明。': 'Peel back the problem layer by layer, from surface to core. Click each layer below for details.',
    '這是我們的起點——使用者體驗到的問題。同學走進圖書館，不知道哪裡有空位，浪費時間在各樓層間跑來跑去。': 'This is our starting point — the user\'s experience. Students wander between floors, wasting time.',
    '🔴 現實痛點：找不到座位': '🔴 Real Pain Point: No Seats Available',
    '🔴 第1層 現實痛點': '🔴 Layer 1: Real Pain Point',
    '要解決痛點，我們需要什麼數據？把模糊的「不知道」變成具體的數據需求。': 'To solve the pain point, what data do we need? Turn vague "I don\'t know" into specific data requirements.',
    '🟡 第2層 數據需求': '🟡 Layer 2: Data Needs',
    '🟡 數據需求：即時人數 / 樓層': '🟡 Data Needs: Real-time Count / Floors',
    '現在圖書館有多少人？→ 需要即時在館人數': 'How many people are in the library now? → Need real-time occupancy',
    '哪個樓層還有空位？→ 需要各樓層人數': 'Which floor has seats? → Need per-floor counts',
    '什麼時候人最少？→ 需要歷史趨勢數據': 'When is it least crowded? → Need historical trend data',
    '痛點本質：資訊不對稱——圖書館有沒有空位，同學不知道': 'Core pain point: Information asymmetry — students don\'t know if there are seats.',
    '誰受影響？所有使用圖書館的同學': 'Who\'s affected? Every student using the library.',
    '這些數據從哪來？': 'Where does this data come from?',
    '🟢 第3層 功能模組': '🟢 Layer 3: Functional Modules',
    '🟢 功能模組：採集 → 處理 → 展示': '🟢 Functional Modules: Collection → Processing → Display',
    '最核心的技術層——具體用什麼技術來實現每個模組？': 'The core technical layer — what specific tech implements each module?',
    '🔵 第4層 技術': '🔵 Layer 4: Technology',
    '🔵 技術實現：紅外線 + 算法設計': '🔵 Tech Implementation: Infrared + Algorithm Design',
    '採集：紅外線感測器對（IR-A / IR-B）偵測遮擋順序': 'Collection: IR sensor pairs (IR-A / IR-B) detect blocking order',
    ':感測器讀取進出信號 → 輸出原始數據': ': Sensors read entry/exit signals → Output raw data',
    '處理：計數算法 + 去抖邏輯（模組 5 會深入學習）': 'Processing: counting algorithm + debounce logic (Module 5 deep dive)',
    ':算法計數+去抖 → 輸出精確人數': ': Algorithm counting + debounce → Output accurate count',
    '展示：手機 App 界面，紅綠燈 + 熱力圖（模組 4 已經設計過）': 'Display: Mobile App UI, traffic lights + heatmap (designed in Module 4)',
    ':界面呈現給使用者 → 輸出視覺化資訊': ': Interface shown to user → Output visual info',
    '<i class="fas fa-puzzle-piece"></i> 卡片分類：將組件歸入正確模組': '<i class="fas fa-puzzle-piece"></i> Card Classification: Sort into Correct Modules',
    '① 點擊左側卡片選取 → ② 點擊右側對應分類框放入。正確分類會變綠 ✅': '① Click a card on the left → ② Click a category on the right. Correct = green ✅',
    '提示：想想每個組件在系統中扮演什麼角色——是負責「讀取數據」、「傳送數據」、「處理數據」還是「呈現數據」？': 'Tip: What role does each component play — "reading", "transmitting", "processing", or "presenting" data?',
    '📦 待分類組件': '📦 Components to Classify',
    '📦 組件庫': '📦 Component Library',
    '檢查我的分類': 'Check My Classification',
    '<i class="fas fa-stream"></i> 數據流排序': '<i class="fas fa-stream"></i> Data Flow Order',
    '這些組件在系統中以什麼順序工作？點擊下方組件放入對應位置，點擊已放置的組件可移除。': 'What order do these components work in? Click to place, click to remove.',
    '💡 <strong>提示：</strong>數據從感測器產生，經過傳輸和處理，最後到達使用者。': '💡 <strong>Tip:</strong> Data flows from sensors, through transmission and processing, to the user.',
    '檢查順序': 'Check Order',
    '這是使用者最想知道的三件事。': 'These are the 3 things users most want to know.',
    '數據採集': 'Data Collection',
    '數據傳輸': 'Data Transmission',
    '數據處理': 'Data Processing',
    '數據展示': 'Data Display',

    // ===== Module 3 =====
    '🔎 模式偵探 — 模式識別': '🔎 Pattern Detective — Pattern Recognition',
    '上一模組我們把圖書館人流系統': 'In Module 2 we decomposed the library system',
    '成了採集、處理、展示三個模組。現在，想像 IR 感測器已經裝好，收集了一整週的數據——這些數據裡藏著': 'into Collection, Processing, and Display modules. Now, imagine IR sensors installed and running for a full week — the data hides',
    '從數據中發現<br>重複的規律': 'find recurring patterns<br>in the data',
    '。你的任務是像偵探一樣，從數據中找出模式！': '. Your mission: be a detective and find patterns in the data!',
    '📡 紅外線感測器': '📡 IR Sensor',
    '📶 WiFi 模組': '📶 WiFi Module',
    '🧮 計數算法': '🧮 Counting Algorithm',
    '🗄️ 資料庫': '🗄️ Database',
    '📱 手機 App': '📱 Mobile App',
    '<i class="fas fa-chart-line"></i> 回合一：連線配對': '<i class="fas fa-chart-line"></i> Round 1: Match Pairs',
    '先點擊左側折線形狀，再點擊右側場景描述進行配對。正確配對會出現連線！': 'Click a line shape on the left, then a scenario on the right. Correct pairs show a connection!',
    '<i class="fas fa-magnifying-glass-chart"></i> 回合二：異常偵測': '<i class="fas fa-magnifying-glass-chart"></i> Round 2: Anomaly Detection',
    '週三下午 14:00-16:00 出現了異常高峰，人數從平時的 80 人飆升到 280 人。你認為發生了什麼？選擇一個最可能的解釋：': 'Wed 2-4PM: an abnormal spike from 80 to 280 people. What happened? Pick the most likely explanation:',
    '作家講座': 'Author Talk',
    '降雨天': 'Rainy Day',
    '期末考試': 'Final Exams',
    '新書到館': 'New Arrivals',
    '大型校園活動': 'Large Campus Event',
    '學生集中溫習': 'Students cramming for exams',
    '學生留在室內': 'Students stay indoors',
    '大量同學來借書': 'Mass book borrowing',
    '📢 <strong>答案揭曉：</strong>週三下午舉辦了一場知名作家講座，吸引了 200 名學生參加，導致人流量異常飆升！': '📢 <strong>Reveal:</strong> A famous author gave a talk Wednesday afternoon, attracting 200 students — causing the unusual spike!',
    '其他選項分析：期末考試不會只出現在週三下午；下雨天會讓人留在室內，但不會突然增加 200 人；新書到館不會造成如此大規模的增長。': 'Analysis: Finals wouldn\'t happen only on one afternoon; rain keeps people indoors but won\'t add 200 people; new arrivals don\'t cause this scale of increase.',
    '<i class="fas fa-cloud-rain"></i> 回合三：預測挑戰': '<i class="fas fa-cloud-rain"></i> Round 3: Prediction Challenge',
    '週五下午下大雨，大多數課程結束。你預測 17:00 圖書館大約有多少人？先思考推理步驟：': 'Friday afternoon, heavy rain, most classes end. Predict the library count at 5PM. Think through your reasoning:',
    '基準值': 'Baseline',
    '因素': 'Factors',
    '反因素': 'Counter-factors',
    '100 人': '100 people',
    '下雨天': 'Rainy Day',
    '驗證預測': 'Verify Prediction',
    '<i class="fas fa-lightbulb"></i> 揭示常見模式': '<i class="fas fa-lightbulb"></i> Show Common Patterns',
    '上午 10-12 點：穩定高峰': '10AM-12PM: Steady Peak',
    '12-13 點：午間低谷': '12-1PM: Midday Dip',
    '週三下午：異常突增': 'Wed Afternoon: Abnormal Spike',
    '16 點後：晚間回落': 'After 4PM: Evening Decline',
    '📡 紅外線感測器': '📡 IR Sensor',
    '📶 WiFi 模組': '📶 WiFi Module',
    '🔵 藍牙傳輸': '🔵 Bluetooth',
    '☁️ 雲端伺服器': '☁️ Cloud Server',
    '📷 攝像頭': '📷 Camera',
    '🗄️ 資料庫': '🗄️ Database',
    '🗺️ 樓層地圖': '🗺️ Floor Map',
    '📊 歷史數據分析': '📊 Historical Data Analysis',
    '📱 手機 App': '📱 Mobile App',
    '🔔 通知設定': '🔔 Notification Settings',

    // ===== Module 4 =====
    '🎨 視覺化設計師 — 從數據到界面': '🎨 Visual Designer — Data to Interface',
    '從上一模組出發': 'Continuing from the previous module',
    '上一模組，你從一週人流數據中發現了<strong>高峰低谷、異常突增</strong>等模式。': 'In the previous module, you discovered <strong>peaks, troughs, and abnormal spikes</strong> in weekly data.',
    '但如果直接把這些數據表格丟給同學看，他們能一眼看懂嗎？': 'But if you hand raw data tables to students, can they understand at a glance?',
    '你覺得以下哪種方式最能幫助同學快速判斷「現在該不該去圖書館」？': 'Which approach best helps students quickly decide "should I go to the library now"?',
    '🚦 紅綠燈方案': '🚦 Traffic Light Concept',
    '🗺️ 熱力圖方案': '🗺️ Heatmap Concept',
    '📊 即時儀表板方案': '📊 Real-time Dashboard Concept',
    '——把複雜數據變成紅綠燈和熱力圖，讓人一眼看懂。': '— Turn complex data into traffic lights and heatmaps at a glance.',
    '<i class="fas fa-paint-brush"></i> 優秀案例參考：真實的圖書館 App': '<i class="fas fa-paint-brush"></i> Real Library App Examples',
    '觀察以下三種真實的圖書館即時資訊界面，思考它們各用了什麼<strong>抽象策略</strong>。': 'Observe these three real library dashboards. What <strong>abstraction strategy</strong> does each use?',
    '案例 A': 'Case A',
    '案例 B': 'Case B',
    '案例 C': 'Case C',
    '<i class="fas fa-mobile-alt"></i> 動手搭建：你的圖書館監控界面': '<i class="fas fa-mobile-alt"></i> Build It: Your Library Monitoring Interface',
    '從右側組件庫選擇組件，點擊即可添加到手機畫面中。點擊已放置的組件可移除。': 'Select components from the palette. Click to add to phone screen. Click placed items to remove.',
    '<strong>必須包含：總人數、樓層擁擠度（紅/黃/綠）、建議前往時段。</strong>': '<strong>Must include: total count, floor occupancy (red/yellow/green), and recommended times.</strong>',
    '📦 組件庫': '📦 Component Library',
    '+ 點擊右側組件添加': '+ Click to add',
    '★必須': '★Required',
    '重置畫面': 'Reset Screen',
    '檢查設計': 'Check Design',
    '✅ 必要組件齊全！': '✅ All required components placed!',
    '<i class="fas fa-clipboard-check"></i> 設計自查清單': '<i class="fas fa-clipboard-check"></i> Design Self-Checklist',
    '逐一檢查你的界面設計——不只是「有沒有」，更要思考「好不好」。': 'Check your interface design — not just "is it there?" but "is it good?"',
    '是否包含了總人數、樓層擁擠度和建議時段？': 'Does it include total count, floor occupancy, and recommended times?',
    '是否用顏色語義傳達含義（紅=擁擠，綠=空閒）？': 'Does it use color semantics (red=crowded, green=free)?',
    '使用者能否在 3 秒內看懂關鍵資訊？': 'Can users grasp the key info in 3 seconds?',
    '是否避免了過多的資訊堆疊？': 'Does it avoid information overload?',
    '在手機小螢幕上，資訊是否仍然清晰？': 'On a small phone screen, is the info still clear?',
    '同學會在地鐵上單手滑手機查看，你的設計能適應嗎？': 'Students will check on the metro one-handed. Can your design handle that?',
    '功能完整': 'Feature Complete',
    '可讀性': 'Readability',
    '移動端適配': 'Mobile-Friendly',
    '<i class="fas fa-brain"></i> 反思：你做了哪些抽象？': '<i class="fas fa-brain"></i> Reflection: What Abstractions Did You Make?',
    '回想你選擇組件的過程——你<strong>保留了</strong>什麼資訊？<strong>捨棄了</strong>什麼資訊？為什麼？': 'Think back to your component choices — what info did you <strong>keep</strong>? What did you <strong>discard</strong>? Why?',
    '保留了': 'Kept',
    '捨棄了': 'Discarded',
    '保留了': 'Kept',
    '💡 提示：想想你一開始覺得只要裝個感測器就行，後來發現還需要什麼？': '💡 What made you realize a sensor alone isn\'t enough?',
    '💡 提示：分解、模式識別、抽象、算法設計——哪個讓你最有「原來如此」的感覺？': '💡 Which skill gave you the biggest "aha!" moment?',
    '💡 提示：哪個模組讓你覺得最困難？你是怎麼想通的？': '💡 Which module was hardest? How did you figure it out?',

    // ===== Module 5 =====
    '⚙️ 算法工程師 — 計數邏輯與防抖': '⚙️ Algorithm Engineer — Counting Logic & Debounce',
    '算法設計': 'Algorithm Design',
    '上一模組你設計了精確的計數算法——方向判斷、去抖過濾、人數更新，每個步驟都必須清楚有序，這就是': 'In the last module, you designed a precise counting algorithm — direction detection, debounce filtering, count updates. Every step must be clear and ordered. This is',
    '設計精確的<br>步驟序列': 'design precise<br>step sequences',
    '——把大問題切成可管理的小步驟。': '— Break big problems into manageable steps.',
    '<i class="fas fa-arrow-right-arrow-left"></i> 方向識別模擬器': '<i class="fas fa-arrow-right-arrow-left"></i> Direction Detection Simulator',
    '點擊按鈕模擬人員進出，觀察紅外線 A/B 被遮擋的順序如何決定方向。': 'Click buttons to simulate entry/exit. Observe how IR-A/B blocking order determines direction.',
    '模擬人走進': 'Simulate Entry',
    '模擬人走出': 'Simulate Exit',
    '☁️ 雲端伺服器': '☁️ Cloud Server',
    '此時計數變化': 'Count Change',
    '📋 完整進出記錄': '📋 Complete Entry/Exit Log',
    '判斷：是否先遮擋 IR-A 再遮擋 IR-B？': 'Check: Was IR-A blocked before IR-B?',
    'IR 感測器觸發': 'IR Sensor Triggered',
    '✅ 是（進入）': '✅ Yes (Enter)',
    '❌ 否（離開）': '❌ No (Exit)',
    'IR-A → IR-B = 進入 / IR-B → IR-A = 走出 + 去抖冷卻': 'IR-A → IR-B = Enter / IR-B → IR-A = Exit + Debounce Cooldown',
    '<i class="fas fa-stopwatch"></i> 消抖（去抖）挑戰': '<i class="fas fa-stopwatch"></i> Debounce Challenge',
    '調整去抖時間窗口，觀察不同閾值下的誤報和漏計。<strong>窗口太小→誤報多，窗口太大→漏計多</strong>，找到最佳平衡！': 'Adjust the debounce time window and observe false positives vs. missed counts. <strong>Small window→More false positives, Large window→More missed counts</strong> — find the sweet spot!',
    '執行測試': 'Run Test',
    '✕ 重設': '✕ Reset',
    '總通過人次': 'Total Pass-Throughs',
    '誤報次數（多算）': 'False Positives',
    '漏計次數（少算）': 'Undercount',
    '淨準確率': 'Net Accuracy',
    '<i class="fas fa-project-diagram"></i> 算法流程圖填空': '<i class="fas fa-project-diagram"></i> Algorithm Flowchart Fill-in',
    '① 點擊流程圖中的空缺位置 → ② 點擊下方選項填入。5 個空缺全部正確即可過關！<br>💡 提示：注意「去抖冷卻」應該在什麼時候執行——是處理完事件後，還沒準備好接收下一次觸發之前。': '① Click a blank slot → ② Click an option below to fill it. Fill all 5 to pass!<br>💡 The debounce cooldown happens after processing an event, before accepting the next trigger.',
    '檢查流程圖': 'Check Flowchart',
    '點擊選擇步驟…': 'Click to select step…',
    '進入模組 6 → <i class="fas fa-arrow-right"></i>': 'Go to Module 6 → <i class="fas fa-arrow-right"></i>',

    // ===== Module 6 =====
    '🏆 系統整合與反思': '🏆 Integration & Reflection',
    '從模組 1 到模組 6，': 'From Module 1 to Module 6,',
    '<i class="fas fa-road"></i> 學習旅程回顧': '<i class="fas fa-road"></i> Learning Journey Review',
    '回顧你走過的六個模組，點擊查看每個模組的核心收穫。': 'Review your journey through all 6 modules. Click to see core takeaways.',
    '核心收穫：': 'Key Takeaway: ',
    '<i class="fas fa-brain"></i> 概念測驗': '<i class="fas fa-brain"></i> Concept Quiz',
    '用這 4 題測試你對計算思維的理解，選擇最適合的答案。': 'Test your CT understanding with these 4 questions. Pick the best answer.',
    '1. 「把圖書館人流監控系統拆成採集、處理、展示三個模組」屬於哪種計算思維？': '1. Breaking the system into Collection, Processing, and Display is which CT skill?',
    '2. IR 感測器「先遮 IR-A 再遮 IR-B = 進入」這個判斷邏輯屬於哪種計算思維？': '2. "Cover IR-A then IR-B = Enter" logic is which CT skill?',
    '3. 「用紅綠燈代替具體人數來表示擁擠程度」屬於哪種計算思維？': '3. Replacing exact numbers with traffic lights is which CT skill?',
    '4. 「每天上午10-12點是高峰期」這個發現屬於哪種計算思維？': '4. "10AM-12PM is peak hour daily" is which CT skill?',
    'A. 分解': 'A. Decomposition',
    'B. 模式識別': 'B. Pattern Recognition',
    'C. 抽象': 'C. Abstraction',
    'D. 算法設計': 'D. Algorithm Design',
    'A. 模式識別': 'A. Pattern Recognition',
    'B. 分解': 'B. Decomposition',
    'C. 抽象': 'C. Abstraction',
    'A. 算法設計': 'A. Algorithm Design',
    'B. 算法設計': 'B. Algorithm Design',
    'C. 分解': 'C. Decomposition',
    'D. 模式識別': 'D. Pattern Recognition',
    'A. 抽象': 'A. Abstraction',
    'B. 分解': 'B. Decomposition',
    '提交答案': 'Submit Answer',
    '<i class="fas fa-chart-radar"></i> 自我評估': '<i class="fas fa-chart-radar"></i> Self Assessment',
    '拖動滑塊評估你對每種計算思維能力的掌握程度（0-10）。': 'Drag sliders to rate your mastery of each CT skill (0-10).',
    '📊 能力自評': '📊 Self Assessment',
    '<i class="fas fa-sticky-note"></i> 反思便簽牆': '<i class="fas fa-sticky-note"></i> Reflection Sticky Wall',
    '完成以下三個反思句子，幫助你鞏固所學。': 'Complete these 3 reflection sentences to reinforce your learning.',
    '我以前以為解決這個問題只需要 ______，現在我知道還需要 ______。': 'I used to think solving this only needed ______, now I know it also needs ______.',
    '在 ______ 環節中，我卡住了，但我通過 ______ 解決了。': 'I got stuck on ______, but I solved it by ______.',
    '我覺得計算思維中最厲害的一招是 ______，因為 ______。': 'The most powerful CT skill I\'ve learned is ______, because ______.',
    '💡 提示：想想你一開始覺得只要裝個感測器就行，後來發現還需要什麼？': '💡 You thought a sensor was enough — what else did you discover you need?',
    '💡 提示：哪個模組讓你覺得最困難？你是怎麼想通的？': '💡 Which module was hardest? How did you figure it out?',
    '💡 提示：分解、模式識別、抽象、算法設計——哪個讓你最有「原來如此」的感覺？': '💡 Which skill gave you the biggest "aha!" moment?',
    '<i class="fas fa-certificate"></i> 領取證書': '<i class="fas fa-certificate"></i> Get Certificate',
    '恭喜完成全部六個模組的學習！點擊按鈕領取你的專屬證書。': 'Congratulations on completing all 6 modules! Click to get your certificate.',
    '🎓 計算思維自學工坊': '🎓 CT Self-Study Workshop',
    '完成日期：': 'Completion Date: ',
    '已成功完成全部六個模組的學習，<br>展現了以下計算思維核心能力：': 'has successfully completed all six modules,<br>demonstrating the following CT competencies:',
    '🧩 分解': '🧩 Decomposition',
    '🔎 模式識別': '🔎 Pattern Recognition',
    '🎨 抽象': '🎨 Abstraction',
    '⚙️ 算法設計': '⚙️ Algorithm Design',
    '領取證書': 'Get Certificate',
    '<i class="fas fa-lightbulb"></i> 延伸思考：計算思維能解決其他問題嗎？': '<i class="fas fa-lightbulb"></i> Beyond: What Else Can CT Solve?',
    '你學會的計算思維不只適用於圖書館！想想還有哪些場景可以用同樣的方法？': 'Your CT skills go beyond the library! What else could you solve with this approach?',
    '學校食堂': 'School Cafeteria',
    '排隊時間預測 + 菜品推薦': 'Queue Time Prediction + Dish Recommendations',
    '巴士到站': 'Bus Arrival',
    '即時到站預測 + 擁擠度提示': 'Real-time Arrival Prediction + Crowding Alert',
    '運動場地': 'Sports Field',
    '場地使用率 + 預約系統': 'Space Usage + Booking System',
    '<i class="fas fa-file-pdf"></i> 生成學習工作單': '<i class="fas fa-file-pdf"></i> Generate Worksheet',
    '一鍵匯出你在所有模組中的互動記錄為 PDF 工作單。': 'Export all your module interactions as a PDF worksheet.',
    '下載工作單 PDF': 'Download Worksheet PDF',
    '🎉 恭喜完成全部課程！': '🎉 Congratulations! You have completed the course!',

    // ===== Knowledge Card Contents =====
    '計算思維第一站：問題定義': 'CT First Stop: Problem Definition',
    '在動手解決問題之前，最重要的是明確定義問題。\n\n好的問題定義回答三個問題：\n• 問題是什麼？— 圖書館沒座位，同學浪費時間找空位\n• 誰受到影響？— 所有使用圖書館的同學和管理員\n• 需要什麼解決方案？— 一個能即時顯示擁擠程度的系統\n\n這就像醫生看診——先問對症狀，才能開對藥方。問題定義得越清楚，後面的解決方案就越精準。\n\n計算思維的五個步驟：問題定義 → 分解 → 模式識別 → 抽象 → 算法設計，我們現在站在起點上。': 'Before solving a problem, you must first define it clearly.\n\nA good problem definition answers three questions:\n• What is the problem? — No seats in the library, wasting time searching\n• Who is affected? — All students and staff using the library\n• What solution is needed? — A system that shows real-time crowding\n\nLike a doctor — first diagnose the right symptoms, then prescribe the right medicine. The clearer the problem definition, the more precise the solution.\n\nThe five steps of CT: Problem Definition → Decomposition → Pattern Recognition → Abstraction → Algorithm Design. We stand at the starting line.',

    // ===== Toast Messages =====
    '已投票！想想身邊同學是不是也遇過 📸': 'Vote recorded! How many classmates face this too?',
    '排序已確認！看看工程師怎麼想 👇': 'Order confirmed! See how engineers think 👇',
    '已儲存 ✓': 'Saved ✓',
    '已標記完成！': 'Marked as complete!',

    // ===== Worksheet Template =====
    '學習工作單': 'Learning Worksheet',
    '同學': 'Student',
    '完成 ': 'Done ',
    '模組': 'Module',
    '解碼圖書館熱力圖 — 計算思維自學工坊': 'Decoding the Library Heatmap — CT Workshop',
    '計算思維自學工坊 — 學習工作單': 'CT Workshop — Learning Worksheet',
    '系統自動生成': 'Auto-generated',
    '🖨️ 列印工作單（另存為 PDF）': '🖨️ Print Worksheet (Save as PDF)',
    '點擊列印，在對話框中選擇「另存為 PDF」即可下載': 'Click Print and select "Save as PDF" in the dialog to download',
    '（未填寫）': '(Not filled)',
    '（未完成排序）': '(Not sorted)',
    '（未完成）': '(Not completed)',
    '（未完成配對）': '(Not matched)',
    '（未完成檢查清單）': '(Not checked)',
    '（未設計）': '(Not designed)',
    '（未完成去抖測試）': '(Not tested)',
    '模組 1 — 痛點挖掘': 'Module 1 — Pain Point Discovery',
    '模組 2 — 解構問題': 'Module 2 — Deconstruction',
    '模組 3 — 模式偵探': 'Module 3 — Pattern Detective',
    '模組 4 — 視覺化設計師': 'Module 4 — Visual Designer',
    '模組 5 — 算法工程師': 'Module 5 — Algorithm Engineer',
    '模組 6 — 系統整合與反思': 'Module 6 — Integration & Reflection',
    '問題定義': 'Problem Definition',
    '分解': 'Decomposition',
    '模式識別': 'Pattern Recognition',
    '抽象': 'Abstraction',
    '算法設計': 'Algorithm Design',
    '整合': 'Integration',
    '📊 投票：你去圖書館時遇到過幾次沒座位？': '📊 Vote: How often do you find no seats at the library?',
    '💭 思考泡泡': '💭 Thought Bubble',
    '📋 問題排序': '📋 Problem Ranking',
    '🔄 數據流排序': '🔄 Data Flow Order',
    '📦 卡片分類': '📦 Card Classification',
    '🔗 模式配對': '🔗 Pattern Matching',
    '⚠️ 異常數據判斷': '⚠️ Anomaly Detection',
    '🔮 雨天預測': '🔮 Rainy Day Prediction',
    '✅ 設計檢查清單': '✅ Design Checklist',
    '📱 手機原型設計': '📱 Phone Prototype',
    '💬 抽象反思': '💬 Abstraction Reflection',
    '⏱ 去抖測試：': '⏱ Debounce Test: ',
    '🔀 流程圖填空': '🔀 Flowchart Fill-in',
    '🧠 概念測驗': '🧠 Concept Quiz',
    '💬 反思': '💬 Reflections',
    '得分：': 'Score: ',
    '總人數': 'Total',
    '誤報': 'False Pos.',
    '漏計': 'Missed',
    '準確率': 'Accuracy',
    '正確 5/5': 'Correct 5/5',
    '分': ''
  }
};

// Build zh from en keys (zh = key itself)
I18N.zh = {};
Object.keys(I18N.en).forEach(function(k) { I18N.zh[k] = k; });

// ========== Translation functions ==========

function t(key) {
  var lang = localStorage.getItem('ct_lang') || 'en';
  var dict = I18N[lang] || I18N.en;
  if (dict[key] !== undefined) return dict[key];
  // Fallback: try regex matching for dynamic text
  if (typeof _re === 'undefined') _buildRegex();
  if (_re) return key.replace(_re, function(m) { return I18N.en[m] || m; });
  return key;
}

var _re = null;
function _buildRegex() {
  var keys = Object.keys(I18N.en).filter(function(k) { return I18N.en[k] !== k && k.length >= 2; });
  keys.sort(function(a, b) { return b.length - a.length; });
  if (keys.length === 0) return;
  var esc = keys.map(function(k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
  _re = new RegExp('(' + esc.join('|') + ')', 'g');
}

function currentLang() {
  return localStorage.getItem('ct_lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('ct_lang', lang);
}

function applyI18n(container) {
  if (currentLang() === 'zh') return;
  if (typeof _re === 'undefined') _buildRegex();
  var dict = I18N.en;
  function translateText(str) {
    if (!_re) return str;
    return str.replace(_re, function(m) { return dict[m] || m; });
  }
  var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  var node;
  while (node = walker.nextNode()) {
    var text = node.nodeValue;
    if (text.trim().length > 0 && /[\u4e00-\u9fff]/.test(text)) {
      var ws = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
      var core = ws ? ws[2] : text;
      var translated = translateText(core);
      if (translated !== core) {
        node.nodeValue = (ws ? ws[1] : '') + translated + (ws ? ws[3] : '');
      }
    }
  }
  container.querySelectorAll('[alt], [title], [placeholder]').forEach(function(el) {
    ['alt', 'title', 'placeholder'].forEach(function(attr) {
      var val = el.getAttribute(attr);
      if (val && /[\u4e00-\u9fff]/.test(val)) {
        var tval = t(val);
        if (tval !== val) el.setAttribute(attr, tval);
      }
    });
  });
}

(function() {
  if (typeof MutationObserver === 'undefined') return;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) applyI18n(node);
        else if (node.nodeType === 3 && /[\u4e00-\u9fff]/.test(node.nodeValue || '')) {
          applyI18n(node.parentNode);
        }
      });
    });
  });
  var ready = setInterval(function() {
    var app = document.getElementById('app');
    if (app) { observer.observe(app, { childList: true, subtree: true }); clearInterval(ready); }
  }, 100);
})();
