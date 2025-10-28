import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Tooltip,
  Legend
);
