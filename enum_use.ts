/**
 * 열거형 활용
 */

enum Language {
  TypeScript = 'TS',
  JavaScript = 'JS',
  Java = 'JAVA',
  Ruby = 'RB',
}

type LangCode = keyof typeof Language
// 위와 아래가 같다.
type LangCode2 = "TypeScript" | "JavaScript" | "Java" | "Ruby"

function getLang(langCode: string) {
  console.log(langCode)
}

getLang('아무 언어')
getLang('Python')
getLang('TS')