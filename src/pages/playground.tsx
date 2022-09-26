import React, { useEffect, useState } from 'react';

import { Button } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import useGetMemoryCards, {
  CardType,
} from '@/hooks/api/games/memory/useGetMemoryCards';

import MemoryCard from '@/components/card/MemoryCard';
import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

/* ------------------------------------ */
// Idée d'amélioration du jeu memory:
// - Ajouter un timer
// - Ajouter un compteur de coups
// - Ajouter un compteur de paires trouvées
// - Ajouter un bouton pour recommencer
// - Ajouter un bouton pour reset le jeu
// - Ajouter un bouton pour changer le thème
// - Ajouter un bouton pour changer la difficulté
/* ------------------------------------ */

function PlaygroundPage() {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [cardPair, setCardPair] = useState<CardType[]>([]);
  const [switchedCards, setSwitchedCards] = useState<CardType[]>([]);
  const { data } = useGetMemoryCards(shouldFetch);

  const switchCard = (newSwitchedCard: CardType) =>
    cardPair.length < 2 && setCardPair([...cardPair, newSwitchedCard]);

  const resetCards = (delay?: number) =>
    delay ? setTimeout(() => setCardPair([]), delay) : setCardPair([]);

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
            {data?.map((card, index) => (
              <MemoryCard
                key={index}
                card={card}
                cardPair={cardPair}
                switchedCards={switchedCards}
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
