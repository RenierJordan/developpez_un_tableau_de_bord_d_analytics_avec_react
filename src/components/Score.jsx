import "../styles/Score.css";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import PropTypes from "prop-types";

export default function Score(props) {
  const data = [
    {
      uv: 100,
      fill: "#fbfbfb",
    },
    {
      uv: props.score,
      fill: "#FF0000",
    },
  ];

  const ScoreLegend = () => {
    return (
      <div className="Score-legend">
        <div className="Score-legend_number">{props.score}%</div>
        <div className="Score-legend_text">de votre objectif</div>
      </div>
    );
  };

  return (
    <div className="Score">
      <p className="Score-title">Score</p>

      <RadialBarChart
        width={258}
        height={263}
        startAngle={210}
        endAngle={-150}
        innerRadius="0%"
        outerRadius="140%"
        barSize={10}
        data={data}
        className="Score-chart"
      >
        <RadialBar dataKey="uv" cornerRadius={15} />
        <Legend verticalAlign="middle" alignt="middle" content={ScoreLegend} />
      </RadialBarChart>
      <div className="white-circle"></div>
    </div>
  );
}
Score.propTypes = {
  score: PropTypes.number,
};
