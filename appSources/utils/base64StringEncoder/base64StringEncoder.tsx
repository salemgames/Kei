import {btoa} from 'js-base64';

const encodeStringToBase64 = (messageToEncode: string) => {
  const encodedData = btoa(messageToEncode);
  console.log("encodedData", encodedData)
  return encodedData;
};

export {encodeStringToBase64};
