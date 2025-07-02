
export const dogData = {
  "forbiddenFoods": [
    { 
      "name": "초콜릿", 
      "reason": "테오브로민 중독 위험. 심장과 신경계에 악영향을 미칠 수 있습니다.",
      "riskLevel": "critical",
      "category": "과자류",
      "firstAid": "즉시 수의사에게 연락하고, 구토를 유도하지 마세요. 물을 많이 먹이고 병원으로 이송하세요.",
      "source": "대한수의사회",
      "lastUpdated": "2024-12-15"
    },
    { 
      "name": "양파", 
      "reason": "적혈구 파괴를 유발하여 빈혈을 일으킬 수 있습니다.",
      "riskLevel": "high",
      "category": "채소류",
      "firstAid": "소량 섭취 시 24시간 관찰하고, 구토나 설사 증상이 있으면 즉시 병원 방문하세요.",
      "source": "미국수의사협회",
      "lastUpdated": "2024-12-10"
    },
    { 
      "name": "포도", 
      "reason": "신장 손상을 일으킬 수 있으며, 급성 신부전의 위험이 있습니다.",
      "riskLevel": "critical",
      "category": "과일류",
      "firstAid": "즉시 수의사 연락 후 병원 이송. 구토 유도는 금지하고 수분 공급을 중단하세요.",
      "source": "반려동물 응급처치 가이드",
      "lastUpdated": "2024-12-12"
    },
    { 
      "name": "마카다미아 견과류", 
      "reason": "근육 약화, 구토, 발열 등의 증상을 유발할 수 있습니다.",
      "riskLevel": "high",
      "category": "견과류",
      "firstAid": "충분한 수분 공급 후 안정을 취하게 하고, 증상 악화 시 병원 방문하세요.",
      "source": "호주 수의학 저널",
      "lastUpdated": "2024-12-08"
    },
    { 
      "name": "아보카도", 
      "reason": "퍼신이라는 독성 물질이 소화기 장애를 일으킬 수 있습니다.",
      "riskLevel": "medium",
      "category": "과일류",
      "firstAid": "소화기 증상 관찰 후 24시간 이내 증상 지속 시 병원 상담하세요.",
      "source": "펫푸드 안전 가이드",
      "lastUpdated": "2024-12-05"
    },
    { 
      "name": "자일리톨", 
      "reason": "급격한 혈당 저하를 일으켜 의식 잃음이나 간 손상을 유발할 수 있습니다.",
      "riskLevel": "critical",
      "category": "감미료",
      "firstAid": "즉시 응급실 이송. 의식이 있다면 설탕물을 소량 급여 후 병원으로.",
      "source": "독성학회",
      "lastUpdated": "2024-12-14"
    },
    { 
      "name": "커피", 
      "reason": "카페인 중독으로 심박수 증가, 발작 등을 유발할 수 있습니다.",
      "riskLevel": "high",
      "category": "음료류",
      "firstAid": "물을 충분히 급여하고 안정시킨 후 수의사와 상담하세요.",
      "source": "카페인 안전 연구소",
      "lastUpdated": "2024-12-11"
    },
    { 
      "name": "마늘", 
      "reason": "양파와 유사하게 적혈구 손상을 일으켜 빈혈을 유발합니다.",
      "riskLevel": "medium",
      "category": "향신료",
      "firstAid": "소량 섭취 시 48시간 관찰하고, 무기력 증상 시 병원 방문하세요.",
      "source": "수의학 연구지",
      "lastUpdated": "2024-12-09"
    },
    { 
      "name": "생선뼈", 
      "reason": "목과 소화기관에 걸려 질식이나 내상을 일으킬 수 있습니다.",
      "riskLevel": "high",
      "category": "뼈류",
      "firstAid": "억지로 제거하지 말고 즉시 병원에서 제거술을 받으세요.",
      "source": "응급의학과",
      "lastUpdated": "2024-12-13"
    },
    { 
      "name": "우유", 
      "reason": "유당불내증으로 설사와 소화불량을 일으킬 수 있습니다.",
      "riskLevel": "low",
      "category": "유제품",
      "firstAid": "설사 시 수분 보충하고 24시간 금식 후 점차 사료를 급여하세요.",
      "source": "소화기학회",
      "lastUpdated": "2024-12-07"
    },
    { 
      "name": "생계란", 
      "reason": "살모넬라균 감염과 비오틴 결핍을 유발할 수 있습니다.",
      "riskLevel": "medium",
      "category": "단백질류",
      "firstAid": "구토나 설사 증상 시 수분 공급하고 수의사와 상담하세요.",
      "source": "식품안전처",
      "lastUpdated": "2024-12-06"
    },
    { 
      "name": "알코올", 
      "reason": "중추신경계 억제로 의식불명이나 호흡곤란을 일으킬 수 있습니다.",
      "riskLevel": "critical",
      "category": "음료류",
      "firstAid": "즉시 병원 이송. 구토 유도 금지하고 체온 유지에 집중하세요.",
      "source": "독성응급센터",
      "lastUpdated": "2024-12-16"
    }
  ],
  "behaviors": [
    { 
      "keyword": "꼬리 축 처짐", 
      "meaning": "불안, 두려움 또는 통증을 느끼고 있을 때 나타나는 행동입니다.",
      "image": "assets/behaviors/tail-down.jpg",
      "examples": "새로운 환경, 큰 소리, 몸의 이상 등",
      "action": "안전한 공간 제공, 수의사 검진 권장",
      "source": "동물행동학회",
      "lastUpdated": "2024-12-10"
    },
    { 
      "keyword": "바닥 긁기", 
      "meaning": "자기 영역을 표시하거나 스트레스를 해소하는 행동입니다.",
      "image": "assets/behaviors/scratching.jpg",
      "examples": "흥분 상태, 영역 표시, 관심 끌기",
      "action": "충분한 운동과 놀이 시간 제공",
      "source": "반려동물 행동 연구소",
      "lastUpdated": "2024-12-12"
    },
    { 
      "keyword": "계속 핥기", 
      "meaning": "스트레스, 지루함 또는 알레르기 반응일 수 있습니다.",
      "image": "assets/behaviors/licking.jpg",
      "examples": "특정 부위 반복 핥기, 발가락 핥기",
      "action": "원인 파악 후 환경 개선 또는 수의사 상담",
      "source": "수의피부과학회",
      "lastUpdated": "2024-12-11"
    },
    { 
      "keyword": "원을 그리며 돌기", 
      "meaning": "흥분 상태이거나 관심을 끌고 싶어하는 행동입니다.",
      "image": "assets/behaviors/circling.jpg",
      "examples": "산책 전, 식사 시간, 놀이 요청",
      "action": "에너지 소모를 위한 활동 증가",
      "source": "개 훈련 전문가 협회",
      "lastUpdated": "2024-12-09"
    },
    { 
      "keyword": "짖지 않고 입만 벌리기", 
      "meaning": "스트레스나 불안감을 표현하는 신호입니다.",
      "image": "assets/behaviors/mouth-open.jpg",
      "examples": "병원 방문 시, 새로운 사람과 만날 때",
      "action": "점진적 사회화 훈련과 안정감 제공",
      "source": "동물심리학 연구소",
      "lastUpdated": "2024-12-08"
    },
    { 
      "keyword": "꼬리 흔들기", 
      "meaning": "기쁨, 흥분, 때로는 경계심을 표현하는 행동입니다.",
      "image": "assets/behaviors/tail-wagging.jpg",
      "examples": "주인 귀가 시, 산책 시간, 낯선 사람 접근",
      "action": "상황에 맞는 반응과 교감 강화",
      "source": "동물 커뮤니케이션 센터",
      "lastUpdated": "2024-12-13"
    }
  ],
  "supplements": [
    {
      "name": "오메가-3",
      "benefit": "피부·모질 개선",
      "effects": ["피부 염증 완화", "털 윤기 증진", "관절 건강 개선", "심혈관 건강 지원"],
      "precautions": ["과다 복용 시 설사 가능", "혈액 응고에 영향을 줄 수 있음", "수술 전 복용 중단 필요"],
      "dosage": "체중 1kg당 20-50mg, 하루 1-2회 식사와 함께 급여",
      "link": "#",
      "source": "수의영양학회",
      "lastUpdated": "2024-12-15"
    },
    {
      "name": "프로바이오틱스",
      "benefit": "소화기 건강 개선",
      "effects": ["장내 유익균 증식", "소화 능력 향상", "면역력 강화", "설사 및 변비 개선"],
      "precautions": ["냉장 보관 필수", "항생제와 동시 복용 시 효과 감소", "급성 질환 시 수의사 상담"],
      "dosage": "소형견: 1억 CFU, 중대형견: 5-10억 CFU, 하루 1회 식사 후 급여",
      "link": "#",
      "source": "장내미생물 연구소",
      "lastUpdated": "2024-12-14"
    },
    {
      "name": "글루코사민",
      "benefit": "관절 건강 지원",
      "effects": ["연골 재생 도움", "관절염 완화", "관절 윤활액 생성", "운동 능력 개선"],
      "precautions": ["당뇨병 견에게 주의", "임신 및 수유 중 사용 금지", "알레르기 반응 주의"],
      "dosage": "체중 1kg당 20mg, 하루 1-2회 식사와 함께 급여, 4-6주 지속 복용",
      "link": "#",
      "source": "관절건강 연구소",
      "lastUpdated": "2024-12-12"
    },
    {
      "name": "비타민 E",
      "benefit": "항산화 및 면역력 강화",
      "effects": ["세포 손상 방지", "면역 체계 강화", "근육 건강", "생식 건강 개선"],
      "precautions": ["과다 복용 시 출혈 위험", "혈액 희석제와 상호작용", "지용성 비타민으로 축적 주의"],
      "dosage": "소형견 10-15IU, 대형견 20-30IU, 하루 1회",
      "link": "#",
      "source": "비타민 연구센터",
      "lastUpdated": "2024-12-11"
    }
  ]
};
