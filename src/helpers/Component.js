import { NotFound } from "../components/layout";

export function validate (component) {
    return typeof(component) === 'function' || typeof(component) === 'object' ? component : NotFound
}