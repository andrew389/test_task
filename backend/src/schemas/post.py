from uuid import UUID

from pydantic import BaseModel, Field
from typing import List


class PostBase(BaseModel):
    title: str
    summary: str
    tags: List[str]
    content: str


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: UUID = Field(..., alias="id")

    class Config:
        orm_mode = True

    @classmethod
    def from_orm(cls, obj):
        return super().from_orm(obj)

    @classmethod
    def orm(cls, obj):
        return super().orm(obj)
