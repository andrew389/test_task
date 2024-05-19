from fastapi import APIRouter, HTTPException, Query
from typing import List
from uuid import UUID
from backend.src.schemas.post import Post as PostSchema
import json
from functools import lru_cache

router = APIRouter(prefix='/posts')

with open('db.json', 'r') as f:
    posts_data = json.load(f)


@lru_cache(maxsize=128)
def get_all_posts_cached():
    return posts_data


@router.get("", response_model=List[PostSchema])
async def get_all_posts():
    return get_all_posts_cached()


@router.get("/filter", response_model=List[PostSchema])
async def filter_posts_by_tags(tags: List[str] = Query(...)):
    filtered_posts = []
    for post in get_all_posts_cached():
        if all(tag in post['tags'] for tag in tags):
            filtered_posts.append(post)
    return filtered_posts


@router.get("/{post_id}", response_model=PostSchema)
async def get_post_by_id(post_id: UUID):
    for post in get_all_posts_cached():
        if post['id'] == str(post_id):
            return post
    raise HTTPException(status_code=404, detail="Post not found")
