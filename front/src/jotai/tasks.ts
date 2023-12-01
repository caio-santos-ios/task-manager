import { Ttask } from "@/@types/task";
import { atom } from "jotai";


export const listTasks = atom<Ttask[]>([])