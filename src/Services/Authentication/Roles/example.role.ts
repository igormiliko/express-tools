import { permissions, stuffies, TSP } from "../../../Config/auth.config";
import { Role } from "./role";

export default class clientRole extends Role {
  permissions: permissions = ["INDEX", "LIST"];
  stuff: stuffies = ["LINKS", "MACHINES", "MESSAGES", "QUEUE"];
  SP: TSP = [
    ["LINKS", ["INDEX", "LIST"]],
    ["MESSAGES", ["INDEX", "LIST"]],
];
}
