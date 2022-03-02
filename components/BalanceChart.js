import styled from "styled-components";
import { Line } from 'react-chartjs-2'

const data = {
    labels: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
    ],
    datasets: [,]
}

const BalanceChart = () => {
  return (
    <Wrapper>
        <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  )
}

export default BalanceChart

const Wrapper = styled.div``