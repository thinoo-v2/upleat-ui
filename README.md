# UPLEAT UI System

### 설치할 파일들


1.pnpm

```
npm install -g pnpm

```


2.nvm
```
참고 https://velog.io/@citron03/Mac-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-brew-nvm-node-git
```

### 아래의 명령어로 생성하고 수정한 프로젝트임.

```sh
npx create-turbo@latest -e design-system
```

### 유용한 명령어들
- `pnpm dev:web` - 스토리북 실행합니다.
- `pnpm storybook` - 스토리북 실행합니다.
- `pnpm changeset` - Changeset을 생성합니다.
- `pnpm lint` - eslint를 실행합니다.
- `pnpm clean` - `node_modules`과 `dist` 폴더들을 삭제합니다.

### 기술셋

- 언어 : Typescript
- 프레임웍 : NextJS
- 레포관리 : Turborepo
- 패키지매니저 : PNPM, Vite
- 코드 컨벤션 관리 : ESLint
- UI시스템 : Storybook
- 코드버전관리 : git



