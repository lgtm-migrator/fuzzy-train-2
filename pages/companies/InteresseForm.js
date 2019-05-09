import React from 'react';
import styled from 'styled-components';
import InputField from '../components/FormComponents/InputField';
import Checkbox from '../components/FormComponents/Checkbox';
import TextArea from '../components/FormComponents/TextArea';
import Label from '../components/FormComponents/Label';

const InputFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const HeaderStyling = styled.span`
  color: #faa21b;
  font-size: 48px;
  font-weight: 900;
  border-style: none none solid none;
  border-color: grey;
  border-width: 1.5px;
`;

const CheckboxWrapper = styled.div`
  display: grid;
  font-size: 28px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: 30px;
  border: 0.5px solid #c4c4c4;
  padding: 7px;
  border-radius: 10px;
`;

const SubmitButton = styled.input`
  color: ${props => props.theme.secondary};
  font-size: 25px;
  border-radius: 15px;
  width: 15%;
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.secondary};
  padding: 15px;
  align-self: flex-end;
  transition-duration: 250ms;
  transition-property: background-color;
  :hover {
    background-color: gray;
  }
`;

const InfoText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 15px;
`;

const MeldInteresse = ({ className }) => {
  const checkboxList = [
    { text: 'ITEX', textOnHover: 'IT-eksursjonen' },
    { text: 'Bedriftspresentasjon', textOnHover: 'bedpress' },
    { text: 'Kurs / faglig arrengement', textOnHover: 'kurs' },
    { text: 'Annonse i Offline', textOnHover: 'reklame' },
    { text: 'Artikkel i Offline', textOnHover: 'artikkel' },
    { text: 'Techtalks', textOnHover: 'Tekniske taler' },
    { text: 'Lorem Ipsum', textOnHover: 'Ipsum Lorem' },
    { text: 'Karrieremuligheter', textOnHover: 'Jobb' },
    { text: 'foobar', textOnHover: 'foo' },
  ];

  return (
    <>
      <form className={className} action="POST" id="meldInteresseForm">
        <HeaderStyling>Meld interesse:</HeaderStyling>
        <InfoText>Felt merket med en gul stjerne er nødvendige at du fyller ut</InfoText>
        <InputFieldWrapper>
          <InputField type="text" name="Bedrift" placeholder="Navn på bedriften..." required />
          <InputField type="text" name="Kontaktperson" placeholder="Navn på kontaktperson..." required />
        </InputFieldWrapper>
        <InputField type="email" name="E-post" placeholder="E-posten det ønskes svar til..." required />
        <Label>Huk av det du er interessert i</Label>
        <InfoText>Du kan holde musepekeren over de forskjellige feltene for mer informasjon</InfoText>
        <CheckboxWrapper>
          {checkboxList.map((el, index) => (
            <Checkbox name={'Interests'} value={el.text} key={index} title={el.textOnHover} />
          ))}
        </CheckboxWrapper>
        <TextArea
          id="bedriftKommentar"
          name="Kommentarer"
          placeholder="Utdypning av ønsker og hvordan de tenkes gjennomført..."
          required
        />
        <SubmitButton type="submit" value="Send inn" />
      </form>
    </>
  );
};

const MeldInteresseStyle = styled(MeldInteresse)`
  display: flex;
  flex-direction: column;
  width: 60%;
  ${Label} {
    font-size: 24px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MeldInteresseStyle;