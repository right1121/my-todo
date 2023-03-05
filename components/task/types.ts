export type StatusType = '未着手' | '完了'

export interface TodoType {
  id: number
  title: string
  status: StatusType
}
export type TodosType = TodoType[]
