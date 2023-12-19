import { FlipCardBase } from "./FilpCardBase"
import { FlipCardBack } from "./FlipCardBack"
import { FlipCardFront } from "./FlipCardFront"

export const FlipCard: any = Object.assign( FlipCardBase, {
    Front: FlipCardFront,
    Back: FlipCardBack,
})