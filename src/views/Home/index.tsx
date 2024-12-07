import { GridComponent } from '../../components';

const Home: React.FC = () => {
  return (
    <GridComponent container={true}>
      <GridComponent item='true' size={{ xs: 12 }}>
        <GridComponent container={true}>
          <GridComponent item='true' size={{ xs: 4 }}>
            1
          </GridComponent>
          <GridComponent item='true' size={{ xs: 4 }}>
            2
          </GridComponent>
          <GridComponent item='true' size={{ xs: 4 }}>
            3
          </GridComponent>
        </GridComponent>
      </GridComponent>

      <GridComponent item='true' size={{ xs: 12 }}>
        <GridComponent container={true}>
          <GridComponent item='true' size={{ xs: 4 }}>
            4
          </GridComponent>
          <GridComponent item='true' size={{ xs: 4 }}>
            5
          </GridComponent>
          <GridComponent item='true' size={{ xs: 4 }}>
            6
          </GridComponent>
        </GridComponent>
      </GridComponent>
    </GridComponent>
  );
};

export default Home;
