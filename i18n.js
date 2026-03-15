// 多语言配置
const translations = {
    'zh-CN': {
        // 导航栏
        'nav_home': '首页',
        'nav_products': '产品中心',
        'nav_services': '企业服务',
        'nav_news': '最新资讯',
        'nav_about': '关于我们',
        'nav_contact': '商务合作',
        
        // 页面标题
        'page_home_title': '铁狮丹尼 - 企业级鞋履供应商',
        'page_products_title': '产品中心 - 铁狮丹尼',
        'page_services_title': '企业服务 - 铁狮丹尼',
        'page_about_title': '关于我们 - 铁狮丹尼',
        'page_contact_title': '商务合作 - 铁狮丹尼',
        'page_formal_title': '正装皮鞋 - 铁狮丹尼',
        'page_casual_title': '商务休闲 - 铁狮丹尼',
        'page_casual_shoes_title': '休闲鞋 - 铁狮丹尼',
        
        // Aria标签
        'aria_search': '搜索',
        'aria_contact': '联系我们',
        
        // 搜索
        'search_placeholder': '搜索产品...',
        'search_hint': '输入关键词搜索产品',
        'search_tag_formal': '正装',
        'search_tag_business': '商务',
        'search_tag_casual': '休闲',
        'search_tag_oxford': '牛津',
        'search_tag_loafer': '乐福',
        'search_tag_custom': '定制',
        
        // Hero 区域
        'hero_title': '专业鞋履供应<br>企业级解决方案',
        'hero_subtitle': '为零售商、品牌方提供高品质鞋履OEM/ODM服务',
        'hero_btn_products': '查看产品',
        'hero_btn_contact': '企业服务',
        
        // 产品系列
        'section_products': '产品系列',
        'section_products_subtitle': '品类齐全 · 支持定制',
        'products_subtitle': '精选鞋履 · 品质保证',
        'view_more': '了解更多',
        'back_products': '返回产品中心',
        
        // 产品分类标题
        'new_arrivals': '新品推荐',
        'classic_series': '经典系列',
        
        // 老钱风介绍
        'old_money_title': '老钱风韵 · 历久弥新',
        'old_money_desc1': '真正的优雅，从不需要声张。',
        'old_money_desc2': '摒弃繁复的装饰，回归材质本真的触感与匠心的工艺。每一双鞋履，都是时光的沉淀。',
        'old_money_desc3': 'SPERONI 商务休闲系列，甄选欧洲优质皮革，以百年制鞋工艺，为您缔造低调而卓然的气质。',
        'feature_quality': '顶级皮革',
        'feature_craft': '匠心工艺',
        'feature_timeless': '历久弥新',
        'feature_lowkey': '隽永经典',
        
        // 产品中心分类
        'formal_title': '正装皮鞋',
        'formal_subtitle': '牛津鞋 · 德比鞋 · 孟克鞋',
        'formal_desc': '牛津鞋 · 德比鞋 · 孟克鞋',
        'casual_title': '商务休闲',
        'casual_subtitle': '乐福鞋 · 豆豆鞋 · 马衔扣',
        'casual_desc': '乐福鞋 · 豆豆鞋 · 马衔扣',
        'casual_shoes_title': '休闲鞋',
        'casual_shoes_subtitle': '运动休闲 · 帆布鞋 · 板鞋',
        'casual_shoes_desc': '运动休闲 · 帆布鞋 · 板鞋',
        
        // 正装皮鞋产品
        'formal_1_name': '经典黑色牛津',
        'formal_1_desc': '意大利进口牛皮 · 固特异工艺',
        'formal_2_name': '棕色孟克鞋',
        'formal_2_desc': '头层牛皮 · 银扣装饰',
        'formal_3_name': '深棕德比鞋',
        'formal_3_desc': '手工缝制 · 经典款型',
        'formal_4_name': '酒红色牛津',
        'formal_4_desc': '高端麂皮 · 特殊定制',
        
        // 商务休闲产品
        'casual_1_name': '绒面乐福鞋',
        'casual_1_desc': '优质麂皮 · 马衔扣设计',
        'casual_2_name': '棕色豆豆鞋',
        'casual_2_desc': '头层牛皮 · 舒适柔软',
        'casual_3_name': '黑色乐福鞋',
        'casual_3_desc': '光面皮革 · 经典款式',
        'casual_4_name': '金属扣乐福',
        'casual_4_desc': '精品材质 · 手工制作',
        
        // 休闲鞋产品
        'casual_shoes_1_name': '黑色切尔西靴',
        'casual_shoes_1_desc': '光面皮革 · 拉链设计',
        'casual_shoes_2_name': '运动休闲鞋',
        'casual_shoes_2_desc': '透气网面 · 舒适缓震',
        'casual_shoes_3_name': '经典帆布鞋',
        'casual_shoes_3_desc': '纯棉帆布 · 简约设计',
        'casual_shoes_4_name': '白色板鞋',
        'casual_shoes_4_desc': '百搭款式 · 时尚轻便',
        
        'category_all': '全部产品',
        'cta_title_products': '需要定制产品？',
        'cta_desc_products': '我们支持OEM/ODM定制服务，来样定制、来图定制、品牌定制',
        'cta_btn_products': '联系我们',
        'category_formal': '正装鞋系列',
        'category_formal_desc': '牛津鞋 · 德比鞋 · 孟克鞋',
        'category_business': '商务休闲系列',
        'category_business_desc': '乐福鞋 · 豆豆鞋 · 马衔扣鞋',
        'category_boots': '靴类系列',
        'category_boots_desc': '切尔西靴 · 工装靴 · 马丁靴',
        'category_sports': '运动休闲系列',
        'category_sports_desc': '休闲鞋 · 慢跑鞋 · 健步鞋',
        
        // 热门推荐
        'section_featured': '热门推荐',
        'section_featured_subtitle': '热销款式 · 品质保证',
        'product_1_name': '经典黑色牛津',
        'product_1_desc': '意大利进口牛皮 · 固特异工艺',
        'product_2_name': '棕色孟克鞋',
        'product_2_desc': '头层牛皮 · 银扣装饰',
        'product_3_name': '绒面乐福鞋',
        'product_3_desc': '优质麂皮 · 马衔扣设计',
        'product_4_name': '黑色切尔西靴',
        'product_4_desc': '光面皮革 · 拉链设计',
        'price_inquiry': '批发价询价',
        'tag_hot': '企业热销',
        'tag_new': '新品推荐',
        'tag_discount': '批量优惠',
        
        // 企业服务
        'section_services': '企业服务',
        'section_services_subtitle': '专业高效 · 全方位支持',
        'cta_title_services': '需要我们的服务？',
        'cta_desc_services': '专业团队为您服务，期待与您合作',
        'cta_btn_services': '联系我们',
        'service_oem_title': 'OEM定制生产',
        'service_oem_desc': '根据客户需求，提供来样定制、来图定制服务，专业团队一对一跟进',
        'service_odm_title': 'ODM设计开发',
        'service_odm_desc': '拥有专业设计团队，可提供从设计到生产的一站式解决方案',
        'service_logistics_title': '全球物流支持',
        'service_logistics_desc': '全球物流网络，覆盖主要国家和地区，快速响应国际订单需求',
        'service_quality_title': '质量保证体系',
        'service_quality_desc': '意大利奢侈品质量标准，欧洲皮革协会认证标准，精湛工艺保证',
        
        // 关于我们
        'section_about': '关于我们',
        'about_title': '关于我们',
        'cta_title_about': '期待与您合作',
        'cta_desc_about': '专业团队为您服务，欢迎咨询洽谈',
        'cta_btn_about': '联系我们',
        'about_desc': '铁狮丹尼(SPERONI)来自享誉世界的制鞋国度——意大利。传承百年的品牌精髓,坚持以最精美的设计创造超值的品质,以其卓尔不群的独特风格,深受欧洲广大成功男士的青睐。2019年被评为"中国奢侈品品牌"荣誉称号。自1980年作为个人奢侈品鞋类工作室创立,到2000年转化为公司经营,为B端和C端客户提供供货服务,历史悠久。铁狮丹尼在沿袭意大利鞋的高贵品质基础上,结合本土独特的人文背景,将风格演绎得更加精致、简约、流畅,深受高尚消费群体的推崇。作为奢侈品牌,铁狮丹尼在制鞋领域已经有接近百年的历史,而且多年来一直追求更高品质,将精致、高雅的风格演绎到极致。虽产品没有高端奢侈品那么丰富,但却更加的专业,将鞋子做到业界最好是它们的目标。',
        'stat_1980': '1980',
        'stat_1980_label': '品牌创立',
        'stat_2000': '2000',
        'stat_2000_label': '公司经营',
        'stat_italy': 'IT',
        'stat_italy_label': '品牌起源',
        'stat_2019': '2019',
        'stat_2019_label': '奢侈品品牌',
        
        // 商务合作
        'section_contact': '商务合作',
        'section_contact_subtitle': '专业服务 · 期待合作',
        'contact_phone': '商务电话',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': '公司地址',
        'contact_address_value': '中国广东省广州市越秀区站西路37号鸿运大厦东楼1310',
        'contact_email': '商务邮箱',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // 最新资讯
        'section_news': '最新资讯',
        'section_news_subtitle': '行业动态 · 品牌资讯',
        'news_tag_brand': '品牌动态',
        'news_tag_industry': '行业资讯',
        'news_tag_company': '企业新闻',
        'news_read_more': '阅读全文 →',
        'page_news_title': '最新资讯 - 铁狮丹尼',
        'back_to_home': '返回首页',
        
        // 联系页面
        'section_consultation': '在线咨询',
        'section_consultation_subtitle': '填写下方信息，我们会尽快与您联系',
        'form_company': '公司名称',
        'form_contact': '联系人',
        'form_phone': '联系电话',
        'form_email': '电子邮箱',
        'form_service': '合作类型',
        'form_quantity': '预计数量',
        'form_message': '需求描述',
        'form_company_placeholder': '请输入公司名称',
        'form_contact_placeholder': '请输入联系人姓名',
        'form_phone_placeholder': '请输入联系电话',
        'form_email_placeholder': '请输入电子邮箱',
        'form_message_placeholder': '请详细描述您的需求，如产品类型、数量、定制要求等',
        'form_service_select': '请选择合作类型',
        'form_quantity_select': '请选择预计数量',
        'form_service_oem': 'OEM定制',
        'form_service_odm': 'ODM设计',
        'form_service_wholesale': '批发采购',
        'form_service_other': '其他合作',
        'form_quantity_small': '100-500双',
        'form_quantity_medium': '500-1000双',
        'form_quantity_large': '1000-5000双',
        'form_quantity_xlarge': '5000双以上',
        'form_submit': '提交咨询',
        
        // 页脚
        'footer_brand': '专业鞋履供应商 · 企业级解决方案',
        'footer_products': '产品中心',
        'footer_services': '企业服务',
        'footer_about': '关于我们',
        'footer_formal': '正装皮鞋',
        'footer_business': '商务休闲',
        'footer_boots': '靴类系列',
        'footer_sports': '运动休闲',
        'footer_casual_shoes': '休闲鞋',
        'footer_oem': 'OEM定制',
        'footer_odm': 'ODM设计',
        'footer_logistics': '仓储物流',
        'footer_quality': '质量保证',
        'footer_company': '公司介绍',
        'footer_capacity': '生产能力',
        'footer_cases': '合作案例',
        'footer_contact': '联系方式',
        'footer_copyright': '&copy; 2026 铁狮丹尼. All rights reserved. 专业鞋履制造 · 期待与您合作',
        
        // 模态框
        'modal_title': '产品名称',
        'modal_price': '批发价询价',
        'modal_moq': '最小起订量',
        'modal_moq_value': '100双起订',
        'modal_custom': '定制服务',
        'modal_custom_value': '支持来样定制、来图定制、品牌定制',
        'modal_contact': '企业服务',
        'modal_more': '了解更多'
    },
    
    'zh-TW': {
        // 導航欄
        'nav_home': '首頁',
        'nav_products': '產品中心',
        'nav_services': '企業服務',
        'nav_news': '最新資訊',
        'nav_about': '關於我們',
        'nav_contact': '商務合作',
        
        // 頁面標題
        'page_home_title': '鐵獅丹尼 - 企業級鞋履供應商',
        'page_products_title': '產品中心 - 鐵獅丹尼',
        'page_services_title': '企業服務 - 鐵獅丹尼',
        'page_about_title': '關於我們 - 鐵獅丹尼',
        'page_contact_title': '商務合作 - 鐵獅丹尼',
        'page_formal_title': '正裝皮鞋 - 鐵獅丹尼',
        'page_casual_title': '商務休閒 - 鐵獅丹尼',
        'page_casual_shoes_title': '休閒鞋 - 鐵獅丹尼',
        
        // Aria標籤
        'aria_search': '搜尋',
        'aria_contact': '聯繫我們',
        
        // 搜尋
        'search_placeholder': '搜尋產品...',
        'search_hint': '輸入關鍵詞搜尋產品',
        'search_tag_formal': '正裝',
        'search_tag_business': '商務',
        'search_tag_casual': '休閒',
        'search_tag_oxford': '牛津',
        'search_tag_loafer': '樂福',
        'search_tag_custom': '定制',
        
        // Hero 區域
        'hero_title': '專業鞋履供應<br>企業級解決方案',
        'hero_subtitle': '為零售商、品牌方提供高品質鞋履OEM/ODM服務',
        'hero_btn_products': '查看產品',
        'hero_btn_contact': '企業服務',
        
        // 產品系列
        'section_products': '產品系列',
        'section_products_subtitle': '品類齊全 · 支持定制',
        'products_subtitle': '精選鞋履 · 品質保證',
        'view_more': '了解更多',
        'back_products': '返回產品中心',
        
        // 產品分類標題
        'new_arrivals': '新品推薦',
        'classic_series': '經典系列',
        
        // 老錢風介紹
        'old_money_title': '老錢風韻 · 歷久彌新',
        'old_money_desc1': '真正的優雅，從不需要張揚。',
        'old_money_desc2': '摒棄繁複的裝飾，回歸材質本真的觸感與匠心的工藝。每一雙鞋履，都是時光的沉澱。',
        'old_money_desc3': 'SPERONI 商務休閒系列，甄選歐洲優質皮革，以百年製鞋工藝，為您締造低調而卓然的氣質。',
        'feature_quality': '頂級皮革',
        'feature_craft': '匠心工藝',
        'feature_timeless': '歷久彌新',
        'feature_lowkey': '雋永經典',
        
        // 產品中心分類
        'formal_title': '正裝皮鞋',
        'formal_subtitle': '牛津鞋 · 德比鞋 · 孟克鞋',
        'formal_desc': '牛津鞋 · 德比鞋 · 孟克鞋',
        'casual_title': '商務休閒',
        'casual_subtitle': '樂福鞋 · 豆豆鞋 · 馬銜扣',
        'casual_desc': '樂福鞋 · 豆豆鞋 · 馬銜扣',
        'casual_shoes_title': '休閒鞋',
        'casual_shoes_subtitle': '運動休閒 · 帆布鞋 · 板鞋',
        'casual_shoes_desc': '運動休閒 · 帆布鞋 · 板鞋',
        
        // 正裝皮鞋產品
        'formal_1_name': '經典黑色牛津',
        'formal_1_desc': '意大利進口牛皮 · 固特異工藝',
        'formal_2_name': '棕色孟克鞋',
        'formal_2_desc': '頭層牛皮 · 銀扣裝飾',
        'formal_3_name': '深棕德比鞋',
        'formal_3_desc': '手工縫製 · 經典型號',
        'formal_4_name': '酒紅色牛津',
        'formal_4_desc': '高端麂皮 · 特殊定制',
        
        // 商務休閒產品
        'casual_1_name': '絨面樂福鞋',
        'casual_1_desc': '優質麂皮 · 馬銜扣設計',
        'casual_2_name': '棕色豆豆鞋',
        'casual_2_desc': '頭層牛皮 · 舒適柔軟',
        'casual_3_name': '黑色樂福鞋',
        'casual_3_desc': '光面皮革 · 經典款式',
        'casual_4_name': '金屬扣樂福',
        'casual_4_desc': '精品材質 · 手工製作',
        
        // 休閒鞋產品
        'casual_shoes_1_name': '黑色切爾西靴',
        'casual_shoes_1_desc': '光面皮革 · 拉鏈設計',
        'casual_shoes_2_name': '運動休閒鞋',
        'casual_shoes_2_desc': '透氣網面 · 舒適緩震',
        'casual_shoes_3_name': '經典帆布鞋',
        'casual_shoes_3_desc': '純棉帆布 · 簡約設計',
        'casual_shoes_4_name': '白色板鞋',
        'casual_shoes_4_desc': '百搭款式 · 時尚輕便',
        
        'category_all': '全部產品',
        'cta_title_products': '需要定制產品？',
        'cta_desc_products': '我們支持OEM/ODM定制服務，來樣定制、來圖定制、品牌定制',
        'cta_btn_products': '聯繫我們',
        'category_formal': '正裝鞋系列',
        'category_formal_desc': '牛津鞋 · 德比鞋 · 孟克鞋',
        'category_business': '商務休閒系列',
        'category_business_desc': '樂福鞋 · 豆豆鞋 · 馬銜扣鞋',
        'category_boots': '靴類系列',
        'category_boots_desc': '切爾西靴 · 工裝靴 · 馬丁靴',
        'category_sports': '運動休閒系列',
        'category_sports_desc': '休閒鞋 · 慢跑鞋 · 健步鞋',
        
        // 熱門推薦
        'section_featured': '熱門推薦',
        'section_featured_subtitle': '熱銷款式 · 品質保證',
        'product_1_name': '經典黑色牛津',
        'product_1_desc': '意大利進口牛皮 · 固特異工藝',
        'product_2_name': '棕色孟克鞋',
        'product_2_desc': '頭層牛皮 · 銀扣裝飾',
        'product_3_name': '絨面樂福鞋',
        'product_3_desc': '優質麂皮 · 馬銜扣設計',
        'product_4_name': '黑色切爾西靴',
        'product_4_desc': '光面皮革 · 拉鏈設計',
        'price_inquiry': '批發價詢價',
        'tag_hot': '企業熱銷',
        'tag_new': '新品推薦',
        'tag_discount': '批量優惠',
        
        // 企業服務
        'section_services': '企業服務',
        'section_services_subtitle': '專業高效 · 全方位支持',
        'cta_title_services': '需要我們的服務？',
        'cta_desc_services': '專業團隊為您服務，期待與您合作',
        'cta_btn_services': '聯繫我們',
        'service_oem_title': 'OEM定制生產',
        'service_oem_desc': '根據客戶需求，提供來樣定制、來圖定制服務，專業團隊一對一跟進',
        'service_odm_title': 'ODM設計開發',
        'service_odm_desc': '擁有專業設計團隊，可提供從設計到生產的一站式解決方案',
        'service_logistics_title': '全球物流支持',
        'service_logistics_desc': '全球物流網絡，覆蓋主要國家和地區，快速響應國際訂單需求',
        'service_quality_title': '質量保證體系',
        'service_quality_desc': '意大利奢侈品質量標準，歐洲皮革協會認證標準，精湛工藝保證',
        
        // 關於我們
        'section_about': '關於我們',
        'about_title': '關於我們',
        'cta_title_about': '期待與您合作',
        'cta_desc_about': '專業團隊為您服務，歡迎咨詢洽談',
        'cta_btn_about': '聯繫我們',
        'about_desc': '鐵獅丹尼(SPERONI)來自享譽世界的製鞋國度——意大利。傳承百年的品牌精髓,堅持以最精美的設計創造超值的品質,以其卓爾不群的獨特風格,深受歐洲廣大成功男士的青睞。2019年獲評為"中國奢侈品品牌"榮譽稱號。自1980年作為個人奢侈品鞋類工作室創立,到2000年轉化為公司經營,為B端和C端客戶提供供貨服務,歷史悠久。鐵獅丹尼在沿襲意大利鞋的高貴品質基礎上,結合本土獨特的人文背景,將風格演繹得更加精緻、簡約、流暢,深受高尚消費群體的推崇。',
        'stat_1980': '1980',
        'stat_1980_label': '品牌創立',
        'stat_2000': '2000',
        'stat_2000_label': '公司經營',
        'stat_italy': 'IT',
        'stat_italy_label': '品牌起源',
        'stat_2019': '2019',
        'stat_2019_label': '奢侈品品牌',
        
        // 商務合作
        'section_contact': '商務合作',
        'section_contact_subtitle': '專業服務 · 期待合作',
        'contact_phone': '商務電話',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': '公司地址',
        'contact_address_value': '中國廣東省廣州市越秀區站西路37號鴻運大廈東樓1310',
        'contact_email': '商務郵箱',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // 最新資訊
        'section_news': '最新資訊',
        'section_news_subtitle': '行業動態 · 品牌資訊',
        'news_tag_brand': '品牌動態',
        'news_tag_industry': '行業資訊',
        'news_tag_company': '企業新聞',
        'news_read_more': '閱讀全文 →',
        'page_news_title': '最新資訊 - 鐵獅丹尼',
        'back_to_home': '返回首頁',
        
        // 聯繫頁面
        'section_consultation': '在線咨詢',
        'section_consultation_subtitle': '填寫下方信息，我們會盡快與您聯繫',
        'form_company': '公司名稱',
        'form_contact': '聯繫人',
        'form_phone': '聯繫電話',
        'form_email': '電子郵箱',
        'form_service': '合作類型',
        'form_quantity': '預計數量',
        'form_message': '需求描述',
        'form_company_placeholder': '請輸入公司名稱',
        'form_contact_placeholder': '請輸入聯繫人姓名',
        'form_phone_placeholder': '請輸入聯繫電話',
        'form_email_placeholder': '請輸入電子郵箱',
        'form_message_placeholder': '請詳細描述您的需求，如產品類型、數量、定製要求等',
        'form_service_select': '請選擇合作類型',
        'form_quantity_select': '請選擇預計數量',
        'form_service_oem': 'OEM定製',
        'form_service_odm': 'ODM設計',
        'form_service_wholesale': '批發採購',
        'form_service_other': '其他合作',
        'form_quantity_small': '100-500雙',
        'form_quantity_medium': '500-1000雙',
        'form_quantity_large': '1000-5000雙',
        'form_quantity_xlarge': '5000雙以上',
        'form_submit': '提交咨詢',
        
        // 頁腳
        'footer_brand': '專業鞋履供應商 · 企業級解決方案',
        'footer_products': '產品中心',
        'footer_services': '企業服務',
        'footer_about': '關於我們',
        'footer_formal': '正裝皮鞋',
        'footer_business': '商務休閒',
        'footer_boots': '靴類系列',
        'footer_sports': '運動休閒',
        'footer_casual_shoes': '休閒鞋',
        'footer_oem': 'OEM定制',
        'footer_odm': 'ODM設計',
        'footer_logistics': '倉儲物流',
        'footer_quality': '質量保證',
        'footer_company': '公司介紹',
        'footer_capacity': '生產能力',
        'footer_cases': '合作案例',
        'footer_contact': '聯繫方式',
        'footer_copyright': '&copy; 2026 铁狮丹尼. All rights reserved. 專業鞋履製造 · 期待與您合作',
        
        // 模態框
        'modal_title': '產品名稱',
        'modal_price': '批發價詢價',
        'modal_moq': '最小起訂量',
        'modal_moq_value': '100雙起訂',
        'modal_custom': '定制服務',
        'modal_custom_value': '支持來樣定制、來圖定制、品牌定制',
        'modal_contact': '聯繫商務',
        'modal_more': '了解更多'
    },
    
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_products': 'Products',
        'nav_services': 'Services',
        'nav_news': 'News',
        'nav_about': 'About',
        'nav_contact': 'Contact',
        
        // Page Title
        'page_home_title': 'SPERONI - Premium Footwear Supplier',
        'page_products_title': 'Products - SPERONI',
        'page_services_title': 'Services - SPERONI',
        'page_about_title': 'About Us - SPERONI',
        'page_contact_title': 'Contact - SPERONI',
        'page_formal_title': 'Formal Shoes - SPERONI',
        'page_casual_title': 'Business Casual - SPERONI',
        'page_casual_shoes_title': 'Casual Shoes - SPERONI',
        
        // Aria Labels
        'aria_search': 'Search',
        'aria_contact': 'Contact Us',
        
        // Search
        'search_placeholder': 'Search products...',
        'search_hint': 'Enter keywords to search products',
        'search_tag_formal': 'Formal',
        'search_tag_business': 'Business',
        'search_tag_casual': 'Casual',
        'search_tag_oxford': 'Oxford',
        'search_tag_loafer': 'Loafer',
        'search_tag_custom': 'Custom',
        
        // Hero Section
        'hero_title': 'Premium Footwear<br>Enterprise Solutions',
        'hero_subtitle': 'High-quality OEM/ODM services for retailers and brands',
        'hero_btn_products': 'View Products',
        'hero_btn_contact': 'Enterprise Services',
        
        // Product Collection
        'section_products': 'Product Collection',
        'section_products_subtitle': 'Complete Range · Customization Available',
        'products_subtitle': 'Premium Footwear · Quality Guaranteed',
        'view_more': 'Learn More',
        'back_products': 'Back to Products',
        
        // Product Section Titles
        'new_arrivals': 'New Arrivals',
        'classic_series': 'Classic Series',
        
        // Old Money Style Introduction
        'old_money_title': 'Timeless Elegance',
        'old_money_desc1': 'True elegance speaks for itself.',
        'old_money_desc2': 'Beyond ornamentation lies the essence of fine materials and masterful craftsmanship. Each pair embodies the passage of time.',
        'old_money_desc3': 'The SPERONI Business Casual Collection, crafted from premium European leather with a century of shoemaking heritage, embodies understated sophistication.',
        'feature_quality': 'Premium Leather',
        'feature_craft': 'Master Craft',
        'feature_timeless': 'Timeless',
        'feature_lowkey': 'Enduring Classic',
        
        // Product Categories
        'formal_title': 'Formal Shoes',
        'formal_subtitle': 'Oxford · Derby · Monk Strap',
        'formal_desc': 'Oxford · Derby · Monk Strap',
        'casual_title': 'Business Casual',
        'casual_subtitle': 'Loafers · Penny Loafers · Horsebit',
        'casual_desc': 'Loafers · Penny Loafers · Horsebit',
        'casual_shoes_title': 'Casual Shoes',
        'casual_shoes_subtitle': 'Sports · Canvas · Sneakers',
        'casual_shoes_desc': 'Sports · Canvas · Sneakers',
        
        // Formal Shoes Products
        'formal_1_name': 'Classic Black Oxford',
        'formal_1_desc': 'Italian Cowhide · Goodyear Construction',
        'formal_2_name': 'Brown Monk Strap',
        'formal_2_desc': 'Top-layer Cowhide · Silver Buckle',
        'formal_3_name': 'Dark Brown Derby',
        'formal_3_desc': 'Hand-stitched · Classic Style',
        'formal_4_name': 'Burgundy Oxford',
        'formal_4_desc': 'Premium Suede · Custom Available',
        
        // Business Casual Products
        'casual_1_name': 'Suede Loafer',
        'casual_1_desc': 'Premium Suede · Horsebit Design',
        'casual_2_name': 'Brown Penny Loafer',
        'casual_2_desc': 'Top-layer Cowhide · Comfortable',
        'casual_3_name': 'Black Loafer',
        'casual_3_desc': 'Patent Leather · Classic Style',
        'casual_4_name': 'Metal Bit Loafer',
        'casual_4_desc': 'Premium Material · Handmade',
        
        // Casual Shoes Products
        'casual_shoes_1_name': 'Black Chelsea Boots',
        'casual_shoes_1_desc': 'Patent Leather · Zip Design',
        'casual_shoes_2_name': 'Sport Casual Shoes',
        'casual_shoes_2_desc': 'Breathable Mesh · Comfortable',
        'casual_shoes_3_name': 'Classic Canvas Shoes',
        'casual_shoes_3_desc': 'Pure Cotton Canvas · Simple Design',
        'casual_shoes_4_name': 'White Sneakers',
        'casual_shoes_4_desc': 'Versatile · Stylish & Lightweight',
        
        'category_all': 'All Products',
        'cta_title_products': 'Need Custom Products?',
        'cta_desc_products': 'We support OEM/ODM customization services, including sample-based, design-based, and brand customization',
        'cta_btn_products': 'Contact Us',
        'category_formal': 'Formal Collection',
        'category_formal_desc': 'Oxford · Derby · Monk Strap',
        'category_business': 'Business Casual',
        'category_business_desc': 'Loafers · Boat Shoes · Horsebit',
        'category_boots': 'Boots Collection',
        'category_boots_desc': 'Chelsea Boots · Work Boots · Martin Boots',
        'category_sports': 'Sports & Leisure',
        'category_sports_desc': 'Casual Shoes · Running · Walking Shoes',
        
        // Featured Products
        'section_featured': 'Featured',
        'section_featured_subtitle': 'Best Sellers · Quality Guaranteed',
        'product_1_name': 'Classic Black Oxford',
        'product_1_desc': 'Italian Cowhide · Goodyear Construction',
        'product_2_name': 'Brown Monk Strap',
        'product_2_desc': 'Top-layer Cowhide · Silver Buckle',
        'product_3_name': 'Suede Loafer',
        'product_3_desc': 'Premium Suede · Horsebit Design',
        'product_4_name': 'Black Chelsea Boots',
        'product_4_desc': 'Patent Leather · Zip Design',
        'price_inquiry': 'Wholesale Price Inquiry',
        'tag_hot': 'Hot Seller',
        'tag_new': 'New Arrival',
        'tag_discount': 'Bulk Discount',
        
        // Services
        'section_services': 'Enterprise Services',
        'section_services_subtitle': 'Professional · Comprehensive Support',
        'cta_title_services': 'Need Our Services?',
        'cta_desc_services': 'Professional team ready to serve you, looking forward to cooperation',
        'cta_btn_services': 'Contact Us',
        'service_oem_title': 'OEM Manufacturing',
        'service_oem_desc': 'Custom production based on samples or designs with one-on-one professional support',
        'service_odm_title': 'ODM Development',
        'service_odm_desc': 'Professional design team providing complete solutions from design to production',
        'service_logistics_title': 'Global Logistics Support',
        'service_logistics_desc': 'Global logistics network covering major countries and regions, rapid response to international orders',
        'service_quality_title': 'Quality Assurance',
        'service_quality_desc': 'Italian luxury quality standards, European Leather Association certification, exquisite craftsmanship',
        
        // About Us
        'section_about': 'About Us',
        'about_title': 'About Us',
        'cta_title_about': 'Looking Forward to Cooperation',
        'cta_desc_about': 'Professional team ready to serve you, welcome to consult',
        'cta_btn_about': 'Contact Us',
        'about_desc': 'SPERONI comes from Italy, the world-renowned shoemaking country. Inheriting a century-old brand essence, it adheres to creating extraordinary quality with exquisite designs, and is favored by successful men across Europe with its unique and outstanding style. In 2019, it was awarded the honorary title of "China Luxury Brand". Founded in 1980 as a personal luxury footwear workshop and transformed into a company operation in 2000, it has a long history of providing supply services for both B2B and B2C customers. Building upon the noble quality of Italian shoes, SPERONI combines local cultural background to interpret a more refined, minimalist, and smooth style, deeply appreciated by high-end consumer groups.',
        'stat_1980': '1980',
        'stat_1980_label': 'Brand Founded',
        'stat_2000': '2000',
        'stat_2000_label': 'Company Operation',
        'stat_italy': 'Italy',
        'stat_italy_label': 'Brand Origin',
        'stat_2019': '2019',
        'stat_2019_label': 'Luxury Brand',
        
        // Contact
        'section_contact': 'Business Cooperation',
        'section_contact_subtitle': 'Professional Service · Looking Forward to Cooperation',
        'contact_phone': 'Business Phone',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': 'Company Address',
        'contact_address_value': 'No.37 Zhanxi Road, Yuexiu District, Guangzhou, Guangdong Province, China (East Building 1310, Hongyun Building)',
        'contact_email': 'Business Email',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // News
        'section_news': 'Latest News',
        'section_news_subtitle': 'Industry Updates · Brand News',
        'news_tag_brand': 'Brand News',
        'news_tag_industry': 'Industry News',
        'news_tag_company': 'Company News',
        'news_read_more': 'Read More →',
        'page_news_title': 'Latest News - SPERONI',
        'back_to_home': 'Back to Home',
        
        // Contact Page
        'section_consultation': 'Online Consultation',
        'section_consultation_subtitle': 'Fill in the information below and we will contact you soon',
        'form_company': 'Company Name',
        'form_contact': 'Contact Person',
        'form_phone': 'Phone Number',
        'form_email': 'Email',
        'form_service': 'Service Type',
        'form_quantity': 'Estimated Quantity',
        'form_message': 'Message',
        'form_company_placeholder': 'Enter company name',
        'form_contact_placeholder': 'Enter contact person name',
        'form_phone_placeholder': 'Enter phone number',
        'form_email_placeholder': 'Enter email address',
        'form_message_placeholder': 'Please describe your requirements in detail, such as product type, quantity, customization requirements, etc.',
        'form_service_select': 'Select service type',
        'form_quantity_select': 'Select estimated quantity',
        'form_service_oem': 'OEM Manufacturing',
        'form_service_odm': 'ODM Design',
        'form_service_wholesale': 'Wholesale',
        'form_service_other': 'Other',
        'form_quantity_small': '100-500 pairs',
        'form_quantity_medium': '500-1000 pairs',
        'form_quantity_large': '1000-5000 pairs',
        'form_quantity_xlarge': '5000+ pairs',
        'form_submit': 'Submit Inquiry',
        
        // Footer
        'footer_brand': 'Premium Footwear Supplier · Enterprise Solutions',
        'footer_products': 'Products',
        'footer_services': 'Services',
        'footer_about': 'About',
        'footer_formal': 'Formal Shoes',
        'footer_business': 'Business Casual',
        'footer_boots': 'Boots Collection',
        'footer_sports': 'Sports & Leisure',
        'footer_casual_shoes': 'Casual Shoes',
        'footer_oem': 'OEM',
        'footer_odm': 'ODM',
        'footer_logistics': 'Logistics',
        'footer_quality': 'Quality',
        'footer_company': 'Company',
        'footer_capacity': 'Capacity',
        'footer_cases': 'Cases',
        'footer_contact': 'Contact',
        'footer_copyright': '&copy; 2026 铁狮丹尼. All rights reserved. Professional Footwear Manufacturing · Looking Forward to Cooperation',
        
        // Modal
        'modal_title': 'Product Name',
        'modal_price': 'Wholesale Price Inquiry',
        'modal_moq': 'Minimum Order Quantity',
        'modal_moq_value': '100 pairs MOQ',
        'modal_custom': 'Customization',
        'modal_custom_value': 'Sample-based, design-based, and brand customization supported',
        'modal_contact': 'Contact Us',
        'modal_more': 'Learn More'
    },
    
    'ru': {
        // Навигация
        'nav_home': 'Главная',
        'nav_products': 'Продукция',
        'nav_services': 'Услуги',
        'nav_news': 'Новости',
        'nav_about': 'О нас',
        'nav_contact': 'Контакты',
        
        // Заголовок страницы
        'page_home_title': 'Сперони - Поставщик премиальной обуви',
        'page_products_title': 'Продукция - Сперони',
        'page_services_title': 'Услуги - Сперони',
        'page_about_title': 'О нас - Сперони',
        'page_contact_title': 'Контакты - Сперони',
        'page_formal_title': 'Классическая обувь - Сперони',
        'page_casual_title': 'Бизнес-кэжуал - Сперони',
        'page_casual_shoes_title': 'Повседневная обувь - Сперони',
        
        // Aria метки
        'aria_search': 'Поиск',
        'aria_contact': 'Связаться',
        
        // Поиск
        'search_placeholder': 'Поиск продуктов...',
        'search_hint': 'Введите ключевые слова для поиска',
        'search_tag_formal': 'Классика',
        'search_tag_business': 'Бизнес',
        'search_tag_casual': 'Повседневная',
        'search_tag_oxford': 'Оксфорд',
        'search_tag_loafer': 'Лофер',
        'search_tag_custom': 'Кастомизация',
        
        // Hero секция
        'hero_title': 'Премиальная обувь<br>Корпоративные решения',
        'hero_subtitle': 'Услуги OEM/ODM высокого качества для ритейлеров и брендов',
        'hero_btn_products': 'Продукция',
        'hero_btn_contact': 'Корпоративные услуги',
        
        // Коллекция
        'section_products': 'Коллекция',
        'section_products_subtitle': 'Полный ассортимент · Кастомизация',
        'products_subtitle': 'Премиальная обувь · Гарантия качества',
        'view_more': 'Узнать больше',
        'back_products': 'Вернуться к продуктам',
        
        // Названия разделов продуктов
        'new_arrivals': 'Новинки',
        'classic_series': 'Классическая серия',
        
        // Введение в стиль Old Money
        'old_money_title': 'Вневременная элегантность',
        'old_money_desc1': 'Истинная элегантность говорит сама за себя.',
        'old_money_desc2': 'За пределами украшений — суть fine-материалов и мастерство ремесла. Каждая пара воплощает течение времени.',
        'old_money_desc3': 'Коллекция SPERONI Business Casual, изготовленная из премиальной европейской кожи с вековым наследием, воплощает утончённую сдержанность.',
        'feature_quality': 'Премиальная кожа',
        'feature_craft': 'Мастерство',
        'feature_timeless': 'Вневременной',
        'feature_lowkey': 'Классика',
        
        // Категории продуктов
        'formal_title': 'Классическая обувь',
        'formal_subtitle': 'Оксфорд · Дерби · Монкстрап',
        'formal_desc': 'Оксфорд · Дерби · Монкстрап',
        'casual_title': 'Бизнес-кэжуал',
        'casual_subtitle': 'Лоферы · Мокасины · С пряжкой',
        'casual_desc': 'Лоферы · Мокасины · С пряжкой',
        'casual_shoes_title': 'Повседневная обувь',
        'casual_shoes_subtitle': 'Спорт · Canvas · Кеды',
        'casual_shoes_desc': 'Спорт · Canvas · Кеды',
        
        'category_all': 'Все продукты',
        'cta_title_products': 'Нужна кастомизация?',
        'cta_desc_products': 'Мы поддерживаем услуги OEM/ODM, включая кастомизацию по образцам, чертежам и бренду',
        'cta_btn_products': 'Связаться',
        'category_formal': 'Официальная обувь',
        'category_formal_desc': 'Оксфорды · Дерби · Монкстрапы',
        'category_business': 'Бизнес-кэжуал',
        'category_business_desc': 'Лоферы · Мокасины · С пряжкой',
        'category_boots': 'Сапоги',
        'category_boots_desc': 'Челси · Рабочие · Мартинсы',
        'category_sports': 'Спорт и отдых',
        'category_sports_desc': 'Повседневная · Беговая · Прогулочная',
        
        // Популярные продукты
        'section_featured': 'Популярное',
        'section_featured_subtitle': 'Бестселлеры · Гарантия качества',
        'product_1_name': 'Классический черный оксфорд',
        'product_1_desc': 'Итальянская кожа · Крой Гудайер',
        'product_2_name': 'Коричневый монкстрап',
        'product_2_desc': 'Топовая кожа · Серебряная пряжка',
        'product_3_name': 'Лофер из замши',
        'product_3_desc': 'Премиальная замша · Конская пряжка',
        'product_4_name': 'Черные сапоги челси',
        'product_4_desc': 'Лаковая кожа · Молния',
        'price_inquiry': 'Запрос оптовой цены',
        'tag_hot': 'Популярный',
        'tag_new': 'Новинка',
        'tag_discount': 'Оптовая скидка',
        
        // Услуги
        'section_services': 'Корпоративные услуги',
        'section_services_subtitle': 'Профессионально · Всесторонняя поддержка',
        'cta_title_services': 'Нужны наши услуги?',
        'cta_desc_services': 'Профессиональная команда готова вам помочь, ждем сотрудничества',
        'cta_btn_services': 'Связаться',
        'service_oem_title': 'OEM производство',
        'service_oem_desc': 'Кастомизация по образцам или чертежам с персональной поддержкой',
        'service_odm_title': 'ODM разработка',
        'service_odm_desc': 'Профессиональная команда дизайнеров, полные решения от дизайна до производства',
        'service_logistics_title': 'Глобальная логистика',
        'service_logistics_desc': 'Глобальная логистическая сеть, покрытие основных стран и регионов, быстрый отклик на международные заказы',
        'service_quality_title': 'Система качества',
        'service_quality_desc': 'Стандарты качества итальянских люксовых брендов, сертификация Европейской ассоциации кожевников, искусное мастерство',
        
        // О нас
        'section_about': 'О нас',
        'about_title': 'О нас',
        'cta_title_about': 'Ждем сотрудничества',
        'cta_desc_about': 'Профессиональная команда готова вам помочь, обращайтесь за консультацией',
        'cta_btn_about': 'Связаться',
        'about_desc': 'SPERONI происходит из Италии — страны с всемирно известной обувной промышленностью. Наследя вековые традиции бренда, компания создает превосходное качество с изысканными дизайнами и пользуется любовью успешных мужчин по всей Европе благодаря своему уникальному стилю. В 2019 году была удостоена почетного звания "Китайский люксовый бренд". Основанная в 1980 году как персональная мастерская роскошной обуви и преобразованная в компанию в 2000 году, она имеет долгую историю поставок для B2B и B2C клиентов. На базе благородного качества итальянской обуви SPERONI сочетает местный культурный контекст, создавая более утонченный, минималистичный и плавный стиль, пользуясь признанием потребителей люксового сегмента.',
        'stat_1980': '1980',
        'stat_1980_label': 'Основание бренда',
        'stat_2000': '2000',
        'stat_2000_label': 'Корпоративная работа',
        'stat_italy': 'Италия',
        'stat_italy_label': 'Происхождение бренда',
        'stat_2019': '2019',
        'stat_2019_label': 'Люксовый бренд',
        
        // Контакты
        'section_contact': 'Бизнес-сотрудничество',
        'section_contact_subtitle': 'Профессиональный сервис · Сотрудничество',
        'contact_phone': 'Телефон',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': 'Адрес',
        'contact_address_value': 'Китай, провинция Гуандун, город Гуанчжоу, район Юэсю, дорога Чжаньси, дом 37, здание Хунъюнь (восточное здание, офис 1310)',
        'contact_email': 'Email',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // Новости
        'section_news': 'Последние новости',
        'section_news_subtitle': 'Отраслевые новости · Новости бренда',
        'news_tag_brand': 'Новости бренда',
        'news_tag_industry': 'Отраслевые новости',
        'news_tag_company': 'Корпоративные новости',
        'news_read_more': 'Читать далее →',
        'page_news_title': 'Новости - Сперони',
        'back_to_home': 'На главную',
        
        // Страница контактов
        'section_consultation': 'Онлайн консультация',
        'section_consultation_subtitle': 'Заполните информацию ниже, и мы свяжемся с вами',
        'form_company': 'Название компании',
        'form_contact': 'Контактное лицо',
        'form_phone': 'Номер телефона',
        'form_email': 'Электронная почта',
        'form_service': 'Тип услуги',
        'form_quantity': 'Ориентировочное количество',
        'form_message': 'Описание запроса',
        'form_company_placeholder': 'Введите название компании',
        'form_contact_placeholder': 'Введите имя контакта',
        'form_phone_placeholder': 'Введите номер телефона',
        'form_email_placeholder': 'Введите email',
        'form_message_placeholder': 'Пожалуйста, опишите ваши требования: тип продукта, количество, требования к кастомизации и т.д.',
        'form_service_select': 'Выберите тип услуги',
        'form_quantity_select': 'Выберите ориентировочное количество',
        'form_service_oem': 'OEM производство',
        'form_service_odm': 'ODM разработка',
        'form_service_wholesale': 'Оптовая закупка',
        'form_service_other': 'Другое',
        'form_quantity_small': '100-500 пар',
        'form_quantity_medium': '500-1000 пар',
        'form_quantity_large': '1000-5000 пар',
        'form_quantity_xlarge': '5000+ пар',
        'form_submit': 'Отправить запрос',
        
        // Футер
        'footer_brand': 'Поставщик премиальной обуви · Корпоративные решения',
        'footer_products': 'Продукция',
        'footer_services': 'Услуги',
        'footer_about': 'О нас',
        'footer_formal': 'Классическая обувь',
        'footer_business': 'Бизнес-кэжуал',
        'footer_boots': 'Сапоги',
        'footer_sports': 'Спорт и отдых',
        'footer_casual_shoes': 'Повседневная обувь',
        'footer_oem': 'OEM',
        'footer_odm': 'ODM',
        'footer_logistics': 'Логистика',
        'footer_quality': 'Качество',
        'footer_company': 'Компания',
        'footer_capacity': 'Мощности',
        'footer_cases': 'Кейсы',
        'footer_contact': 'Контакты',
        'footer_copyright': '&copy; 2026 铁狮丹尼. Все права защищены. Профессиональное производство обуви · Сотрудничество',
        
        // Модальное окно
        'modal_title': 'Название продукта',
        'modal_price': 'Запрос оптовой цены',
        'modal_moq': 'Минимальный заказ',
        'modal_moq_value': 'от 100 пар',
        'modal_custom': 'Кастомизация',
        'modal_custom_value': 'По образцам, чертежам, брендовая кастомизация',
        'modal_contact': 'Связаться',
        'modal_more': 'Подробнее'
    },
    
    'ug': {
        // يولغا سىپىر
        'nav_home': 'باش بەت',
        'nav_products': 'مەھسۇلات',
        'nav_services': 'مۇلازىمەت',
        'nav_news': 'يېڭىلىقلار',
        'nav_about': 'ھەققىدە',
        'nav_contact': 'ئالاقە',
        
        // بەت ماۋزۇسى
        'page_home_title': 'تىشىداني - كارخانا ئاياق تەمىنلىگۈچى',
        'page_products_title': 'مەھسۇلات - تىشىداني',
        'page_services_title': 'مۇلازىمەت - تىشىداني',
        'page_about_title': 'ھەققىدە - تىشىداني',
        'page_contact_title': 'ئالاقە - تىشىداني',
        'page_formal_title': 'رەسمىي ئاياق - تىشىداني',
        'page_casual_title': 'ئىشتى-كەيپىي - تىشىداني',
        'page_casual_shoes_title': 'كەسپىي ئاياق - تىشىداني',
        
        // Aria بەلگىسى
        'aria_search': 'ئىزدە',
        'aria_contact': 'ئالاقە قىلىش',
        
        // ئىزدەش
        'search_placeholder': 'مەھسۇلات ئىزدە...',
        'search_hint': 'ئىزدەش ئۈچۈن ئاچقۇچلۇق سۆز كىرگۈزۈڭ',
        'search_tag_formal': 'رەسمىي',
        'search_tag_business': 'ئىشتى',
        'search_tag_casual': 'كەسپىي',
        'search_tag_oxford': 'ئوكسفورد',
        'search_tag_loafer': 'لوفر',
        'search_tag_custom': 'ئىختىيارىي',
        
        // Hero قىسمى
        'hero_title': 'ئالىي سۈپەتلىك ئاياق<br>كارخانا يېشىمى',
        'hero_subtitle': 'سودىگەر ۋە براندلارغا يۇقىرى سۈپەتلىك OEM/ODM مۇلازىمىتى',
        'hero_btn_products': 'مەھسۇلات',
        'hero_btn_contact': 'كارخانا مۇلازىمەتلىرى',
        
        // مەھسۇلات توپلىمى
        'section_products': 'مەھسۇلات توپلىمى',
        'section_products_subtitle': 'تۈرلۈك مەھسۇلات · ئىختىيارىي ئىشلەش',
        'products_subtitle': 'ئالىي سۈپەتلىك ئاياق · سۈپەت كاپالەت',
        'view_more': 'تېخىمۇ كۆپ',
        'back_products': 'مەھسۇلاتقا قايتىش',
        
        // مەھسۇلات بۆلەكلىرى
        'new_arrivals': 'يېڭى مەھسۇلاتلار',
        'classic_series': 'كلاسسىك قاتارلىق',
        
        // ئۆلچەملىك ئىلگىرىلىمەن سەنئەت
        'old_money_title': 'ۋاقىتنىڭ گۈزەللىكى',
        'old_money_desc1': 'ھەقىقىي ئىلگىرىلىمەنلىك ئۆزى سۆزلەيدۇ.',
        'old_money_desc2': 'زىننەتتىن باشقا، ياخشى ماتېرىياللار ۋە ustal تېخنىسىنىڭ مەنىسى بار. ھەر بىر جوت پەقەت ۋاقىتنىڭ ئۆتۈشىنى بە embodiment قىلىدۇ.',
        'old_money_desc3': 'SPERONI ئىقتىسادىي رەھىملىك توپلىما، ياۋروپا يۇقىرى سۈپەتلىك تېرنىسى ۋە بىر ئەسىرلىك كىيىم ياساش مىراسى بىلەن، ئاددىي ھەۋەسلىكنى بە incarnation قىلىدۇ.',
        'feature_quality': 'يۇقىرى سۈپەتلىك تېرنا',
        'feature_craft': 'ustal تېخنىسى',
        'feature_timeless': 'ۋاقىتنىڭ',
        'feature_lowkey': 'كلاسسىك',
        
        // مەھسۇلات تۈرلىرى
        'formal_title': 'رەسمىي ئاياق',
        'formal_subtitle': 'ئوكسفورد · دېربى · موك',
        'formal_desc': 'ئوكسفورد · دېربى · موك',
        'casual_title': 'ئىشتى-كەيپىي',
        'casual_subtitle': 'لوفر · موكاسىن · ئات ئۇرۇقلىق',
        'casual_desc': 'لوفر · موكاسىن · ئات ئۇرۇقلىق',
        'casual_shoes_title': 'كەسپىي ئاياق',
        'casual_shoes_subtitle': 'تەنتەربىيە · كەندى · سنىكېر',
        'casual_shoes_desc': 'تەنتەربىيە · كەندى · سنىكېر',
        
        'category_all': 'ھەممە مەھسۇلات',
        'cta_title_products': 'ئىختىيارىي مەھسۇلات كېرەكمۇ؟',
        'cta_desc_products': 'بىز OEM/ODM ئىختىيارىي ئىشلەش مۇلازىمىتىنى قوللايمىز، ئەلۋەت، لايىھە ۋە براند ئىختىيارىي ئىشلەشنى قوللايدۇ',
        'cta_btn_products': 'ئالاقە',
        'category_formal': 'رەسمىي ئاياق',
        'category_formal_desc': 'ئوكسفورد · دېربى · موك',
        'category_business': 'ئىشتى-كەيپىي',
        'category_business_desc': 'لوفر · موكاسىن · ئات ئۇرۇقلىق',
        'category_boots': 'ئۇزۇن ئاياق',
        'category_boots_desc': 'چېلسى · خىزمەت ئايىقى · مارتىن',
        'category_sports': 'تەنتەربىيە ۋە ئارام',
        'category_sports_desc': 'ئادەتتىكى · يۈگۈرۈش · سەيلىنىش',
        
        // ئىسسىق مەھسۇلات
        'section_featured': 'ئىسسىق مەھسۇلات',
        'section_featured_subtitle': 'كۆپ سېتىلىدىغان · سۈپەت كاپالەتلىك',
        'product_1_name': 'كلاسسىك قارا ئوكسفورد',
        'product_1_desc': 'ئىتالىيە تېرىسى · گودېيەر تېخنىكىسى',
        'product_2_name': 'قوڭۇر موك ئايىقى',
        'product_2_desc': 'يۇقىرى قاتلام تېرە · كۈمۈش تاياقچە',
        'product_3_name': 'پوستې لوفر ئايىقى',
        'product_3_desc': 'يۇقىرى سۈپەتلىك پوستې · ئات ئۇرۇقلىق',
        'product_4_name': 'قارا چېلسى ئۇزۇن ئايىقى',
        'product_4_desc': 'پارقىق تېرە · سىمىت',
        'price_inquiry': 'توپ سېتىلىش باھاسى',
        'tag_hot': 'ئىسسىق سېتىلىدىغان',
        'tag_new': 'يېڭى مەھسۇلات',
        'tag_discount': 'توپۇم سېتىلىش ئەمەلىيىتى',
        
        // مۇلازىمەت
        'section_services': 'كارخانا مۇلازىمىتى',
        'section_services_subtitle': 'كەسپىي · تولۇق قوللاش',
        'cta_title_services': 'مۇلازىمەتلىرىمىز كېرەكمۇ؟',
        'cta_desc_services': 'كەسپىي گۇرۇپپىسى سىزگە مۇلازىمەت قىلىشقا تەييار، ھەمكارلىقنى ئۈمىد قىلىمىز',
        'cta_btn_services': 'ئالاقە',
        'service_oem_title': 'OEM ئىشلەپ چىقىرىش',
        'service_oem_desc': 'خېرىدار ئېھتىياجى بويىچە ئەلۋەت ئىشلەش، كەسپىي گۇرۇپپا بىر بىرلەپ ئەگىشىش',
        'service_odm_title': 'ODM لايىھەلەش',
        'service_odm_desc': 'كەسپىي لايىھىلەش گۇرۇپپىسى، لايىھىدىن ئىشلەپ چىقىرىشقىچە بولغان تولۇق يېشىم',
        'service_logistics_title': 'دۇنياۋى لوجىستىكا قوللىشى',
        'service_logistics_desc': 'دۇنياۋى لوجىستىكا تورى، ئاساسلىق دۆلەت ۋە رايونلارنى قاپلاش، خەلقئارالىق تەرتىپنى تېز ئىنكاس قايتۇرۇش',
        'service_quality_title': 'سۈپەت كاپالەت سىستېمىسى',
        'service_quality_desc': 'ئىتالىيە لۇكس سۈپەت ئۆلچىمى، ياۋروپا تېرە ئىشلەپ چىقىرىش جەمئىيىتى ئىسپاتى، قالتىس ھۈنەر',
        
        // بىز ھەققىدە
        'section_about': 'بىز ھەققىدە',
        'about_title': 'بىز ھەققىدە',
        'cta_title_about': 'ھەمكارلىقنى ئۈمىد قىلىمىز',
        'cta_desc_about': 'كەسپىي گۇرۇپپىسى سىزگە مۇلازىمەت قىلىشقا تەييار، مەسلىھەت سوراشقا خۇش كەپلىز',
        'cta_btn_about': 'ئالاقە',
        'about_desc': 'تىشىدانى (SPERONI) دۇنياغا داڭلىق ئاياق ئىشلەپ چىقىرىش دۆلىتى ئىتالىيەدىن كەلگەن. ئەسىرلىك براند روھىغا ۋارىسلىق قىلىپ، ئەڭ گۈزەل لايىھە ئارقىلىق ئالاھىدە سۈپەت يارىتىپ، ياۋروپادىكى مۇۋەپپەقىيەت قازانغان ئەرلەرنىڭ ئامراقىغا ئايلانغان. 2019-يىلى "جۇڭگو لۇكس براندى" شەرەپ نامىغا ئېرىشكەن. 1980-يىلى شەخسىي لۇكس ئاياق ئىشلەپ چىقىرىش ئىشخانىسى قۇرۇلغان، 2000-يىلى كارخانا مەشغۇلاتىغا ئايلانغان، B دەرىجىلىك ۋە C دەرىجىلىك خېرىدارلارغا تەمىنلەش مۇلازىمىتى قىلىپ، ئۇزۇن تارىخقا ئىگە. تىشىدانى ئىتالىيە ئايىقىنىڭ ئالىي سۈپىتى ئاساسىدا، يەرلىك ئۆزگىچە مەدەنىيەت ئارقا كۆرىنى بىرلەشتۈرۈپ، ئۇسلۇبىنى تېخىمۇ رەڭدار، ئاددىي ۋە راۋرۇش ئىپادىلەپ، يۇقىرى دەرىجىلىك ئىستېمالچىلارنىڭ ياخشى باھاسىغا ئېرىشكەن.',
        'stat_1980': '1980',
        'stat_1980_label': 'براند قۇرۇلغان',
        'stat_2000': '2000',
        'stat_2000_label': 'كارخانا مەشغۇلاتى',
        'stat_italy': 'ئىتالىيە',
        'stat_italy_label': 'براند مەنبەسى',
        
        // ئالاقە
        'section_contact': 'كارخانا ھەمكارلىقى',
        'section_contact_subtitle': 'كەسپىي مۇلازىمەت · ھەمكارلىقنى ئۈمىد قىلىمىز',
        'contact_phone': 'كارخانا تېلېفونى',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': 'كارخانا ئادرېسى',
        'contact_address_value': 'جۇڭگو گۇاڭدۇڭ ئۆلكىسى گۇاڭجۇ شەھىرى يۈېشىيۈ رايونى سىتاتسىيە يولى 37-نومۇر خۇڭيۈن بىناسى شەرقىي بىنا 1310-ئىشخانا',
        'contact_email': 'كارخانا ئېلېكترونلۇق خەتى',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // يېڭىلىقلار
        'section_news': 'ئەڭ يېڭىلىقلار',
        'section_news_subtitle': 'سودا يېڭىلىقلىرى · براند يېڭىلىقلىرى',
        'news_tag_brand': 'براند يېڭىلىقى',
        'news_tag_industry': 'سودا يېڭىلىقى',
        'news_tag_company': 'كارخانا يېڭىلىقى',
        'news_read_more': 'تېخىمۇ كۆپ →',
        'page_news_title': 'ئەڭ يېڭىلىقلار - تىشىداني',
        'back_to_home': 'باش بەتگە قايتىش',
        
        // ئالاقە بېتى
        'section_consultation': ' توردا مەسلىھەت',
        'section_consultation_subtitle': 'ئەڭۋايتىدىكى ئۇچۇرلارنى تولۇقلاڭ، بىز سىز بىلەن بالدۇر ئالاقە قىلىشىمىز',
        'form_company': 'شىركەت ئىسمى',
        'form_contact': 'ئالاقە كىشىسى',
        'form_phone': 'ئالاقە تېلېفونى',
        'form_email': 'ئېلېكترونلۇق خەت',
        'form_service': 'ھەمكارلىق تىپى',
        'form_quantity': 'مۆلچەرلىك سەنئە',
        'form_message': 'ئېھتىياج چۈشەندۈرۈشى',
        'form_company_placeholder': 'شىركەت ئىسمىنى كىرگۈزۈڭ',
        'form_contact_placeholder': 'ئالاقە كىشىنىڭ ئىسمىنى كىرگۈزۈڭ',
        'form_phone_placeholder': 'ئالاقە تېلېفونىنى كىرگۈزۈڭ',
        'form_email_placeholder': 'ئېلېكترونلۇق خەتنى كىرگۈزۈڭ',
        'form_message_placeholder': 'ئېھتىياجىڭىزنى تەپسىلاتيچە يېزىڭ، مەھسۇلات تىپى، مۆلچەرلىك سەنئە، ئىختىيارىي ئىشلەش تەلەپلىرى قاتارلىقلارنى ئۆز ئىچىگە ئالىدۇ',
        'form_service_select': 'ھەمكارلىق تىپىنى تاللاڭ',
        'form_quantity_select': 'مۆلچەرلىك سەنئەنى تاللاڭ',
        'form_service_oem': 'OEM ئىشلەپ چىقىرىش',
        'form_service_odm': 'ODM لايىھەلەش',
        'form_service_wholesale': 'توپ سېتىۋېلىش',
        'form_service_other': 'باشقا ھەمكارلىق',
        'form_quantity_small': '100-500 جۈپ',
        'form_quantity_medium': '500-1000 جۈپ',
        'form_quantity_large': '1000-5000 جۈپ',
        'form_quantity_xlarge': '5000 جۈپتىن يۇقىرى',
        'form_submit': 'مەسلىھەت يوللاش',
        
        // تەگ ئىستونى
        'footer_brand': 'ئالىي سۈپەتلىك ئاياق تەمىنلىگۈچى · كارخانا يېشىمى',
        'footer_products': 'مەھسۇلات',
        'footer_services': 'مۇلازىمەت',
        'footer_about': 'بىز ھەققىدە',
        'footer_formal': 'رەسمىي ئاياق',
        'footer_business': 'ئىشتى-كەيپىي',
        'footer_boots': 'ئۇزۇن ئاياق',
        'footer_sports': 'تەنتەربىيە ۋە ئارام',
        'footer_casual_shoes': 'كەسپىي ئاياق',
        'footer_oem': 'OEM',
        'footer_odm': 'ODM',
        'footer_logistics': 'لوجىستىكا',
        'footer_quality': 'سۈپەت',
        'footer_company': 'شىركەت',
        'footer_capacity': 'ئىشلەپ چىقىرىش',
        'footer_cases': 'كېسەل',
        'footer_contact': 'ئالاقە',
        'footer_copyright': '&copy; 2026 铁狮丹尼. بارلىق ھوقۇقلار قوغدىلىدۇ. كەسپىي ئاياق ئىشلەپ چىقىرىش · ھەمكارلىقنى ئۈمىد قىلىمىز',
        
        // مودېل كۆزنەك
        'modal_title': 'مەھسۇلات نامى',
        'modal_price': 'توپ سېتىلىش باھاسى',
        'modal_moq': 'ئەڭ كىچىك تەرتىپ',
        'modal_moq_value': '100 جۈپتىن باشلاش',
        'modal_custom': 'ئىختىيارىي ئىشلەش',
        'modal_custom_value': 'ئەلۋەت، لايىھە ۋە براند ئىختىيارىي ئىشلەشنى قوللاش',
        'modal_contact': 'ئالاقە',
        'modal_more': 'تېخىمۇ كۆپ'
    },
    
    'ar': {
        // التنقل
        'nav_home': 'الرئيسية',
        'nav_products': 'المنتجات',
        'nav_services': 'الخدمات',
        'nav_news': 'الأخبار',
        'nav_about': 'من نحن',
        'nav_contact': 'اتصل بنا',
        
        // عنوان الصفحة
        'page_home_title': 'سبروني - مورد أحذية فاخرة',
        'page_products_title': 'المنتجات - سبروني',
        'page_services_title': 'الخدمات - سبروني',
        'page_about_title': 'من نحن - سبروني',
        'page_contact_title': 'اتصل بنا - سبروني',
        'page_formal_title': 'أحذية رسمية - سبروني',
        'page_casual_title': 'أعمال كاجوال - سبروني',
        'page_casual_shoes_title': 'أحذية رياضية - سبروني',
        
        // تسميات aria
        'aria_search': 'بحث',
        'aria_contact': 'اتصل بنا',
        
        // البحث
        'search_placeholder': 'البحث عن منتجات...',
        'search_hint': 'أدخل كلمات مفتاحية للبحث',
        'search_tag_formal': 'رسمي',
        'search_tag_business': 'أعمال',
        'search_tag_casual': 'رياضي',
        'search_tag_oxford': 'أوكسفورد',
        'search_tag_loafer': 'لوفر',
        'search_tag_custom': 'تخصيص',
        
        // قسم البطل
        'hero_title': 'أحذية فاخرة<br>حلول للشركات',
        'hero_subtitle': 'خدمات OEM/ODM عالية الجودة لتجار التجزئة والعلامات التجارية',
        'hero_btn_products': 'المنتجات',
        'hero_btn_contact': 'خدمات المؤسسات',
        
        // مجموعة المنتجات
        'section_products': 'مجموعة المنتجات',
        'section_products_subtitle': 'تشكيلة كاملة · تخصيص متاح',
        'products_subtitle': 'أحذية فاخرة · ضمان الجودة',
        'view_more': 'اعرف المزيد',
        'back_products': 'العودة للمنتجات',
        
        // عناوين أقسام المنتجات
        'new_arrivals': 'منتجات جديدة',
        'classic_series': 'السلسلة الكلاسيكية',
        
        // مقدمة عن نمط Old Money
        'old_money_title': 'الأناقة الخالدة',
        'old_money_desc1': 'الأناقة الحقيقية تتحدث عن نفسها.',
        'old_money_desc2': 'ما وراء الزخرفة تكمن جوهر المواد الممتازة والحرفية البالغة. كل زوج يجسد مرور الوقت.',
        'old_musiness_desc3': 'مجموعة SPERONI للعمل غير الرسمي، المصنوع من الجلود الأوروبية الممتازة مع تراث قرن من صناعة الأحذية، تجسد الرقي المتواضع.',
        'feature_quality': 'جلد ممتاز',
        'feature_craft': 'حرفة',
        'feature_timeless': 'خالد',
        'feature_lowkey': 'كلاسيكي',
        
        // فئات المنتجات
        'formal_title': 'أحذية رسمية',
        'formal_subtitle': 'أوكسفورد · ديربي · مونكستراب',
        'formal_desc': 'أوكسفورد · ديربي · مونكستراب',
        'casual_title': 'أعمال كاجوال',
        'casual_subtitle': 'لوفر · موكاسين · حذاء بحري',
        'casual_desc': 'لوفر · موكاسين · حذاء بحري',
        'casual_shoes_title': 'أحذية رياضية',
        'casual_shoes_subtitle': 'رياضة · قماش · أحذية رياضية',
        'casual_shoes_desc': 'رياضة · قماش · أحذية رياضية',
        
        'category_all': 'جميع المنتجات',
        'cta_title_products': 'هل تحتاج منتجات مخصصة؟',
        'cta_desc_products': 'ندعم خدمات OEM/ODM المخصصة، بما في ذلك التخصيص بناءً على العينات والتصاميم والعلامات التجارية',
        'cta_btn_products': 'اتصل بنا',
        'category_formal': 'أحذية رسمية',
        'category_formal_desc': 'أوكسفورد · ديربي · مونكستراب',
        'category_business': 'أعمال كاجوال',
        'category_business_desc': 'لوفر · موكاسين · حذاء بحري',
        'category_boots': 'أحذية طويلة',
        'category_boots_desc': 'تشيلسي · عمل · مارتن',
        'category_sports': 'رياضة وترفيه',
        'category_sports_desc': 'يومي · جري · مشي',
        
        // المنتجات المميزة
        'section_featured': 'المميزة',
        'section_featured_subtitle': 'الأكثر مبيعاً · ضمان الجودة',
        'product_1_name': 'أوكسفورد أسود كلاسيكي',
        'product_1_desc': 'جلد بقري إيطالي · طريقة غوديير',
        'product_2_name': 'مونكستراب بني',
        'product_2_desc': 'جلد علوي · مشبك فضي',
        'product_3_name': 'لوفر من الجلود',
        'product_3_desc': 'سويدي عالي الجودة · تصميم مشبك حصان',
        'product_4_name': 'تشيلسي أسود',
        'product_4_desc': 'جلد مصقول · سحاب',
        'price_inquiry': 'طلب سعر الجملة',
        'tag_hot': 'الأكثر مبيعاً',
        'tag_new': 'جديد',
        'tag_discount': 'خصم الجملة',
        
        // الخدمات
        'section_services': 'خدمات المؤسسات',
        'section_services_subtitle': 'احترافي · دعم شامل',
        'cta_title_services': 'هل تحتاج خدماتنا؟',
        'cta_desc_services': 'فريق احترافي جاهز لخدمتك، نتطلع للتعاون معك',
        'cta_btn_services': 'اتصل بنا',
        'service_oem_title': 'تصنيع OEM',
        'service_oem_desc': 'تخصيص بناءً على العينات أو التصاميم مع دعم احترافي فردي',
        'service_odm_title': 'تطوير ODM',
        'service_odm_desc': 'فريق تصميم احترافي يوفر حلولاً كاملة من التصميم إلى الإنتاج',
        'service_logistics_title': 'دعم اللوجستيات العالمية',
        'service_logistics_desc': 'شبكة لوجستية عالمية تغطي الدول والمناطق الرئيسية، استجابة سريعة للطلبات الدولية',
        'service_quality_title': 'نظام ضمان الجودة',
        'service_quality_desc': 'معايير جودة العلامات التجارية الفاخرة الإيطالية، شهادة جمعية الجلود الأوروبية، حرفية رائعة',
        
        // من نحن
        'section_about': 'من نحن',
        'about_title': 'من نحن',
        'cta_title_about': 'نتطلع للتعاون معك',
        'cta_desc_about': 'فريق احترافي جاهز لخدمتك، مرحبا بكم في الاستشارة',
        'cta_btn_about': 'اتصل بنا',
        'about_desc': 'سبروني (SPERONI) من إيطاليا، البلد المشهور عالمياً بصناعة الأحذية. ورثت جوهر العلامة التجارية لأكثر من قرن، وتلتزم بإنشاء جودة استثنائية بتصاميم أنيقة، وتحظى بتقدير الرجال الناجحين في جميع أنحاء أوروبا بأسلوبها الفريد والمتميز. في عام 2019، حصلت على لقب "علامة تجارية فاخرة صينية". تأسست في عام 1980 كورشة أحذية فاخرة شخصية وتحولت إلى شركة في عام 2000، ولديها تاريخ طويل في تقديم خدمات التوريد لعملاء B2B وB2C. وبناءً على الجودة النبيلة للأحذية الإيطالية، تجمع سبروني السياق الثقافي المحلي لتقديم أسلوب أكثر دقة وبساطة وسلاسة، وتحظى بتقدير جماعات المستهلكين الفاخرة.',
        'stat_1980': '1980',
        'stat_1980_label': 'تأسيس العلامة',
        'stat_2000': '2000',
        'stat_2000_label': 'عمل الشركة',
        'stat_italy': 'إيطاليا',
        'stat_italy_label': 'أصل العلامة',
        
        // الاتصال
        'section_contact': 'التعاون التجاري',
        'section_contact_subtitle': 'خدمة احترافية · نتطلع للتعاون',
        'contact_phone': 'هاتف الأعمال',
        'contact_phone_value': '+86（020）36552999',
        'contact_address': 'العنوان',
        'contact_address_value': 'الصين، مقاطعة غوانغدونغ، مدينة غوانزو، منطقة يويشيو، طريق تشان شي رقم 37، مبنى هونغ يون (المبنى الشرقي 1310)',
        'contact_email': 'البريد الإلكتروني',
        'contact_email_value': 'tieshidanni@gmail.com',
        
        // الأخبار
        'section_news': 'أحدث الأخبار',
        'section_news_subtitle': 'أخبار الصناعة · أخبار العلامة',
        'news_tag_brand': 'أخبار العلامة',
        'news_tag_industry': 'أخبار الصناعة',
        'news_tag_company': 'أخبار الشركة',
        'news_read_more': 'اقرأ المزيد →',
        'page_news_title': 'أحدث الأخبار - سبروني',
        'back_to_home': 'العودة للرئيسية',
        
        // صفحة الاتصال
        'section_consultation': 'استشارة عبر الإنترنت',
        'section_consultation_subtitle': 'املأ المعلومات أدناه وسنتواصل معك قريباً',
        'form_company': 'اسم الشركة',
        'form_contact': 'جهة الاتصال',
        'form_phone': 'رقم الهاتف',
        'form_email': 'البريد الإلكتروني',
        'form_service': 'نوع الخدمة',
        'form_quantity': 'الكمية المقدرة',
        'form_message': 'وصف المتطلبات',
        'form_company_placeholder': 'أدخل اسم الشركة',
        'form_contact_placeholder': 'أدخل اسم جهة الاتصال',
        'form_phone_placeholder': 'أدخل رقم الهاتف',
        'form_email_placeholder': 'أدخل البريد الإلكتروني',
        'form_message_placeholder': 'يرجى وصف متطلباتك بالتفصيل، مثل نوع المنتج والكمية ومتطلبات التخصيص وما إلى ذلك',
        'form_service_select': 'اختر نوع الخدمة',
        'form_quantity_select': 'اختر الكمية المقدرة',
        'form_service_oem': 'تصنيع OEM',
        'form_service_odm': 'تطوير ODM',
        'form_service_wholesale': 'جملة',
        'form_service_other': 'أخرى',
        'form_quantity_small': '100-500 زوج',
        'form_quantity_medium': '500-1000 زوج',
        'form_quantity_large': '1000-5000 زوج',
        'form_quantity_xlarge': 'أكثر من 5000 زوج',
        'form_submit': 'إرسال الاستشارة',
        
        // التذييل
        'footer_brand': 'مورد أحذية فاخرة · حلول للمؤسسات',
        'footer_products': 'المنتجات',
        'footer_services': 'الخدمات',
        'footer_about': 'من نحن',
        'footer_formal': 'أحذية رسمية',
        'footer_business': 'أعمال كاجوال',
        'footer_boots': 'أحذية طويلة',
        'footer_sports': 'رياضة وترفيه',
        'footer_casual_shoes': 'أحذية رياضية',
        'footer_oem': 'OEM',
        'footer_odm': 'ODM',
        'footer_logistics': 'اللوجستيات',
        'footer_quality': 'الجودة',
        'footer_company': 'الشركة',
        'footer_capacity': 'القدرات',
        'footer_cases': 'الحالات',
        'footer_contact': 'اتصل بنا',
        'footer_copyright': '&copy; 2026 铁狮丹尼. جميع الحقوق محفوظة. تصنيع أحذية احترافي · نتطلع للتعاون',
        
        // النافذة المنبثقة
        'modal_title': 'اسم المنتج',
        'modal_price': 'طلب سعر الجملة',
        'modal_moq': 'الحد الأدنى للطلب',
        'modal_moq_value': '100 زوج كحد أدنى',
        'modal_custom': 'التخصيص',
        'modal_custom_value': 'التخصيص بناءً على العينات والتصاميم والعلامات التجارية',
        'modal_contact': 'اتصل بنا',
        'modal_more': 'المزيد'
    }
};

// 语言列表
const languages = {
    'zh-CN': { name: '简体中文', flag: '🇨🇳', dir: 'ltr' },
    'zh-TW': { name: '繁體中文', flag: '🇭🇰', dir: 'ltr' },
    'en': { name: 'English', flag: '🇬🇧', dir: 'ltr' },
    'ru': { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    'ug': { name: 'ئۇيغۇرچە', flag: '🇨🇳', dir: 'rtl' },
    'ar': { name: 'العربية', flag: '🇸🇦', dir: 'rtl' }
};

// 当前语言
let currentLang = localStorage.getItem('siteLanguage') || 'zh-CN';

// 设置语言
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLanguage', lang);
    updatePageLanguage();
    updateLanguageSelector();
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang].dir;
}

// 更新页面语言
function updatePageLanguage() {
    // 处理普通元素 (包括 select option)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    // 处理 aria-label
    const ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaElements.forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('aria-label', translations[currentLang][key]);
        }
    });
    
    // 处理 placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
    
    // 处理页面标题
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        const key = titleElement.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            document.title = translations[currentLang][key];
        }
    }
}

// 更新语言选择器
function updateLanguageSelector() {
    const dropdown = document.getElementById('languageDropdown');
    const currentLangDisplay = document.getElementById('currentLang');
    
    if (currentLangDisplay) {
        const langInfo = languages[currentLang];
        currentLangDisplay.innerHTML = `${langInfo.flag} <span>${langInfo.name}</span>`;
    }
    
    if (dropdown) {
        dropdown.innerHTML = '';
        Object.keys(languages).forEach(langCode => {
            if (langCode !== currentLang) {
                const langInfo = languages[langCode];
                const item = document.createElement('div');
                item.className = 'language-item';
                item.innerHTML = `${langInfo.flag} <span>${langInfo.name}</span>`;
                item.onclick = () => setLanguage(langCode);
                dropdown.appendChild(item);
            }
        });
    }
}

// 切换语言下拉框
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('active');
}

// 点击外部关闭下拉框
document.addEventListener('click', function(e) {
    const selector = document.querySelector('.language-selector');
    if (selector && !selector.contains(e.target)) {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }
});

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
});
