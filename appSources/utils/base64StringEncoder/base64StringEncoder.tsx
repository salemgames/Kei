import {btoa} from 'js-base64';

const encodeStringToBase64 = (messageToEncode: string) => {
  const encodedData = btoa(messageToEncode);
  return encodedData;
};

export {encodeStringToBase64};
