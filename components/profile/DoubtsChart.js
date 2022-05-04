import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DoubtsChart = () => {
	return (
		<Line
			datasetIdKey="doubts"
			options={{
				plugins: { legend: { display: false } },
				scales: { y: { beginAtZero: true } },
			}}
			data={{
				labels: months,
				datasets: [
					{
						id: 1,
						label: "Doubts Solved",
						data: [3, 2, 1, 5, 10, 9, 2, 1, 5, 10, 9, 2],
						pointHoverRadius: 10,
						borderColor: "#008891",
						backgroundColor: "#2BA3A3",
					},
				],
			}}
		/>
	);
};

export default DoubtsChart;
