
export const dogData = {
  forbiddenFoods: [
    {
      name: "초콜릿",
      category: "과자류",
      reason: "테오브로민 성분이 강아지에게 중독을 일으킬 수 있습니다.",
      riskLevel: "critical",
      firstAid: "즉시 토하게 하고 응급실로 이송하세요. 물을 많이 먹이지 마세요.",
      source: "한국수의사회",
      lastUpdated: "2024-12-15"
    },
    {
      name: "양파",
      category: "채소류", 
      reason: "적혈구를 파괴하여 빈혈을 유발할 수 있습니다.",
      riskLevel: "high",
      firstAid: "양파 섭취량이 많다면 즉시 병원 내원. 소량이라면 24시간 관찰하세요.",
      source: "펫케어협회",
      lastUpdated: "2024-12-10"
    },
    {
      name: "마늘",
      category: "채소류",
      reason: "양파와 같은 성분으로 적혈구 손상을 일으킵니다.",
      riskLevel: "high", 
      firstAid: "구토 증상이 있으면 즉시 병원 방문하세요.",
      source: "한국수의사회",
      lastUpdated: "2024-12-12"
    },
    {
      name: "포도",
      category: "과일류",
      reason: "신장 손상을 일으킬 수 있는 미지의 독성 물질이 포함되어 있습니다.",
      riskLevel: "critical",
      firstAid: "즉시 토하게 하고 응급실 이송. 포도 개수와 시간을 기록하세요.",
      source: "수의학연구소",
      lastUpdated: "2024-12-14"
    },
    {
      name: "건포도",
      category: "과일류",
      reason: "포도보다 농축된 독성으로 더욱 위험합니다.",
      riskLevel: "critical",
      firstAid: "포도와 동일하게 응급처치하되, 소량이라도 즉시 병원 이송하세요.",
      source: "수의학연구소", 
      lastUpdated: "2024-12-14"
    },
    {
      name: "아보카도",
      category: "과일류",
      reason: "퍼신이라는 성분이 소화기 장애를 일으킵니다.",
      riskLevel: "medium",
      firstAid: "구토나 설사 증상 관찰하고, 심하면 병원 내원하세요.",
      source: "펫케어협회",
      lastUpdated: "2024-12-08"
    },
    {
      name: "커피",
      category: "음료류",
      reason: "카페인이 심장과 신경계에 악영향을 미칩니다.",
      riskLevel: "high",
      firstAid: "즉시 토하게 하고 충분한 물 공급 후 병원 이송하세요.",
      source: "한국수의사회",
      lastUpdated: "2024-12-13"
    },
    {
      name: "맥주",
      category: "음료류", 
      reason: "알코올이 간 손상과 호흡곤란을 유발합니다.",
      riskLevel: "critical",
      firstAid: "절대 토하게 하지 말고 즉시 응급실 이송하세요.",
      source: "응급수의학회",
      lastUpdated: "2024-12-11"
    },
    {
      name: "우유",
      category: "유제품",
      reason: "유당불내증으로 설사를 유발할 수 있습니다.",
      riskLevel: "low",
      firstAid: "설사가 심하지 않으면 관찰하고, 지속되면 수분 보충 후 병원 상담하세요.",
      source: "펫영양학회",
      lastUpdated: "2024-12-05"
    },
    {
      name: "마카다미아",
      category: "견과류",
      reason: "근육 약화와 떨림을 유발하는 독성이 있습니다.",
      riskLevel: "high",
      firstAid: "떨림이나 보행 이상 증상이 나타나면 즉시 병원 이송하세요.",
      source: "수의독성학회",
      lastUpdated: "2024-12-09"
    },
    {
      name: "자일리톨",
      category: "감미료",
      reason: "급격한 혈당 저하로 생명이 위험할 수 있습니다.",
      riskLevel: "critical",
      firstAid: "즉시 응급실 이송하고, 설탕물을 소량 먹일 수 있습니다.",
      source: "응급수의학회", 
      lastUpdated: "2024-12-16"
    },
    {
      name: "생선뼈",
      category: "어류",
      reason: "목이나 소화기관에 찔릴 위험이 있습니다.",
      riskLevel: "medium",
      firstAid: "토하게 하지 말고 즉시 병원에서 X-ray 촬영하세요.",
      source: "수의외과학회",
      lastUpdated: "2024-12-07"
    }
  ],
  behaviors: [
    {
      keyword: "꼬리 흔들기",
      meaning: "기쁨, 흥분, 관심 표현의 신호입니다.",
      examples: "주인을 보거나 좋아하는 간식을 볼 때",
      action: "긍정적으로 반응해주고 함께 놀아주세요.",
      source: "동물행동학회",
      lastUpdated: "2024-12-10"
    },
    {
      keyword: "하울링",
      meaning: "외로움, 불안감, 또는 다른 개들과의 소통 신호입니다.",
      examples: "주인이 외출했을 때나 사이렌 소리를 들을 때",
      action: "불안감이 원인이라면 안정감을 주는 환경을 만들어주세요.",
      source: "반려동물행동연구소",
      lastUpdated: "2024-12-12"
    },
    {
      keyword: "핥기",
      meaning: "애정 표현이거나 관심끌기, 때로는 스트레스 신호입니다.",
      examples: "주인의 손이나 얼굴을 핥을 때",
      action: "과도하다면 다른 활동으로 주의를 돌려주세요.",
      source: "동물심리학회",
      lastUpdated: "2024-12-08"
    },
    {
      keyword: "파기 행동",
      meaning: "본능적 행동이거나 스트레스, 지루함의 표현입니다.",
      examples: "마당이나 쿠션, 신발을 팔 때",
      action: "충분한 운동과 놀이를 제공하고, 파기 전용 장난감을 주세요.",
      source: "반려동물훈련사협회",
      lastUpdated: "2024-12-14"
    },
    {
      keyword: "빙빙 돌기",
      meaning: "흥분, 스트레스, 또는 강박적 행동의 신호입니다.",
      examples: "식사 시간 전이나 극도로 흥분했을 때",
      action: "과도하다면 수의사 상담을 받아보세요.",
      source: "동물행동치료센터",
      lastUpdated: "2024-12-11"
    }
  ],
  supplements: [
    {
      name: "오메가-3",
      benefit: "피부와 털 건강 개선, 관절염 완화에 도움됩니다.",
      effects: ["피부 알레르기 완화", "털 윤기 개선", "관절 염증 감소", "심장 건강 향상"],
      precautions: ["과다 복용 시 설사 가능", "혈액 응고에 영향을 줄 수 있음", "수의사와 상담 후 복용"],
      dosage: "체중 10kg당 500mg, 하루 1회 식사와 함께 급여",
      source: "펫영양학회",
      lastUpdated: "2024-12-15"
    },
    {
      name: "프로바이오틱스",
      benefit: "장 건강 개선과 면역력 강화에 효과적입니다.",
      effects: ["소화 기능 개선", "설사 예방", "면역력 강화", "스트레스성 장 트러블 완화"], 
      precautions: ["면역억제제 복용 중인 경우 주의", "개봉 후 냉장 보관", "유통기한 확인 필수"],
      dosage: "소형견 1억 CFU, 대형견 10억 CFU, 하루 1-2회",
      source: "수의영양연구소",
      lastUpdated: "2024-12-13"
    },
    {
      name: "글루코사민",
      benefit: "관절 건강 유지와 연골 보호에 도움됩니다.",
      effects: ["관절 통증 완화", "연골 재생 촉진", "관절 가동범위 개선", "노령견 관절염 예방"],
      precautions: ["당뇨병 있는 경우 혈당 모니터링", "갑각류 알레르기 주의", "장기 복용 권장"],
      dosage: "체중 1kg당 20mg, 하루 1-2회 분할 급여",
      source: "관절건강연구회",
      lastUpdated: "2024-12-12"
    }
  ]
};
