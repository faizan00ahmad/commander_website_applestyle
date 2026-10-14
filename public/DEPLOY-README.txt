COMMANDER GROUP WEBSITE - DEPLOYMENT NOTES (for IT / hosting)
================================================================

What this is
------------
A static website (plain HTML, CSS and JavaScript). It does NOT need ASP.NET,
PHP, Node.js or a database. Any IIS site can serve it.

How to deploy on IIS (Windows / .NET hosting)
---------------------------------------------
1. Unzip this package. The files must sit DIRECTLY in the site's web root,
   so that index.html is at the top level (not inside an extra folder).
2. In IIS Manager create a site (or use the hosting control panel's web root)
   and point its physical path to that folder.
   - Application pool: ".NET CLR version = No Managed Code" is fine.
3. Keep the included web.config next to index.html. It sets:
   - index.html as the default document,
   - a custom 404 page (404.html),
   - MIME types and caching headers.
   (Needs the standard IIS "Static Content", "Default Document" and
   "HTTP Errors" features, which are on by default.)
4. Open the site address in a browser and check the home page, the menu
   links (About, Chairman Message, Companies, Services, Distributor,
   Contact, Career) and the light/dark toggle at the top right.

URL requirement
---------------
The build assumes the site is served from the ROOT of a domain or
sub-domain, for example:
    https://www.example.com/   or   https://demo.example.com/
If it must run inside a sub-folder (for example https://www.example.com/commander/)
tell the developer first - the site must be rebuilt for that path.

Notes
-----
- Contact and Career forms open the visitor's email app addressed to
  info@comdgroup.com. There is no server-side mail sending in this version.
- No database, no admin panel, no server code to maintain.
- Pages are stored as folder/index.html (for example /about/), so make sure
  IIS "Default Document" is not disabled.
