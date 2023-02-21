import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='border border-black p-2 m-2 text-justify'>
      <div className='flex gap-2 '>
        <h3 className='font-bold'>{title}</h3>
        {isVisible ? (
          <button className='cursor-pointer' onClick={() => setIsVisible(false)}>
            <FontAwesomeIcon icon='fa-solid fa-caret-up' />
          </button>
        ) : (
          <button className='cursor-pointer' onClick={() => setIsVisible(true)}>
            <FontAwesomeIcon icon='fa-solid fa-caret-down' />
          </button>
        )}
      </div>

      {/* Have to work on Transition of Accordion to */}
      {isVisible && (
        <p className={`px-6 pt-0 overflow-hidden transition-all delay-500 ease-in ${isVisible ? 'max-h-40' : 'max-h-0'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isSectionVisible, setIsSectionVisible] = useState('');
  return (
    <div>
      <h1 className='text-center ml-96 text-3xl p-2 m-2 font-bold bg-gradient-to-br from-yellow-500 to-red-400 w-1/2'>InstaMart</h1>
      <Section
        title={'About Instamart'}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={isSectionVisible === 'about'}
        setIsVisible={() => setIsSectionVisible(isSectionVisible === 'about' ? '' : 'about')}
      />

      <Section
        title={'Team @Instamart'}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === 'team'}
        setIsVisible={() => setIsSectionVisible(isSectionVisible === 'team' ? '' : 'team')}
      />
      <Section
        title={'Careers @Instamart'}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === 'career'}
        setIsVisible={() => setIsSectionVisible(isSectionVisible === 'career' ? '' : 'career')}
      />
    </div>
  );
};

export default Instamart;
