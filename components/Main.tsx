import { Buttput, Digiput, Mainput, Wrapput } from '../components/styles';
import { useState } from 'react';
import { Units, temperature } from '../utils/temperature';
import { capitalize, copy } from '../utils/text';
import { IoPinOutline } from 'react-icons/io5';
import Link from 'next/link';

const Main = ({ unit }) => {
  const [value, setValue] = useState(0);

  const mainUnit = Object.keys(Units).find((u) => u === unit);
  const otherUnits = Object.keys(Units).filter((u) => u !== unit);

  return (
    <>
      <Wrapput className='mb-5'>
        <Digiput title='Base'>{Units[mainUnit]}</Digiput>
        <Mainput
          title='Number System'
          onChange={(e) => setValue(parseInt(e.currentTarget.value ? e.currentTarget.value : '0'))}
          placeholder={capitalize(mainUnit)}
          type='number'
          defaultValue='0'
        />
        <Buttput style={{ pointerEvents: 'none' }} />
      </Wrapput>
      {otherUnits.map((unit) => {
        return (
          <Wrapput key={unit}>
            <Digiput title='Base'>{Units[unit]}</Digiput>
            <Mainput
              title='Number System'
              placeholder={capitalize(unit)}
              readOnly={true}
              value={temperature(value).from(Units.kelvin).to(Units[unit])}
              type='number'
              onClick={(e) => copy(e.currentTarget.value)}
            />
            <Link href={`/${unit}`} passHref={true}>
              <Buttput title='Copy'>
                <IoPinOutline />
              </Buttput>
            </Link>
          </Wrapput>
        );
      })}
    </>
  );
};

export default Main;
