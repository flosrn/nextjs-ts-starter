import { useEffect } from 'react';

type GlowCardProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

const GlowCard = ({ title, description, icon }: GlowCardProps) => {
  useEffect(() => {
    const cardsContainer = document.querySelector('#cards');
    const cards = document.querySelectorAll<HTMLDivElement>('.card');

    cardsContainer?.addEventListener('mousemove', (event) => {
      if (cards)
        // @ts-ignore
        for (const card of cards) {
          const e = event as MouseEvent;
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="flex h-full flex-col justify-center space-y-4 p-6 text-slate-200">
          <div className="flex-center">{icon}</div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-100">{title}</h3>
            <p className="text-sm text-slate-100">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
