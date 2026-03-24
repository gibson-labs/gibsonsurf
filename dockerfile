# ---------- Build frontend ----------
FROM node:20-alpine AS fe-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build   # outputs to /frontend/dist

# ---------- Python runtime ----------
FROM python:3.12-slim AS runtime
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_ENV=production \
    FLASK_APP=run.py \
    PORT=5000

WORKDIR /app

# OS deps (build tools only if your wheels need it)
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential \
    && rm -rf /var/lib/apt/lists/

# Python deps
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# App code
COPY backend/ ./

# Put built frontend where Flask can serve it
# Assumes Flask serves from /app/static (typical)
COPY --from=fe-build /frontend/dist /app/static

# If you need index.html fallback, copy to templates too:
# (Uncomment if your Flask uses render_template for '/')
# COPY --from=fe-build /frontend/dist/index.html /app/templates/index.html

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "run:app"]
