import { Inner, Wrapper } from '../components/styles';
import Main from '../components/Main';
import { GetServerSideProps } from 'next';
import { Units } from '../utils/temperature';

const Home = ({ unit }) => {
  return (
    <Wrapper>
      <Inner>
        <Main unit={unit} />
      </Inner>
    </Wrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const unit = context?.query?.unit?.toString();
  const units = Object.keys(Units);

  if (units.includes(unit)) {
    return {
      props: {
        unit,
      },
    };
  }

  return {
    redirect: {
      destination: '/kelvin',
      permanent: false,
    },
  };
};
