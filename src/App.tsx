import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import WordAudio from "./components/WordAudio";
import Meanings from "./components/Meanings";
import HeaderSection from "./components/HeaderSection";

function App() {
  const [font, setFont] = useState<string>("Cinzel Decorative");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dictionaryData, setDictionaryData] = useState<string | number | any>();
  const [nightMood, setNightMood] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
        );
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        setDictionaryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  const audioUrl =
    dictionaryData?.[0]?.phonetics?.[0]?.audio ||
    dictionaryData?.[0]?.phonetics?.[1]?.audio ||
    dictionaryData?.[0]?.phonetics?.[2]?.audio ||
    dictionaryData?.[0]?.phonetics?.[3]?.audio;

  console.log(dictionaryData);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fontRef.current) {
      fontRef.current.style.fontFamily = font;
    }
  }, [font]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      setSearchQuery(searchQuery.trim());
    }
  };

  return (
    <Container ref={fontRef} nightmood={nightMood.toString()}>
      <HeaderSection
        nightMood={nightMood}
        setNightMood={setNightMood}
        font={font}
        setFont={setFont}
      />
      <StyledInput>
        <input value={searchQuery} type="text" onChange={handleInput} />
        <button onClick={handleSearch}>
          <img src="/search.svg"></img>
        </button>
      </StyledInput>
      <MainContent>
        <WordAudio audioUrl={audioUrl} dictionaryData={dictionaryData} />
        <Meanings dictionaryData={dictionaryData} />
      </MainContent>
    </Container>
  );
}

interface nightmoodType {
  nightmood: string;
}
const Container = styled.div<nightmoodType>`
  width: 37.5rem;
  max-width: 100%;
  padding: 2rem;
  color: ${(props) => (props.nightmood == "true" ? "#fff" : "#12121b")};
  background-color: ${(props) =>
    props.nightmood == "true" ? "#12121b" : "#fff"};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 144rem;
    max-width: 100%;
    padding: 2rem 30rem;
  }
`;

const StyledInput = styled.div`
  width: 98%;
  position: relative;

  & > input {
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1.5rem;
    background-color: #eeeded;
    border-radius: 0.8rem;
    border: none;
    outline: none;
  }
  & > button {
    width: 1rem;
    height: 1rem;
    position: relative;
    position: absolute;
    right: 2.5%;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    color: #fff;
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(50% -50%);
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
export default App;
