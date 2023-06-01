import styles from './CardList.module.css';
import React from 'react';
import { CardComponent} from "./CardComponent";

interface Cards {
    cards: Card[],
}

interface Card {
    id: number,
    front: string,
    back: string,
}

export default function CardList({cards}: Cards) {

    return (
        <ul className={styles['card-list']}>
            {cards.map((card) => (
                <li key={card.id}>
                    <CardComponent front={card.front} back={card.back} />
                </li>
            ))}
        </ul>
    )
}
