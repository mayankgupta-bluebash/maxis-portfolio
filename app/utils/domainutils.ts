export const changeToSubdomain = (subdomain: string): void => {
  const currentHostname = window.location.hostname;
  const currentProtocol = window.location.protocol;

  let newHostname: string;

  if (process.env.REACT_APP_ENV === 'development') {
    newHostname = `${subdomain}.lvh.me:8080`; // include port only in dev
  } else if (process.env.REACT_APP_ENV === 'staging') {
    newHostname = `${subdomain}.bluebash-ai.com/login`;
  } else {
    const domainParts = currentHostname.split('.');
    if (domainParts.length > 2) {
      domainParts[0] = subdomain;
      newHostname = domainParts.join('.');
    } else {
      newHostname = `${subdomain}.${currentHostname}`;
    }
  }

  const newUrl = `${currentProtocol}//${newHostname}/login`;
  window.location.href = newUrl;
};
