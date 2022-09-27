import React from 'react';
import NextImage from 'next/future/image';

import cx from 'classnames';

import { CardType } from '@/hooks/api/games/memory/useGetMemoryCards';

import cardBackFace from '../../../public/images/pokemon/pokemon-card-back.png';

const MemoryCard = ({
  card,
  isSwitchedCard,
  switchCardHandler,
}: {
  card: CardType;
  isSwitchedCard: boolean;
  switchCardHandler: (card: CardType) => void;
}) => {
  return (
    <div
      key={card.id}
      className="perspective col-span-12 h-[336px] cursor-pointer rounded-lg border border-gray-200 shadow-sm duration-1000 hover:shadow-lg sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <div
        onClick={() => switchCardHandler(card)}
        className={cx(
          'flex-center preserve-3d relative h-full w-[200px] max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
          {
            'my-rotate-y-180 pointer-events-none cursor-not-allowed':
              isSwitchedCard,
          }
        )}
      >
        <div className="my-rotate-y-180 backface-hidden flex-center absolute h-full w-full">
          {isSwitchedCard && (
            <NextImage
              loading="eager"
              priority={true}
              src={card.image || ''}
              width={150}
              height={150}
              alt={card.name}
              draggable={false}
              className="m-5 rounded-t-lg"
            />
          )}
        </div>
        <div className="backface-hidden absolute h-full w-full p-5">
          <NextImage
            src={cardBackFace}
            fill
            alt={card.name}
            draggable={false}
            className="rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
