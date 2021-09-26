import { Buttput, Digiput, Mainput, Wrapput } from '../components/styles';
import { ChangeEvent, useState } from 'react';
import { Units, temperature } from '../utils/temperature';
import { capitalize, copy } from '../utils/text';
import { IoPinOutline } from 'react-icons/io5';
import Link from 'next/link';

const Main = ({ unit }) => {
  const [value, setValue] = useState(temperature(0).from(Units[unit]).to(Units.kelvin));

  const mainUnit = Object.keys(Units).find((u) => u === unit);
  const otherUnits = Object.keys(Units).filter((u) => u !== unit);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.currentTarget.value ? e.currentTarget.value : '0');
    const k = temperature(v).from(Units[mainUnit]).to(Units.kelvin);

    setValue(k);
  };

  return (
    <>
      <Wrapput className='mb-5'>
        <Digiput title='Base'>{Units[mainUnit]}</Digiput>
        <Mainput title='Symbol or sth' onChange={handleChange} placeholder={capitalize(mainUnit)} type='number' defaultValue='0' />
        <Buttput style={{ pointerEvents: 'none' }} />
      </Wrapput>
      {otherUnits.map((unit) => {
        return (
          <Wrapput key={unit}>
            <Digiput title='Base'>{Units[unit]}</Digiput>
            <Mainput
              title='Unit'
              placeholder={capitalize(unit)}
              readOnly={true}
              value={Math.round((temperature(value).from(Units.kelvin).to(Units[unit]) + Number.EPSILON) * 100) / 100}
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
