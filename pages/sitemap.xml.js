import api from "@/api";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://www.akkukachasma.com';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ url }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${url}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await api.get("/blogs");
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(request?.data);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;