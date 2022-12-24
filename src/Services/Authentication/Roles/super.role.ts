import { permissions, stuffies, TSP } from "../../../Config/auth.config";
import { Role } from "./role";

export default class superRole extends Role {
    permissions: permissions = ["SUPER"]
    stuff: stuffies = ["SUPER"]
    SP: TSP = [["SUPER", ["SUPER"]]]
}