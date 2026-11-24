# Temporary Hostinger deployment

This directory is deployment documentation only. It is intentionally outside `public/`, so these files are not copied into the production build and are never deployed automatically.

After deploying to `https://mannered-mediumblue-dolphin-07.hostingersite.com/`, copy `.htaccess.example` to the website's `public_html/.htaccess` to restore Passenger settings and the `X-Robots-Tag: noindex, nofollow` header. Do not copy this file to `europeairporttaxi.com` or any other site.

`public/robots.txt` remains allow-all. Hostinger force-serves its own `robots.txt` for `*.hostingersite.com` at the edge; the `X-Robots-Tag` header is the reliable noindex control for the temporary site.
