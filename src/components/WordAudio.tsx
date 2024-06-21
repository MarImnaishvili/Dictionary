import styled from "styled-components";

type WordAudioType = {
  audioUrl: string;
  dictionaryData: undefined;
};
export default function WordAudio({ audioUrl, dictionaryData }: WordAudioType) {
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    } else {
      console.warn("No audio URL available.");
    }
  };

  return (
    <WordAudioWrapper>
      <div className="findWord">
        <h1>{dictionaryData && dictionaryData[0]["word"]}</h1>
        <span>{dictionaryData && dictionaryData[0]["phonetic"]}</span>
      </div>
      {dictionaryData && dictionaryData[0] && (
        <button onClick={playAudio}>
          <img src="/play.svg"></img>
        </button>
      )}
    </WordAudioWrapper>
  );
}

const WordAudioWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 2.6rem;
    line-height: 2.6rem;
    letter-spacing: 0.1px;
  }

  span {
    color: #bb76db;
    display: inline-block;
    padding-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 0.1px;
  }

  button {
    width: 3rem;
    height: 3rem;
    outline: none;
    border: none;
    background-color: transparent;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
