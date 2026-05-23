import { ApiError } from "./error";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://jsonplaceholder.typicode.com";

export async function clientFetch<T>(path: string,options: RequestInit = {}): Promise<T> {
  
  const url = `${BASE_URL}${path}`
  const { headers, body, method = "GET", ...rest } = options;

  const isFormData = body instanceof FormData;
    const hasBody = body !== undefined && body !== null;

    const response = await fetch(url, {
    method,
    headers: {
        ...headers,
        ...(hasBody && !isFormData ? {"Content-Type" : "application/json"} : {}),
    },
    body: isFormData ? body : (hasBody ? JSON.stringify(body) :undefined ),
    ...rest,
  });

  const data = await response.json().catch(()=>null);


  if (!response.ok) {
    let message = "Something went wong";
    const status = response.status || 500;
    if(data && typeof data === "object" && ('error' in data || 'message' in data))
        message = (data.error || data.message) as string;

    throw new ApiError(`${message}`,status);
  }

  return  data;
}