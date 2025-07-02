export const dogData = {
  forbiddenFoods: [
    { "name": "초콜릿", "reason": "테오브로민 중독 위험. 심장과 신경계에 악영향을 미칠 수 있습니다." },
    { "name": "양파", "reason": "적혈구 파괴를 유발하여 빈혈을 일으킬 수 있습니다." },
    { "name": "포도", "reason": "신장 손상을 일으킬 수 있으며, 급성 신부전의 위험이 있습니다." },
    { "name": "마카다미아 견과류", "reason": "근육 약화, 구토, 발열 등의 증상을 유발할 수 있습니다." },
    { "name": "아보카도", "reason": "퍼신이라는 독성 물질이 소화기 장애를 일으킬 수 있습니다." }
  ],
  
  behaviors: [
    {
      keyword: "꼬리 흔들기",
      meaning: "기쁨, 흥분, 또는 관심을 표현하는 행동입니다. 꼬리의 높이와 속도에 따라 감정이 달라집니다.",
      examples: "주인을 보거나, 산책 준비를 할 때, 좋아하는 사람이나 개를 만날 때",
      action: "긍정적인 신호이므로 함께 놀아주거나 관심을 보여주세요.",
      image: "assets/behaviors/dog-tail-wagging.jpg",
      source: "한국수의행동학회",
      lastUpdated: "2024-12-15"
    },
    {
      keyword: "꼬리 다리 사이로 숨기기",
      meaning: "불안, 두려움, 스트레스, 또는 복종을 나타내는 신호입니다.",
      examples: "큰 소리나 낯선 환경, 다른 개에게 위협을 느낄 때",
      action: "스트레스 요인을 제거하고 안전한 공간을 제공해주세요.",
      image: "assets/behaviors/dog-tail-between-legs.jpg",
      source: "반려동물행동연구소",
      lastUpdated: "2024-12-14"
    },
    {
      keyword: "바닥 긁기",
      meaning: "본능적인 영역 표시 행동이거나 스트레스 해소 방법입니다.",
      examples: "배변 후, 흥미로운 냄새를 맡은 후, 스트레스를 받을 때",
      action: "자연스러운 행동이므로 제지하지 말고, 적절한 장소에서 할 수 있도록 유도하세요.",
      image: "assets/behaviors/dog-scratching-ground.jpg",
      source: "개행동학연구센터",
      lastUpdated: "2024-12-13"
    },
    {
      keyword: "계속 핥기",
      meaning: "스트레스, 지루함, 알레르기, 또는 상처 부위의 불편함을 나타낼 수 있습니다.",
      examples: "발가락, 다리, 특정 부위를 지속적으로 핥을 때",
      action: "원인을 파악하여 스트레스 요인 제거나 수의사 상담을 받으세요.",
      image: "assets/behaviors/dog-licking.jpg",
      source: "수의피부과학회",
      lastUpdated: "2024-12-12"
    },
    {
      keyword: "원을 그리며 돌기",
      meaning: "흥분, 기쁨, 또는 강박적 행동을 나타낼 수 있습니다.",
      examples: "산책 전, 식사 시간, 또는 반복적으로 같은 자리에서 돌 때",
      action: "일시적이면 정상이지만, 지속적이면 수의사 상담이 필요합니다.",
      image: "assets/behaviors/dog-spinning.jpg",
      source: "동물강박행동연구소",
      lastUpdated: "2024-12-11"
    },
    {
      keyword: "하품하기",
      meaning: "피로감이 아닌 스트레스나 불안감을 달래는 신호일 수 있습니다.",
      examples: "긴장된 상황이나 새로운 환경에서",
      action: "스트레스 상황을 파악하고 편안한 환경을 조성해주세요.",
      image: "assets/behaviors/dog-yawning.jpg",
      source: "개스트레스연구소",
      lastUpdated: "2024-12-10"
    },
    {
      keyword: "코로 밀기",
      meaning: "관심끌기, 애정 표현, 또는 요구사항을 전달하는 의사소통 방법입니다.",
      examples: "관심을 받고 싶거나, 놀아달라고 할 때",
      action: "적절한 관심을 보여주되, 과도한 요구는 무시하여 균형을 맞추세요.",
      image: "assets/behaviors/dog-nose-nudging.jpg",
      source: "개의사소통연구회",
      lastUpdated: "2024-12-09"
    },
    {
      keyword: "귀 뒤로 젖히기",
      meaning: "복종, 불안, 또는 친화적 신호를 나타냅니다.",
      examples: "주인에게 혼날 때, 다른 개와 만날 때",
      action: "상황에 따라 안심시키거나 긍정적 강화를 해주세요.",
      image: "assets/behaviors/dog-ears-back.jpg",
      source: "개바디랭귀지연구소",
      lastUpdated: "2024-12-08"
    },
    {
      keyword: "입 벌리고 헥헥거리기",
      meaning: "체온 조절이나 스트레스, 흥분 상태를 나타냅니다.",
      examples: "운동 후, 더운 날씨, 긴장된 상황에서",
      action: "시원한 곳에서 휴식을 취하게 하고, 충분한 물을 제공하세요.",
      image: "assets/behaviors/dog-panting.jpg",
      source: "개체온조절연구소",
      lastUpdated: "2024-12-07"
    },
    {
      keyword: "앞발로 긁기",
      meaning: "관심끌기, 놀이 요청, 또는 욕구 표현의 신호입니다.",
      examples: "주인의 다리를 긁거나, 놀이를 요청할 때",
      action: "적절한 시간에 놀이나 산책으로 욕구를 충족시켜주세요.",
      image: "assets/behaviors/dog-pawing.jpg",
      source: "개놀이행동연구센터",
      lastUpdated: "2024-12-06"
    }
  ],
  
  supplements: [
    {
      "name": "오메가-3",
      "benefit": "피부·모질 개선",
      "effects": ["피부 염증 완화", "털 윤기 증진", "관절 건강 개선", "심혈관 건강 지원"],
      "precautions": ["과다 복용 시 설사 가능", "혈액 응고에 영향을 줄 수 있음", "수술 전 복용 중단 필요"],
      "dosage": "체중 1kg당 20-50mg, 하루 1-2회 식사와 함께 급여",
      "link": "#"
    },
    {
      "name": "프로바이오틱스",
      "benefit": "소화기 건강 개선",
      "effects": ["장내 유익균 증식", "소화 능력 향상", "면역력 강화", "설사 및 변비 개선"],
      "precautions": ["냉장 보관 필수", "항생제와 동시 복용 시 효과 감소", "급성 질환 시 수의사 상담"],
      "dosage": "소형견: 1억 CFU, 중대형견: 5-10억 CFU, 하루 1회 식사 후 급여",
      "link": "#"
    },
    {
      "name": "글루코사민",
      "benefit": "관절 건강 지원",
      "effects": ["연골 재생 도움", "관절염 완화", "관절 윤활액 생성", "운동 능력 개선"],
      "precautions": ["당뇨병 견에게 주의", "임신 및 수유 중 사용 금지", "알레르기 반응 주의"],
      "dosage": "체중 1kg당 20mg, 하루 1-2회 식사와 함께 급여, 4-6주 지속 복용",
      "link": "#"
    }
  ]
};
