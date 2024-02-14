import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue' // IssueList コンポーネントをインポートする
import TodosIssues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list', // 新しいパス /issue-list を追加
    name: 'IssueList',
    component: IssueList // IssueList.vue コンポーネントを設定
  },
  {
    path: '/todos-issues', // 新しいパス /issue-list を追加
    name: 'TodosIssues',
    component: TodosIssues // IssueList.vue コンポーネントを設定
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
