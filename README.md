# 🛍️ Mini Shopping Mall — Starter

5주차 세션 실습용 프로젝트입니다.

## 시작하기

```bash
npm install
npm run dev
```

## 현재 상태

- ✅ React + JavaScript로 기본 동작
- ✅ 상품 목록 / 상세 / 장바구니 기능 동작
- ❌ TypeScript 없음 (순수 JS, `.jsx`)
- ❌ Tailwind 없음 (인라인 스타일, 못생김)
- ❌ React Router 없음 (useState 탭 전환, URL 안 바뀜)
- ❌ Context 없음 (Props Drilling — Layout이 안 쓰는 props를 받아서 Header에 전달)

## 현재 코드의 문제점 (의도적)

1. **타입 없음** — props에 뭐가 들어있는지 모름, 오타나도 에러 안 남
2. **못생김** — 인라인 스타일로만 처리, 반응형 없음
3. **URL 안 바뀜** — useState로 탭 전환, 뒤로가기/즐겨찾기 불가
4. **Props Drilling** — App → Layout → Header로 cart를 넘김. Layout은 cart를 안 쓰는데도 받아야 함
