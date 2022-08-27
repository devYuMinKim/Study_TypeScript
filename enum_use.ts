/**
 * 열거형 활용
 * 
 * 숫자, 문자, 복합 타입
 */

enum Language {
  TypeScript = 'TS',
  JavaScript = 'JS',
  Java = 'JAVA',
  Ruby = 'RB',
}

const Language2 = {
  TypeScript: 'TS',
  JavaScript: 'JS',
  Java: 'JAVA',
  Ruby: 'RB'
} as const

type LangCode = keyof typeof Language
// 위와 아래가 같다.
type LangCode2 = "TypeScript" | "JavaScript" | "Java" | "Ruby"

function getLang(langCode: string) {
  console.log(langCode)
}

getLang('아무 언어')
getLang('Python')
getLang('TS')