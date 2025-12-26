import axios from "axios";

const UPNIFY_BASE_URL = "https://api.salesup.com/v4/integraciones";
const upnifyApiClient = axios.create({ baseURL: UPNIFY_BASE_URL });

type Primitive = string | number | boolean | null | undefined;
export type UpnifyPayload = {
  [key: string]: Primitive | Record<string, Primitive>;
  cp?: Record<string, Primitive>;
};

export interface UpnifyResult {
  code: number;
  msg: string;
  details?: Record<string, unknown>;
}

export async function sendToUpnify(tk: string, payload: UpnifyPayload): Promise<UpnifyResult> {
  if (!tk) throw new Error("El token de integración (tk) es obligatorio.");

  const jsonPayload: { [key: string]: Primitive } = {};

  if (payload.cp && typeof payload.cp === "object") {
    for (const [key, value] of Object.entries(payload.cp)) {
      if (value !== undefined && value !== null) {
        jsonPayload[`cp.${key}`] = value;
      }
    }
  }

  
  for (const [key, value] of Object.entries(payload)) {
    if (key === "cp" || value === undefined || value === null) {
      continue;
    }
    
    if (typeof value !== "object") {
      jsonPayload[key] = value;
    }
  }
  
  const resp = await upnifyApiClient.post<UpnifyResult>(tk, jsonPayload);

  // La API de Upnify a veces devuelve un array [result] y a veces solo result.
  const result = Array.isArray(resp.data) ? resp.data[0] : resp.data;

  if (!result) throw new Error("Respuesta inesperada del servidor.");
  if (result.code !== 0) throw new Error(result.msg || "La integración reportó un error.");

  return result;
}