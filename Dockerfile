FROM node:20-bookworm-slim AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .

FROM base AS build

# Build envs
ARG BUILD_DATE
ENV BUILD_DATE=${BUILD_DATE}
# ARG ENV_EXAMPLE
# ENV ENV_EXAMPLE=$ENV_EXAMPLE
# ARG NEXT_PUBLIC_ENV_EXAMPLE
# ENV NEXT_PUBLIC_ENV_EXAMPLE=$NEXT_PUBLIC_ENV_EXAMPLE

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:20-bookworm-slim AS production

# Runtime envs -- will default to build args if no env values are specified at docker run
# ARG ENV_EXAMPLE
# ENV ENV_EXAMPLE=$ENV_EXAMPLE
# ARG NEXT_PUBLIC_ENV_EXAMPLE
# ENV NEXT_PUBLIC_ENV_EXAMPLE=$NEXT_PUBLIC_ENV_EXAMPLE
ARG BUILD_DATE
ENV BUILD_DATE=${BUILD_DATE}
ARG BUILD_REVISION
ENV BUILD_REVISION=${BUILD_REVISION}
ARG BUILD_VERSION
ENV BUILD_VERSION=${BUILD_VERSION}

ARG NEXT_PUBLIC_BUILD_DATE=12345
ENV NEXT_PUBLIC_BUILD_DATE=${NEXT_PUBLIC_BUILD_DATE}
#ARG NEXT_CMS_URL="test.com"
#ENV NEXT_CMS_URL=$NEXT_CMS_URL
ARG LOGGING_LEVEL=error
ENV LOGGING_LEVEL=${LOGGING_LEVEL}
ARG NEXT_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED}

# OpenTelemetry/Dynatrace settings
# ARG NEXT_OTEL_VERBOSE=1
# ENV NEXT_OTEL_VERBOSE=${NEXT_OTEL_VERBOSE}
ARG OTEL_ENVIRONMENT=production
ENV OTEL_ENVIRONMENT=${OTEL_ENVIRONMENT}
ARG OTEL_SERVICE_NAME=next-template
ENV OTEL_SERVICE_NAME=${OTEL_SERVICE_NAME}
# Note: to disable metrics and/or tracing exporting, leave the respective endpoint undefined
ARG OTEL_LOG_LEVEL=ERROR
ENV OTEL_LOG_LEVEL=${OTEL_LOG_LEVEL}
# optional -- to disable logging, leave undefined
ARG OTEL_API_KEY=00000000-0000-0000-0000-000000000000
ENV OTEL_API_KEY=${OTEL_API_KEY}
ARG OTEL_METRICS_ENDPOINT
ENV OTEL_METRICS_ENDPOINT=${OTEL_METRICS_ENDPOINT}
ARG OTEL_METRICS_EXPORT_INTERVAL_MILLIS
ENV OTEL_METRICS_EXPORT_INTERVAL_MILLIS=${OTEL_METRICS_EXPORT_INTERVAL_MILLIS}
ARG OTEL_METRICS_EXPORT_TIMEOUT_MILLIS
ENV OTEL_METRICS_EXPORT_TIMEOUT_MILLIS=${OTEL_METRICS_EXPORT_TIMEOUT_MILLIS}
ARG OTEL_TRACES_ENDPOINT
ENV OTEL_TRACES_ENDPOINT=${OTEL_TRACES_ENDPOINT}

ARG user=nodeuser
ARG group=nodegroup
ARG home=/srv/app

RUN addgroup \
    -S ${group} \
    --gid 1001 && \
    adduser \
    --disabled-password \
    --gecos "" \
    --uid 1001 \
    --home ${home} \
    --ingroup ${group} \
    ${user}

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

LABEL org.opencontainers.image.authors="Digital Technology Solutions"
LABEL org.opencontainers.image.url="https://github.com/DTS-STN/"
LABEL org.opencontainers.image.source="https://github.com/DTS-STN/next-template"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.title="Next Template"
LABEL org.opencontainers.image.description="A template for Next.js projects with common utilities used within DTS"

LABEL org.opencontainers.image.created=${BUILD_DATE}
LABEL org.opencontainers.image.version=${BUILD_VERSION}
LABEL org.opencontainers.image.revision=${BUILD_REVISION}

WORKDIR $home

# Non-standalone
# COPY --from=build --chown=$user:$group /build/next.config.js ./
# COPY --from=build --chown=$user:$group /build/next-i18next.config.js ./next-i18next.config.js
# COPY --from=build --chown=$user:$group /build/package*.json ./
# COPY --from=build --chown=$user:$group /build/.next ./.next

# Shared
COPY --from=build --chown=${user}:${group} /build/public ./public

# Standalone mode
COPY --from=build --chown=${user}:${group} /build/.next/standalone ./
COPY --from=build --chown=${user}:${group} /build/.next/static ./.next/static

USER ${user}

ARG PORT=3000
ENV PORT=${PORT}
ARG HOSTNAME=localhost
ENV HOSTNAME=${HOSTNAME}

EXPOSE ${PORT}

# Non-Standalone
# RUN npm install --no-save next && npm cache clean --force
# CMD npm run start

# Standalone
CMD ["node", "server.js"]
