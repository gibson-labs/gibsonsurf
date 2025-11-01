from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static", static_url_path="")

# ---------------------------
# API routes
# ---------------------------
@app.route("/api/hello")
def hello():
    return {"message": "Hello from Gibson Surf API!"}

# ---------------------------
# Frontend (EJS/SPA) serving
# ---------------------------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    try:
        # serve static files (JS, CSS, images)
        return send_from_directory(app.static_folder, path)
    except Exception:
        # fallback to index.html for client-side routing
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
