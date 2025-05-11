# Build stage
FROM denoland/deno:latest as builder

WORKDIR /app
COPY . .

# Build the Solid App
RUN deno install && \
  deno task build

# Production stage
FROM caddy

WORKDIR /app

# Copy the Caddyfile and format it
COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

# Copy the built static website
COPY --from=builder /app/dist ./dist

# Port to be used for exposing the site
ENV PORT=5173
EXPOSE 5173

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
