// 강아지 금지 음식 데이터
export const forbiddenFoods = [
  {
    name: "초콜릿",
    risk: "high",
    reason: "테오브로민 중독을 일으켜 구토, 설사, 심장 문제, 발작을 유발할 수 있습니다."
  },
  {
    name: "양파",
    risk: "medium",
    reason: "적혈구를 손상시켜 빈혈을 유발할 수 있습니다."
  },
  {
    name: "마늘",
    risk: "medium",
    reason: "양파와 유사하게 적혈구를 손상시켜 빈혈을 유발할 수 있습니다."
  },
  {
    name: "포도",
    risk: "high",
    reason: "신부전을 일으킬 수 있는 독성 물질이 포함되어 있습니다."
  },
  {
    name: "건포도",
    risk: "high",
    reason: "포도와 동일하게 신부전을 일으킬 수 있습니다."
  },
  {
    name: "자일리톨",
    risk: "high",
    reason: "급격한 혈당 강하와 간부전을 유발할 수 있습니다."
  },
  {
    name: "아보카도",
    risk: "low",
    reason: "페르신이라는 성분이 구토와 설사를 유발할 수 있습니다."
  },
  {
    name: "알코올",
    risk: "high",
    reason: "중추신경계 억제, 호흡 곤란, 혼수상태를 유발할 수 있습니다."
  },
  {
    name: "카페인",
    risk: "medium",
    reason: "심박수 증가, 불안, 흥분, 발작을 유발할 수 있습니다."
  },
  {
    name: "뼈",
    risk: "low",
    reason: "소화기계 손상, 질식, 변비 등을 유발할 수 있습니다."
  },
  {
    name: "견과류 (마카다미아)",
    risk: "medium",
    reason: "근육 떨림, 구토, 고열을 유발할 수 있습니다."
  },
  {
    name: "우유 및 유제품",
    risk: "low",
    reason: "유당불내증이 있는 경우 소화 불량, 설사를 유발할 수 있습니다."
  },
  {
    name: "빵 반죽",
    risk: "medium",
    reason: "위장에서 팽창하여 통증을 유발하고, 알코올이 생성되어 중독을 일으킬 수 있습니다."
  },
  {
    name: "복숭아",
    risk: "low",
    reason: "씨앗에 시안화물이 함유되어 중독을 일으킬 수 있습니다."
  },
  {
    name: "체리",
    risk: "low",
    reason: "씨앗에 시안화물이 함유되어 중독을 일으킬 수 있습니다."
  },
  {
    name: "감",
    risk: "low",
    reason: "씨앗이 장폐색을 일으킬 수 있습니다."
  },
  {
    name: "버섯",
    risk: "medium",
    reason: "독성 버섯은 간부전, 신부전, 신경계 문제를 일으킬 수 있습니다."
  },
  {
    name: "토마토 잎과 줄기",
    risk: "low",
    reason: "솔라닌이라는 성분이 소화기 문제를 일으킬 수 있습니다."
  },
  {
    name: "감자 싹과 껍질",
    risk: "low",
    reason: "솔라닌이라는 성분이 소화기 문제를 일으킬 수 있습니다."
  },
  {
    name: "날생선",
    risk: "low",
    reason: "기생충 감염의 위험이 있습니다."
  }
];

// 강아지 행동 데이터
export const dogBehaviors = [
  {
    title: "꼬리 흔들기",
    description: "강아지가 꼬리를 흔드는 것은 일반적으로 행복하거나 흥분했다는 신호입니다. 하지만 때로는 불안하거나 경계하는 상황에서도 꼬리를 흔들 수 있습니다. 꼬리의 위치와 흔드는 속도를 함께 살펴봐야 합니다.",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop",
    tips: "꼬리가 높이 올라가 있으면서 빠르게 흔들면 흥분, 낮게 천천히 흔들면 불안함을 나타낼 수 있습니다."
  },
  {
    title: "짖기",
    description: "강아지가 짖는 이유는 다양합니다. 경고, 불안, 심심함, 주의 끌기 등 여러 가지 이유로 짖을 수 있습니다. 짖는 상황과 강아지의 다른 행동을 함께 고려하여 이유를 파악해야 합니다.",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1568531841356-eb5ca4999698?w=300&h=200&fit=crop",
    tips: "갑작스러운 짖음은 외부 자극에 대한 경계 신호일 수 있으며, 반복적인 짖음은 심심함이나 분리 불안을 나타낼 수 있습니다."
  },
  {
    title: "낑낑거림",
    description: "강아지가 낑낑거리는 것은 보통 무언가를 원하거나 불편함을 느낄 때 나타내는 행동입니다. 배고픔, 갈증, 통증, 불안 등 다양한 이유로 낑낑거릴 수 있습니다.",
    category: "Emotional Expression",
    image: "https://images.unsplash.com/photo-1591160833167-c9572492dd81?w=300&h=200&fit=crop",
    tips: "낑낑거림이 지속될 경우, 즉시 필요한 것을 제공하거나 수의사와 상담하여 건강 문제를 확인해야 합니다."
  },
  {
    title: "하품",
    description: "강아지가 하품을 하는 것은 피곤하거나 지루하다는 신호일 수 있지만, 스트레스를 받거나 불안할 때도 하품을 할 수 있습니다. 특히 낯선 환경이나 상황에서 하품을 한다면 스트레스의 신호일 가능성이 높습니다.",
    category: "Emotional Expression",
    image: "https://images.unsplash.com/photo-1558981403-c5551c5e66a2?w=300&h=200&fit=crop",
    tips: "연속적인 하품은 불안감을 나타낼 수 있으므로, 편안한 환경을 제공하거나 스트레스 요인을 제거해주는 것이 좋습니다."
  },
  {
    title: "핥기",
    description: "강아지가 핥는 행동은 애정을 표현하거나 관심을 끌기 위한 것일 수 있습니다. 또한, 불안하거나 스트레스를 받을 때 자신을 진정시키기 위해 핥을 수도 있습니다. 과도한 핥기는 피부 문제나 알레르기, 강박 행동의 신호일 수 있습니다.",
    category: "Social Interaction",
    image: "https://images.unsplash.com/photo-1573382993553-dd9efcfc8a55?w=300&h=200&fit=crop",
    tips: "지나친 핥기는 피부병이나 스트레스의 원인이 될 수 있으므로, 원인을 파악하고 적절한 조치를 취해야 합니다."
  },
  {
    title: "엎드리기",
    description: "강아지가 엎드리는 것은 복종, 편안함, 또는 두려움을 나타내는 신호일 수 있습니다. 상황에 따라 강아지의 감정을 파악해야 합니다. 예를 들어, 주인이 화를 내고 있을 때 엎드린다면 복종의 의미일 수 있습니다.",
    category: "Body Language",
    image: "https://images.unsplash.com/photo-1543466835-00a7907ca9be?w=300&h=200&fit=crop",
    tips: "갑작스럽게 엎드리는 행동은 통증이나 불편함을 나타낼 수 있으므로, 주의 깊게 관찰해야 합니다."
  },
  {
    title: "몸 떨기",
    description: "강아지가 몸을 떠는 것은 추위를 느끼거나 두려움, 불안을 느낄 때 나타나는 행동입니다. 또한, 통증이나 질병의 신호일 수도 있습니다. 몸 떨림이 계속된다면 수의사에게 상담을 받는 것이 좋습니다.",
    category: "Physical Condition",
    image: "https://images.unsplash.com/photo-1580269437439-c499145afa4f?w=300&h=200&fit=crop",
    tips: "지속적인 몸 떨림은 건강 문제의 신호일 수 있으므로, 수의사의 진료를 받는 것이 중요합니다."
  },
  {
    title: "숨기",
    description: "강아지가 숨는 것은 두려움, 불안, 또는 불편함을 느낄 때 나타나는 행동입니다. 천둥, 불꽃놀이, 낯선 사람 등 강아지를 불안하게 만드는 요인을 피하기 위해 숨을 수 있습니다.",
    category: "Emotional Expression",
    image: "https://images.unsplash.com/photo-1554943052-503b49999857?w=300&h=200&fit=crop",
    tips: "숨는 행동은 불안의 표현이므로, 안전한 공간을 제공하고 불안 요인을 제거해주는 것이 필요합니다."
  },
  {
    title: "배변 실수",
    description: "강아지가 훈련된 장소가 아닌 다른 곳에서 배변을 하는 것은 여러 가지 이유가 있을 수 있습니다. 스트레스, 불안, 질병, 또는 훈련 부족 등이 원인일 수 있습니다. 수의사와 상담하여 정확한 원인을 파악하고 해결해야 합니다.",
    category: "Health & Training",
    image: "https://images.unsplash.com/photo-1616016998421-590949c2ca9b?w=300&h=200&fit=crop",
    tips: "배변 실수는 건강 문제나 스트레스의 신호일 수 있으므로, 수의사와 상담하여 원인을 파악하는 것이 중요합니다."
  },
  {
    title: "물건 씹기",
    description: "강아지가 물건을 씹는 것은 자연스러운 행동이지만, 과도하게 씹는다면 심심함, 스트레스, 또는 분리 불안의 신호일 수 있습니다. 적절한 장난감을 제공하고 충분한 운동을 시켜주는 것이 좋습니다.",
    category: "Behavioral Issues",
    image: "https://images.unsplash.com/photo-1561755575-5585b04cb29f?w=300&h=200&fit=crop",
    tips: "물건 씹기는 스트레스 해소의 한 방법일 수 있으므로, 적절한 씹기 장난감을 제공하여 파괴적인 행동을 줄일 수 있습니다."
  }
];

// 영양제 추천 데이터 (확장)
export const dogSupplements = [
  {
    id: 1,
    name: "멀티비타민",
    category: "종합영양",
    ageGroup: "전 연령",
    description: "강아지에게 필요한 필수 비타민과 미네랄을 균형있게 제공합니다.",
    benefits: ["면역력 강화", "건강한 성장", "활력 증진"],
    ingredients: ["비타민A", "비타민D", "비타민E", "아연", "철분"],
    dosage: "체중 10kg당 1정, 하루 1회",
    precautions: ["과다 복용 금지", "수의사와 상담 후 복용"],
    price: "25,000원 ~ 35,000원",
    rating: 4.5,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300"
  },
  {
    id: 2,
    name: "관절건강 글루코사민",
    category: "관절건강",
    ageGroup: "7세 이상",
    description: "나이든 강아지의 관절 건강을 위한 글루코사민과 콘드로이틴 복합체입니다.",
    benefits: ["관절 유연성 증진", "연골 보호", "통증 완화"],
    ingredients: ["글루코사민", "콘드로이틴", "MSM", "오메가-3"],
    dosage: "체중 5kg당 1정, 하루 2회",
    precautions: ["간 질환 시 주의", "장기 복용 시 정기 검진 필요"],
    price: "45,000원 ~ 60,000원",
    rating: 4.7,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300"
  },
  {
    id: 3,
    name: "프로바이오틱스",
    category: "소화건강",
    ageGroup: "전 연령",
    description: "장내 유익균을 증가시켜 소화기능을 개선하고 면역력을 높입니다.",
    benefits: ["소화 개선", "면역력 강화", "변냄새 감소"],
    ingredients: ["락토바실러스", "비피도박테리움", "프리바이오틱스"],
    dosage: "하루 1-2정, 식후 복용",
    precautions: ["항생제 복용 시 간격 조절", "냉장 보관"],
    price: "30,000원 ~ 40,000원",
    rating: 4.3,
    reviews: 675,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031ad70?w=300"
  },
  {
    id: 4,
    name: "피부 & 모질 개선",
    category: "피부건강",
    ageGroup: "전 연령",
    description: "오메가-3와 비오틴이 풍부하여 건강한 피부와 윤기나는 털을 만들어줍니다.",
    benefits: ["털빠짐 감소", "피부 건강", "모질 개선"],
    ingredients: ["오메가-3", "오메가-6", "비오틴", "아연"],
    dosage: "체중 10kg당 1캡슐, 하루 1회",
    precautions: ["피부 알레르기 병력 확인", "점진적 복용 시작"],
    price: "35,000원 ~ 50,000원",
    rating: 4.4,
    reviews: 520,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300"
  },
  {
    id: 5,
    name: "심장 건강 코엔자임Q10",
    category: "심장건강",
    ageGroup: "5세 이상",
    description: "심장 근육을 강화하고 심혈관 건강을 지원하는 코엔자임Q10입니다.",
    benefits: ["심장 기능 개선", "혈액순환 촉진", "항산화 효과"],
    ingredients: ["코엔자임Q10", "L-카르니틴", "타우린"],
    dosage: "체중 10kg당 1캡슐, 하루 1회",
    precautions: ["심장질환 진단 후 복용", "혈압약 복용 시 상담"],
    price: "50,000원 ~ 70,000원",
    rating: 4.6,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300"
  },
  {
    id: 6,
    name: "눈 건강 루테인",
    category: "눈건강",
    ageGroup: "전 연령",
    description: "루테인과 제아잔틴이 눈 건강을 보호하고 시력을 유지합니다.",
    benefits: ["시력 보호", "백내장 예방", "눈 피로 완화"],
    ingredients: ["루테인", "제아잔틴", "비타민A", "블루베리 추출물"],
    dosage: "하루 1정, 식후 복용",
    precautions: ["당뇨 있는 경우 주의", "정기적 안과 검진"],
    price: "28,000원 ~ 38,000원",
    rating: 4.2,
    reviews: 410,
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300"
  }
];

// 통합 데이터 객체 export 추가
export const dogData = {
  forbiddenFoods,
  behaviors: dogBehaviors,
  supplements: dogSupplements
};
