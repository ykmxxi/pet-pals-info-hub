export const catData = {
  forbiddenFoods: [
    {
      name: "양파",
      category: "채소류",
      reason: "적혈구를 파괴하여 용혈성 빈혈을 유발합니다.",
      riskLevel: "critical",
      firstAid: "즉시 토하게 하고 응급실 이송하세요. 물을 많이 먹이지 마세요.",
      source: "한국수의사회",
      lastUpdated: "2024-12-15"
    },
    {
      name: "마늘",
      category: "채소류", 
      reason: "양파보다 5배 더 독성이 강하여 매우 위험합니다.",
      riskLevel: "critical",
      firstAid: "소량이라도 즉시 응급실 이송하세요.",
      source: "고양이의학연구소",
      lastUpdated: "2024-12-14"
    },
    {
      name: "초콜릿",
      category: "과자류",
      reason: "테오브로민이 고양이에게 심장 부정맥을 일으킵니다.",
      riskLevel: "critical", 
      firstAid: "즉시 토하게 하고 심장 박동 체크 후 응급실 이송하세요.",
      source: "펫독성학회",
      lastUpdated: "2024-12-13"
    },
    {
      name: "포도",
      category: "과일류",
      reason: "신장 손상을 일으키는 미지의 독성 물질이 있습니다.",
      riskLevel: "high",
      firstAid: "토하게 하고 수분 섭취 모니터링 후 병원 내원하세요.",
      source: "수의신장학회",
      lastUpdated: "2024-12-12"
    },
    {
      name: "참치캔(사람용)",
      category: "어류",
      reason: "높은 나트륨과 수은 함량이 신장과 신경계에 해롭습니다.",
      riskLevel: "medium",
      firstAid: "물을 충분히 공급하고 지속적으로 급여했다면 혈액검사 받으세요.",
      source: "고양이영양학회",
      lastUpdated: "2024-12-10"
    },
    {
      name: "우유",
      category: "유제품",
      reason: "성묘는 유당분해효소가 부족하여 설사를 유발합니다.",
      riskLevel: "low",
      firstAid: "설사가 지속되면 수분 보충하고 유제품 급여 중단하세요.",
      source: "고양이소화기학회", 
      lastUpdated: "2024-12-08"
    },
    {
      name: "개사료",
      category: "사료류",
      reason: "고양이 필수 영양소인 타우린이 부족하여 심장병을 유발합니다.",
      riskLevel: "medium",
      firstAid: "장기간 급여했다면 심장 검사와 타우린 보충이 필요합니다.",
      source: "고양이영양연구소",
      lastUpdated: "2024-12-11"
    },
    {
      name: "생 달걀 흰자",
      category: "기타",
      reason: "아비딘 성분이 비오틴 흡수를 방해합니다.",
      riskLevel: "low",
      firstAid: "소량이면 문제없으나, 지속 급여 시 비오틴 보충 필요합니다.",
      source: "펫영양학회",
      lastUpdated: "2024-12-09"
    },
    {
      name: "자일리톨",
      category: "감미료",
      reason: "개만큼 민감하지 않지만 여전히 위험할 수 있습니다.",
      riskLevel: "high",
      firstAid: "혈당 저하 증상 관찰하고 이상 시 즉시 병원 이송하세요.",
      source: "응급수의학회",
      lastUpdated: "2024-12-16"
    },
    {
      name: "알코올",
      category: "음료류",
      reason: "간 손상과 호흡 억제를 일으켜 생명이 위험합니다.",
      riskLevel: "critical",
      firstAid: "절대 토하게 하지 말고 즉시 응급실 이송하세요.",
      source: "응급수의학회",
      lastUpdated: "2024-12-15"
    }
  ],
  
  behaviors: [
    {
      keyword: "그르렁거리기",
      meaning: "만족감, 편안함의 표현이지만 때로는 스트레스나 통증 신호이기도 합니다.",
      examples: "쓰다듬을 때나 무릎 위에서 쉴 때, 또는 아플 때",
      action: "컨텍스트를 파악하여 스트레스성이나 통증성인지 확인하세요.",
      image: "assets/behaviors/cat-purring.jpg",
      source: "고양이행동학회",
      lastUpdated: "2024-12-15"
    },
    {
      keyword: "꼬리 팽창",
      meaning: "공포, 위협감, 또는 극도의 흥분 상태를 나타냅니다.",
      examples: "다른 고양이나 강아지를 만났을 때, 큰 소리에 놀랐을 때",
      action: "자극 요인을 제거하고 안전한 공간으로 이동시키세요.",
      image: "assets/behaviors/cat-tail-puffed.jpg",
      source: "동물행동치료센터",
      lastUpdated: "2024-12-14"
    },
    {
      keyword: "비비기",
      meaning: "애정 표현과 영역 표시의 의미입니다. 페로몬을 분비하여 냄새를 남깁니다.",
      examples: "주인의 다리나 얼굴에 비빌 때, 가구에 비빌 때",
      action: "긍정적인 신호이므로 부드럽게 반응해주세요.",
      image: "assets/behaviors/cat-rubbing.jpg",
      source: "고양이심리연구소",
      lastUpdated: "2024-12-13"
    },
    {
      keyword: "할퀴기",
      meaning: "영역 표시, 스트레스 해소, 또는 관심끌기입니다. 발톱 관리의 의미도 있습니다.",
      examples: "소파나 가구를 할퀼 때, 스크래처를 사용할 때",
      action: "스크래처를 제공하고 긍정적 강화 훈련을 하세요.",
      image: "assets/behaviors/cat-scratching.jpg",
      source: "고양이훈련전문가협회",
      lastUpdated: "2024-12-12"
    },
    {
      keyword: "숨기",
      meaning: "스트레스, 질병, 또는 안전한 공간에 대한 욕구입니다.",
      examples: "침대 아래나 좁은 공간에 숨을 때, 새로운 환경에서",
      action: "강제로 꺼내지 말고 스트레스 요인을 파악하세요.",
      image: "assets/behaviors/cat-hiding.jpg",
      source: "고양이스트레스연구소",
      lastUpdated: "2024-12-11"
    },
    {
      keyword: "꾹꾹이",
      meaning: "어미를 그리워하는 행동이자 만족감과 애정을 표현하는 신호입니다.",
      examples: "무릎 위에서, 부드러운 담요나 쿠션을 밟을 때",
      action: "긍정적인 행동이므로 편안하게 두거나 부드럽게 쓰다듬어주세요.",
      image: "assets/behaviors/cat-kneading.jpg",
      source: "고양이애착행동연구소",
      lastUpdated: "2024-12-10"
    },
    {
      keyword: "야옹거리기",
      meaning: "의사소통의 수단으로, 요구사항이나 감정을 표현합니다.",
      examples: "식사 시간, 관심을 받고 싶을 때, 문 앞에서",
      action: "상황에 맞는 적절한 반응을 보여주되, 과도한 요구는 무시하세요.",
      image: "assets/behaviors/cat-meowing.jpg",
      source: "고양이음성학연구센터",
      lastUpdated: "2024-12-09"
    },
    {
      keyword: "털 핥기",
      meaning: "그루밍 본능이지만 과도하면 스트레스나 피부 질환의 신호일 수 있습니다.",
      examples: "식사 후 그루밍, 스트레스 상황에서 과도한 핥기",
      action: "적정 수준은 정상이지만, 과도하면 원인을 파악하고 수의사 상담을 받으세요.",
      image: "assets/behaviors/cat-grooming.jpg",
      source: "고양이그루밍연구소",
      lastUpdated: "2024-12-08"
    },
    {
      keyword: "등 굽히기",
      meaning: "경계, 위협, 또는 놀이 모드를 나타내는 신호입니다.",
      examples: "다른 고양이와 마주쳤을 때, 놀이를 시작할 때",
      action: "상황을 파악하여 놀이인지 위협 상황인지 구분하고 적절히 대응하세요.",
      image: "assets/behaviors/cat-arching.jpg",
      source: "고양이위협행동연구소",
      lastUpdated: "2024-12-07"
    },
    {
      keyword: "눈 천천히 깜빡이기",
      meaning: "신뢰와 애정을 표현하는 '고양이 키스'입니다.",
      examples: "주인을 바라보며 천천히 눈을 깜빡일 때",
      action: "같은 방식으로 천천히 눈을 깜빡여 애정을 표현해주세요.",
      image: "assets/behaviors/cat-slow-blink.jpg",
      source: "고양이애정표현연구센터",
      lastUpdated: "2024-12-06"
    }
  ],
  
  supplements: [
    {
      name: "타우린",
      benefit: "심장 건강과 시력 유지에 필수적인 아미노산입니다.",
      effects: ["심근병증 예방", "망막 기능 유지", "소화 기능 개선", "번식 능력 향상"],
      precautions: ["과다 복용은 드물지만 설사 가능", "다른 심장약과 상호작용 확인", "정기적인 심장 검사 권장"],
      dosage: "성묘 기준 하루 100-200mg, 식사와 함께 급여",
      source: "고양이심장학회",
      lastUpdated: "2024-12-15"
    },
    {
      name: "오메가-3",
      benefit: "피부 트러블과 염증성 질환 완화에 효과적입니다.",
      effects: ["피부염 완화", "털 윤기 개선", "관절염 통증 감소", "뇌 기능 향상"],
      precautions: ["혈액 응고 지연 가능", "생선 알레르기 확인", "냉장 보관 필수"],
      dosage: "체중 1kg당 30mg EPA/DHA, 하루 1회",
      source: "고양이피부과학회", 
      lastUpdated: "2024-12-13"
    },
    {
      name: "크랜베리 추출물",
      benefit: "요로 건강 유지와 방광염 예방에 도움됩니다.",
      effects: ["요로감염 예방", "방광 건강 개선", "소변 냄새 완화", "결석 형성 억제"],
      precautions: ["당뇨병 고양이는 당 함량 확인", "충분한 수분 섭취 병행", "항응고제 복용 시 주의"],
      dosage: "성묘 기준 하루 250-500mg, 물과 함께 급여",
      source: "고양이비뇨기학회",
      lastUpdated: "2024-12-12"
    }
  ]
};
