FROM node
# Important for installing node packages
WORKDIR /srv/weather-app
COPY . /srv/weather-app
EXPOSE 3000
# Install Node dependencies at `/node_modules` in the container.
RUN set -x \
    && yarn --modules-folder=/node_modules
ENV PATH=/node_modules/.bin:$PATH
CMD ["yarn dev"]