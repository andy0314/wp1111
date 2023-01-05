import { TreeSelect } from "antd";
import { useFilter } from "../containers/hooks/useFilter";

const data = [
    {
        value: "All",
        title: "搜尋全部"
    },
    {
        value: "文學院",
        title: "1000 文學院",
        children: [
            {
                value: "中文系",
                title: "1010 中國文學系"
            },
            {
                value: "中文系國際生",
                title: "1011 中國文學系國際學生學士班"
            },
            {
                value: "外文系",
                title: "1020 外國語文學系"
            },
            {
                value: "歷史系",
                title: "1030 歷史學系"
            },
            {
                value: "哲學系",
                title: "1040 哲學系"
            },
            {
                value: "人類系",
                title: "1050 人類學系"
            },
            {
                value: "圖資系",
                title: "1060 圖書資訊學系"
            },
            {
                value: "日文系",
                title: "1070 日本語文學系"
            },
            {
                value: "應英系",
                title: "1080 應用英語學系"
            },
            {
                value: "戲劇系",
                title: "1090 戲劇學系"
            },
            {
                value: "中文所",
                title: "1210 中國文學研究所"
            },
            {
                value: "外文所",
                title: "1220 外國語文學研究所"
            },
            {
                value: "歷史所",
                title: "1230 歷史學研究所"
            },
            {
                value: "哲學所",
                title: "1240 哲學研究所"
            },
            {
                value: "人類所",
                title: "1250 人類學研究所"
            },
            {
                value: "圖資所",
                title: "1260 圖書資訊學研究所"
            },
            {
                value: "日文所",
                title: "1270 日本語文學研究所"
            },
            {
                value: "戲劇所",
                title: "1290 戲劇學研究所"
            },
            {
                value: "藝史所",
                title: "1410 藝術史研究所"
            },
            {
                value: "語言所",
                title: "1420 語言學研究所"
            },
            {
                value: "音樂所",
                title: "1440 音樂學研究所"
            },
            {
                value: "臺文所",
                title: "1450 臺灣文學研究所"
            },
            {
                value: "華教碩士學程",
                title: "1460 華語教學碩士學位學程"
            },
            {
                value: "翻譯碩士學程",
                title: "1470 翻譯碩士學位學程"
            },
        ]
    },
    {
        value: "理學院",
        title: "2000 理學院",
        children: [
            {
                value: "數學系",
                title: "2010 數學系"
            },
            {
                value: "物理系",
                title: "2020 物理學系"
            },
            {
                value: "化學系",
                title: "2030 化學系"
            },
            {
                value: "地質系",
                title: "2040 地質科學系"
            },
            {
                value: "動生組",
                title: "2051 動物生物組"
            },
            {
                value: "漁生組",
                title: "2052 漁業生物組"
            },
            {
                value: "植物系",
                title: "2060 植物學系"
            },
            {
                value: "心理系",
                title: "2070 心理學系"
            },
            {
                value: "地理系",
                title: "2080 地理環境資源學系"
            },
            {
                value: "大氣系",
                title: "2090 大氣科學系"
            },
            {
                value: "數學所",
                title: "2210 數學研究所"
            },
            {
                value: "物理所",
                title: "2220 物理學研究所"
            },
            {
                value: "化學所",
                title: "2230 化學研究所"
            },
            {
                value: "化學所化學組",
                title: "2231 化學所化學組"
            },
            {
                value: "化學所化生組",
                title: "2232 化學所化生組"
            },
            {
                value: "地質所",
                title: "2240 地質科學研究所"
            },
            {
                value: "地質組",
                title: "2241 地質組"
            },
            {
                value: "應用地質組",
                title: "2242 應用地質組"
            },
            {
                value: "動物學研究所",
                title: "2250 動物學研究所"
            },
            {
                value: "植物學研究所",
                title: "2260 植物學研究所"
            },
            {
                value: "心理所",
                title: "2270 心理學研究所"
            },
            {
                value: "一般心理學組",
                title: "2271 一般心理學組"
            },
            {
                value: "地理所",
                title: "2280 地理環境資源學研究所"
            },
            {
                value: "大氣所",
                title: "2290 大氣科學研究所"
            },
            {
                value: "海洋所",
                title: "2410 海洋研究所"
            },
            {
                value: "海洋所物理組",
                title: "2411 海洋物理組"
            },
            {
                value: "海洋所漁業組",
                title: "2412 海洋生物及漁業組"
            },
            {
                value: "海洋所地物理",
                title: "2413 海洋地質及地球物理"
            },
            {
                value: "海洋所化學組",
                title: "2414 海洋化學組"
            },
            {
                value: "天文物理所",
                title: "2440 天文物理研究所"
            },
            {
                value: "應用物理所",
                title: "2450 應用物理學研究所"
            },
            {
                value: "應數所",
                title: "2460 應用數學科學研究所"
            },
            {
                value: "氣候永續學位",
                title: "2470 氣候變遷與永續發展國際學位學程"
            },
            {
                value: "地科國際學程",
                title: "2490 地球系統科學國際研究生博士學位學程"
            },
            {
                value: "統計與數據科學研究所",
                title: "2500 統計與數據科學研究所"
            }
        ]
    },
    {
        value: "社科院",
        title: "3000 社會科學院",
        children: [
            {
                value: "政治系",
                title: "3020 政治學系"
            },
            {
                value: "政治系政論組",
                title: "3021 政治理論組"
            },
            {
                value: "政治系國關組",
                title: "3022 國際關係組"
            },
            {
                value: "政治系公行組",
                title: "3023 公共行政組"
            },
            {
                value: "經濟系",
                title: "3030 經濟學系"
            },
            {
                value: "社會系",
                title: "3050 社會學系"
            },
            {
                value: "社會學組",
                title: "3051 社會學組"
            },
            {
                value: "社會工作組",
                title: "3052 社會工作組"
            },
            {
                value: "社會工作學系",
                title: "3100 社會工作學系"
            },
            {
                value: "政治所",
                title: "3220 政治學研究所"
            },
            {
                value: "社會所",
                title: "3250 社會學研究所"
            },
            {
                value: "國發所",
                title: "3410 國家發展研究所"
            },
            {
                value: "新聞所",
                title: "3420 新聞研究所"
            },
            {
                value: "公事所",
                title: "3430 公共事務研究所"
            },
        ]
    },
    {
        value: "醫學院",
        title: "4000 醫學院",
        children: [
            {
                value: "醫學系",
                title: "4010 醫學系"
            },
            {
                value: "牙醫系",
                title: "4020 牙醫學系"
            },
            {
                value: "藥學系",
                title: "4030 藥學系"
            },
            {
                value: "藥學系六年制",
                title: "4031 藥學系六年制"
            },
            {
                value: "醫技系",
                title: "4040 醫學檢驗暨生物技術學系"
            },
            {
                value: "護理系",
                title: "4060 護理學系"
            },
            {
                value: "物治系",
                title: "4080 物理治療學系(四年制)"
            },
            {
                value: "物治系六年制",
                title: "4081 物治系六年制"
            },
            {
                value: "職治系",
                title: "4090 職能治療學系"
            },
            {
                value: "學士後護",
                title: "4120 學士後護理學系"
            },
            {
                value: "醫衛共同課程",
                title: "4200 醫學院暨公共衛生學院共同課程"
            },
            {
                value: "臨醫所",
                title: "4210 臨床醫學研究所"
            },
            {
                value: "臨醫所醫研組",
                title: "4213 臨床醫學研究所臨床醫學研究組"
            },
            {
                value: "臨醫所試驗組",
                title: "4214 臨床醫學研究所臨床試驗組"
            },
            {
                value: "牙醫所",
                title: "4220 臨床牙醫學研究所"
            },
            {
                value: "藥學所",
                title: "4230 藥學研究所"
            },
            {
                value: "藥物科技組",
                title: "4231 藥學系博士班藥物科技組"
            },
            {
                value: "分子醫藥組",
                title: "4232 藥學系博士班分子醫藥組"
            },
            {
                value: "醫技所",
                title: "4240 醫學檢驗暨生物技術學研究所"
            },
            {
                value: "護理所",
                title: "4260 護理學研究所"
            },
            {
                value: "物治所",
                title: "4280 物理治療學研究所"
            },
            {
                value: "職治所",
                title: "4290 職能治療學研究所"
            },
            {
                value: "生理所",
                title: "4410 生理學研究所"
            },
            {
                value: "生化分生所",
                title: "4420 生物化學暨分子生物學研究所"
            },
            {
                value: "藥理所",
                title: "4430 藥理學研究所"
            },
            {
                value: "病理所",
                title: "4440 病理學研究所"
            },
            {
                value: "微生所",
                title: "4450 微生物學研究所"
            },
            {
                value: "微生所微免組",
                title: "4451 微生物及免疫學組"
            },
            {
                value: "寄生蟲組",
                title: "4452 寄生蟲組"
            },
            {
                value: "微生所熱醫組",
                title: "4453 微生物學研究所熱帶醫學暨寄生蟲學組"
            },
            {
                value: "解剖所",
                title: "4460 解剖學暨細胞生物學研究所"
            },
            {
                value: "毒理所",
                title: "4470 毒理學研究所"
            },
            {
                value: "分子醫學所",
                title: "4480 分子醫學研究所"
            },
            {
                value: "免疫所",
                title: "4490 免疫學研究所"
            },
            {
                value: "口腔生物所",
                title: "4500 口腔生物科學研究所"
            },
            {
                value: "臨床藥學所",
                title: "4510 臨床藥學研究所"
            },
            {
                value: "法醫所",
                title: "4520 法醫學研究所"
            },
            {
                value: "腫瘤醫學所",
                title: "4530 腫瘤醫學研究所"
            },
            {
                value: "腦與心智所",
                title: "4540 腦與心智科學研究所"
            },
            {
                value: "基蛋所",
                title: "4550 基因體暨蛋白體醫學研究所"
            },
            {
                value: "轉譯博士學程",
                title: "4560 轉譯醫學博士學位學程"
            },
            {
                value: "醫教生倫所",
                title: "4570 醫學教育暨生醫倫理研究所"
            },
            {
                value: "醫材影像所",
                title: "4580 醫療器材與醫學影像研究所"
            },
            {
                value: "國際學程",
                title: "4590 國際三校農業生技與健康醫療碩士學位學程"
            },
        ]
    },
    {
        value: "工學院",
        title: "5000 工學院",
        children: [
            {
                value: "土木系",
                title: "5010 土木工程學系"
            },
            {
                value: "機械系",
                title: "5020 機械工程學系"
            },
            {
                value: "化工系",
                title: "5040 化學工程學系"
            },
            {
                value: "工科海洋系",
                title: "5050 工程科學及海洋工程學系"
            },
            {
                value: "材料系",
                title: "5070 材料科學與工程學系"
            },
            {
                value: "醫工系",
                title: "5080 醫學工程學系"
            },
            {
                value: "土木所",
                title: "5210 土木工程學研究所"
            },
            {
                value: "土木所大地組",
                title: "5211 大地工程組"
            },
            {
                value: "土木所結構組",
                title: "5212 結構工程組"
            },
            {
                value: "交通工程組",
                title: "5215 交通工程組"
            },
            {
                value: "土木所CAE組",
                title: "5216 電腦輔助工程組"
            },
            {
                value: "土木所營管組",
                title: "5217 營建工程與管理組"
            },
            {
                value: "土木所測量組",
                title: "5218 測量及空間資訊組"
            },
            {
                value: "機械工程學研究所",
                title: "5220 機械工程學研究所"
            },
            {
                value: "流體力學組",
                title: "5221 流體力學組"
            },
            {
                value: "熱學組",
                title: "5223 熱學組"
            },
            {
                value: "航空工程組",
                title: "5224 航空工程組"
            },
            {
                value: "固體力學組",
                title: "5225 固體力學組"
            },
            {
                value: "設計組",
                title: "5226 設計組"
            },
            {
                value: "製造組",
                title: "5227 製造組"
            },
            {
                value: "系統控制組",
                title: "5228 系統控制組"
            },
            {
                value: "化工所",
                title: "5240 化學工程學研究所"
            },
            {
                value: "工海所",
                title: "5250 工程科學及海洋工程學研究所"
            },
            {
                value: "材料所",
                title: "5270 材料科學與工程學研究所"
            },
            {
                value: "材料科學與工程學研究所國際應用材料工程碩",
                title: "527A 材料科學與工程學研究所國際應用材料工程碩"
            },
            {
                value: "醫工所",
                title: "5280 醫學工程學研究所"
            },
            {
                value: "環工所",
                title: "5410 環境工程學研究所"
            },
            {
                value: "應力所",
                title: "5430 應用力學研究所"
            },
            {
                value: "建城所",
                title: "5440 建築與城鄉研究所"
            },
            {
                value: "工業工程所",
                title: "5460 工業工程學研究所"
            },
            {
                value: "醫學工程學研究所_舊",
                title: "5480 醫學工程學研究所_舊"
            },
            {
                value: "高分子所",
                title: "5490 高分子科學與工程學研究所"
            },
            {
                value: "綠色精密學程",
                title: "5500 綠色永續材料與精密元件博士學位學程"
            },
            {
                value: "分子科技學程",
                title: "5510 分子科學與技術國際研究生博士學位學程"
            },
            {
                value: "永續化學科技",
                title: "5520 永續化學科技國際研究生博士學位學程"
            },
        ]
    },
    {
        value: "生農院",
        title: "6000 生物資源暨農學院",
        children: [
            {
                value: "農藝學系",
                title: "6010 農藝學系"
            },
            {
                value: "生工系",
                title: "6020 生物環境系統工程學系"
            },
            {
                value: "農化系",
                title: "6030 農業化學系"
            },
            {
                value: "土壤肥料組",
                title: "6031 土壤肥料組"
            },
            {
                value: "農產製造組",
                title: "6032 農產製造組"
            },
            {
                value: "植物病蟲害學系",
                title: "6040 植物病蟲害學系"
            },
            {
                value: "森林環資系",
                title: "6050 森林環境暨資源學系"
            },
            {
                value: "育林組",
                title: "6051 育林組"
            },
            {
                value: "資源管理組",
                title: "6052 資源管理組"
            },
            {
                value: "森林工業組",
                title: "6053 森林工業組"
            },
            {
                value: "森林資源保育組",
                title: "6054 森林資源保育組"
            },
            {
                value: "動科系",
                title: "6060 動物科學技術學系"
            },
            {
                value: "農經系",
                title: "6070 農業經濟學系"
            },
            {
                value: "園藝系",
                title: "6080 園藝暨景觀學系"
            },
            {
                value: "獸醫系",
                title: "6090 獸醫學系"
            },
            {
                value: "生傳系",
                title: "6100 生物產業傳播暨發展學系"
            },
            {
                value: "推廣教育組",
                title: "6101 推廣教育組"
            },
            {
                value: "鄉村社會組",
                title: "6102 鄉村社會組"
            },
            {
                value: "生物機電系",
                title: "6110 生物機電工程學系"
            },
            {
                value: "昆蟲系",
                title: "6120 昆蟲學系"
            },
            {
                value: "植物病理與微生物學系",
                title: "6130 植物病理與微生物學系"
            },
            {
                value: "農藝所",
                title: "6210 農藝學研究所"
            },
            {
                value: "農藝所作物組",
                title: "6211 作物科學組"
            },
            {
                value: "農藝所生統組",
                title: "6212 生物統計學組"
            },
            {
                value: "生工所",
                title: "6220 生物環境系統工程學研究所"
            },
            {
                value: "農化所",
                title: "6230 農業化學研究所"
            },
            {
                value: "土壤環境與植物營養組",
                title: "6234 土壤環境與植物營養組"
            },
            {
                value: "生物工業化學組",
                title: "6235 生物工業化學組"
            },
            {
                value: "生物化學組",
                title: "6236 生物化學組"
            },
            {
                value: "營養科學組",
                title: "6237 營養科學組"
            },
            {
                value: "微生物學組",
                title: "6238 微生物學組"
            },
            {
                value: "森林環資所",
                title: "6250 森林環境暨資源學研究所"
            },
            {
                value: "動科所",
                title: "6260 動物科學技術學研究所"
            },
            {
                value: "農經所",
                title: "6270 農業經濟學研究所"
            },
            {
                value: "園藝所",
                title: "6280 園藝暨景觀學研究所"
            },
            {
                value: "園藝所作物組",
                title: "6281 園藝作物組"
            },
            {
                value: "園藝所產品組",
                title: "6282 園產品處理及利用組"
            },
            {
                value: "園藝所景觀組",
                title: "6283 景觀暨休憩組"
            },
            {
                value: "獸醫學研究所",
                title: "6290 獸醫學研究所"
            },
            {
                value: "生傳發展所",
                title: "6300 生物產業傳播暨發展學研究所"
            },
            {
                value: "生物機電所",
                title: "6310 生物產業機電工程學研究所"
            },
            {
                value: "昆蟲所",
                title: "6320 昆蟲學研究所"
            },
            {
                value: "植微所",
                title: "6330 植物病理與微生物學研究所"
            },
            {
                value: "食科所",
                title: "6410 食品科技研究所"
            },
            {
                value: "生物科技所",
                title: "6420 生物科技研究所"
            },
            {
                value: "臨床動醫所",
                title: "6430 臨床動物醫學研究所"
            },
            {
                value: "分子比病所",
                title: "6440 分子暨比較病理生物學研究所"
            },
            {
                value: "植醫學碩士學程",
                title: "6450 植物醫學碩士學位學程"
            },
        ]
    },
    {
        value: "管理院",
        title: "7000 管理學院",
        children: [
            {
                value: "工管系",
                title: "7010 工商管理學系"
            },
            {
                value: "工管系企管組",
                title: "7011 企業管理組"
            },
            {
                value: "工管系科管組",
                title: "7012 科技管理組"
            },
            {
                value: "工商管理系企業管理組英文專班",
                title: "7013 工商管理系企業管理組英文專班"
            },
            {
                value: "會計系",
                title: "7020 會計學系"
            },
            {
                value: "財金系",
                title: "7030 財務金融學系"
            },
            {
                value: "國企系",
                title: "7040 國際企業學系"
            },
            {
                value: "資管系",
                title: "7050 資訊管理學系"
            },
            {
                value: "企業管理學系",
                title: "7060 企業管理學系"
            },
            {
                value: "會計所",
                title: "7220 會計學研究所"
            },
            {
                value: "財金所",
                title: "7230 財務金融學研究所"
            },
            {
                value: "國企所",
                title: "7240 國際企業學研究所"
            },
            {
                value: "資訊管理所",
                title: "7250 資訊管理學研究所"
            },
            {
                value: "高階管理碩士專班(EMBA)",
                title: "7400 高階管理碩士專班(EMBA)"
            },
            {
                value: "商研所",
                title: "7410 商學研究所"
            },
            {
                value: "管院知識管理組",
                title: "7420 管院知識管理組"
            },
            {
                value: "管理學院高階公共管理組",
                title: "7430 管理學院高階公共管理組"
            },
            {
                value: "管理學院會計與管理決策組",
                title: "7440 管理學院會計與管理決策組"
            },
            {
                value: "管理學院財務金融組",
                title: "7450 管理學院財務金融組"
            },
            {
                value: "管理學院國際企業管理組",
                title: "7460 管理學院國際企業管理組"
            },
            {
                value: "管理學院資訊管理組",
                title: "7470 管理學院資訊管理組"
            },
            {
                value: "管理學院商學組",
                title: "7480 管理學院商學組"
            },
            {
                value: "企管碩士專班",
                title: "7490 管理學院企業管理碩士專班(GMBA)"
            },
            {
                value: "臺大復旦EMBA",
                title: "7500 臺大復旦EMBA"
            },
            {
                value: "創業創新MB",
                title: "7510 創業創新管理碩士在職專班"
            },
        ]
    },
    {
        value: "公衛院",
        title: "8000 公共衛生學院",
        children: [
            {
                value: "公衛系",
                title: "8010 公共衛生學系"
            },
            {
                value: "職業醫學與工業衛生研究所",
                title: "8410 職業醫學與工業衛生研究所"
            },
            {
                value: "流行病學研究所",
                title: "8420 流行病學研究所"
            },
            {
                value: "醫療機構管理研究所",
                title: "8430 醫療機構管理研究所"
            },
            {
                value: "環境衛生研究所",
                title: "8440 環境衛生研究所"
            },
            {
                value: "衛生政策與管理研究所",
                title: "8450 衛生政策與管理研究所"
            },
            {
                value: "公衛碩士學程",
                title: "8470 公共衛生碩士學位學程"
            },
            {
                value: "健管所",
                title: "8480 健康政策與管理研究所"
            },
            {
                value: "健康促進組",
                title: "8481 健康促進組"
            },
            {
                value: "健康服務與產業組",
                title: "8482 健康服務與產業組"
            },
            {
                value: "流預所",
                title: "8490 流行病學與預防醫學研究所"
            },
            {
                value: "流預所流病組",
                title: "8491 流預所流行病學組"
            },
            {
                value: "流預所生統組",
                title: "8492 流預所生物醫學統計組"
            },
            {
                value: "流預所預醫組",
                title: "8493 流預所預防醫學組"
            },
            {
                value: "行社所",
                title: "8500 健康行為與社區科學研究所"
            },
            {
                value: "食安所",
                title: "8520 食品安全與健康研究所"
            },
            {
                value: "全衛碩士學程",
                title: "8530 全球衛生碩士學位學程"
            },
            {
                value: "全衛博士學程",
                title: "8540 全球衛生博士學位學程"
            },
        ]
    },
    {
        value: "電資院",
        title: "9000 電機資訊學院",
        children: [
            {
                value: "電機系",
                title: "9010 電機工程學系"
            },
            {
                value: "資工系",
                title: "9020 資訊工程學系"
            },
            {
                value: "電機所",
                title: "9210 電機工程學研究所"
            },
            {
                value: "資工所",
                title: "9220 資訊工程學研究所"
            },
            {
                value: "光電所",
                title: "9410 光電工程學研究所"
            },
            {
                value: "電信所",
                title: "9420 電信工程學研究所"
            },
            {
                value: "電子所",
                title: "9430 電子工程學研究所"
            },
            {
                value: "網媒所",
                title: "9440 資訊網路與多媒體研究所"
            },
            {
                value: "生醫電資所",
                title: "9450 生醫電子與資訊學研究所"
            },
            {
                value: "資料科學學位學程",
                title: "9460 資料科學學位學程"
            },
            {
                value: "生資國際學程",
                title: "9470 生物資訊學國際研究生學位學程"
            },
            {
                value: "資料科學博士學位學程",
                title: "9480 資料科學博士學位學程"
            },
        ]
    },
    {
        value: "法律院",
        title: "A000 法律學院",
        children: [
            {
                value: "法律系",
                title: "A010 法律學系"
            },
            {
                value: "法律系法學組",
                title: "A011 法學組"
            },
            {
                value: "法律系司法組",
                title: "A012 司法組"
            },
            {
                value: "法律系財法組",
                title: "A013 財法組"
            },
            {
                value: "法律所",
                title: "A210 法律研究所"
            },
            {
                value: "教學發展中心",
                title: "A408 教學發展中心"
            },
            {
                value: "科法所",
                title: "A410 科際整合法律學研究所"
            },
        ]
    },
    {
        value: "生科院",
        title: "B000 生命科學院",
        children: [
            {
                value: "生科系",
                title: "B010 生命科學系"
            },
            {
                value: "生技系",
                title: "B020 生化科技學系"
            },
            {
                value: "生科所",
                title: "B210 生命科學所"
            },
            {
                value: "生技所",
                title: "B220 生化科技研究所"
            },
            {
                value: "植物科學所",
                title: "B420 植物科學研究所"
            },
            {
                value: "分子細生所",
                title: "B430 分子與細胞生物學研究所"
            },
            {
                value: "生態演化所",
                title: "B440 生態學與演化生物學研究所"
            },
            {
                value: "漁業科學所",
                title: "B450 漁業科學研究所"
            },
            {
                value: "生化科學所",
                title: "B460 生化科學研究所"
            },
            {
                value: "微生物與生化學研究所",
                title: "B470 微生物與生化學研究所"
            },
            {
                value: "生物工業組",
                title: "B471 生物工業組"
            },
            {
                value: "生物化學組1",
                title: "B472 生物化學組"
            },
            {
                value: "營養科學組1",
                title: "B473 營養科學組"
            },
            {
                value: "微生物學組1",
                title: "B474 微生物學組"
            },
            {
                value: "基因學位學程",
                title: "B480 基因體與系統生物學學位學程"
            },
            {
                value: "國際神經學程",
                title: "B490 跨領域神經科學國際研究生博士學位學程"
            },
        ]
    },
    {
        value: "進修推廣學院",
        title: "E000 進修推廣學院",
        children: [
            {
                value: "事業經營碩士",
                title: "E410 事業經營碩士在職學位學程"
            },
            {
                value: "事業法務碩士",
                title: "E420 事業經營法務碩士在職學位學程"
            },
            {
                value: "生物科技管理",
                title: "E430 生物科技管理碩士在職學位學程"
            },
        ]
    },
    {
        value: "台北教育大學",
        title: "G010 台北教育大學"
    },
    {
        value: "共同教育中心",
        title: "H000 共同教育中心",
        children: [
            {
                value: "通識教育組",
                title: "H010 通識教育組"
            },
            {
                value: "共同教育組",
                title: "H020 共同教育組"
            },
            {
                value: "統計碩士學位",
                title: "H410 統計碩士學位學程"
            },
            {
                value: "運動健康管理",
                title: "H420 運動設施與健康管理碩士學位學程"
            },
            {
                value: "農科基因體",
                title: "H430 全球農業科技與基因體科學碩士學位學程"
            },
            {
                value: "生物多樣性",
                title: "H440 生物多樣性國際碩士學位學程"
            },
        ]
    },
    {
        value: "產業研發碩士專班",
        title: "J000 產業研發碩士專班",
        children: [
            {
                value: "電機電信電子產業研發碩士專班",
                title: "J100 電機電信電子產業研發碩士專班"
            },
            {
                value: "資訊產業研發碩士專班",
                title: "J110 資訊產業研發碩士專班"
            },
        ]
    },
    {
        value: "重點科技研究學院與三校聯盟",
        title: "K000 重點科技研究學院與三校聯盟",
        children: [
            {
                value: "臺師大",
                title: "K010 國立臺灣師範大學"
            },
            {
                value: "臺科大",
                title: "K020 國立臺灣科技大學"
            },
            {
                value: "北教大",
                title: "K030 國立臺北教育大學"
            },
            {
                value: "積體電路碩士",
                title: "K410 積體電路設計與自動化碩士學位學程"
            },
            {
                value: "元件材料碩士",
                title: "K430 元件材料與異質整合碩士學位學程"
            },
            {
                value: "奈米工科碩士",
                title: "K450 奈米工程與科學碩士學位學程"
            },
        ]
    },
    {
        value: "寫作教學中心",
        title: "Q010 寫作教學中心"
    },
    {
        value: "生命教育研發育成中心",
        title: "Q020 生命教育研發育成中心"
    },
    {
        value: "國家理論中心",
        title: "V410 國家理論科學研究中心"
    },
    {
        value: "創新設計學院",
        title: "Z000 創新設計學院",
        children: [
            {
                value: "創新領域學士學位學程",
                title: "Z010 創新領域學士學位學程"
            },
        ]
    },
]

const DepartmentSelect = () => {
    const { departFilter, setDepartFilter } = useFilter();
    const onChange = (value) => {
        setDepartFilter(value)
    }

    return(
        <>  
            <TreeSelect
                style={{width: "100%"}}
                value={departFilter}
                placeholder="選擇學院"
                treeData={data}
                dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto',
                }}
                onChange={onChange}
            />
        </>
    )
}

export default DepartmentSelect