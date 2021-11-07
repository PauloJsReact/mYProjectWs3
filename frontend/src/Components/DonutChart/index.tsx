import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/request";

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {


    const [ChartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const mayLabels = data.map(x => x.sellerName);
                const mayseries = data.map(x => x.sum)

                setChartData({ labels: mayLabels, series: mayseries });
            })
    }, [])


    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: ChartData.labels }}
            series={ChartData.series}
            type="donut"
            height="240"
        />
    )
}

export default DonutChart