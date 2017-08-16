# README

## Intro
  - this repo is a follow along with the course [GraphQL with React: The Complete Developers Guide][course-link]
  - instructor provide his repo for sample code.
      - I fork it and create another branch `LEARN` to record my learning


### App One: 可互動的 GraphQL Server
  - 一個處理 GQL query 的 node.js express server
      - 當作一個 REST api server 的代理
      - 當 GQL request 進來，它會向外部 REST api 打 ajax request
  - 提供一個可互動 *GraphiQL* 介面，讓你可以測試各種 GQL query


#### How to run
  - `git checkout LEARN && cd users && npm install`
  - 啟動 REST api server `npm run json:server` (聽 port 3000)
  - 開啟另一個 terminal 視窗下 `npm run dev`
  - 去瀏覽器連接 `http://localhost:4000/graphql`
  - 測試:
      - 可以從 `MY_QUERY.graphql` 複製貼上一些 query
      - 可以編輯 `db.json` 來修改 *user-company* 的多對一關聯性
          - 也可以打 `localhost:3000/companies/1/users` 快速檢視目前資料的狀態


[course-link]: https://www.udemy.com/graphql-with-react-course "course-link"
