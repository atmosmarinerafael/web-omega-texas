
import { Box, BoxesContainer, Container } from "./styles";


export default function BoxesGND({selectedDate, setGraphUrl, clicked, setClicked}) {
    
    const GNDs = ["GND01", "GND02", "GND03", "GND04", "GND05", "GND06"]

    console.log(selectedDate)

    const date = selectedDate.getDate();

    let baseUrl = ""

    if(date < 10) {
        baseUrl ="http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_2023100"
    } else {
        baseUrl = "http://client.atmosmarine.com/omega-texas/sophia-qmmwb/202310/OpForecast_202310"
    }


    function handleClick(GND, index) {
        setGraphUrl(`${baseUrl}${date}00_TimeSeries_WindSpeed59m_QMMWB_${GND}.html`)
        setClicked(index);
    }

    

    return(
        <Container>
           
            <BoxesContainer>
                {GNDs.map( (GND, index) => (
                    <Box key={index} clicked={clicked} index={index} onClick={() => handleClick(GND, index)}>{GND}</Box>
                ))}

                
                
            </BoxesContainer>
        </Container>)
}