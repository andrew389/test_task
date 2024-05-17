from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from backend.src.config import SECRET_KEY

from backend.src.routers.post_router import router as posts

app = FastAPI(
    title="Test Task"
)

app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(posts)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)
