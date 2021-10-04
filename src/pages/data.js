import { Header } from "../components/Header";
import { CollectionRegistry } from '../backend/CollectionRegistry';
import { Bar } from 'react-chartjs-2';
import style from '../styles/data.module.scss';

export default function Data({ legalized, iregular, noEnergy }) {

  const chartData = {
    labels: ['Legalizada', 'Irregular', 'Não possui'],
    datasets: [
      {
        label: false,
        data: [legalized, iregular, noEnergy],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    dataLabels: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Header />

      <div className={style.content}>
        <div>
          <label>Situação de energia</label>
          <Bar data={chartData} options={options} />
        </div>
      </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const registries = new CollectionRegistry();
  const data = await registries.all();

  var legalized = 0;
  var iregular = 0;
  var noEnergy = 0;

  data.reduce((counter, registry) => {
    if(registry.energysituation == 'Legalizada') {
      legalized = legalized + 1;
      return;
    } else if(registry.energysituation == 'Irregular') {
      iregular = iregular +1;
    } else {
      noEnergy = noEnergy + 1;
    }
  }, 0);


  return {
    props: {
      legalized,
      iregular,
      noEnergy
    }
  }

}