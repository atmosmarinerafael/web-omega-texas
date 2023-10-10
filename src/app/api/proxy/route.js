import axios from "axios"

const DATA_SOURCE_URL = "http://client.atmosmarine.com/omega-texas/sophia-qmmwb"

export async function GET(request) {
    try {
        // Fazer a solicitação para o servidor remoto
        const response = await axios.get(DATA_SOURCE_URL);
        
        // Enviar a resposta para a aplicação React
        return new Response(response.data)
      } catch (error) {
        console.error(error);
        return new Response( "erro") ;      }
}
