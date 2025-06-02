# Image Nginx
FROM nginx

# Copie page HTML
COPY /html/index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80
