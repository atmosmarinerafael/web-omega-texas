import { Box, BoxesContainer } from "./styles";


export default function BoxesGND({selectedDate}) {

    const date = selectedDate.getDate();

    let baseUrl = ""

    console.log(date)
    if(date < 10) {
        baseUrl ="http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_2023100"
    } else {
        baseUrl = "http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_202310"
    }

    console.log(baseUrl)

    return(<BoxesContainer>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND01.html`} target="_blank">
            GND01

        </Box>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND02.html`} target="_blank">GND02</Box>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND03.html`} target="_blank">GND03</Box>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND04.html`} target="_blank">GND04</Box>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND05.html`} target="_blank">GND05</Box>
        <Box href={`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_GND06.html`} target="_blank">GND06</Box>
    </BoxesContainer>)
}