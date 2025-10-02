export const UserRolesEnum: Object = {
    ADMIN: "admin",
    MEMBER: "member",
    PROJECT_ADMIN: "project_admin"
}

export const AvailableUserRole = Object.values(UserRolesEnum)

export const TaskStatusEnum = {
    TODO: "todo", 
    IN_PROGRESS: "in_progress", 
    DONE: "done"
}

export const AvailableTasksStatus = Object.values(TaskStatusEnum)