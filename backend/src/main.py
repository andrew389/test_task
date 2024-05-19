from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from backend.src.config import SECRET_KEY
from backend.src.routers import post_router

app = FastAPI(
    title="Test Task"
)

app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(post_router.router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app)
