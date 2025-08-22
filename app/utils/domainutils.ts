export const changeToSubdomain = (subdomain: string): void => {
  const currentHostname = window.location.hostname;
  const currentProtocol = window.location.protocol;

  let newHostname: string;
  let portToUse: string | null = null;

  if (process.env.REACT_APP_ENV === 'development') {
    newHostname = `${subdomain}.lvh.me`;
    portToUse = '8080';
  } else {
    const domainParts = currentHostname.split('.');
    if (domainParts.length > 2) {
      domainParts[0] = subdomain;
      newHostname = domainParts.join('.');
    } else {
      newHostname = `${subdomain}.${currentHostname}`;
    }
    portToUse = '8080';
  }

  const newUrl = `${currentProtocol}//${newHostname}${portToUse ? `:${portToUse}` : ''}/login`;

  window.location.href = newUrl;
};
