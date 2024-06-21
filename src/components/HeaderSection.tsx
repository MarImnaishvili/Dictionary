import { Dispatch, SetStateAction, ChangeEvent } from "react";
import styled from "styled-components";

interface HeaderSectionType {
  nightMood: boolean;
  setNightMood: Dispatch<SetStateAction<boolean>>;
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}
interface nightmoodType {
  nightmood: string;
}

export default function HeaderSection({
  nightMood,
  setNightMood,
  font,
  setFont,
}: HeaderSectionType) {
  const handleChangeFont = (event: ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target.value);
  };
  return (
    <HeaderContainer nightmood={nightMood.toString()}>
      <img src="/book.svg" className="headerImg" />
      <div className="adjustStyles">
        <select id="selectfont" value={font} onChange={handleChangeFont}>
          <option value="PT Serif">PT Serif</option>
          <option value="Cinzel Decorative">Cinzel Decorative</option>
          <option value="Work Sans">Work Sans</option>
          <option value="Roboto Serif">Roboto Serif</option>
        </select>
        <div className="line"></div>
        <label className="switch">
          <input type="checkbox" onChange={() => setNightMood(!nightMood)} />
          <span className="slider"></span>
        </label>
        <img src="/moon.svg" className="headerImg" />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<nightmoodType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  .headerImg {
    width: 3rem;
    height: 3rem;
  }

  #selectfont {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${(props) => (props.nightmood == "true" ? "#fff" : "#313131")};
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */
  }

  .line {
    width: 0.1rem;
    height: 3rem;
    background-color: #ccc;
  }
  .adjustStyles {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 1.9rem;
    margin: 0 0.5rem;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #797979;
    transition: all.4s;
    border-radius: 2.5rem;
  }
  .switch input {
    display: none;
  }
  .slider::before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 0.3rem;
    bottom: 0.2rem;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s;
  }
  input[type="checkbox"]:checked + .slider {
    background-color: #bb76db;
  }
  input[type="checkbox"]:checked + .slider::before {
    transform: translateX(1.4rem);
  }
`;
