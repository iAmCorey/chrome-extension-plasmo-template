export interface ResponseType<T> {
  code: number
  message: string
  data: T
}

export interface BaseDetail {
  pic: string
  title: string
  desc: string
}
