import styles from './CardList.module.css';
// import React from 'react';
import { CardComponent} from "./CardComponent";

interface Cards {
    cardsData: {
        front: string,
        back: string,
        id: string
    }[],
}

export function CardList({cardsData}: Cards) {

    return (
        <ul className={styles['card-list']}>
            {cardsData.map((card) => (
                <li key={card.id}>
                    <CardComponent front={card.front} back={card.back} />
                </li>
            ))}
        </ul>
    )
}
