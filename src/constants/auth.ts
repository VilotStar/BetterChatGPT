export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const churchlessAPIEndpoint = 'https://free.churchless.tech/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || officialAPIEndpoint;
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || churchlessAPIEndpoint;

export const availableEndpoints = [churchlessAPIEndpoint, officialAPIEndpoint, customAPIEndpoint];
