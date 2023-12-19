import {FlipCardBase, FlipCardContext } from '@/components/Cards/FlipCard/FilpCardBase';
import { FlipCardBack } from '@/components/Cards/FlipCard/FlipCardBack';
import { FlipCardFront } from '@/components/Cards/FlipCard/FlipCardFront';
import { FlipCardContextProps } from '@/components/Cards/FlipCard/interface';
import { useContext } from 'react';

export const FlipCardDemo = () => {

    const { isFlipped, handleFlipped } = useContext<FlipCardContextProps>(FlipCardContext)

    return (
        <FlipCardBase>
            <FlipCardFront isFlipped={isFlipped}>
                <button type='button' onClick={handleFlipped}>Girar Card</button>
                <h3>Your Front Content</h3>
            </FlipCardFront>
            <FlipCardBack isFlipped={isFlipped}>
                <button type='button' onClick={handleFlipped}>Volver</button>
                <h4>Your Back Content</h4>
                <p>
                    Veniam amet et incididunt laboris dolor laborum tempor labore cupidatat consectetur ad officia ipsum officia. Eu officia enim eu enim voluptate excepteur ipsum aute adipisicing sit commodo duis. Duis ullamco mollit voluptate aliqua eiusmod sint nisi irure aute minim adipisicing consectetur.
                </p>
            </FlipCardBack>
        </FlipCardBase>
    )
}