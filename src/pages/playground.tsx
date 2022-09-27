import React, { useCallback, useEffect, useState } from 'react';

import { Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import useGetMemoryCards, {
  CardType,
} from '@/hooks/api/games/memory/useGetMemoryCards';

import MemoryCard from '@/components/card/MemoryCard';
import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

import shuffleArray from '@/utils/shuffleArray';

/* ------------------------------------ */
// Idée d'amélioration du jeu memory:
/* ------------------------------------ */
// - Ajouter un timer
// - Ajouter un compteur de coups
// - Ajouter un compteur de paires trouvées
// - Ajouter un bouton pour recommencer
// - Ajouter un bouton pour changer le thème
// - Ajouter un bouton pour changer la difficulté
// - Rendre le jeu sécurisé (cacher les cartes)
// - Ajouter une animation lors du flip des cartes
// - Ajouter une animation lors de la découverte de toutes les paires
// - Ajouter un son quand on retourne une carte
/* ------------------------------------ */

function PlaygroundPage() {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [cardPair, setCardPair] = useState<CardType[]>([]);
  const [switchedCards, setSwitchedCards] = useState<CardType[]>([]);
  const { data } = useGetMemoryCards(shouldFetch);

  const switchCard = (newSwitchedCard: CardType) =>
    cardPair.length < 2 && setCardPair([...cardPair, newSwitchedCard]);

  const isASwitchedCard = (card: CardType): boolean =>
    cardPair?.some((c) => c.cardIndex === card.cardIndex) ||
    switchedCards?.some((c) => c.cardIndex === card.cardIndex);

  const resetCards = (delay?: number) =>
    delay ? setTimeout(() => setCardPair([]), delay) : setCardPair([]);

  const randomizeCards = useCallback(() => {
    const randomizedCards = data ? shuffleArray(data) : [];
    setCards(
      randomizedCards.map((card, index) => ({
        ...card,
        cardIndex: index,
      }))
    );
  }, [data]);

  useEffect(() => {
    randomizeCards();
  }, [randomizeCards]);

  useEffect(() => {
    if (cardPair.length === 2) {
      if (cardPair[0].id === cardPair[1].id) {
        setSwitchedCards((prev) => [...prev, ...cardPair]);
        resetCards();
      }
      resetCards(700);
    }
  }, [cardPair]);

  return (
    <>
      <Seo title="Playground" />
      <section className="my-20">
        <div className="layout flex-center min-h-screen flex-col text-center">
          <h1>Playground page</h1>

          <div className="mt-8 grid grid-cols-12 gap-3">
            {cards?.map((card) => (
              <MemoryCard
                key={card.cardIndex}
                card={card}
                isSwitchedCard={isASwitchedCard(card)}
                switchCardHandler={switchCard}
              />
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={() => setShouldFetch(!shouldFetch)}>
              Get Cards
            </Button>
          </div>
        </div>
        <Toaster position="bottom-right" />
      </section>
    </>
  );
}

PlaygroundPage.getLayout = getLayout;

export default PlaygroundPage;
