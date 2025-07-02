
export const catData = {
  "forbiddenFoods": [
    { 
      "name": "양파", 
      "reason": "적혈구를 파괴하여 빈혈을 유발할 수 있습니다.",
      "riskLevel": "critical",
      "category": "채소류",
      "firstAid": "즉시 수의사 연락 후 24시간 집중 관찰하세요.",
      "source": "고양이 의학회",
      "lastUpdated": "2024-12-15"
    },
    { 
      "name": "마늘", 
      "reason": "양파와 마찬가지로 적혈구 손상을 일으킬 수 있습니다.",
      "riskLevel": "high",
      "category": "향신료",
      "firstAid": "소량이라도 수의사와 즉시 상담하세요.",
      "source": "반려묘 건강 가이드",
      "lastUpdated": "2024-12-14"
    },
    { 
      "name": "초콜릿", 
      "reason": "테오브로민 중독으로 심장과 신경계에 악영향을 미칩니다.",
      "riskLevel": "critical",
      "category": "과자류",
      "firstAid": "즉시 응급처치 후 병원 이송하세요.",
      "source": "수의독성학회",
      "lastUpdated": "2024-12-13"
    },
    { 
      "name": "포도", 
      "reason": "신장 손상 및 급성 신부전의 위험이 있습니다.",
      "riskLevel": "critical",
      "category": "과일류",
      "firstAid": "구토 유도 금지, 즉시 병원 이송하세요.",
      "source": "신장질환 연구소",
      "lastUpdated": "2024-12-12"
    },
    { 
      "name": "참치 (과량)", 
      "reason": "수은 중독 위험이 있으며, 영양 불균형을 초래할 수 있습니다.",
      "riskLevel": "medium",
      "category": "어류",
      "firstAid": "균형잡힌 사료로 교체하고 수의사와 상담하세요.",
      "source": "고양이 영양학 연구소",
      "lastUpdated": "2024-12-11"
    },
    { 
      "name": "우유", 
      "reason": "유당불내증으로 설사와 소화불량을 일으킵니다.",
      "riskLevel": "low",
      "category": "유제품",
      "firstAid": "설사 시 수분 보충 후 사료로 대체하세요.",
      "source": "소화기학회",
      "lastUpdated": "2024-12-10"
    },
    { 
      "name": "날생선", 
      "reason": "기생충과 세균 감염의 위험이 있습니다.",
      "riskLevel": "medium",
      "category": "어류",
      "firstAid": "구토나 설사 시 수의사 상담하세요.",
      "source": "기생충학회",
      "lastUpdated": "2024-12-09"
    },
    { 
      "name": "카페인", 
      "reason": "심박수 증가와 신경계 과흥분을 유발합니다.",
      "riskLevel": "high",
      "category": "음료류",
      "firstAid": "충분한 수분 공급 후 안정시키고 병원 방문하세요.",
      "source": "응급의학과",
      "lastUpdated": "2024-12-08"
    }
  ],
  "behaviors": [
    { 
      "keyword": "꾹꾹이", 
      "meaning": "만족감과 애정을 표현하는 행동으로, 어미를 그리워하는 신호입니다.",
      "image": "assets/behaviors/kneading.jpg",
      "examples": "무릎 위에서, 부드러운 담요에서",
      "action": "애정 표현으로 받아들이고 교감하세요",
      "source": "고양이 행동학 연구소",
      "lastUpdated": "2024-12-15"
    },
    { 
      "keyword": "꼬리 세우기", 
      "meaning": "기분이 좋고 자신감이 있을 때 나타나는 긍정적인 신호입니다.",
      "image": "assets/behaviors/tail-up.jpg",
      "examples": "인사할 때, 기분 좋을 때",
      "action": "긍정적 신호로 인식하고 상호작용하세요",
      "source": "동물 커뮤니케이션 센터",
      "lastUpdated": "2024-12-14"
    },
    { 
      "keyword": "머리 비비기", 
      "meaning": "애정 표현이자 자신의 냄새를 묻혀 소유권을 표시하는 행동입니다.",
      "image": "assets/behaviors/head-rubbing.jpg",
      "examples": "다리에 비비기, 가구에 비비기",
      "action": "애정의 표현으로 받아주세요",
      "source": "고양이 사회행동 연구소",
      "lastUpdated": "2024-12-13"
    },
    { 
      "keyword": "골골송", 
      "meaning": "만족감, 편안함을 나타내지만 때로는 스트레스나 아픔의 신호일 수도 있습니다.",
      "image": "assets/behaviors/purring.jpg",
      "examples": "쓰다듬을 때, 아플 때도 가능",
      "action": "상황을 종합적으로 판단하여 대응하세요",
      "source": "수의행동의학과",
      "lastUpdated": "2024-12-12"
    },
    { 
      "keyword": "물건 떨어뜨리기", 
      "meaning": "관심을 끌거나 놀이 욕구를 표현하는 행동입니다.",
      "image": "assets/behaviors/dropping.jpg",
      "examples": "책상 위 물건들, 작은 장난감들",
      "action": "충분한 놀이 시간을 제공하세요",
      "source": "고양이 놀이 연구소",
      "lastUpdated": "2024-12-11"
    },
    { 
      "keyword": "숨어있기", 
      "meaning": "스트레스나 불안, 또는 안전한 공간을 찾는 본능입니다.",
      "image": "assets/behaviors/hiding.jpg",
      "examples": "침대 밑, 옷장 안, 박스 안",
      "action": "스트레스 원인을 파악하고 안전한 공간을 제공하세요",
      "source": "고양이 스트레스 관리 센터",
      "lastUpdated": "2024-12-10"
    }
  ],
  "supplements": [
    {
      "name": "타우린",
      "benefit": "심장 및 눈 건강",
      "effects": ["심근 기능 개선", "망막 건강 유지", "소화 기능 향상", "면역력 강화"],
      "precautions": ["과다 복용 시 설사 가능", "다른 심장약과 상호작용 주의", "신장 질환 시 수의사 상담"],
      "dosage": "성묘 기준 하루 100-200mg, 식사와 함께 급여",
      "link": "#",
      "source": "고양이 영양학회",
      "lastUpdated": "2024-12-15"
    },
    {
      "name": "오메가-3",
      "benefit": "피부·모질 개선",
      "effects": ["피부 염증 완화", "털 윤기 증진", "관절 건강", "뇌 기능 개선"],
      "precautions": ["생선 알레르기 주의", "혈액 응고 억제 효과", "냉장 보관 필요"],
      "dosage": "체중 1kg당 30-50mg, 하루 1회 식사와 함께 급여",
      "link": "#",
      "source": "지방산 연구소",
      "lastUpdated": "2024-12-14"
    },
    {
      "name": "프로바이오틱스",
      "benefit": "소화기 건강",
      "effects": ["장내 균형 개선", "털볼 배출 도움", "면역력 향상", "스트레스 완화"],
      "precautions": ["냉장 보관 필수", "항생제 복용 시 2시간 간격", "급성 설사 시 중단"],
      "dosage": "성묘 기준 1-5억 CFU, 하루 1회 식사 후 급여",
      "link": "#",
      "source": "장내미생물 연구소",
      "lastUpdated": "2024-12-13"
    },
    {
      "name": "라이신",
      "benefit": "면역력 강화 및 헤르페스 예방",
      "effects": ["바이러스 억제", "스트레스 완화", "성장 촉진", "상처 치유"],
      "precautions": ["과다 복용 시 구토 가능", "다른 아미노산과 균형 필요", "간 질환 시 주의"],
      "dosage": "성묘 기준 250-500mg, 하루 1-2회",
      "link": "#",
      "source": "아미노산 연구센터",
      "lastUpdated": "2024-12-12"
    }
  ]
};
