export const changeToSubdomain = (subdomain: string): void => {
  // const currentHostname = window.location.hostname;
  const currentProtocol = window.location.protocol;

  let newHostname: string;

  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    newHostname = `${subdomain}.lvh.me:8080`;
  } else if (process.env.NEXT_PUBLIC_ENV === 'staging') {
    newHostname = `${subdomain}.bluebash-ai.com`;
  } else {
    newHostname = `${subdomain}.${process.env.NEXT_PUBLIC_HOSTNAME}`;
  }

  const newUrl = `${currentProtocol}//${newHostname}/login`;
  window.location.href = newUrl;
};
// export const changeToSubdomain = (subdomain: string): void => {
//   if (typeof window === 'undefined') return;

//   const { hostname, protocol, port } = window.location;

//   let newHostname = hostname;

//   if (hostname === 'localhost' || hostname.includes('lvh.me') || hostname.includes('127.0.0.1')) {
//     const devPort = port ? `:8080` : '';
//     newHostname = `${subdomain}.lvh.me${devPort}`;
//   } else {
//     const domainParts = hostname.split('.');

//     if (domainParts.length > 2) {
//       domainParts[0] = subdomain;
//       newHostname = domainParts.join('.');
//     } else {
//       newHostname = `${subdomain}.${hostname}`;
//     }
//   }

//   const newUrl = `${protocol}//${newHostname}/login`;
//   window.location.href = newUrl;
// };
