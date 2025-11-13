export interface Project {
  slug: string;
  name: string;
  year: string;
  summary: string;
  description: string;
  skills: string[];
  highlights: string[];
  contributions: {
    level1: string;
    level2: string[];
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "Project1",
    name: "기업은행 기업 스마트뱅킹 전면 개편 추진 사업",
    year: "2024.04 - 2024.12",
    summary:
      "전체 화면 UI/UX개선 및 이체 프로세스 간소화",
    description:
      "전체 화면 UI/UX개선 및 이체 프로세스 간소화",
    skills: [
      "JavaScript", "JAVA", "JSP",
      "SQL",
      "SVN", "ChangeFlow",
      "JexFramework",
      "Redmine",
    ],
    highlights: [
      "Crafted animated drag-and-drop interactions for assembling meal plans across the week.",
      "Integrated a suggestion engine that surfaces recipes based on dietary preferences and pantry availability.",
      "Shipped a polished responsive layout that feels at home on phones, tablets, and desktops.",
    ],
    contributions: [
      {
        level1 : "조회 메뉴 하위 모든 화면 UI 통일 및 개선",
        level2 : [
          "스켈레톤 UI 도입",
          "메모 등록/수정/삭제 공통모듈 개발",
          "은행명, 외화 종류 등 조회 조건 입력 공통 모듈 개발",
          "입력 값 정합성 체크 및 입력 완료 시 다음 칸 커서 이동 구현",
          "카드번호, 비밀번호 등 입력 값 표시 형식 제어",          
        ],
      },
      {
        level1 : "공과금 메뉴 하위 모든 화면 및 펀드 가입하기 화면",
        level2 : [
          "단독 실행 및 다단계 결재 화면 내 비밀번호 및 OTP 입력 모듈 교체"
        ],
      }
    ],
    links: [
      {
        label: "Live Site",
        href: "https://jangyeyoung.dev/work/interactive-recipe-planner",
      },
      {
        label: "Source",
        href: "https://github.com/jangyeyoung/interactive-recipe-planner",
      },
    ],
  },
  {
    slug: "Project2",
    name: "전북은행 디지털 유니버셜 뱅킹 및 UX/UI 프로젝트",
    year: "2023.09 - 2024.01",
    summary:
      "주요 화면  React전환을 통한  UX/UI개선",
    description:
      "I collaborated with transit analysts to deliver a tool that transforms dense CSV exports into visual stories. It surfaces congestion trends and ridership patterns so planners can prioritize infrastructure improvements.",
    skills: [
      "React",
      "JavaScript",
      "Git",
      "SVN",
      "JexFramework",
      "RedMine",
    ],
    highlights: [
      "Engineered reusable visualization primitives powering heat maps, trend lines, and KPI callouts.",
      "Implemented state synchronization that keeps filters aligned across charts and tables.",
      "Delivered dark mode theming for control center environments.",
    ],
    contributions: [
      {
        level1 : "온보딩 화면 개선",
        level2 : [
          "Lottie 이용한 UI 개선",
          "팝업 ‘하루동안 보지않기’ 기능 구현"
        ],
      },
      {
        level1 : "상품몰 화면 개선",
        level2 : [
          "상품몰 메인 화면 신설",
          "관심상품 조회/등록/해제 기능 구현",
          "정렬 순서 변경 구현(추천순, 금리순 등)",
        ],
      },
      {
        level1 : "금융계산기 메뉴 신설",
        level2 : [
          "예금, 적금 상품 만기금액 및 상환 방식에 따른 대출 이자 계산",
          "정규식 이용한 사용자 입력값(숫자만 입력, 자릿수 등) 제어",                    
        ],
      }
    ],
    links: [
      {
        label: "Product Brief",
        href: "https://jangyeyoung.dev/work/city-commute-dashboard",
      },
      {
        label: "Source",
        href: "https://github.com/jangyeyoung/city-commute-dashboard",
      },
    ],
  },
  {
    slug: "Project3",
    name: "기업은행 기업뱅킹 간편인증 도입 및 내부통제 기능강화 프로젝트",
    year: "2023.02 - 2023.07",
    summary:
      "IBK 인증서 도입 및 내부통제 안심센터 신메뉴 개설",
    description:
      "I built a calming journaling flow that nudges consistent reflection. The app personalizes prompts, tracks mood trends, and celebrates milestones to keep motivation high.",
    skills: [
      "Java", "JavaScript", "JSP", "SQL", "SVN", "ChangeFlow", "JexFramework", "Redmine",
    ],
    highlights: [
      "Prototyped the full experience in Figma and translated it into coded UI components.",
      "Implemented secure Supabase integration for journaling data and account auth.",
      "Launched growth moments including email recaps and shareable achievements.",
    ],
   contributions: [
      {
        level1 : "내부통제 안심센터 신메뉴 개설",
        level2 : [
          "인증서, OTP 발급이력, 로그인 이력 조회 메뉴 구현",
          "이용 및 이체시간 관리(이용자별 로그인, 이체 가능 시간 설정) 메뉴 구현",
          "보조관리자 지정 및 권한 설정 메뉴 구현",
          "신분증 진위여부 확인 솔루션 도입",
        ],
      },
    ],
    links: [
      {
        label: "Case Study",
        href: "https://jangyeyoung.dev/work/wellness-journal",
      },
      {
        label: "Source",
        href: "https://github.com/jangyeyoung/wellness-journal",
      },
    ],
  },
  {
    slug: "Project4",
    name: "기업은행 기업디지털 채널 혁신사업",
    year: "2022.02 - 2022.12",
    summary:
      "기업뱅킹 인터넷뱅킹 및 스마트뱅킹 고도화",
    description:
      "I built a calming journaling flow that nudges consistent reflection. The app personalizes prompts, tracks mood trends, and celebrates milestones to keep motivation high.",
    skills: [
      "Java", "JavaScript", "JSP", "SQL", "SVN", "ChangeFlow", "JexFramework", "Redmine",
    ],
    highlights: [
      "Prototyped the full experience in Figma and translated it into coded UI components.",
      "Implemented secure Supabase integration for journaling data and account auth.",
      "Launched growth moments including email recaps and shareable achievements.",
    ],
   contributions: [
      {
        level1 : "뱅킹관리 메뉴 고도화",
        level2 : [
          "이용시간 관리 메뉴 신설",
          "관리자페이지 뱅킹관리 이력조회 메뉴 신설",
          "원클릭관리자설정 메뉴 개선 및 역거래 개발",          
        ],
      },
      {
        level1 : "기타",
        level2 : [
          "증명서 양식 개선",
          "다국어 페이지 개선",
          "그리드 솔루션 교체",
        ],
      }
    ],
    links: [
      {
        label: "Case Study",
        href: "https://jangyeyoung.dev/work/wellness-journal",
      },
      {
        label: "Source",
        href: "https://github.com/jangyeyoung/wellness-journal",
      },
    ],
  },
  {
    slug: "Project5",
    name: "머신러닝을 이용한 FDS 구축 연구",
    year: "2020.07 - 2021.12",
    summary:
      "머신러닝을 활용하여 뱅킹 이용자의 정보 및 거래 정보를 분석, 이상 금융 거래 패턴 탐지 연구 수행 및 플랫폼 화면 구현",
    description:
      "I built a calming journaling flow that nudges consistent reflection. The app personalizes prompts, tracks mood trends, and celebrates milestones to keep motivation high.",
    skills: [
      "JavaScript", "HTML", "CSS", "SQL", "MariaDB", "AWS",
    ],
    highlights: [
      "Prototyped the full experience in Figma and translated it into coded UI components.",
      "Implemented secure Supabase integration for journaling data and account auth.",
      "Launched growth moments including email recaps and shareable achievements.",
    ],
  contributions: [
      {
        level1 : "다양한 머신러닝 알고리즘을 조사하고 프로젝트 목적에 적합한 기법 선정에 참여",
        level2 : [],
      },
      {
        level1 : "DB 설계 참여",
        level2 : [],
      },
      {
        level1 : "금융 거래 데이터를 이용한 머신러닝 실행 및 튜닝, 이상 거래 탐지 결과 모니터링 등 플랫폼 화면 설계 및 구현",
        level2 : [],
      }
    ],
    links: [
      {
        label: "Case Study",
        href: "https://jangyeyoung.dev/work/wellness-journal",
      },
      {
        label: "Source",
        href: "https://github.com/jangyeyoung/wellness-journal",
      },
    ],
  },  
];
