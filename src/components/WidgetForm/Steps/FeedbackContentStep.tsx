import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const { title, image } = feedbackTypes[feedbackType];
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  function handleSumitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({ screenShot, comment });

    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      {/* TODO: Verificar largura do formulário em diferentes dispositivos */}
      <form className="my-4 w-[300px]" onSubmit={handleSumitFeedback}>
        <textarea
          className="min-w[304px] w-full min-h-[112px] 
          text-sm placeholder-zinc-400 text-zinc-100 
          border border-zinc-600 bg-transparent rounded-md 
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none 
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenShotTook={setScreenShot}
            screenShot={screenShot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
            disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
