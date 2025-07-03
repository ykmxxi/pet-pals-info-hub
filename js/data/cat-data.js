// 고양이 금지 음식 데이터
export const forbiddenFoods = [
    {
        name: "초콜릿",
        risk: "high",
        reason: "테오브로민 중독을 일으켜 구토, 설사, 심장 문제, 발작을 유발할 수 있습니다."
    },
    {
        name: "양파/마늘",
        risk: "high",
        reason: "적혈구를 손상시켜 빈혈을 유발할 수 있습니다. 모든 형태(생, 익힌 것, 가루)로 위험합니다."
    },
    {
        name: "포도/건포도",
        risk: "medium",
        reason: "신부전을 유발할 수 있습니다. 정확한 독성 물질과 작용 기전은 아직 밝혀지지 않았습니다."
    },
    {
        name: "자일리톨",
        risk: "high",
        reason: "인슐린 분비를 자극하여 혈당을 급격히 떨어뜨리고, 간부전을 유발할 수 있습니다."
    },
    {
        name: "알코올",
        risk: "high",
        reason: "중추신경계 억제, 호흡 곤란, 혼수상태, 심지어 사망에 이르게 할 수 있습니다."
    },
    {
        name: "카페인",
        risk: "medium",
        reason: "심박수 증가, 과민성, 불안, 구토, 설사를 유발할 수 있습니다."
    },
    {
        name: "아보카도",
        risk: "low",
        reason: "페르신이라는 성분이 구토와 설사를 유발할 수 있습니다. 고양이에게는 비교적 낮은 위험을 가집니다."
    },
    {
        name: "날생선/날고기",
        risk: "medium",
        reason: "살모넬라 또는 리스테리아 감염의 위험이 있으며, 티아민 결핍을 유발할 수 있습니다."
    },
    {
        name: "뼈",
        risk: "medium",
        reason: "소화기관을 막거나 손상시킬 수 있으며, 특히 작은 뼈 조각이 위험합니다."
    },
    {
        name: "유제품",
        risk: "low",
        reason: "대부분의 고양이는 유당불내증이 있어 설사나 소화 불량을 일으킬 수 있습니다."
    }
];

// 고양이 행동 해석 데이터
export const catBehaviors = [
    {
        title: "골골거림",
        description: "만족, 행복, 편안함을 나타내는 일반적인 신호입니다. 때로는 통증을 진정시키거나 스스로를 위로하기 위해 골골거리기도 합니다."
    },
    {
        title: "반죽하기",
        description: "앞발로 부드럽게 누르는 행동은 어릴 적 어미 고양이에게 젖을 먹던 행동에서 비롯됩니다. 편안함과 만족감을 나타냅니다."
    },
    {
        title: "머리 들이밀기",
        description: "애정과 관심을 표현하는 행동입니다. 자신의 냄새를 묻혀 영역을 표시하고, 사회적 유대감을 형성하려는 시도입니다."
    },
    {
        title: "핥아주기",
        description: "애정 표현의 한 형태로, 사회적 유대감을 강화하고 그룹의 일원임을 나타냅니다. 또한, 털을 정리해주는 행동일 수도 있습니다."
    },
    {
        title: "꼬리 흔들기",
        description: "고양이가 흥분했거나, 불안하거나, 짜증이 났을 때 꼬리를 흔들 수 있습니다. 개의 꼬리 흔들기와는 다른 의미를 가집니다."
    },
    {
        title: "하악질",
        description: "명백한 경고 신호로, 위협을 느끼거나 불편할 때 공격적인 의사를 표현하는 것입니다. 거리를 두라는 의미입니다."
    },
    {
        title: "털 세우기",
        description: "고양이가 두려움, 흥분, 또는 공격성을 느낄 때 털을 세울 수 있습니다. 이는 자신을 더 크게 보이게 하여 상대를 위협하려는 행동입니다."
    },
    {
        title: "눈 깜빡이기",
        description: "느린 눈 깜빡임은 '고양이 키스'라고도 불리며, 신뢰와 편안함을 나타내는 신호입니다. 고양이가 당신을 편안하게 생각하고 있다는 긍정적인 표현입니다."
    },
    {
        title: "숨기",
        description: "불안하거나 스트레스를 받을 때 숨는 것은 고양이가 안전한 장소를 찾고 스스로를 보호하려는 본능적인 행동입니다."
    },
    {
        title: "높은 곳에 오르기",
        description: "높은 곳에 올라 주변을 감시하는 것은 고양이에게 안전감을 제공하고, 영역을 확보하며, 잠재적인 위협을 감지하는 데 도움이 됩니다."
    }
];

// 영양제 추천 데이터 (확장)
export const catSupplements = [
  {
    id: 1,
    name: "고양이 전용 멀티비타민",
    category: "종합영양",
    ageGroup: "전 연령",
    description: "고양이에게 특화된 필수 비타민과 미네랄을 제공합니다.",
    benefits: ["면역력 강화", "건강한 성장", "활력 증진"],
    ingredients: ["비타민A", "타우린", "비타민E", "아연", "철분"],
    dosage: "체중 5kg당 1정, 하루 1회",
    precautions: ["과다 복용 금지", "수의사와 상담 후 복용"],
    price: "22,000원 ~ 32,000원",
    rating: 4.4,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=300"
  },
  {
    id: 2,
    name: "헤어볼 케어",
    category: "소화건강",
    ageGroup: "전 연령",
    description: "털뭉치 배출을 도와주고 소화기능을 개선합니다.",
    benefits: ["털뭉치 배출", "소화 개선", "변비 예방"],
    ingredients: ["식이섬유", "파파야 효소", "오메가-3"],
    dosage: "하루 1-2정, 식후 복용",
    precautions: ["충분한 수분 섭취", "급성 변비 시 즉시 병원"],
    price: "25,000원 ~ 35,000원",
    rating: 4.6,
    reviews: 1150,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=300"
  },
  {
    id: 3,
    name: "요로건강 크랜베리",
    category: "요로건강",
    ageGroup: "전 연령",
    description: "크랜베리 추출물로 요로계 건강을 지원합니다.",
    benefits: ["요로감염 예방", "방광 건강", "pH 균형"],
    ingredients: ["크랜베리 추출물", "D-만노스", "비타민C"],
    dosage: "하루 1정, 물과 함께 복용",
    precautions: ["충분한 수분 섭취", "신장질환 시 상담"],
    price: "30,000원 ~ 45,000원",
    rating: 4.5,
    reviews: 720,
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300"
  },
  {
    id: 4,
    name: "스트레스 완화 진정제",
    category: "행동건강",
    ageGroup: "전 연령",
    description: "천연 성분으로 스트레스를 완화하고 안정감을 제공합니다.",
    benefits: ["스트레스 완화", "불안감 감소", "수면 개선"],
    ingredients: ["L-테아닌", "캐모마일", "발레리안 루트"],
    dosage: "스트레스 상황 30분 전 1정",
    precautions: ["졸음 유발 가능", "운전 시 주의"],
    price: "35,000원 ~ 50,000원",
    rating: 4.3,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300"
  },
  {
    id: 5,
    name: "관절건강 글루코사민",
    category: "관절건강",
    ageGroup: "7세 이상",
    description: "고령 고양이의 관절 건강을 위한 글루코사민 복합체입니다.",
    benefits: ["관절 유연성", "연골 보호", "활동성 개선"],
    ingredients: ["글루코사민", "콘드로이틴", "오메가-3"],
    dosage: "체중 3kg당 1정, 하루 1회",
    precautions: ["간 질환 시 주의", "정기 검진 필요"],
    price: "40,000원 ~ 55,000원",
    rating: 4.7,
    reviews: 680,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300"
  },
  {
    id: 6,
    name: "치아 & 구강 건강",
    category: "구강건강",
    ageGroup: "전 연령",
    description: "구강 건강을 위한 효소와 미네랄이 함유된 영양제입니다.",
    benefits: ["치석 감소", "구취 제거", "잇몸 건강"],
    ingredients: ["효소", "칼슘", "인", "비타민D"],
    dosage: "하루 1정, 씹어서 복용",
    precautions: ["치아 문제 시 즉시 병원", "정기 스케일링"],
    price: "25,000원 ~ 40,000원",
    rating: 4.1,
    reviews: 380,
    image: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=300"
  }
];
