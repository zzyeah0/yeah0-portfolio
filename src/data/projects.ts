import { images } from '@/img/portfolioimg';

export interface Project {
  slug: string;
  name: string;
  company: string;
  year: string;
  summary: string;
  description: string;
  skills: string[];
  highlights: string[];
  contributions: {
    level1: string;
    level2: string[];
    img: string[];
  }[];
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
