import { atom } from "recoil";
import { Task } from "../../types";
export const taskAtom=atom<Task[]>({
    key:"tasksAtom",
    default:[]
})