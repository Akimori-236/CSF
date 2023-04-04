export interface RSVP {
    name: string
    email: string
    age: number
    attendance: boolean
}

export interface Task {
    description: string
    dueDate: Date
}

export interface Activities {
    title: string
    name: string
    tasks: Task[]
}