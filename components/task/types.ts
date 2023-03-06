export type StatusType = '未着手' | '進行中' | '完了' | '中止' | '削除'

export interface TodoType {
  id: number
  title: string
  status: StatusType
}
export type TodosType = TodoType[]
