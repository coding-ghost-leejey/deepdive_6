# Figma SmartAnimation Design '#' 1개 ~ 6개까지 가능, 6개가 가장 작은제목

- 마크다운으로 이미지 넣는방법 ![대체텍스트](이미지경로)
  ![test image](./images/icon/home.svg)

<figure style="text-align:center;">
    <img src="./images/monster_1.png" alt="monster app" style="width:300px;border-radius:20px">
    <figcaption>몬스터 앱 디자인</figcaption>
</figure>

## 마크다운 문법

**굵은 글씨**
_기울임_
~~취소선~~

### 구분선

---

### 링크넣기

[링크자료](https://www.naver.com)

### 이미지넣기

![이미지](이미지경로)

### 코드넣기(백틱사용) 인라인

`let a = 5`

### 코드넣기 블럭

<pre>js<br>const a = 5</pre>
<pre>html<br><h1>WOW</h1></pre>
<pre>css<br>h1 { background-color:tomato }</pre>

### 목록만들기

- 첫번째 목록
- 두번째 목록
  - 서브 목록

1. 순서목록 A
2. 순서목록 B

### 체크목록

- [ ] 미완료
- [x] 완료

### 인용문

> 인용문입니다. <br>

---

# Git 명령어

## 초기화

`git init`

## File Staging

`git add .` -> 현재 폴더의 모든 변경된 파일을 스테이징함
`git add test.js` -> test.js파일만 스테이징 함

## Commit 기록하기 -> 스테이징된 파일들을 기록함

`git commit -m '메세지'`

## 원격저장소와 연결

`git remote add origin URL`

## 원격저장소와 연결 확인

`git remote -v`

## 원격저장소와 해제

`git remote remove origin`

## 원격저장소에 업로드하기(반영하기)

`git push origin main`
`git push -u origin main` -> 이다음번에는 `git push` 만 하면됨.

## 방금 스테이징 한것을 취소하기(add 한것취소하기)

### 주의, commit을 하기전에만 취소가 가능하다.

`git restore --staged .` -> 현재폴더의 모든 staging을 취소
`git restore --staged test.js` -> test.js파일만 취소

## 커밋기록 취소하기

### 방금한 커밋취소(스테이지 상태는 유지됨)

`git reset --soft HEAD^`

### 방금한 커밋취소(스테이징된 것도 취소됨)

`git reset --mixed HEAD^`

## push 취소하기(이전으로 되돌리는 새로운 커밋만들기)

### push한것을 --force를 써서 삭제할수도있지만, 이 방법이 협업시 안전함

`git revert HEAD`

## 자주쓰는것 정의하기

<pre>
git config --global alias.ac '!git add . && git commit -m'
git config --global alias.acp '!git add . && git commit -m "update" && git push origin main"
</pre>
