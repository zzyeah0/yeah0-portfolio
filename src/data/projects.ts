import { images } from '@/img/portfolioimg';

export interface Improvement {
  title: string;
  problem: string[];
  solution: string[];
  result: string[];
}

export interface Project {
  slug: string;
  name: string;
  company: string;
  year: string;
  summary: string;
  description: string;
  skills: string[];
  highlights: string[];
  /** 히어로 영역에 보여줄 핵심 요약 카드 (선택) */
  keyPoints?: {
    title: string;
    desc: string;
  }[];
  /** 히어로 영역 오른쪽에 보여줄 대표 이미지 (선택) */
  heroImage?: string;
  contributions: {
    level1: string;
    level2: string[];
    img: string[];
  }[];
  improvements: Improvement[];
  links: {
    label: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "7",
    name: "리브의원 홈페이지 및 어드민 구축·고도화",
    company: "solious",
    year: "2026.04 - 2026.06",
    summary:
      "병·의원 홈페이지 및 어드민 서비스의 기능 개발과 신규 지점 확대에 따른 서비스 구축·배포 및 운영 기능 고도화",
    description:
      "병·의원 홈페이지 및 어드민 서비스의 기능 개발과 신규 지점 확대에 따른 서비스 구축·배포 및 운영 기능 고도화",
    skills: [
      "TypeScript", "JAVA", "Vue.js",
      "SQL", "MariaDB", "Git", "Jenkins", "pm2", "Nginx", "Claude"
    ],
    highlights: [
      "Crafted animated drag-and-drop interactions for assembling meal plans across the week.",
      "Integrated a suggestion engine that surfaces recipes based on dietary preferences and pantry availability.",
      "Shipped a polished responsive layout that feels at home on phones, tablets, and desktops.",
    ],
    keyPoints: [
      { title: "SEO 최적화", desc: "CSR → SSR 전환을 통한 검색엔진 최적화 및 성능 개선" },
      { title: "다국어 지원", desc: "한국어·영어·일본어·중국어 간체·번체 지원 및 어드민 다국어 콘텐츠 관리 기능 구현" },
      { title: "신규 지점 확장", desc: "신규 지점 서버 환경 설정 및 배포를 통한 서비스 운영 범위 확장" },
    ],
    contributions: [
      {
        level1 : "다국어 기능 도입",
        level2 : [
          "한국어로만 제공되던 홈페이지에 영어·일본어·중국어 번체·간체 지원 기능 개발",
          "홈페이지·어드민·API·DB를 연계하여 언어별 콘텐츠 관리 및 노출 기능 구현",
          "예약 시 고객이 선택한 언어 정보를 저장·조회할 수 있도록 어드민 페이지 개선",   
        ],
        img : [],
      },
      {
        level1 : "홈페이지 SEO 구조 개선",
        level2 : [
          "CSR → SSR 전환을 통한 검색엔진 최적화 기반 마련",
          "Claude를 활용하여 Nuxt SSR 전환 과정의 렌더링 및 캐싱 구조를 검토하고 구현 방안 분석",
          "SSR 전환에 따른 캐싱 문제로 어드민 데이터 변경사항이 즉시 반영되지 않는 문제를 해결하기 위해 데이터 수정 시 캐시 초기화 기능 구현",
        ],
        img : [],
      },
      {
        level1 : "히어로 영역 성능 개선",
        level2 : [
          "이미지 배너를 고용량 동영상으로 변경하면서 발생한 초기 로딩 문제 개선",
          "동영상 용량·인코딩 방식 최적화 및 프리로딩 적용",
        ],
        img : [],
      },
      {
        level1 : "홈페이지 및 어드민 기능 고도화",
        level2 : [
          "홈페이지 이벤트 카테고리 조회 및 어드민 등록·관리 기능 개발",
          "상품목록 엑셀 업로드·다운로드 기능 및 휴무일 관리 기능 개선",
        ],
        img : [],
      },
      {
        level1 : "신규 지점 서비스 구축",
        level2 : [
          "신규 지점 홈페이지 서버 환경 구성 및 배포",
        ],
        img : [],
      }
    ],
    improvements: [
      {
        title: "검색엔진 최적화를 위한 렌더링 구조 개선 문제",
        problem: [
          "기존 CSR 방식의 검색 노출 한계를 개선하기 위해 Nuxt 기반 SSR 구조로 전환",
          "localStorage 기반 언어 설정을 서버 초기 렌더링 단계에서 확인할 수 없는 문제 발생",
          "관리자 콘텐츠 수정 후 기존 캐시가 남아 변경 사항이 반영되지 않는 문제 발생",
        ],
        solution: [
          "Nuxt SSR 구조로 전환하고, localStorage 대신 Nuxt i18n의 locale URL prefix를 활용, 서버에서도 언어를 식별할 수 있도록 개선",
          "관리자 콘텐츠 수정 API 호출 이후 관련 캐시를 삭제하도록 구현해 변경된 콘텐츠가 사용자 화면에 반영되도록 처리",
          "Sitemap, robots.txt, 301 리다이렉트, Title/Description, 구조화 데이터 및 LLMS 등 SEO 요소 적용",
        ],
        result: [
          "검색엔진의 페이지 콘텐츠 수집을 고려한 렌더링 구조 개선",
          "SSR 환경의 초기 언어 식별 문제 해결 및 관리자 콘텐츠 변경 사항의 반영 구조 개선",
        ]
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
    slug: "6",
    name: "CRM 시스템 개발",
    company: "solious",
    year: "2026.04 - 2026.06",
    summary:
      "병·의원의 고객 관계 및 운영 관리를 위한 CRM 시스템 구축 프로젝트",
    description:
      "병·의원의 고객 관계 및 운영 관리를 위한 CRM 시스템 구축 프로젝트",
    skills: [
      "TypeScript", "JAVA", "React",
      "SQL", "MariaDB", "Git", "Claude"
    ],
    highlights: [
      "Crafted animated drag-and-drop interactions for assembling meal plans across the week.",
      "Integrated a suggestion engine that surfaces recipes based on dietary preferences and pantry availability.",
      "Shipped a polished responsive layout that feels at home on phones, tablets, and desktops.",
    ],
    keyPoints: [
      { title: "홈페이지 CMS", desc: "CRM에서 홈페이지 콘텐츠를 직접 관리할 수 있는 어드민 기능 구축" },
      { title: "서비스 연동", desc: "상품 조회·예약 API 및 회원 데이터 연계를 통한 홈페이지와 CRM 통합" },
      { title: "공통 컴포넌트", desc: "재사용 가능한 CRM 공통 UI 컴포넌트 개발을 통한 화면 일관성 및 유지보수성 개선" },
    ],
    contributions: [
      {
        level1 : "CRM 기반 홈페이지 관리 기능 개발",
        level2 : [
          "CRM에서 홈페이지 콘텐츠를 관리할 수 있도록 홈페이지 어드민 메뉴 개발",
          "히어로 섹션, 상품·이벤트, 휴무일·운영시간, 의료진 소개, 병원 시설, 전후사진 등 홈페이지 콘텐츠 관리 기능 구현",    
        ],
        img : [],
      },
      {
        level1 : "CRM 연동 홈페이지 및 회원 기능 개발",
        level2 : [
          "CRM에서 관리한 콘텐츠가 홈페이지에 노출될 수 있도록 홈페이지 프로토타입 개발",
          "상품목록 조회 및 예약 API를 개발하여 홈페이지와 CRM 간 데이터 연계 기능 구현",
          "회원가입 및 로그인 기능과 고객관리 DB 연계 기능 개발",
          "예약조회, 잔여시술, 보유금액 등을 확인할 수 있는 마이페이지 기능 개발",
        ],
        img : [],
      },
      {
        level1 : "CRM 공통 컴포넌트 개발 및 적용",
        level2 : [
          "CRM 신규 메뉴 개발 시 퍼블리싱 없이 개발할 수 있도록 공통 컴포넌트 개발",
          "Claude를 활용한 기존 화면의 UI 구조 및 반복 패턴을 분석 및 공통 컴포넌트 개발",
          "AI 생성 코드를 프로젝트 구조와 기존 화면의 요구사항에 맞게 검토·수정하여 적용하고 UI 일관성 및 유지보수성 개선",
        ],
        img : [],
      }
    ],
    improvements: [
      {
        title: "공통 컴포넌트 개발",
        problem: [
          "애자일 방식으로 개발이 진행되어 화면정의서와 퍼블리싱 없이 화면이 구현",
          "화면별로 UI 요소의 크기, 폰트, 간격 등 스타일이 일관되지 않아 전체적인 UI 통일성이 떨어지는 문제 발생",
          "여러 화면에서 유사한 UI를 개별적으로 구현하면서 일관된 스타일을 유지하고 관리할 수 있는 구조 필요",
        ],
        solution: [
          "기존 CRM 화면의 UI 패턴을 분석해 공통으로 활용할 수 있는 요소를 Vue 컴포넌트로 분리",
          "Props를 활용해 화면별 데이터와 설정을 전달하도록 구성하여 동일한 컴포넌트를 여러 화면에서 재사용할 수 있도록 구현",
          "공통 컴포넌트를 통해 UI 요소의 스타일과 구조를 일관되게 관리할 수 있도록 개선",
        ],
        result: [
          "화면별로 달랐던 UI 요소의 스타일과 구조를 통일",
          "공통 UI의 재사용성을 높이고, 수정 및 유지보수가 용이한 컴포넌트 구조 마련",
        ]
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
    slug: "5",
    name: "기업은행 기업 스마트뱅킹 전면 개편 추진 사업",
    company: "nic",
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
    keyPoints: [
      { title: "공통 UI 모듈화", desc: "계좌 목록·거래내역 등 조회 화면의 공통 기능 구현 및 재사용성 개선" },
      { title: "사용자 편의성 재고", desc: "입력값 검증, 자동 포커스, 입력 형식 제어 등 공통 입력 기능 개선" },
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
        img : [],
      },
      {
        level1 : "공과금 메뉴 하위 모든 화면 및 펀드 가입하기 화면",
        level2 : [
          "단독 실행 및 다단계 결재 화면 내 비밀번호 및 OTP 입력 모듈 교체"
        ],
        img : [],
      }
    ],
    improvements: [
      {
        title: "요구사항 분석 및 화면 명세 구체화",
        problem: [
          "기업뱅킹은 사용자 권한과 사업자 유형에 따라 화면 구성 및 제공 기능이 달라지지만, 초기 기획 단계에서 이러한 조건별 화면이 충분히 확인되지 않은 상태로 화면정의서가 전달됨",
          "기획서만으로는 실제 개발 대상 화면과 예외 조건을 명확하게 파악하기 어려웠음",
        ],
        solution: [
          "기존 소스 코드를 분석해 사용자 권한 및 사업자 유형에 따른 화면 분기 조건과 기능을 역으로 파악",
          "코드에서 확인한 조건을 바탕으로 기획자에게 실제 화면의 구성과 차이를 전달하고, 누락된 화면 및 요구사항을 구체화하도록 협의",
          "확인된 요구사항을 기준으로 화면별 개발 및 기능 개선 진행",
        ],
        result: [
          "초기 기획 단계에서 누락된 조건별 화면을 구체화하고 개발 요건을 명확히 하는 데 기여",
          "기획자와의 협업을 통해 화면 요구사항을 보완하고 개발 과정의 불확실성을 줄임",
        ]
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
    slug: "4",
    name: "전북은행 디지털 유니버셜 뱅킹 및 UX/UI 프로젝트",
    company: "nic",
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
    keyPoints: [
      { title: "React 전환", desc: "기존 JSP·jQuery 기반 화면에 React를 적용한 점진적 전환" },
      { title: "로딩 성능 개선", desc: "GIF 온보딩 애니메이션을 Lottie로 교체해 로딩 시간 약 2초에서 1초 미만으로 단축" },
    ],
    contributions: [
      {
        level1 : "온보딩 화면 개선",
        level2 : [
          "Lottie 이용한 UI 개선",
          "팝업 ‘하루동안 보지않기’ 기능 구현"
        ],
        img : images.jb_1,
      },
      {
        level1 : "상품몰 화면 개선",
        level2 : [
          "상품몰 메인 화면 신설",
          "관심상품 조회/등록/해제 기능 구현",
          "정렬 순서 변경 구현(추천순, 금리순 등)",
        ],
        img : images.jb_2,
      },
      {
        level1 : "금융계산기 메뉴 신설",
        level2 : [
          "예금, 적금 상품 만기금액 및 상환 방식에 따른 대출 이자 계산",
          "정규식 이용한 사용자 입력값(숫자만 입력, 자릿수 등) 제어",                    
        ],
        img : images.jb_3,
      }
    ],
    improvements: [],
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
    slug: "3",
    name: "기업은행 기업뱅킹 간편인증 도입 및 내부통제 기능강화 프로젝트",
    company: "nic",
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
    keyPoints: [
      { title: "내부통제 기능", desc: "하위 이용자의 뱅킹 이력 및 권한을 관리하는 인증서·이상 로그인 조회 기능 구현" },
      { title: "권한 관리", desc: "보조관리자 권한 설정 및 이용·이체시간 관리 기능 개발을 통한 사용자 권한 세분화" },
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
        img : [],
      },
    ],
    improvements: [],
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
    slug: "2",
    name: "기업은행 기업디지털 채널 혁신사업",
    company: "nic",
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
    keyPoints: [
      { title: "내부통제 기능", desc: "하위 이용자 이용시간 관리 및 뱅킹관리 이력조회 메뉴 개발" },
      { title: "다국어 화면 개선", desc: "다국어 페이지의 화면 오류 수정 및 각종 증명서 UI 개선" },
    ],
   contributions: [
      {
        level1 : "뱅킹관리 메뉴 고도화",
        level2 : [
          "이용시간 관리 메뉴 신설",
          "관리자페이지 뱅킹관리 이력조회 메뉴 신설",
          "원클릭관리자설정 메뉴 개선 및 역거래 개발",          
        ],
        img : [          
        ],
      },
      {
        level1 : "기타",
        level2 : [
          "증명서 양식 개선",
          "다국어 페이지 개선",
          "그리드 솔루션 교체",
        ],
        img : [],
      }
    ],
    improvements: [],
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
    slug: "1",
    name: "머신러닝을 이용한 FDS 구축 연구",
    company: "nic",
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
        img : [],
      },
      {
        level1 : "DB 설계 참여",
        level2 : [],
        img : [],
      },
      {
        level1 : "금융 거래 데이터를 이용한 머신러닝 실행 및 튜닝, 이상 거래 탐지 결과 모니터링 등 플랫폼 화면 설계 및 구현",
        level2 : [],
        img : [],
      }
    ],
    improvements: [],
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
