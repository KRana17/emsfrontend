#!/bin/sh

# Set default value for BACKEND_HOST if not provided
BACKEND_HOST=${BACKEND_HOST:-http://backend:8080}

# Replace the placeholder in the nginx config file
envsubst '${BACKEND_HOST}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf

# Start nginx
nginx -g 'daemon off;'