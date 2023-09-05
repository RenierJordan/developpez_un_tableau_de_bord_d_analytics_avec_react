import { useEffect, useState } from "react";
import Error from "./Error";
import Header from "../components/Header";
import VerticalNav from "../components/VerticalNav";
import Metric from "../components/Metric";
import Score from "../components/Score";
import "../styles/Dashboard.css";
import CaloriesIcon from "../assets/calories-icon.svg";
import ProteinIcon from "../assets/protein-icon.svg";
import CarbsIcon from "../assets/carbs-icon.svg";
import FatIcon from "../assets/fat-icon.svg";
import Activity from "../components/Activity";
import Average from "../components/Average";
import Performance from "../components/Performance";
import fetchApi from "../API/fetchApi";
import mockedData from "../__mocks__/data";
import { useParams } from "react-router-dom";

const isMocked = true;

export default function Dashboard() {
  const { id } = useParams();

  const [data, setData] = useState(
    mockedData.USER_MAIN_DATA.find((elem) => elem.id == id)
  );
  const [activity, setActivity] = useState(
    mockedData.USER_ACTIVITY.find((elem) => elem.userId == id)
  );
  const [performance, setPerformance] = useState(
    mockedData.USER_PERFORMANCE.find((elem) => elem.userId == id)
  );
  const [average, setAverage] = useState(
    mockedData.USER_AVERAGE_SESSIONS.find((elem) => elem.userId == id)
  );
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!isMocked) {
      (async () => {
        const fetchapi = new fetchApi();
        const userData = fetchapi.getUserInfoFetch(id);

        userData
          .then(function (result) {
            setData(result);
          })
          .catch((error) => setError(error));
        const userActivity = fetchapi.getUserActivity(id);
        userActivity
          .then(function (result) {
            setActivity(result);
          })
          .catch((error) => setError(error));
        const userAverage = fetchapi.getUserAverage(id);
        userAverage
          .then(function (result) {
            setAverage(result);
          })
          .catch((error) => setError(error));
        const userPerformance = fetchapi.getUserPerformance(id);
        userPerformance
          .then(function (result) {
            setPerformance(result);
          })
          .catch((error) => setError(error));
      })();
    }
  }, []);

  let UserScore;
  data.score ? (UserScore = data.score) : (UserScore = data.todayScore);
  return error ? (
    <Error />
  ) : (
    <div className="Dashboard">
      <Header />
      <VerticalNav />

      <section className="Dashboard-section">
        <h1 className="Dashboard-section__title">
          Bonjour{" "}
          <span className="Dashboard-section__title-name">
            {data.userInfos.firstName}
          </span>
        </h1>
        <h2 className="Dashboard-section__subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h2>
        <div className="Dashboard-stats">
          <div className="Graphiques">
            <Activity sessions={activity.sessions} />
            <div className="Graphiques-inline">
              <Average average={average} />
              <Performance performance={performance} />
              <Score score={UserScore * 100} />
            </div>
          </div>
          <div className="Donnees">
            <Metric
              logo={CaloriesIcon}
              value={data.keyData.calorieCount + " kCal"}
              title={"Calories"}
            />
            <Metric
              logo={ProteinIcon}
              value={data.keyData.proteinCount + " g"}
              title={"Proteines"}
            />
            <Metric
              logo={CarbsIcon}
              value={data.keyData.carbohydrateCount + " g"}
              title={"Glucides"}
            />
            <Metric
              logo={FatIcon}
              value={data.keyData.lipidCount + " g"}
              title={"Lipides"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
