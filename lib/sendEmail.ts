function createOptionsObject(method: string, requestApi?: any) {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  return {
    method: method,
    headers,
    ...(requestApi && { body: JSON.stringify(requestApi) }), // Añadir el cuerpo solo para métodos POST
  };
}

function createPostOptionsObject(requestApi: any) {
  return createOptionsObject("post", requestApi);
}

async function fetchApi(url: string, options: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("Datos enviados correctamente");
      return response.json();
    } else {
      console.error('Error al enviar datos:', response.statusText);
    }
  } catch (error) {
    console.error('Error al enviar datos:', error);
  }
}

export async function sendEmail(requestApi: any) {
  const options: RequestInit = createPostOptionsObject(requestApi);
  return await fetchApi(`/api/send`, options);
}