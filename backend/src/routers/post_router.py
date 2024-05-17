from typing import List

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select, or_, func
from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession
from backend.src.database import get_async_session
from backend.src.models.post import Post
from backend.src.schemas.post import Post as PostSchema

router = APIRouter(prefix='/posts')


@router.get("", response_model=list[PostSchema])
async def get_all_posts(session: AsyncSession = Depends(get_async_session)):
    async with session.begin():
        result = await session.execute(select(Post))
        posts = result.scalars().all()
    return posts


@router.get("/filter", response_model=list[PostSchema])
async def filter_posts_by_tags(
    tags: List[str] = Query(..., description="List of tags to filter by"),
    session: AsyncSession = Depends(get_async_session)
):
    async with session.begin():
        tags_str = ','.join(tags)
        query = select(Post).filter(func.array_to_string(Post.tags, ',').ilike(f'%{tags_str}%'))
        result = await session.execute(query)
        posts = result.scalars().all()
    return posts


@router.get("/{post_id}", response_model=PostSchema)
async def get_post_by_id(
        post_id: UUID,
        session: AsyncSession = Depends(get_async_session)
):
    async with session.begin():
        result = await session.execute(select(Post).filter(Post.id == post_id))
        post = result.scalar()
        if post is None:
            raise HTTPException(status_code=404, detail="Post not found")
    return post