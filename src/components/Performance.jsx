import "../styles/Performance.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
const KindTranslated = {
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

export default function Performance(props) {
  const Kind = props.performance.kind;
  const chartData = props.performance.data.map((performance) => {
    return {
      value: performance.value,
      kind: KindTranslated[Kind[performance.kind]],
    };
  });
  const data = chartData.reverse();

  return (
    <div className="Performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid radialLines={false} stroke="#ffffff" />
          <PolarAngleAxis dataKey="kind" />
          <Radar
            name="Mike"
            dataKey="value"
            color="#fff"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
Performance.propTypes = {
  performance: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.shape().isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.number, kind: PropTypes.number })
    ).isRequired,
  }),
};
